import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { seo } from "../lib/seo";
import { PageHero } from "../components/ui";

export const meta = () =>
  seo({
    title: "Page Not Found | Broadstreet",
    description: "Find the information you need on the Broadstreet website.",
    canonical: "https://broadstreet.net/404/",
    robots: "noindex,follow",
    graph: [],
  });

const POPULAR = [
  ["/services/", "Services", "Websites, SEO, Google Ads and more", "var(--g-blue)"],
  ["/portfolio/", "Our work", "Websites we’ve built", "var(--g-red)"],
  ["/blogs/", "Blog", "Tips and insights", "var(--g-yellow)"],
  ["/contact/", "Contact", "Talk to our team", "var(--g-green)"],
];

export default function NotFound() {
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  return (
    <div style={{ "--accent": "var(--g-red)" }}>
      <PageHero
        crumbs={[{ name: "Page not found" }]}
        label="404 · Page not found"
        title={<>Let’s find <span className="c-yellow">the right page</span></>}
        lede="The page you’re looking for may have moved when we redesigned our website. Search below or start from one of these pages."
        actions={false}
      />
      <section className="section">
        <div className="wrap">
          <form
            className="search-box"
            role="search"
            onSubmit={(e) => {
              e.preventDefault();
              navigate(q.trim() ? `/search/?q=${encodeURIComponent(q.trim())}` : "/search/");
            }}
          >
            <label htmlFor="nf-search" className="sr-only">Search the site</label>
            <input className="search-input" id="nf-search" type="search" placeholder="Search the site" value={q} onChange={(e) => setQ(e.target.value)} />
            <button className="button btn-yellow" type="submit">Search</button>
          </form>
          <nav className="quick-links" aria-label="Popular pages">
            {POPULAR.map(([to, title, text, c]) => (
              <Link key={to} to={to} style={{ "--qc": c }}>{title}<span>{text}</span></Link>
            ))}
          </nav>
          <p className="search-status">Or <Link to="/site-map/" style={{ color: "var(--g-yellow)" }}>browse every page in the site map</Link>.</p>
        </div>
      </section>
    </div>
  );
}
