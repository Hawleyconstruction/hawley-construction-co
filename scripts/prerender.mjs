// Fills each pre-built page (dist/public/**/index.html) with the real page content,
// rendered by React at build time, so Google sees the full text without running JavaScript.
// Visitors get the same page; React takes over in the browser as before.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const outDir = path.join(root, "dist/public");
const serverEntry = path.join(root, "dist/server/entry-server.js");

// Minimal browser stand-ins for code that touches window/document during render.
globalThis.window ??= globalThis;
let render;
try {
  ({ render } = await import(pathToFileURL(serverEntry).href));
} catch (e) {
  console.warn(`prerender: skipped (could not load renderer: ${e.message})`);
  process.exit(0);
}

function routeFor(file) {
  const rel = path.relative(outDir, path.dirname(file)).split(path.sep).join("/");
  return rel ? `/${rel}/` : "/";
}
function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (e.name !== "assets" && e.name !== "images") walk(p, out); }
    else if (e.name === "index.html") out.push(p);
  }
  return out;
}

const HIDDEN_H1 = /<h1 style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect\(0,0,0,0\);white-space:nowrap;border:0;padding:0;margin:-1px;">[^<]*<\/h1>\s*/;
let ok = 0, failed = 0;
for (const file of walk(outDir)) {
  const route = routeFor(file);
  try {
    const appHtml = await render(route);
    if (!appHtml || appHtml.length < 500) throw new Error("render produced almost nothing");
    let html = fs.readFileSync(file, "utf-8");
    if (!html.includes('<div id="root"></div>')) throw new Error("no empty #root");
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    html = html.replace(HIDDEN_H1, ""); // the real headline is in the page now
    fs.writeFileSync(file, html);
    ok++;
  } catch (e) {
    failed++;
    console.warn(`prerender: kept plain shell for ${route}: ${e.message}`);
  }
}
console.log(`prerender: filled ${ok} pages with full content (${failed} left as plain shell)`);
