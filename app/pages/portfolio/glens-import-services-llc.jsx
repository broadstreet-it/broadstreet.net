import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "Glen's Import Services LLC | Broadstreet",
    description:
      "Explore Broadstreet’s work with Glen's Import Services LLC: website design, online presence, and a partnership built around the client’s business.",
    canonical: "https://broadstreet.net/portfolio/glens-import-services-llc/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/portfolio/glens-import-services-llc/#webpage",
        url: "https://broadstreet.net/portfolio/glens-import-services-llc/",
        name: "Glen's Import Services LLC | Broadstreet",
        description:
          "Explore Broadstreet’s work with Glen's Import Services LLC: website design, online presence, and a partnership built around the client’s business.",
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
            name: "Glen's Import Services LLC",
            item: "https://broadstreet.net/portfolio/glens-import-services-llc/",
          },
        ],
      },
    ],
  });

export default function PortfolioGlensImportServicesLlc() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Glen's Import Services LLC
          </nav>
          <h1>Glen's Import Services LLC</h1>
          <p className="lead">
            Explore Broadstreet’s work with Glen's Import Services LLC: website design, online
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
                    id="node-portfolio-471"
                    className="ds-2col-stacked node node-portfolio view-mode-full node-published node-not-promoted node-not-sticky author-mary odd clearfix clearfix"
                  >
                    <div className="group-header"></div>
                    <div className="group-left">
                      <div className="field field-name-field-image-page-view field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <a
                              href="https://glensimportservice.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                alt="Glen's Import Services LLC"
                                src="/assets/media/be3a932eef5a08a9.png"
                                loading="lazy"
                                decoding="async"
                                width="1366"
                                height="2147"
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
                              <a href="https://glensimportservice.com/">
                                <strong>Glen’s Import Service</strong>
                              </a>{" "}
                              partnered with Broadstreet.net, they were ready to establish a
                              stronger presence online with a website that accurately represented
                              their business and the quality of service they provide.
                            </p>
                            <p>
                              As a trusted local automotive service provider, Glen’s Import Service
                              had built a reputation through years of experience and customer
                              relationships — but they needed a digital home where potential
                              customers could learn about their services, understand what sets them
                              apart, and easily connect with their team.
                            </p>
                            <p>
                              Starting from the ground up, Broadstreet worked with the client to
                              create a modern, professional website designed around their goals. Our
                              team focused on developing a clean layout, clear messaging, and an
                              easy-to-navigate experience that helps visitors quickly find the
                              information they need.
                            </p>
                            <p>
                              Beyond the visual design, we also built the website with search engine
                              optimization (SEO) in mind. By creating a strong website structure,
                              optimizing content, and incorporating strategies to improve online
                              visibility, we helped lay the foundation for Glen’s Import Service to
                              be found by customers searching for their services.
                            </p>
                            <p>
                              The result is a fresh, modern digital presence that reflects the
                              professionalism of Glen’s Import Service while providing a strong
                              foundation for future growth.
                            </p>
                            <p>
                              Broadstreet helped bring their online presence to life with a website
                              that combines thoughtful design, strategic SEO, and a user experience
                              built to turn visitors into customers.
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
