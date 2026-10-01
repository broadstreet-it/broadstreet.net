import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "River Valley Recycling | Broadstreet",
    description:
      "Explore Broadstreet’s work with River Valley Recycling: website design, online presence, and a partnership built around the client’s business.",
    canonical: "https://broadstreet.net/portfolio/river-valley-recycling/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/portfolio/river-valley-recycling/#webpage",
        url: "https://broadstreet.net/portfolio/river-valley-recycling/",
        name: "River Valley Recycling | Broadstreet",
        description:
          "Explore Broadstreet’s work with River Valley Recycling: website design, online presence, and a partnership built around the client’s business.",
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
            name: "River Valley Recycling",
            item: "https://broadstreet.net/portfolio/river-valley-recycling/",
          },
        ],
      },
    ],
  });

export default function PortfolioRiverValleyRecycling() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / River Valley Recycling
          </nav>
          <h1>River Valley Recycling</h1>
          <p className="lead">
            Explore Broadstreet’s work with River Valley Recycling: website design, online presence,
            and a partnership built around the client’s business.
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
                    id="node-portfolio-368"
                    className="ds-2col-stacked node node-portfolio view-mode-full node-published node-not-promoted node-not-sticky author-ajwillis odd clearfix clearfix"
                  >
                    <div className="group-header"></div>
                    <div className="group-left">
                      <div className="field field-name-field-image-page-view field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <a
                              href="https://www.rivervalleyrecycling.net/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                alt="River Valley Recycling"
                                src="/assets/media/d67fb8e53dc48dae.jpg"
                                loading="lazy"
                                decoding="async"
                                width="1276"
                                height="718"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <p>
                              River Valley Recycling is based on principles of integrity,
                              flexibility, and innovation. Our reputation and future is built on our
                              relationships with businesses and local communities that we operate
                              in.
                            </p>
                            <p>
                              We believe the need for recycling will on increase over time, as
                              reusing resources continues to become more cost-effective than mining
                              for new resources. We plan to evolve as our global economy evolves so
                              that we can continue to fulfill recycling needs.
                            </p>
                            <p>
                              We recognize the importance of giving back to the community as well as
                              providing opportunities for the community to help our environment.
                              Recycling will always be for a good cause — preserving the
                              environment.
                            </p>
                            <p>
                              In addition to helping educate the community on the importance of
                              recycling, we have helped many individuals and organizations raise
                              money through recycling. A couple ways we help the community in this
                              way include:
                            </p>
                            <ol>
                              <li>
                                We can assist with your community fundraiser. Just contact us for
                                more information about this process.
                              </li>
                              <li>
                                When you bring in your recyclables, we can give the proceeds to a
                                local organization.
                              </li>
                            </ol>
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
