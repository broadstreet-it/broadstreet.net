import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "Torres Law Firm | Broadstreet",
    description:
      "Explore Broadstreet’s work with Torres Law Firm: website design, online presence, and a partnership built around the client’s business.",
    canonical: "https://broadstreet.net/portfolio/torres-law-firm/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/portfolio/torres-law-firm/#webpage",
        url: "https://broadstreet.net/portfolio/torres-law-firm/",
        name: "Torres Law Firm | Broadstreet",
        description:
          "Explore Broadstreet’s work with Torres Law Firm: website design, online presence, and a partnership built around the client’s business.",
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
            name: "Torres Law Firm",
            item: "https://broadstreet.net/portfolio/torres-law-firm/",
          },
        ],
      },
    ],
  });

export default function PortfolioTorresLawFirm() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Torres Law Firm
          </nav>
          <h1>Torres Law Firm</h1>
          <p className="lead">
            Explore Broadstreet’s work with Torres Law Firm: website design, online presence, and a
            partnership built around the client’s business.
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
                    id="node-portfolio-392"
                    className="ds-2col-stacked node node-portfolio view-mode-full node-published node-not-promoted node-not-sticky author-slikerm odd clearfix clearfix"
                  >
                    <div className="group-header"></div>
                    <div className="group-left">
                      <div className="field field-name-field-image-page-view field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <a
                              href="https://www.torreslawfirm.net/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                alt="Torres Law Firm"
                                src="/assets/media/87e7cda7913053a9.png"
                                loading="lazy"
                                decoding="async"
                                width="3825"
                                height="7073"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <p>
                              Torres Law Firm came to us in 2018 when they decided it was time to
                              invest in{" "}
                              <Link to="/be-number-1-on-google/">
                                improving their presence on Google
                              </Link>
                              . We worked with them to{" "}
                              <a href="https://services/mobile-friendly-website-design-development">
                                design a beautiful, mobile-friendly website
                              </a>{" "}
                              optimized for the search engines. We developed keyword rich content
                              throughout the website. We also helped claim their Google Business
                              Listing and dress it up to show all the correct information, look
                              professional and truly represent the business better.
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
