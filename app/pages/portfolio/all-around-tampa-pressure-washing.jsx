import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "All Around Tampa Pressure Washing | Broadstreet",
    description:
      "Explore Broadstreet’s work with All Around Tampa Pressure Washing: website design, online presence, and a partnership built around the client’s business.",
    canonical: "https://broadstreet.net/portfolio/all-around-tampa-pressure-washing/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/portfolio/all-around-tampa-pressure-washing/#webpage",
        url: "https://broadstreet.net/portfolio/all-around-tampa-pressure-washing/",
        name: "All Around Tampa Pressure Washing | Broadstreet",
        description:
          "Explore Broadstreet’s work with All Around Tampa Pressure Washing: website design, online presence, and a partnership built around the client’s business.",
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
            name: "All Around Tampa Pressure Washing",
            item: "https://broadstreet.net/portfolio/all-around-tampa-pressure-washing/",
          },
        ],
      },
    ],
  });

export default function PortfolioAllAroundTampaPressureWashing() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / All Around Tampa Pressure Washing
          </nav>
          <h1>All Around Tampa Pressure Washing</h1>
          <p className="lead">
            Explore Broadstreet’s work with All Around Tampa Pressure Washing: website design,
            online presence, and a partnership built around the client’s business.
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
                  <div
                    id="node-portfolio-378"
                    className="ds-2col-stacked node node-portfolio view-mode-full node-published node-not-promoted node-not-sticky author-ajwillis odd clearfix clearfix"
                  >
                    <div className="group-header"></div>
                    <div className="group-left">
                      <div className="field field-name-field-image-page-view field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <a
                              href="http://www.allaroundtampapressurewashing.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                alt="All Around Tampa Pressure Washing"
                                src="/assets/media/3a495cc96a41fd37.jpg"
                                loading="lazy"
                                decoding="async"
                                width="1184"
                                height="616"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <p>
                              Is are a full-service exterior cleaning company specializing in both
                              residential and commercial property. They use only commercial grade
                              equipment and time-tested professional techniques to gently AND safely
                              clean your property. Also, offering inside and out window cleaning
                              service.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="group-right"></div>
                    <div className="group-footer"></div>
                  </div>
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
