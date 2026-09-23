# PAKTO – premium packaging landing page (demo)
Next.js 14 · React 18 · TypeScript · Tailwind CSS · Lucide React

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Replace the placeholders (no code changes)
Overwrite these files, keeping the exact names. Images are cropped with `object-cover`, so any aspect ratio works.

| File | Used in | Suggested size |
|---|---|---|
| public/videos/packaging-hero.mp4 | Hero background | 1920×1080, 8–15 s, under 8 MB |
| public/images/hero-packaging.jpg | Hero fallback and poster | 1920×1080 (a still frame of the video) |
| public/images/custom-box.jpg … food-box.jpg | 6 product cards | 4:5, about 1000×1250 |
| public/images/gallery-1.jpg | Featured section and gallery | 4:5 |
| public/images/gallery-2.jpg … gallery-4.jpg | Gallery | 4:3, 1:1, 3:4 |
| public/images/gallery-5.jpg | Gallery and final CTA background | 4:3 or wider |

Restart `npm run dev` if an old image stays cached. Regenerate the placeholders any time with `npm run placeholders` (needs Python and Pillow).

## Hero video fallback
`components/Hero.tsx` always renders `hero-packaging.jpg` first, with the `<video>` layered on top at opacity 0. The video fades in only after `onLoadedData` fires. If the file is missing, corrupt, or blocked, it never fades in and the image stays visible. Paths are centralised in `lib/data.ts`.

## Structure
`app/` (layout, page, styles) · `components/` (13 section components + `Reveal`) · `lib/data.ts` (all copy, arrays and asset paths) · `public/` (assets)
