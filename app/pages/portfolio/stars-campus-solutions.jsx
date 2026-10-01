import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "STARS Campus Solutions | Broadstreet",
    description:
      "Explore Broadstreet’s work with STARS Campus Solutions: website design, online presence, and a partnership built around the client’s business.",
    canonical: "https://broadstreet.net/portfolio/stars-campus-solutions/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/portfolio/stars-campus-solutions/#webpage",
        url: "https://broadstreet.net/portfolio/stars-campus-solutions/",
        name: "STARS Campus Solutions | Broadstreet",
        description:
          "Explore Broadstreet’s work with STARS Campus Solutions: website design, online presence, and a partnership built around the client’s business.",
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
            name: "STARS Campus Solutions",
            item: "https://broadstreet.net/portfolio/stars-campus-solutions/",
          },
        ],
      },
    ],
  });

export default function PortfolioStarsCampusSolutions() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / STARS Campus Solutions
          </nav>
          <h1>STARS Campus Solutions</h1>
          <p className="lead">
            Explore Broadstreet’s work with STARS Campus Solutions: website design, online presence,
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
                    id="node-portfolio-404"
                    className="ds-2col-stacked node node-portfolio view-mode-full node-published node-not-promoted node-not-sticky author-slikerm odd clearfix clearfix"
                  >
                    <div className="group-header"></div>
                    <div className="group-left">
                      <div className="field field-name-field-image-page-view field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <a
                              href="https://starscampus.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                alt="STARS Campus Solutions"
                                src="/assets/media/91bed00febd5c3d8.jpg"
                                loading="lazy"
                                decoding="async"
                                width="1607"
                                height="1194"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <p>
                              In the fall of 2019, we began talking with Bob of STARS Campus
                              Solutions, a CRM and SIS system for postsecondary career colleges and
                              school since 1995. Located in Pennsylvania, Bob was looking for a
                              recommendation from a friend for a company who could help increase his
                              leads through the STARS website. They had an outdated site, with a
                              rather large Google AdWords campaign, but weren't getting as many
                              leads as they thought they should.
                            </p>
                            <p>
                              In January of 2020, Broadstreet designed a completely{" "}
                              <Link to="/services/mobile-friendly-website-design-development/">
                                modern, mobile-friendly website{" "}
                              </Link>
                              with keyword-rich content and a clear call to action. Bob's team
                              worked with Broadstreet to build out the content, and it quickly began
                              ranking higher organically in the search engines and bringing in more
                              leads.
                            </p>
                            <p>
                              Broadstreet also was hired to improve their performance on Google Ads.
                              STARS Campus is now on a monthly support plan for regular{" "}
                              <Link to="/services/search-engine-optimization-seo/">SEO</Link>
                              {" & changes to the website as well as "}
                              <a href="http://t/services/google-adwords-ppc-search-engine-marketing-consulting">
                                Google Ad management
                              </a>
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
