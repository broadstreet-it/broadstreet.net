import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "Logo Design | Broadstreet",
    description:
      "Building your brand is the central focus of building a website and expanding your presence online. It's imperitive to establish an identity built on…",
    canonical: "https://broadstreet.net/services/logo-design/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/services/logo-design/#webpage",
        url: "https://broadstreet.net/services/logo-design/",
        name: "Logo Design | Broadstreet",
        description:
          "Building your brand is the central focus of building a website and expanding your presence online. It's imperitive to establish an identity built on…",
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
            name: "Logo Design",
            item: "https://broadstreet.net/services/logo-design/",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Logo Design",
        description:
          "Building your brand is the central focus of building a website and expanding your presence online. It's imperitive to establish an identity built on…",
        provider: { "@id": "https://broadstreet.net/#organization" },
        url: "https://broadstreet.net/services/logo-design/",
      },
    ],
  });

export default function ServicesLogoDesign() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Logo Design
          </nav>
          <h1>Logo Design</h1>
          <p className="lead">
            Building your brand is the central focus of building a website and expanding your
            presence online. It's imperitive to establish an identity built on…
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
                    id="node-service-364"
                    className="ds-1col node node-service view-mode-full node-published node-not-promoted node-not-sticky author-slikerm odd clearfix clearfix"
                  >
                    <div className="field field-name-field-service-image field-type-image field-label-hidden">
                      <div className="field-items">
                        <div className="field-item even">
                          <img
                            className="adaptive-image"
                            alt="Logo Design"
                            src="https://broadstreet.net/sites/broadstreet.net/files/styles/service_adaptive/adaptive-image/public/broadst_googleplus.png?itok=ZqJLuZuY"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                      <div className="field-items">
                        <div className="field-item even">
                          <p>
                            Building your brand is the central focus of building a website and
                            expanding your presence online. It's imperitive to establish an identity
                            built on familiar colors, fonts, and images - this means having one
                            professional logo that is versatile enough to appear on a number of
                            different online and print platforms.{" "}
                          </p>
                          <p>
                            We've started with several companies from the very beginning, before
                            they even had a logo or when they reached the point of needing a new,
                            modern logo. Our design team has produced a number of logos for clients
                            in this position.
                          </p>
                          <p>
                            Let us help you brand yourself to be recognized anywhere before we start
                            spreading your message online.{" "}
                          </p>
                          <p>
                            At Broadstreet, we offer affordable logo design created to help you
                            brand your business and capture the attention of your customers.
                          </p>
                          <p>
                            Check out some of the logos below that we have created here at
                            Broadstreet:
                          </p>
                          <div className="logo-design-section">
                            <div className="blog-rows">
                              <img
                                alt="allstaff"
                                src="/assets/media/d0fffb0771faf5a4.png"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                            <div className="blog-rows">
                              <img
                                alt="Logo Design"
                                src="/assets/media/b586ff6693e4714e.png"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                            <div className="blog-rows">
                              <img
                                alt="Logo Design"
                                src="/assets/media/b1d60c7c192daabf.png"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                            <div className="blog-rows">
                              <img
                                alt="Logo Design"
                                src="/assets/media/24f98350e1f9a356.png"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                            <div className="blog-rows">
                              <img
                                alt="Logo Design"
                                src="/assets/media/67f09b221ccf1127.png"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                            <div className="blog-rows">
                              <img
                                alt="Logo Design"
                                src="/assets/media/a1d926af16b0fc1b.png"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                            <div className="blog-rows">
                              <img
                                alt="Logo Design"
                                src="/assets/media/bd2b49b433b6bf3c.png"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                            <div className="blog-rows">
                              <img
                                alt="Logo Design"
                                src="/assets/media/7c95e371a34dab57.png"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
