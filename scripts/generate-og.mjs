import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const profile = JSON.parse(
  await readFile(path.join(root, "src/data/profile.json"), "utf8")
);

const WIDTH = 1200;
const HEIGHT = 630;

const background = `
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="18%" cy="12%" r="70%">
      <stop offset="0%" stop-color="#2563eb" stop-opacity="0.55" />
      <stop offset="55%" stop-color="#1d4ed8" stop-opacity="0.12" />
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="glow2" cx="95%" cy="95%" r="55%">
      <stop offset="0%" stop-color="#0ea5e9" stop-opacity="0.28" />
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0" />
    </radialGradient>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="#0f172a" />
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)" />
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow2)" />

  <g fill="none" stroke="#38bdf8" stroke-opacity="0.18" stroke-width="1">
    <circle cx="955" cy="315" r="215" />
    <circle cx="955" cy="315" r="245" stroke-dasharray="2 10" />
  </g>

  <g font-family="DejaVu Sans, sans-serif">
    <rect x="88" y="118" width="190" height="44" rx="22" fill="#1e3a8a" fill-opacity="0.65" stroke="#3b82f6" stroke-opacity="0.5" />
    <text x="183" y="146" text-anchor="middle" font-size="17" font-weight="bold" letter-spacing="3" fill="#93c5fd">PORTOFOLIO</text>

    <text x="88" y="268" font-size="66" font-weight="bold" fill="#ffffff">${profile.name || "Muhammad Zakie"}</text>
    <text x="88" y="330" font-size="34" fill="#bfdbfe">${profile.jobTitle || "Software Engineer"}</text>

    <rect x="88" y="372" width="96" height="4" rx="2" fill="#3b82f6" />
    <text x="88" y="432" font-size="24" fill="#94a3b8">Go · React · TypeScript · PostgreSQL</text>
    <text x="88" y="492" font-size="22" fill="#64748b">zakie.vercel.app</text>
  </g>
</svg>
`;

const portraitSize = 330;
const mask = Buffer.from(
  `<svg width="${portraitSize}" height="${portraitSize}"><circle cx="${portraitSize / 2}" cy="${portraitSize / 2}" r="${portraitSize / 2}" fill="#fff" /></svg>`
);

const portrait = await sharp(path.join(root, "public/assets/zakie-circle.webp"))
  .resize(portraitSize, portraitSize, { fit: "cover" })
  .composite([{ input: mask, blend: "dest-in" }])
  .png()
  .toBuffer();

const ring = Buffer.from(
  `<svg width="${portraitSize + 24}" height="${portraitSize + 24}"><circle cx="${(portraitSize + 24) / 2}" cy="${(portraitSize + 24) / 2}" r="${(portraitSize + 24) / 2 - 4}" fill="none" stroke="#3b82f6" stroke-width="7" /></svg>`
);

await sharp(Buffer.from(background))
  .composite([
    {
      input: ring,
      left: 955 - (portraitSize + 24) / 2,
      top: 315 - (portraitSize + 24) / 2,
    },
    {
      input: portrait,
      left: 955 - portraitSize / 2,
      top: 315 - portraitSize / 2,
    },
  ])
  .png({ quality: 90, compressionLevel: 9 })
  .toFile(path.join(root, "public/og-image.png"));

console.log("Generated public/og-image.png (1200x630)");
