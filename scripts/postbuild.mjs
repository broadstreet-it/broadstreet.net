// After `react-router build`:
// 1. Turn the prerendered catch-all page into the 404.html Cloudflare serves for unknown URLs.
// 2. Copy each prerendered loader file /x.data to /x/_.data. With v8_trailingSlashAwareDataRequests
//    the browser asks for /x/_.data when it navigates to /x/ (our links all end in "/"), but
//    prerendering only writes /x.data, so client-side clicks into those pages would 404.
import fs from "node:fs";
import path from "node:path";

const dir = "build/client";
fs.renameSync(`${dir}/404/index.html`, `${dir}/404.html`);
fs.rmSync(`${dir}/404`, { recursive: true, force: true });
fs.rmSync(`${dir}/__spa-fallback.html`, { force: true });
console.log("postbuild: wrote build/client/404.html");

let copied = 0;
for (const rel of fs.readdirSync(dir, { recursive: true })) {
  if (!rel.endsWith(".data") || path.basename(rel) === "_.data") continue;
  const pageDir = path.join(dir, rel.slice(0, -".data".length));
  if (!fs.existsSync(path.join(pageDir, "index.html"))) continue;
  fs.copyFileSync(path.join(dir, rel), path.join(pageDir, "_.data"));
  copied++;
}
console.log(`postbuild: copied ${copied} .data file(s) to their trailing-slash URLs`);
