# Jesse Lopez — Portfolio

A one-page portfolio built with Next.js, ready to deploy on Vercel.

## Edit the content

Almost everything you'll want to change is in **`content/site.ts`**:

- **Links** — replace each `"#"` with a full URL (e.g. `"https://www.linkedin.com/in/yourname"`).
  - Social links are at the top in `links`.
  - Project links are the `href` on each project in `chapters`.
  - The Square highlight link is in `highlights`.
  - Any link still set to `"#"` is **hidden** on the live site, so you can deploy before adding them.
- **Text** — bio, principles, project titles and descriptions, testimonials.

**Accent color** — change `--accent` at the top of `app/globals.css`.
Presets: light blue `#8EC5FF`, mint `#7FE0C2`, coral `#FF8F73`, amber `#F2B544`.

## Replace the images (recommended)

The images in `public/images` and `public/logos` were cut from a screenshot of the old Canva site, so they're low resolution. Download the originals from Canva and drop them in **using the same file names**:

| File | What it is |
| --- | --- |
| `public/images/hero.jpg` | Full-body photo (hero) |
| `public/images/headshot.jpg` | Round headshot (About) |
| `public/images/square-*.jpg`, `klaviyo-*.jpg`, `brex-*.jpg`, `dandy-*.jpg` | Project card images |
| `public/images/square-2019.jpg`, `square-2021.jpg` | Square before/after |
| `public/images/dandy-q1-24.jpg`, `dandy-q2-24.jpg` | Dandy before/after |
| `public/logos/*.png` | White company logos for the scrolling strip |

For the logos, white SVG or PNG files with a transparent background look best. If you use `.svg`, update the file names in the `logos` list in `content/site.ts`.

## Run it on your computer (optional)

You need [Node.js](https://nodejs.org) 18.18 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploy on Vercel

1. Create a new repository on GitHub and upload this whole folder (drag-and-drop in the browser works).
2. Go to vercel.com → **Add New → Project** → import the repository → **Deploy**. Vercel detects Next.js automatically.
3. Optional: add your own domain under **Project → Settings → Domains**.

Every change you push to GitHub after that redeploys the site automatically.
