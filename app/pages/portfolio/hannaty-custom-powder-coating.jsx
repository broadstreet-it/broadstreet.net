import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "Hannaty Custom Powder Coating | Broadstreet",
    description:
      "Explore Broadstreet’s work with Hannaty Custom Powder Coating: website design, online presence, and a partnership built around the client’s business.",
    canonical: "https://broadstreet.net/portfolio/hannaty-custom-powder-coating/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/portfolio/hannaty-custom-powder-coating/#webpage",
        url: "https://broadstreet.net/portfolio/hannaty-custom-powder-coating/",
        name: "Hannaty Custom Powder Coating | Broadstreet",
        description:
          "Explore Broadstreet’s work with Hannaty Custom Powder Coating: website design, online presence, and a partnership built around the client’s business.",
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
            name: "Hannaty Custom Powder Coating",
            item: "https://broadstreet.net/portfolio/hannaty-custom-powder-coating/",
          },
        ],
      },
    ],
  });

export default function PortfolioHannatyCustomPowderCoating() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Hannaty Custom Powder Coating
          </nav>
          <h1>Hannaty Custom Powder Coating</h1>
          <p className="lead">
            Explore Broadstreet’s work with Hannaty Custom Powder Coating: website design, online
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
                    id="node-portfolio-361"
                    className="ds-2col-stacked node node-portfolio view-mode-full node-published node-not-promoted node-not-sticky author-ajwillis odd clearfix clearfix"
                  >
                    <div className="group-header"></div>
                    <div className="group-left">
                      <div className="field field-name-field-image-page-view field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <a
                              href="https://www.hannatyinc.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                alt="Hannaty Custom Powder Coating"
                                src="/assets/media/724847c8e89ca70b.jpg"
                                loading="lazy"
                                decoding="async"
                                width="584"
                                height="315"
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
                                "Hannaty Custom Powder Coating has been providing customers with great powder coating at affordable prices since 2015. We are a leading source for quality powder coating for metal fabricators, auto enthusiasts & the general public in South Carolina. We are commited to excellent customer service & are driven by our passion for the work. Our attention to detail separates us from the rest. We are capable of powder coating extra-large projects with our oversized oven enabling objects up to 25 feet long and 8 feet wide. We also welcome and enjoy working on smaller projects such as household items & small gifts. We offer a variety of different colors to fit everyone's powder coating needs."
                              }
                            </p>
                            <p>
                              {
                                "We work on everything, from small jobs for the working man such as Yeti cups & wall decor, or large industrial & corporate jobs such as the Columbia Fireflies Stadium & CocaCola Factory. We hope Hannaty Custom Powder Coating can have the chance to earn your trust and business when it comes to your custom powder coating needs!"
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
