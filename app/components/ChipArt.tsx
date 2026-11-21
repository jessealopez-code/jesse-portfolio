/* eslint-disable @next/next/no-img-element */
// Chip with the four task cards as separate layers, so they can pop in one by one (see .chip-art in globals.css).
const cards = [
  { src: "/images/chip/cost.png", left: 5.288, top: 4.451, width: 34.137 },
  { src: "/images/chip/price.png", left: 60.39, top: 0.0, width: 34.323 },
  { src: "/images/chip/milk.png", left: 5.288, top: 68.546, width: 34.416 },
  { src: "/images/chip/tags.png", left: 60.297, top: 63.205, width: 34.416 },
];

export default function ChipArt() {
  return (
    <div
      className="chip-art"
      data-anim
      role="img"
      aria-label="Chip, Vori's AI employee, waving beside four completed tasks: cost change caught, price updated, milk running low, and shelf tags ready to print"
    >
      <img src="/images/chip/base.jpg" alt="" className="chip-base" />
      {cards.map((c) => (
        <img
          key={c.src}
          src={c.src}
          alt=""
          className="chip-card"
          style={{ left: `${c.left}%`, top: `${c.top}%`, width: `${c.width}%` }}
        />
      ))}
    </div>
  );
}
