// Writes lib/image-dims.json: { "/images/x.jpg": [width, height], ... } for every JPG/PNG in public/.
// Lets <img> tags reserve their space before loading, so the page doesn't jump (and menu links land correctly).
import fs from "fs";
import path from "path";

const root = path.join(process.cwd(), "public");
const out = {};

function size(buf) {
  if (buf[0] === 0x89 && buf.toString("ascii", 1, 4) === "PNG") return [buf.readUInt32BE(16), buf.readUInt32BE(20)];
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let i = 2;
    while (i < buf.length) {
      if (buf[i] !== 0xff) { i++; continue; }
      const m = buf[i + 1];
      const len = buf.readUInt16BE(i + 2);
      if (m >= 0xc0 && m <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(m)) return [buf.readUInt16BE(i + 7), buf.readUInt16BE(i + 5)];
      i += 2 + len;
    }
  }
  return null;
}

(function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (/\.(jpe?g|png)$/i.test(f)) {
      const s = size(fs.readFileSync(p));
      if (s) out["/" + path.relative(root, p).split(path.sep).join("/")] = s;
    }
  }
})(root);

fs.writeFileSync(path.join(process.cwd(), "lib/image-dims.json"), JSON.stringify(out, null, 0) + "\n");
console.log(`image-dims: ${Object.keys(out).length} images`);
