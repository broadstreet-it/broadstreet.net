import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "Rock Bottom Pond | Broadstreet",
    description:
      "Explore Broadstreet’s work with Rock Bottom Pond: website design, online presence, and a partnership built around the client’s business.",
    canonical: "https://broadstreet.net/portfolio/rock-bottom-pond/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/portfolio/rock-bottom-pond/#webpage",
        url: "https://broadstreet.net/portfolio/rock-bottom-pond/",
        name: "Rock Bottom Pond | Broadstreet",
        description:
          "Explore Broadstreet’s work with Rock Bottom Pond: website design, online presence, and a partnership built around the client’s business.",
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
            name: "Rock Bottom Pond",
            item: "https://broadstreet.net/portfolio/rock-bottom-pond/",
          },
        ],
      },
    ],
  });

export default function PortfolioRockBottomPond() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Rock Bottom Pond
          </nav>
          <h1>Rock Bottom Pond</h1>
          <p className="lead">
            Explore Broadstreet’s work with Rock Bottom Pond: website design, online presence, and a
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
                    id="node-portfolio-407"
                    className="ds-2col-stacked node node-portfolio view-mode-full node-published node-not-promoted node-not-sticky author-slikerm odd clearfix clearfix"
                  >
                    <div className="group-header"></div>
                    <div className="group-left">
                      <div className="field field-name-field-image-page-view field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <a
                              href="https://www.rockbottompond.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                alt="Rock Bottom Pond"
                                src="/assets/media/dfbbb84eb8639c21.jpg"
                                loading="lazy"
                                decoding="async"
                                width="1620"
                                height="1172"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <p>
                              Rock bottom pond is a local wedding venue in South Carolina who first
                              heard about Broadstreet through friends. Donna decided to meet with
                              Tom for a free consultation, where they discussed her current website
                              and online presence. Rock Bottom Pond had a website, but it wasn't
                              very modern and it wasn't up to date. She didn't have time to work on
                              it any more, and was ready to give her website more purpose.
                            </p>
                            <p>
                              She decided to let the Broadstreet team completely{" "}
                              <Link to="/services/mobile-friendly-website-design-development/">
                                redesign her website
                              </Link>
                              , create a new logo and joined on a{" "}
                              <Link to="/services/digital-marketing-strategy-and-support/">
                                monthly support plan for SEO
                              </Link>
                              , website changes and social media management. The Broadstreet team is
                              now adding photos to the website as requested, sharing posts on their{" "}
                              <Link to="/services/social-media-marketing/">
                                social media accounts
                              </Link>
                              , tracking her organic position in Google and working on SEO
                              regularly.
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
