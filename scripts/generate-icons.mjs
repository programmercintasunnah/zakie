import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const source = path.join(root, "public", "icon.svg");

const render = (size, name, flatten = false) => {
  let pipeline = sharp(source).resize(size, size);

  if (flatten) {
    pipeline = pipeline.flatten({ background: "#0f172a" });
  }

  return pipeline
    .png({ compressionLevel: 9 })
    .toFile(path.join(root, "public", name));
};

await Promise.all([
  render(32, "favicon-32.png"),
  render(180, "apple-touch-icon.png", true),
  render(192, "icon-192.png"),
  render(512, "icon-512.png"),
  render(192, "maskable-192.png", true),
  render(512, "maskable-512.png", true),
]);

console.log("Generated SVG/PNG app icons");
