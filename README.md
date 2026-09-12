# Broadstreet.net — first design preview

This is a local, static HTML design draft. It is not the completed Drupal migration and has not been published.

## Preview

Run `node serve.cjs` from this folder, then visit http://127.0.0.1:4173. Node.js 18 or newer is required only for the local preview server. The website itself uses HTML, CSS, and JavaScript without a framework or build dependency. Run `node scripts/check.cjs` to check the core preview pages.

Start feedback with the homepage, services, portfolio, and a service detail page. Most supporting pages currently retain the original content within the new shared design. They still need editorial and layout review.

## Current scope

- First design direction: Broadstreet blue, larger type, simplified navigation, prominent client projects and consultation links.
- Initial batch of 100 static pages. Additional captured blog and archive content is saved in the task workspace for the next migration batch.
- Per-page titles, descriptions, canonicals, basic organization/service/article/breadcrumb structured data, sitemap, and search.
- The existing external contact form is embedded. No test inquiry has been submitted. Its production behavior must be verified before launch.
- Some original images and downloads still reference the current site. See `migration/asset-review.csv`; these must be localized before replacing Drupal.

## Migration files — provisional, not launch ready

- `migration/url-inventory.csv`: initial captured URL mapping.
- `migration/pages-not-retained-at-original-url.csv`: aliases, pagination, and unresolved URLs from that batch.
- `migration/301-redirects.csv`: proposed 301 mappings.
- `migration/deferred-pages.csv`: additional captured or discovered URLs intentionally deferred from this first design preview; these are not deleted-page decisions.
- `migration/seo-metadata.csv`: titles and descriptions for review.
- `.htaccess`: Apache configuration draft. The preview server also exercises the draft redirect map. Your production host must support and install equivalent rules; HTML files alone cannot issue HTTP 301s.

This inventory is incomplete because archive migration was intentionally paused for design feedback. Do not use it as the final launch redirect list. Before launch, reconcile the remaining crawl, Drupal URL aliases and node paths, existing redirects, Search Console URLs, and server logs; verify every old URL and redirect destination against the production host. Do not redirect all unknown URLs to the homepage.

The homepage uses the requested 20+ years positioning. The original homepage says founded in 2010, while the original Camden page says over 20 years. Confirm the precise business history before launch. Historic articles retain their original claims and dates and need a separate editorial review.

SEO references: [Google title guidance](https://developers.google.com/search/docs/appearance/title-link), [meta descriptions](https://developers.google.com/search/docs/appearance/snippet), and [AI search features](https://developers.google.com/search/docs/appearance/ai-features). Google’s ordinary SEO guidance also applies to its AI search experiences; markup does not guarantee rankings or AI citations.
