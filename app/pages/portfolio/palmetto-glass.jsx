import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "Palmetto Glass | Broadstreet",
    description:
      "Explore Broadstreet’s work with Palmetto Glass: website design, online presence, and a partnership built around the client’s business.",
    canonical: "https://broadstreet.net/portfolio/palmetto-glass/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/portfolio/palmetto-glass/#webpage",
        url: "https://broadstreet.net/portfolio/palmetto-glass/",
        name: "Palmetto Glass | Broadstreet",
        description:
          "Explore Broadstreet’s work with Palmetto Glass: website design, online presence, and a partnership built around the client’s business.",
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
            name: "Palmetto Glass",
            item: "https://broadstreet.net/portfolio/palmetto-glass/",
          },
        ],
      },
    ],
  });

export default function PortfolioPalmettoGlass() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Palmetto Glass
          </nav>
          <h1>Palmetto Glass</h1>
          <p className="lead">
            Explore Broadstreet’s work with Palmetto Glass: website design, online presence, and a
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
                    id="node-portfolio-470"
                    className="ds-2col-stacked node node-portfolio view-mode-full node-published node-not-promoted node-not-sticky author-mary odd clearfix clearfix"
                  >
                    <div className="group-header"></div>
                    <div className="group-left">
                      <div className="field field-name-field-image-page-view field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <a
                              href="https://palmettoglass.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                alt="Palmetto Glass"
                                src="/assets/media/cff38687931332f5.png"
                                loading="lazy"
                                decoding="async"
                                width="1366"
                                height="2268"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <p>
                              When{" "}
                              <a href="https://www.palmettoglass.com/">
                                <strong>Palmetto Glass</strong>
                              </a>{" "}
                              partnered with Broadstreet.net, they already had something many
                              businesses hope to have — a strong foundation. Their existing website
                              contained valuable information, showcased their services, and provided
                              the essential building blocks of an effective online presence.
                              However, after years of use, the website needed a refresh to better
                              represent the quality of their work and meet the expectations of
                              today’s online customers.
                            </p>
                            <p>
                              The goal was to create a website that felt modern, professional, and
                              easy to navigate while preserving the valuable content and information
                              that customers rely on. Our team focused on giving the website a
                              fresh, cohesive design that better reflected the Palmetto Glass brand
                              while improving the overall user experience.
                            </p>
                            <p>
                              Beyond the visual updates, we also identified opportunities to
                              strengthen the website’s search engine optimization (SEO). Through
                              strategic updates to content, structure, and page elements,
                              Broadstreet helped improve how the website communicates with search
                              engines while making it easier for potential customers to find the
                              services they need.
                            </p>
                            <p>
                              The result is a refreshed digital presence that combines the best of
                              the original website with modern design, improved functionality, and a
                              stronger foundation for long-term growth.
                            </p>
                            <p>
                              By updating the look, improving SEO, and creating a more seamless
                              experience for visitors, Broadstreet helped Palmetto Glass move
                              forward with a website that not only looks better but works harder for
                              their business.
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
