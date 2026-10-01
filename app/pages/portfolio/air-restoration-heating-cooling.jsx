import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "Air Restoration Heating & Cooling | Broadstreet",
    description:
      "Explore Broadstreet’s work with Air Restoration Heating & Cooling: website design, online presence, and a partnership built around the client’s business.",
    canonical: "https://broadstreet.net/portfolio/air-restoration-heating-cooling/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/portfolio/air-restoration-heating-cooling/#webpage",
        url: "https://broadstreet.net/portfolio/air-restoration-heating-cooling/",
        name: "Air Restoration Heating & Cooling | Broadstreet",
        description:
          "Explore Broadstreet’s work with Air Restoration Heating & Cooling: website design, online presence, and a partnership built around the client’s business.",
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
            name: "Air Restoration Heating & Cooling",
            item: "https://broadstreet.net/portfolio/air-restoration-heating-cooling/",
          },
        ],
      },
    ],
  });

export default function PortfolioAirRestorationHeatingCooling() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {" / Air Restoration Heating & Cooling"}
          </nav>
          <h1>{"Air Restoration Heating & Cooling"}</h1>
          <p className="lead">
            {
              "Explore Broadstreet’s work with Air Restoration Heating & Cooling: website design, online presence, and a partnership built around the client’s business."
            }
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
                    id="node-portfolio-360"
                    className="ds-2col-stacked node node-portfolio view-mode-full node-published node-not-promoted node-not-sticky author-ajwillis odd clearfix clearfix"
                  >
                    <div className="group-header"></div>
                    <div className="group-left">
                      <div className="field field-name-field-image-page-view field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <a
                              href="https://www.airrestorationhvac.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                alt={"Air Restoration Heating & Cooling"}
                                src="/assets/media/93e61448d31b043b.jpg"
                                loading="lazy"
                                decoding="async"
                                width="565"
                                height="270"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <p>
                              {
                                "Matt Roach started in HVAC repair in 2007. He spent 6 years as a service technician & 4 years as a sales manager before opening Air Restoration Heating & Cooling in Elgin, SC. Matt is dedicated to making sure families feel comfortable in their own home offering 24 hour response & free second opinions to families in need of HVAC services."
                              }
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
