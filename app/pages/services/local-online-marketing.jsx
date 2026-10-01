import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "Local SEO & Google Maps Marketing | Broadstreet",
    description:
      "Help nearby customers find your business with Broadstreet’s local online marketing, Google Maps visibility, and search strategy. Request a free consultation.",
    canonical: "https://broadstreet.net/services/local-online-marketing/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/services/local-online-marketing/#webpage",
        url: "https://broadstreet.net/services/local-online-marketing/",
        name: "Local SEO & Google Maps Marketing | Broadstreet",
        description:
          "Help nearby customers find your business with Broadstreet’s local online marketing, Google Maps visibility, and search strategy. Request a free consultation.",
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
            name: "Be found in your local market.",
            item: "https://broadstreet.net/services/local-online-marketing/",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Be found in your local market.",
        description:
          "Help nearby customers find your business with Broadstreet’s local online marketing, Google Maps visibility, and search strategy. Request a free consultation.",
        provider: { "@id": "https://broadstreet.net/#organization" },
        url: "https://broadstreet.net/services/local-online-marketing/",
      },
    ],
  });

export default function ServicesLocalOnlineMarketing() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Be found in your local market.
          </nav>
          <h1>Be found in your local market.</h1>
          <p className="lead">
            Help nearby customers find your business with Broadstreet’s local online marketing,
            Google Maps visibility, and search strategy. Request a free consultation.
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
                    id="node-service-308"
                    className="ds-1col node node-service view-mode-full node-published node-not-promoted node-not-sticky author-tsliker odd clearfix clearfix"
                  >
                    <div className="field field-name-field-service-image field-type-image field-label-hidden">
                      <div className="field-items">
                        <div className="field-item even">
                          <img
                            className="adaptive-image"
                            alt="SEO and Geotagging"
                            title="SEO and Geotagging"
                            src="https://broadstreet.net/sites/broadstreet.net/files/styles/service_adaptive/adaptive-image/public/seo-geotag.png?itok=rZ6_9YYc"
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
                            Did you know that more than 30% of people searching for products online
                            are likely to buy local? This is a tremendous opportunity for you to
                            attract local online searches.
                          </p>
                          <p>
                            Each search engine has its own — Local — site which is geared to
                            providing searchers access to local business information. It’s critical
                            to keep local information accurate and to monitor reviews on these
                            sites.{" "}
                          </p>
                          <p>
                            {
                              "Broadstreet has experience helping small businesses dominate their local market through the regular use of specific internet marketing strategies such as Content & Social Media Marketing, Search Engine Optimization and Pay-Per-Click Marketing."
                            }
                          </p>
                          <p>
                            We provide the following services to help you dominate your local
                            market:
                          </p>
                          <ul>
                            <li>
                              <Link to="/services/social-media-marketing/">
                                Social Media Marketing
                              </Link>
                            </li>
                            <li>
                              <Link to="/services/email-marketing/">Email Marketing</Link>
                            </li>
                            <li>
                              <Link to="/services/content-management-development/">
                                {"Video & Content Development"}
                              </Link>
                            </li>
                            <li>
                              <Link to="/services/search-engine-optimization-seo/">
                                Search Engine Optimization (SEO)
                              </Link>
                            </li>
                            <li>
                              <Link to="/adwords-consultant-services/">
                                Search Engine Marketing{" "}
                              </Link>
                            </li>
                          </ul>
                          <h2>Seeking a Long Term Relationship? We are.</h2>
                          <p>
                            Broadstreet has a long list of long-term clients. We are a safe and
                            qualified alternative to the SEO experts who keep calling you on the
                            phone. Many of our largest clients have been with us for over 5 years.
                          </p>
                          <p>
                            We provide ongoing hands-on support for eCommerce sites, content sites,
                            SEO, Social Media, and more. We help you grow your business.
                          </p>
                          <div>
                            We offer free consultations to help determine which internet marketing
                            solutions are right for your business and your goals.{" "}
                            <p>
                              <Link className="custombutton" to="/contact/">
                                Schedule A Free Consultation
                              </Link>
                            </p>
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
