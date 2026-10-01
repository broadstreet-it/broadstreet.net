import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "Handy Man on Purpose, LLC | Broadstreet",
    description:
      "Explore Broadstreet’s work with Handy Man on Purpose, LLC: website design, online presence, and a partnership built around the client’s business.",
    canonical: "https://broadstreet.net/portfolio/handy-man-purpose-llc/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/portfolio/handy-man-purpose-llc/#webpage",
        url: "https://broadstreet.net/portfolio/handy-man-purpose-llc/",
        name: "Handy Man on Purpose, LLC | Broadstreet",
        description:
          "Explore Broadstreet’s work with Handy Man on Purpose, LLC: website design, online presence, and a partnership built around the client’s business.",
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
            name: "Handy Man on Purpose, LLC",
            item: "https://broadstreet.net/portfolio/handy-man-purpose-llc/",
          },
        ],
      },
    ],
  });

export default function PortfolioHandyManPurposeLlc() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Handy Man on Purpose, LLC
          </nav>
          <h1>Handy Man on Purpose, LLC</h1>
          <p className="lead">
            Explore Broadstreet’s work with Handy Man on Purpose, LLC: website design, online
            presence, and a partnership built around the client’s business.
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
                    id="node-portfolio-403"
                    className="ds-2col-stacked node node-portfolio view-mode-full node-published node-not-promoted node-not-sticky author-slikerm odd clearfix clearfix"
                  >
                    <div className="group-header"></div>
                    <div className="group-left">
                      <div className="field field-name-field-image-page-view field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <a
                              href="https://www.handymanonpurpose.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                alt="Handy Man on Purpose, LLC"
                                src="/assets/media/8dcf56d15bae13f0.jpg"
                                loading="lazy"
                                decoding="async"
                                width="2334"
                                height="1796"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <p>
                              Handy Man on Purpose, LLC came to us in early 2020 with a Squarespace
                              website they had built themselves. It was using the theme originally
                              designed for a lawyer, it was a very dark and serious theme with
                              little room for creativity and customization. After scheduling a free
                              consultation with Broadstreet, Joey, the owner, decided to work with
                              Broadstreet to enhance the current website through Search Engine
                              Optimization (SEO) and design. Joey also joined Broadstreet for a
                              monthly support plan in which we provide ongoing updates to the
                              Website and manage their{" "}
                              <Link to="/services/social-media-marketing/">
                                Social Media (Facebook and Instagram)
                              </Link>
                              .
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
