import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "KB Cores | Broadstreet",
    description:
      "Explore Broadstreet’s work with KB Cores: website design, online presence, and a partnership built around the client’s business.",
    canonical: "https://broadstreet.net/portfolio/kb-cores/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/portfolio/kb-cores/#webpage",
        url: "https://broadstreet.net/portfolio/kb-cores/",
        name: "KB Cores | Broadstreet",
        description:
          "Explore Broadstreet’s work with KB Cores: website design, online presence, and a partnership built around the client’s business.",
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
            name: "KB Cores",
            item: "https://broadstreet.net/portfolio/kb-cores/",
          },
        ],
      },
    ],
  });

export default function PortfolioKbCores() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / KB Cores
          </nav>
          <h1>KB Cores</h1>
          <p className="lead">
            Explore Broadstreet’s work with KB Cores: website design, online presence, and a
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
                    id="node-portfolio-369"
                    className="ds-2col-stacked node node-portfolio view-mode-full node-published node-not-promoted node-not-sticky author-ajwillis odd clearfix clearfix"
                  >
                    <div className="group-header"></div>
                    <div className="group-left">
                      <div className="field field-name-field-image-page-view field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <a
                              href="http://www.kbcores.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                alt="KB Cores"
                                src="/assets/media/e6dbb9c3a2ef91d2.png"
                                loading="lazy"
                                decoding="async"
                                width="1547"
                                height="1592"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <p>
                              KB Cores was founded in 1993. Their 176,000 square foot headquarters
                              is home to thousands of quality cores and automotive parts. They
                              process over a thousand engines and transmissions every day.
                            </p>
                            <p>
                              KB Cores had a wordpress website that acted as an online bulletin for
                              their business. They came to us when they decided they were ready to
                              plunge into the real world of online marketing by{" "}
                              <Link to="/services/mobile-friendly-website-design-development/">
                                moving their website to drupal
                              </Link>{" "}
                              and focusing on SEO and SEM.
                            </p>
                            <p>
                              KB Cores has joined Broadstreet Consulting's{" "}
                              <Link to="/services/digital-marketing-strategy-and-support/">
                                monthly support for online marketing
                              </Link>
                              . They get weekly website updates,{" "}
                              <Link to="/services/search-engine-optimization-seo/">
                                SEO improvements
                              </Link>
                              , and{" "}
                              <Link to="/services/google-adwords-ppc-search-engine-marketing-consulting/">
                                Google Adwords consulting/management
                              </Link>
                              . We track and manage their organic and paid search results weekly as
                              well as perform regular content updates to the website.
                            </p>
                            <p>
                              With worldwide shipping available, KB Cores is a valued business
                              partner in the core and parts exporting business. They also buy used
                              engine cores, transmission cores and scrap.{" "}
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
