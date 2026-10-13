import { copyFile, mkdir, readFile, writeFile, rm } from "node:fs/promises";

const { render } = await import("../.prerender/entry-server.js");
const { html, structuredData } = render();
const path = new URL("../dist/index.html", import.meta.url);
let page = await readFile(path, "utf8");
page = page.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
page = page.replace("</head>", `<script type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, "\\u003c")}</script></head>`);
await writeFile(path, page, "utf8");
await mkdir(new URL("../dist/assets/", import.meta.url), { recursive: true });
for (const file of ["favicon.svg", "robots.txt", "assets/fernando-henrique.webp", "assets/logo-claro.webp", "assets/logo-escuro.webp", "assets/reuniao.webp", "assets/documentos-financeiros.webp", "assets/carteira.webp"]) {
  await copyFile(new URL(`../public/${file}`, import.meta.url), new URL(`../dist/${file}`, import.meta.url));
}
await rm(new URL("../.prerender/", import.meta.url), { recursive: true, force: true });
console.log("HTML inicial gerado em dist/index.html");
