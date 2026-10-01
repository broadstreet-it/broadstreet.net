import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "Fairfield County Chamber | Broadstreet",
    description:
      "Explore Broadstreet’s work with Fairfield County Chamber: website design, online presence, and a partnership built around the client’s business.",
    canonical: "https://broadstreet.net/portfolio/fairfield-county-chamber/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/portfolio/fairfield-county-chamber/#webpage",
        url: "https://broadstreet.net/portfolio/fairfield-county-chamber/",
        name: "Fairfield County Chamber | Broadstreet",
        description:
          "Explore Broadstreet’s work with Fairfield County Chamber: website design, online presence, and a partnership built around the client’s business.",
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
            name: "Fairfield County Chamber",
            item: "https://broadstreet.net/portfolio/fairfield-county-chamber/",
          },
        ],
      },
    ],
  });

export default function PortfolioFairfieldCountyChamber() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Fairfield County Chamber
          </nav>
          <h1>Fairfield County Chamber</h1>
          <p className="lead">
            Explore Broadstreet’s work with Fairfield County Chamber: website design, online
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
                    id="node-portfolio-408"
                    className="ds-2col-stacked node node-portfolio view-mode-full node-published node-not-promoted node-not-sticky author-slikerm odd clearfix clearfix"
                  >
                    <div className="group-header"></div>
                    <div className="group-left">
                      <div className="field field-name-field-image-page-view field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <a
                              href="http://fairfieldchambersc.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                alt="Fairfield County Chamber"
                                src="/assets/media/1b8fd661513f4309.jpg"
                                loading="lazy"
                                decoding="async"
                                width="1595"
                                height="1180"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <p>
                              The Fairfield County Chamber of Commerce came to Broadstreet at the
                              end of 2019 with a website that was very limiting to them. They
                              decided it was time to budget what was needed to create a modern,
                              mobile-friendly website with clear organization and a clear message.
                              After multiple discussions with Broadstreet, Fairfield Chamber came on
                              a monthly support and hosting plan, so that we can continue tracking
                              their SEO and add content to their website as needed. Broadstreet
                              designed and built a website much larger than their previous one, with
                              unique and custom content structures. We have attractive and
                              well-organized directories for businesses and people, well-integrated
                              social media hashtags and videos, and featured events giving the
                              public the option to add events to the community calendar. This is one
                              of the most custom and modern websites we have built to date.
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
