// Turn the prerendered catch-all page into the 404.html Cloudflare serves for unknown URLs.
import fs from "node:fs";

const dir = "build/client";
fs.renameSync(`${dir}/404/index.html`, `${dir}/404.html`);
fs.rmSync(`${dir}/404`, { recursive: true, force: true });
fs.rmSync(`${dir}/__spa-fallback.html`, { force: true });
console.log("postbuild: wrote build/client/404.html");
