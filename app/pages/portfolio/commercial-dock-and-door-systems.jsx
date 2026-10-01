import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "Commercial Dock and Door Systems | Broadstreet",
    description:
      "Explore Broadstreet’s work with Commercial Dock and Door Systems: website design, online presence, and a partnership built around the client’s business.",
    canonical: "https://broadstreet.net/portfolio/commercial-dock-and-door-systems/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/portfolio/commercial-dock-and-door-systems/#webpage",
        url: "https://broadstreet.net/portfolio/commercial-dock-and-door-systems/",
        name: "Commercial Dock and Door Systems | Broadstreet",
        description:
          "Explore Broadstreet’s work with Commercial Dock and Door Systems: website design, online presence, and a partnership built around the client’s business.",
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
            name: "Commercial Dock and Door Systems",
            item: "https://broadstreet.net/portfolio/commercial-dock-and-door-systems/",
          },
        ],
      },
    ],
  });

export default function PortfolioCommercialDockAndDoorSystems() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Commercial Dock and Door Systems
          </nav>
          <h1>Commercial Dock and Door Systems</h1>
          <p className="lead">
            Explore Broadstreet’s work with Commercial Dock and Door Systems: website design, online
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
                    id="node-portfolio-469"
                    className="ds-2col-stacked node node-portfolio view-mode-full node-published node-not-promoted node-not-sticky author-mary odd clearfix clearfix"
                  >
                    <div className="group-header"></div>
                    <div className="group-left">
                      <div className="field field-name-field-image-page-view field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <a
                              href="https://commercialdockanddoorsystems.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                alt="Commercial Dock and Door Systems"
                                src="/assets/media/88dacd6e6d0c427a.png"
                                loading="lazy"
                                decoding="async"
                                width="1366"
                                height="2033"
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
                              <a href="https://commercialdockanddoorsystems.com/">
                                {"Commercial Dock & Door Systems"}
                              </a>{" "}
                              came to Broadstreet.net, they already had a strong foundation — the
                              company was a new branch of our longtime client, 24 Hour Garage Door
                              Service, with a focus on serving commercial customers and showcasing
                              their specialized work.
                            </p>
                            <p>
                              {
                                "The goal was clear: create a completely separate online presence that allowed Commercial Dock & Door Systems to stand on its own while still maintaining the trust and professionalism customers associate with the 24 Hour Garage Door brand."
                              }
                            </p>
                            <p>
                              The client provided our team with the core information, key services,
                              and a general vision for what they wanted to communicate. From there,
                              they trusted Broadstreet to bring the brand to life through strategy,
                              design, and development.
                            </p>
                            <p>
                              {
                                "Our team created a fresh, modern website that highlights Commercial Dock & Door Systems — expertise in commercial dock and door solutions while incorporating subtle elements that connect back to the established 24 Hour Garage Door Service brand. The result is a website with its own unique identity — professional, polished, and designed specifically for the commercial customers they serve."
                              }
                            </p>
                            <p>
                              {
                                "By combining thoughtful design, clear messaging, and an easy-to-navigate user experience, Broadstreet helped transform the vision for Commercial Dock & Door Systems into a digital presence that reflects who they are and where they are headed."
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
