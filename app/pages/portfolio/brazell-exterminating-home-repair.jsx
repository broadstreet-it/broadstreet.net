import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "Brazell Exterminating & Home Repair | Broadstreet",
    description:
      "Explore Broadstreet’s work with Brazell Exterminating & Home Repair: website design, online presence, and a partnership built around the client’s business.",
    canonical: "https://broadstreet.net/portfolio/brazell-exterminating-home-repair/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/portfolio/brazell-exterminating-home-repair/#webpage",
        url: "https://broadstreet.net/portfolio/brazell-exterminating-home-repair/",
        name: "Brazell Exterminating & Home Repair | Broadstreet",
        description:
          "Explore Broadstreet’s work with Brazell Exterminating & Home Repair: website design, online presence, and a partnership built around the client’s business.",
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
            name: "Brazell Exterminating & Home Repair",
            item: "https://broadstreet.net/portfolio/brazell-exterminating-home-repair/",
          },
        ],
      },
    ],
  });

export default function PortfolioBrazellExterminatingHomeRepair() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {" / Brazell Exterminating & Home Repair"}
          </nav>
          <h1>{"Brazell Exterminating & Home Repair"}</h1>
          <p className="lead">
            {
              "Explore Broadstreet’s work with Brazell Exterminating & Home Repair: website design, online presence, and a partnership built around the client’s business."
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
                    id="node-portfolio-390"
                    className="ds-2col-stacked node node-portfolio view-mode-full node-published node-not-promoted node-not-sticky author-slikerm odd clearfix clearfix"
                  >
                    <div className="group-header"></div>
                    <div className="group-left">
                      <div className="field field-name-field-image-page-view field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <a
                              href="https://www.brazellexterminating.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                alt={"Brazell Exterminating & Home Repair"}
                                src="/assets/media/ceefe855ecb3b0c7.png"
                                loading="lazy"
                                decoding="async"
                                width="3825"
                                height="8290"
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
                                "Brazell Exterminating & Home Repair is small, local company based out of Camden, SC. Richard Brazell had been in the Pest Control industry for over 20 years when he came to us for help growing his business through the use of"
                              }
                              <Link to="/reach-your-next-generation-customers-online-marketing/">
                                {" "}
                                online marketing
                              </Link>
                              .{" "}
                            </p>
                            <p>
                              We set him up on a payment and{" "}
                              <Link to="/services/digital-marketing-strategy-and-support/">
                                support plan
                              </Link>{" "}
                              that included a mobile-friendly website that is
                              <Link to="/services/search-engine-optimization-seo/">
                                {" "}
                                optimized for the search engine.
                              </Link>{" "}
                              We worked with Richard to create a welcoming front page that lays out
                              clearly his top services, as well as keyword-rich pages. Through his
                              support plan, he will continue to get help maintaining the website and
                              building keyword-rich content.
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
