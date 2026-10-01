import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "Browns Oil & Lube | Broadstreet",
    description:
      "Explore Broadstreet’s work with Browns Oil & Lube: website design, online presence, and a partnership built around the client’s business.",
    canonical: "https://broadstreet.net/portfolio/browns-oil-lube/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/portfolio/browns-oil-lube/#webpage",
        url: "https://broadstreet.net/portfolio/browns-oil-lube/",
        name: "Browns Oil & Lube | Broadstreet",
        description:
          "Explore Broadstreet’s work with Browns Oil & Lube: website design, online presence, and a partnership built around the client’s business.",
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
            name: "Browns Oil & Lube",
            item: "https://broadstreet.net/portfolio/browns-oil-lube/",
          },
        ],
      },
    ],
  });

export default function PortfolioBrownsOilLube() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {" / Browns Oil & Lube"}
          </nav>
          <h1>{"Browns Oil & Lube"}</h1>
          <p className="lead">
            {
              "Explore Broadstreet’s work with Browns Oil & Lube: website design, online presence, and a partnership built around the client’s business."
            }
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
                    id="node-portfolio-406"
                    className="ds-2col-stacked node node-portfolio view-mode-full node-published node-not-promoted node-not-sticky author-slikerm odd clearfix clearfix"
                  >
                    <div className="group-header"></div>
                    <div className="group-left">
                      <div className="field field-name-field-image-page-view field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <a
                              href="http://brownsoillube.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                alt={"Browns Oil & Lube"}
                                src="/assets/media/5ad9aa02086c7aa4.jpg"
                                loading="lazy"
                                decoding="async"
                                width="1573"
                                height="1192"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <p>
                              {
                                "Brown's Oil & Lube came to Broadstreet with a website that had been built and maintained by \"one of the most trusted providers of websites for the automotive industry.\" He wasn't happy at all with his website. He didn't like that they had stock photos, the content was focused on a whole lot of services he didn't offer, and no one used his website to fill out contact forms. He wanted the website to feel local, and he wanted people to easily get directions to his store front. He had a clear idea of what he wanted his website to be, and he wasn't able to get the help he needed with his current provider."
                              }
                            </p>
                            <p>
                              Broadstreet quickly put together a design based off of his complaints,
                              and{" "}
                              <Link to="/services/mobile-friendly-website-design-development/">
                                designed a modern, mobile-friendly website
                              </Link>{" "}
                              that had{" "}
                              <Link to="/services/search-engine-optimization-seo/">
                                keyword-rich content
                              </Link>{" "}
                              to help him show up locally for the specific services that he offers.
                              We were able to go to his location and take photos for the website and
                              avoid using stock photos. Brown's also signed on with Broadstreet for
                              a{" "}
                              <Link to="/services/social-media-marketing/">
                                monthly social media support package
                              </Link>
                              , so we immiediately began creating and claiming his social media
                              accounts, including Google My Business, and set up a monthly strategy
                              to work with the staff directly and post local, friendly content.
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
