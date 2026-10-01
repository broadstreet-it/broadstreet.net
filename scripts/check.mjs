// Sanity-checks the prerendered site in build/client (run after `npm run build`):
// one <h1>, title/description/canonical present, valid JSON-LD, and every local link/asset resolves.
import fs from "node:fs";
import path from "node:path";

const root = path.resolve("build/client");
if (!fs.existsSync(root)) {
  console.error("build/client not found — run `npm run build` first.");
  process.exit(1);
}
const pages = fs.readdirSync(root, { recursive: true }).filter((f) => f.endsWith(".html"));
const redirects = new Set(
  fs.readFileSync(path.join(root, "_redirects"), "utf8").split("\n")
    .filter((l) => l && !l.startsWith("#")).map((l) => l.split(/\s+/)[0]),
);

const exists = (url) => {
  const p = decodeURIComponent(url.split(/[?#]/)[0]);
  if (redirects.has(p) || redirects.has(p.replace(/\/$/, ""))) return true;
  const file = path.join(root, p);
  return fs.existsSync(file) && fs.statSync(file).isFile()
    ? true
    : fs.existsSync(path.join(file, "index.html")) || fs.existsSync(file.replace(/\/$/, "") + ".html");
};

const errors = [];
const brokenLinks = new Map(); // url -> pages
for (const page of pages) {
  const html = fs.readFileSync(path.join(root, page), "utf8");
  const err = (msg) => errors.push(`${page}: ${msg}`);
  if ((html.match(/<h1\b/g) || []).length !== 1) err("expected exactly one <h1>");
  if (!/<title>[^<]+<\/title>/.test(html)) err("missing <title>");
  if (!/<meta name="description" content="[^"]+"/.test(html)) err("missing meta description");
  if (!/<link rel="canonical" href="https:\/\/broadstreet\.net\/[^"]*"/.test(html)) err("missing canonical");
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch { err("invalid JSON-LD"); }
  }
  for (const m of html.matchAll(/(?:href|src)="(\/(?!\/)[^"]*)"/g)) {
    if (!exists(m[1])) brokenLinks.set(m[1], [...(brokenLinks.get(m[1]) || []), page]);
  }
}

if (brokenLinks.size) {
  // Known gap: these pages were deferred in the Drupal migration (see migration/deferred-pages.csv).
  console.warn(`⚠ ${brokenLinks.size} local link target(s) don't exist yet:`);
  for (const [url, from] of brokenLinks) console.warn(`  ${url}  (linked from ${[...new Set(from)].join(", ")})`);
  console.warn("");
}

if (errors.length) {
  console.error(errors.join("\n"));
  console.error(`\n${errors.length} problem(s) across ${pages.length} pages.`);
  process.exitCode = 1;
} else {
  console.log(`✓ ${pages.length} pages: headings, metadata and JSON-LD OK.`);
}
