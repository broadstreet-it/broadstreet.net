import { Link } from "react-router";
import { seo } from "../lib/seo";

export const meta = () =>
  seo({
    title: "Measured Results | Broadstreet",
    description:
      "Your success on the Web can be measured using sophisticated measurement tools, allowing you to focus your resources on the things that work best.",
    canonical: "https://broadstreet.net/measured-results/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/measured-results/#webpage",
        url: "https://broadstreet.net/measured-results/",
        name: "Measured Results | Broadstreet",
        description:
          "Your success on the Web can be measured using sophisticated measurement tools, allowing you to focus your resources on the things that work best.",
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
            name: "Measured Results",
            item: "https://broadstreet.net/measured-results/",
          },
        ],
      },
    ],
  });

export default function MeasuredResults() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Measured Results
          </nav>
          <h1>Measured Results</h1>
          <p className="lead">
            Your success on the Web can be measured using sophisticated measurement tools, allowing
            you to focus your resources on the things that work best.
          </p>
        </div>
      </section>
      <div className="wrap article-layout">
        <article className="article-content">
          <div className="region-inner region-content-inner">
            <div
              id="block-system-main"
              className="block block-system block-main block-system-main odd block-without-title"
            >
              <div className="block-inner clearfix">
                <div className="content clearfix">
                  <article
                    id="node-page-320"
                    className="node node-page node-published node-not-promoted node-not-sticky author-slikerm odd clearfix"
                  >
                    <div className="content clearfix">
                      <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <h2>
                              We provide you with the facts and data you need to make critical
                              business decisions.
                            </h2>
                            <p>
                              <a href="/sites/broadstreet.net/files/measured-results.jpg/">
                                <img
                                  alt="Measured Results"
                                  src="https://www.broadstreetconsulting.net/sites/broadstreet.net/files/measured-results.jpg"
                                  loading="lazy"
                                  decoding="async"
                                />
                              </a>
                            </p>
                            <p>
                              Your success on the Web can be measured using sophisticated
                              measurement tools, allowing you to focus your resources on the things
                              that work best.
                            </p>
                            <p>
                              Broadstreet builds reports by tracking Google, Bing and Yahoo's use of
                              search terms tailored for your business. Search Engine Optimization
                              (SEO) is a constantly evolving technique, and Broadstreet Consulting
                              helps you get the most from the search engines.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix">
                      <nav className="links node-links clearfix"></nav>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </article>
        <aside className="sidebar">
          <p className="eyebrow">Let’s move forward</p>
          <h2>What’s next for your business?</h2>
          <p>
            Start with a conversation about your goals, your customers, and where you want to grow.
          </p>
          <Link className="button" to="/contact/">
            Free consultation
          </Link>
          <a href="tel:+18035750564">(803) 575-0564</a>
          <Link to="/portfolio/">Explore our work</Link>
        </aside>
      </div>
    </>
  );
}
