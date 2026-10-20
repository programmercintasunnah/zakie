import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const indexPath = path.join(root, "dist", "index.html");

process.env.NODE_ENV = "production";

const server = await createServer({
  root,
  appType: "custom",
  logLevel: "warn",
  server: { middlewareMode: true },
});

try {
  const template = await readFile(indexPath, "utf8");
  const marker = '<div id="root"></div>';

  if (!template.includes(marker)) {
    throw new Error(`Root marker not found in ${indexPath}`);
  }

  const { render } = await server.ssrLoadModule("/src/entry-server.jsx");
  const appHtml = render();
  const output = template.replace(marker, `<div id="root">${appHtml}</div>`);

  await writeFile(indexPath, output);
  console.log(
    `Prerendered index.html (${(output.length / 1024).toFixed(1)} kB)`
  );
} finally {
  await server.close();
}
