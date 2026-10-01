import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "Thompson Rental Services | Broadstreet",
    description:
      "Explore Broadstreet’s work with Thompson Rental Services: website design, online presence, and a partnership built around the client’s business.",
    canonical: "https://broadstreet.net/portfolio/thompson-rental-services/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/portfolio/thompson-rental-services/#webpage",
        url: "https://broadstreet.net/portfolio/thompson-rental-services/",
        name: "Thompson Rental Services | Broadstreet",
        description:
          "Explore Broadstreet’s work with Thompson Rental Services: website design, online presence, and a partnership built around the client’s business.",
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
            name: "Thompson Rental Services",
            item: "https://broadstreet.net/portfolio/thompson-rental-services/",
          },
        ],
      },
    ],
  });

export default function PortfolioThompsonRentalServices() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Thompson Rental Services
          </nav>
          <h1>Thompson Rental Services</h1>
          <p className="lead">
            Explore Broadstreet’s work with Thompson Rental Services: website design, online
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
                    id="node-portfolio-133"
                    className="ds-2col-stacked node node-portfolio view-mode-full node-published node-not-promoted node-not-sticky author-tsliker odd clearfix clearfix"
                  >
                    <div className="group-header"></div>
                    <div className="group-left">
                      <div className="field field-name-field-image-page-view field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <a
                              href="http://www.thompsonrentalservices.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                alt="Thompson Rental Services"
                                src="/assets/media/b9350e7812813ae6.png"
                                loading="lazy"
                                decoding="async"
                                width="1901"
                                height="1247"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <p>
                              <a
                                href="http://www.thompsonrentalservices.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Thompson Rental Services
                              </a>
                              {
                                " is a large rental company in Columbia, South Carolina. They have 4 locations and offer a wide variety of rentals including portajohns, special event rentals, construction equipment & more. The manager of the company came to Broadstreet in 2010 with a familiar story - some guy started building their website but never finished. After a while it was hard to get in touch with him. They wanted to keep costs down, so we built a small & "
                              }
                              <Link to="/open-source-development-services/">
                                simple Drupal website
                              </Link>
                              , gave them a couple hours of training and they were able to load
                              their own products and build their own pages as needed. Since building
                              this site, they've continued to increase their services with
                              Broadstreet and increase their revenue each year. We — ve helped
                              Thompson grow their market online with{" "}
                              <Link to="/services/digital-marketing-strategy-and-support/">
                                monthly digital marketing support
                              </Link>
                              , maintaining and updating their website,{" "}
                              <Link to="/services/social-media-marketing/">social media</Link>{" "}
                              presence,{" "}
                              <Link to="/services/email-marketing/">e-mail campaigns</Link> and
                              investing in{" "}
                              <a href="/search-engine-marketing-services/">Google AdWords</a>.
                            </p>
                            <p>
                              {
                                "We now manage search & display Google AdWords campaigns for Thompson Rental Services, developing custom "
                              }
                              <a
                                href="http://www.busbeetruckparts.com/isuzu-cabs-landing"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                landing pages
                              </a>
                              {
                                ", creating custom graphics, and defining specific audiences using geo-targeting, remarketing, targeted keywords & more. We focus on "
                              }
                              <Link to="/services/search-engine-optimization-seo/">
                                search engine optimization
                              </Link>
                              {", social media, e-mail marketing & Google AdWords."}
                            </p>
                            <p>
                              Broadstreet manages and maintains their social media presence,
                              building customer relationships and establishing trust. Soon after
                              developing the website, Broadstreet began{" "}
                              <Link to="/services/email-marketing/">email marketing</Link>
                              {
                                " for Thompson Rentals using Constant Contact. We have established a significant mailing list of thousands of construction company's, wedding planners & organizations. We send out seasonal reminders of the products available for rent through Thompson Rental Services, maintaining a customer relationship with those who have shown interest in them or made purchases with them before."
                              }
                            </p>
                            <p>
                              Thompson Rentals continues to grow their customer-base and evolve into
                              a well-known, trusted rental company in South Carolina. We are looking
                              forward to a long relationship and helping them move forward with
                              their online marketing.
                            </p>
                            <div>
                              We offer free consultations to help determine which internet marketing
                              solutions are right for your business and your goals. <br />
                              <br />
                              <Link className="custombutton" to="/book-now/">
                                Schedule A Free Consultation
                              </Link>
                            </div>
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
