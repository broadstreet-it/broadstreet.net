# broadstreet.net

The Broadstreet website as a React app: **React 19 + React Router 7 (framework mode) + Vite**, deployed to **Cloudflare Workers (static assets)** from GitHub.

Every page is **prerendered to static HTML at build time** (titles, descriptions, canonicals, Open Graph and JSON-LD all present in the HTML for Google), then hydrates into a React app so navigation between pages is instant.

## Local development

Requires Node.js 20+.

```bash
npm install
npm run dev        # http://localhost:5173 with hot reload
npm run build      # prerender all pages to build/client
npm run check      # verify headings, metadata, JSON-LD and local links in the build
npm run preview    # build, then serve with Wrangler exactly as Cloudflare will (redirects, 404s, headers)
```

## Project layout

```
app/
  root.jsx              HTML shell, <head>, site layout (header / CTA / footer), error boundary
  routes.js             One line per page: URL -> page module
  site.css              Site styles
  components/           Header (mobile menu), Footer + CallToAction
  lib/seo.js            seo() helper: meta tags + shared Organization/WebSite JSON-LD
  pages/                One component per page, mirroring the URL
    home.jsx            /
    contact.jsx         /contact/
    services/logo-design.jsx   /services/logo-design/
    search.jsx          /search/ (client-side search over public/search-index.json)
    not-found.jsx       404 page (catch-all route)
public/                 Copied as-is to the site root
  assets/media/         Images and downloads
  _redirects            301s for legacy Drupal URLs (Cloudflare format)
  _headers              Security + cache headers
  sitemap.xml, robots.txt, favicon.ico, search-index.json
worker/index.js         Tiny Worker for the two ?page=1 legacy redirects (_redirects can't match query strings)
wrangler.jsonc          Cloudflare config
scripts/                postbuild (creates 404.html) and check
migration/              Drupal migration inventory and notes (not deployed)
```

### Editing content

- **Change a page:** edit its file in `app/pages/` — it's plain JSX. Use `<Link to="/path/">` for internal links.
- **Change SEO for a page:** edit the `seo({...})` call at the top of that page file.
- **Add a page:** create `app/pages/my-page.jsx` (copy an existing one), add `route("my-page", "pages/my-page.jsx")` to `app/routes.js`, and add the URL to `public/sitemap.xml` and (optionally) `public/search-index.json`.
- **Header / footer / CTA:** `app/components/`.
- **Redirects:** `public/_redirects` (`/old-path /new-path/ 301`).

URLs keep their trailing slash (`/services/`), matching the canonicals; Cloudflare redirects `/services` → `/services/` automatically.

## Deploying to Cloudflare from GitHub

1. Push this repo to GitHub.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Import a repository**, and pick the repo.
3. Use these build settings:
   - **Build command:** `npm run build`
   - **Deploy command:** `npx wrangler deploy`
   - Root directory: `/` (leave default)
4. Deploy. Every push to `main` redeploys; other branches get preview URLs.
5. Add your domain under the Worker's **Settings → Domains & Routes** (`broadstreet.net` and `www.broadstreet.net`).

The Worker name comes from `wrangler.jsonc` (`broadstreet-net`) and must match the name you give the project in Cloudflare.

## Before launch

Carried over from the migration notes (see `migration/`):

- Some local links point to pages not migrated yet (old blog posts, tag pages, `/drupal/`, etc.). `npm run check` lists them. Migrate those pages or add redirects in `public/_redirects`.
- Some images/downloads still reference the old site — see `migration/asset-review.csv`.
- The redirect list is provisional — reconcile against Search Console, Drupal aliases and server logs before switching DNS.
- The contact form is an embedded LeadConnector form; submit a test inquiry on the live domain.
- Confirm the "20+ years" business-history claim.
