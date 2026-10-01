import { Link } from "react-router";
import { seo } from "../lib/seo";

export const meta = () =>
  seo({
    title: "Page Not Found | Broadstreet",
    description: "Find the information you need on the Broadstreet website.",
    canonical: "https://broadstreet.net/404/",
    robots: "noindex,follow",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/404/#webpage",
        url: "https://broadstreet.net/404/",
        name: "Page Not Found | Broadstreet",
        description: "Find the information you need on the Broadstreet website.",
        isPartOf: { "@id": "https://broadstreet.net/#website" },
        about: { "@id": "https://broadstreet.net/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://broadstreet.net/" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Let’s help you find the right page.",
            item: "https://broadstreet.net/404/",
          },
        ],
      },
    ],
  });

export default function NotFound() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Let’s help you find the right page.
          </nav>
          <h1>Let’s help you find the right page.</h1>
          <p className="lead">Find the information you need on the Broadstreet website.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <p>
            The address may have changed. Search the site or browse all pages to find what you need.
          </p>
          <div className="actions">
            <Link className="button" to="/search/">
              Search the site
            </Link>
            <Link to="/site-map/" className="button secondary">
              Browse all pages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
