import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { seo, SITE_URL } from "../lib/seo";

export const meta = () =>
  seo({
    title: "Search the Broadstreet Website",
    description: "Search Broadstreet services, projects, and digital marketing articles.",
    canonical: `${SITE_URL}/search/`,
    robots: "noindex,follow",
    graph: [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/search/#webpage`,
        url: `${SITE_URL}/search/`,
        name: "Search the Broadstreet Website",
        description: "Search Broadstreet services, projects, and digital marketing articles.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "What are you looking for?", item: `${SITE_URL}/search/` },
        ],
      },
    ],
  });

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

  const onChange = (e) => {
    setQuery(e.target.value);
    setParams(e.target.value ? { q: e.target.value } : {}, { replace: true, preventScrollReset: true });
  };

  let status = "Enter a word or phrase to search the site.";
  if (words.length) status = index ? `${results.length} matching pages` : "Loading…";

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / What are you looking for?
          </nav>
          <h1>What are you looking for?</h1>
          <p className="lead">Search Broadstreet services, projects, and digital marketing articles.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <label htmlFor="site-search">Search services, projects, and articles</label>
          <input
            className="search-input"
            id="site-search"
            type="search"
            placeholder="Try SEO, website design, or a client name"
            value={query}
            onChange={onChange}
          />
          <p id="search-status" role="status">
            {status}
          </p>
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
    </>
  );
}
