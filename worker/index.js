// Runs only for the paths listed in wrangler.jsonc "run_worker_first".
// Cloudflare's _redirects file can't match query strings, so the old Drupal
// pagination URLs (?page=1) are redirected here.
const QUERY_REDIRECTS = {
  "/portfolio?page=1": "/portfolio/page/2/",
  "/blogs?page=1": "/blogs/page/2/",
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const key = url.pathname.replace(/\/$/, "") + url.search;
    const target = QUERY_REDIRECTS[key];
    if (target) return Response.redirect(new URL(target, url.origin).toString(), 301);
    return env.ASSETS.fetch(request);
  },
};
