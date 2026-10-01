import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "Banyan Bay Trading Company | Broadstreet",
    description:
      "Explore Broadstreet’s work with Banyan Bay Trading Company: website design, online presence, and a partnership built around the client’s business.",
    canonical: "https://broadstreet.net/portfolio/banyan-bay-trading-company/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/portfolio/banyan-bay-trading-company/#webpage",
        url: "https://broadstreet.net/portfolio/banyan-bay-trading-company/",
        name: "Banyan Bay Trading Company | Broadstreet",
        description:
          "Explore Broadstreet’s work with Banyan Bay Trading Company: website design, online presence, and a partnership built around the client’s business.",
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
            name: "Banyan Bay Trading Company",
            item: "https://broadstreet.net/portfolio/banyan-bay-trading-company/",
          },
        ],
      },
    ],
  });

export default function PortfolioBanyanBayTradingCompany() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Banyan Bay Trading Company
          </nav>
          <h1>Banyan Bay Trading Company</h1>
          <p className="lead">
            Explore Broadstreet’s work with Banyan Bay Trading Company: website design, online
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
                    id="node-portfolio-358"
                    className="ds-2col-stacked node node-portfolio view-mode-full node-published node-not-promoted node-not-sticky author-ajwillis odd clearfix clearfix"
                  >
                    <div className="group-header"></div>
                    <div className="group-left">
                      <div className="field field-name-field-image-page-view field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <a
                              href="http://store.banyanbaytrading.com/about-us"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                alt="Banyan Bay Trading Company"
                                src="/assets/media/ba41de6915f9bac6.jpg"
                                loading="lazy"
                                decoding="async"
                                width="591"
                                height="392"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <p>
                              Banyan Bay Trading is a Limited Liability Company incorporated in
                              Florida. It is a family operated company and its four founding members
                              have over 30 years of import/export and business administration
                              experience.
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
