import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { seo, SITE_URL } from "../lib/seo";
import { PageHero } from "../components/ui";

export const meta = () =>
  seo({
    title: "Search the Broadstreet Website",
    description: "Search the Broadstreet.net website for services, portfolio projects, client stories and digital marketing articles from our Camden, SC team.",
    canonical: `${SITE_URL}/search/`,
    robots: "noindex,follow",
    graph: [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/search/#webpage`,
        url: `${SITE_URL}/search/`,
        name: "Search the Broadstreet Website",
        description: "Search the Broadstreet.net website for services, portfolio projects, client stories and digital marketing articles from our Camden, SC team.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Search", item: `${SITE_URL}/search/` },
        ],
      },
    ],
  });

const SUGGESTIONS = ["SEO", "Google Ads", "website design", "social media", "eCommerce", "Drupal"];

export default function Search() {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(null);

  // Read ?q= after hydration (the prerendered page has no query string).
  useEffect(() => setQuery(params.get("q") ?? ""), []); // eslint-disable-line react-hooks/exhaustive-deps

  // The index is ~280 KB, so only load it on this page.
  useEffect(() => {
    let cancelled = false;
    fetch("/search-index.json")
      .then((r) => r.json())
      .then((data) => !cancelled && setIndex(data))
      .catch(() => !cancelled && setIndex([]));
    return () => {
      cancelled = true;
    };
  }, []);

  const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const results = useMemo(() => {
    if (!index || !words.length) return [];
    return index.filter((p) => {
      const hay = `${p.title} ${p.description} ${p.text}`.toLowerCase();
      return words.every((w) => hay.includes(w));
    });
  }, [index, query]); // eslint-disable-line react-hooks/exhaustive-deps

  const update = (value) => {
    setQuery(value);
    setParams(value ? { q: value } : {}, { replace: true, preventScrollReset: true });
  };

  let status = "Enter a word or phrase to search the site.";
  if (words.length) status = index ? `${results.length} matching page${results.length === 1 ? "" : "s"}` : "Loading…";

  return (
    <div style={{ "--accent": "var(--g-blue)" }}>
      <PageHero
        crumbs={[{ name: "Search" }]}
        label="Search"
        title={<>What are you <span className="c-yellow">looking for?</span></>}
        lede="Search our services, projects, client stories and every post on our blog."
        actions={false}
      />
      <section className="section">
        <div className="wrap">
          <form className="search-box" role="search" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="site-search" className="sr-only">Search the site</label>
            <input
              className="search-input"
              id="site-search"
              type="search"
              placeholder="Try SEO, website design, or a client name"
              value={query}
              onChange={(e) => update(e.target.value)}
              autoComplete="off"
            />
          </form>
          {!words.length && (
            <div className="work-filters" style={{ marginTop: 16 }} aria-label="Popular searches">
              {SUGGESTIONS.map((s) => <button key={s} type="button" onClick={() => update(s)}>{s}</button>)}
            </div>
          )}
          <p className="search-status" id="search-status" role="status">{status}</p>
          <ul className="search-results" id="search-results">
            {results.slice(0, 100).map((p) => (
              <li key={p.href}>
                <Link to={p.href}>{p.title}</Link>
                <p>{p.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
