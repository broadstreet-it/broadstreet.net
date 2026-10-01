import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "Nature As Teacher Preserve | Broadstreet",
    description:
      "Explore Broadstreet’s work with Nature As Teacher Preserve: website design, online presence, and a partnership built around the client’s business.",
    canonical: "https://broadstreet.net/portfolio/nature-teacher-preserve/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/portfolio/nature-teacher-preserve/#webpage",
        url: "https://broadstreet.net/portfolio/nature-teacher-preserve/",
        name: "Nature As Teacher Preserve | Broadstreet",
        description:
          "Explore Broadstreet’s work with Nature As Teacher Preserve: website design, online presence, and a partnership built around the client’s business.",
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
            name: "Nature As Teacher Preserve",
            item: "https://broadstreet.net/portfolio/nature-teacher-preserve/",
          },
        ],
      },
    ],
  });

export default function PortfolioNatureTeacherPreserve() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Nature As Teacher Preserve
          </nav>
          <h1>Nature As Teacher Preserve</h1>
          <p className="lead">
            Explore Broadstreet’s work with Nature As Teacher Preserve: website design, online
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
                    id="node-portfolio-472"
                    className="ds-2col-stacked node node-portfolio view-mode-full node-published node-not-promoted node-not-sticky author-mary odd clearfix clearfix"
                  >
                    <div className="group-header"></div>
                    <div className="group-left">
                      <div className="field field-name-field-image-page-view field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <a
                              href="https://natureasteacher.org/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                alt="Nature As Teacher Preserve"
                                src="/assets/media/fca421e49830ab98.png"
                                loading="lazy"
                                decoding="async"
                                width="1366"
                                height="2370"
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
                              <a href="https://natureasteacher.org/">
                                <strong>Nature as Teacher Preserve</strong>
                              </a>{" "}
                              partnered with Broadstreet.net, they had an existing website that
                              provided a starting point but was missing many of the elements needed
                              to fully showcase the beauty, mission, and opportunities available at
                              the preserve.
                            </p>
                            <p>
                              The goal was to create a website that was not only visually appealing
                              but also more informative, user-friendly, and accessible across all
                              devices. With more people searching for information from their phones,
                              it was important to build a website that provided an excellent
                              experience for both desktop and mobile visitors.
                            </p>
                            <p>
                              Broadstreet worked to reorganize and expand the website’s content,
                              making it easier for visitors to discover what the preserve has to
                              offer, learn about its programs, and understand how they can get
                              involved. From highlighting the preserve’s unique features to creating
                              clearer pathways for visitors to find important information, every
                              element was designed with engagement in mind.
                            </p>
                            <p>
                              The updated website provides a more welcoming online experience that
                              reflects the mission of Nature as Teacher Preserve while encouraging
                              more people to explore, visit, and connect with this special place.
                            </p>
                            <p>
                              By combining modern design, improved functionality, and a stronger
                              content strategy, Broadstreet helped transform the website into a
                              digital resource that supports both current visitors and those
                              discovering the preserve for the first time.
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
