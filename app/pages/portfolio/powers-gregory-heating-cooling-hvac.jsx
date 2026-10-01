import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "Powers & Gregory HVAC | Broadstreet",
    description:
      "Explore Broadstreet’s work with Powers & Gregory HVAC: website design, online presence, and a partnership built around the client’s business.",
    canonical: "https://broadstreet.net/portfolio/powers-gregory-heating-cooling-hvac/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/portfolio/powers-gregory-heating-cooling-hvac/#webpage",
        url: "https://broadstreet.net/portfolio/powers-gregory-heating-cooling-hvac/",
        name: "Powers & Gregory HVAC | Broadstreet",
        description:
          "Explore Broadstreet’s work with Powers & Gregory HVAC: website design, online presence, and a partnership built around the client’s business.",
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
            name: "Powers & Gregory HVAC",
            item: "https://broadstreet.net/portfolio/powers-gregory-heating-cooling-hvac/",
          },
        ],
      },
    ],
  });

export default function PortfolioPowersGregoryHeatingCoolingHvac() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {" / Powers & Gregory HVAC"}
          </nav>
          <h1>{"Powers & Gregory HVAC"}</h1>
          <p className="lead">
            {
              "Explore Broadstreet’s work with Powers & Gregory HVAC: website design, online presence, and a partnership built around the client’s business."
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
                    id="node-portfolio-391"
                    className="ds-2col-stacked node node-portfolio view-mode-full node-published node-not-promoted node-not-sticky author-slikerm odd clearfix clearfix"
                  >
                    <div className="group-header"></div>
                    <div className="group-left">
                      <div className="field field-name-field-image-page-view field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <a
                              href="https://www.powersandgregory.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                alt={"Powers & Gregory HVAC"}
                                src="/assets/media/18d95daac4660ac1.png"
                                loading="lazy"
                                decoding="async"
                                width="3825"
                                height="5947"
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
                                "Powers & Gregory Heating & Cooling has been serving Kershaw County for over 35 years. They came to us with an old website that had irrelevant content and wasn't used for much. We worked with them to "
                              }
                              <Link to="/services/mobile-friendly-website-design-development/">
                                design a website
                              </Link>{" "}
                              that is modern, mobile-friendly and serves a purpose. People can now
                              visit this website and see what type of products and services they
                              offer, who their service techs are, learn more about the company and
                              schedule appointment or request a quote. We also did some
                              customization to help the company have online chat as an option for
                              their customers.
                            </p>
                            <p>
                              We then got the company on a{" "}
                              <Link to="/services/digital-marketing-strategy-and-support/">
                                support plan that fits their needs
                              </Link>
                              . We now{" "}
                              <Link to="/services/social-media-marketing/">
                                post to their social media
                              </Link>{" "}
                              regularly for them, and we maintain and continue to add keyword-rich
                              content to their website. We{" "}
                              <Link to="/services/search-engine-optimization-seo/">
                                monitor their SEO
                              </Link>{" "}
                              and make improvements as necessary. They instantly started seeing
                              contacts coming in from their new website.
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
