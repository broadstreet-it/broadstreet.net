import { Link } from "react-router";
import { seo } from "../lib/seo";

export const meta = () =>
  seo({
    title: "Book Now | Broadstreet",
    description: "Schedule a 30 minute appointment with Tom Sliker of Broadstreet.net",
    canonical: "https://broadstreet.net/book-now/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/book-now/#webpage",
        url: "https://broadstreet.net/book-now/",
        name: "Book Now | Broadstreet",
        description: "Schedule a 30 minute appointment with Tom Sliker of Broadstreet.net",
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
            name: "Book Now",
            item: "https://broadstreet.net/book-now/",
          },
        ],
      },
    ],
  });

export default function BookNow() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Book Now
          </nav>
          <h1>Book Now</h1>
          <p className="lead">
            Schedule a 30 minute appointment with Tom Sliker of Broadstreet.net
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
                    id="node-page-423"
                    className="node node-page node-published node-not-promoted node-not-sticky author-tsliker odd clearfix"
                  >
                    <div className="content clearfix">
                      <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <p>
                              Schedule a 30 minute appointment with Tom Sliker of Broadstreet.net
                            </p>
                            <p>
                              <iframe
                                id="T8ueyP6TxY8E2oEKvYUf_1761932851540"
                                src="https://api.leadconnectorhq.com/widget/booking/oXumrjaleJ5UOqsr098h"
                                title="Book Now video"
                                loading="lazy"
                                allowFullScreen
                                className="external-embed"
                              ></iframe>
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
