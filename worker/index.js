// Runs only for the paths listed in wrangler.jsonc "run_worker_first".
// Cloudflare's _redirects file can't match query strings, so the old Drupal
// pagination URLs (?page=1) are redirected here.
const QUERY_REDIRECTS = {
  "/portfolio?page=1": "/portfolio/",
};

// Old blog list: ?page=N (zero-based, 10 posts a page). New list: 12 a page at /blogs/page/<n>/.
function blogPage(url) {
  if (url.pathname.replace(/\/$/, "") !== "/blogs") return null;
  const old = Number(url.searchParams.get("page"));
  if (!Number.isInteger(old) || old < 1) return null;
  const page = Math.floor((old * 10) / 12) + 1;
  return page === 1 ? "/blogs/" : `/blogs/page/${page}/`;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const key = url.pathname.replace(/\/$/, "") + url.search;
    const target = QUERY_REDIRECTS[key] || blogPage(url);
    if (target) return Response.redirect(new URL(target, url.origin).toString(), 301);
    return env.ASSETS.fetch(request);
  },
};
