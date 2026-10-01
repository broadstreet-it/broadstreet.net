import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "Tyler Brothers | Broadstreet",
    description:
      "Explore Broadstreet’s work with Tyler Brothers: website design, online presence, and a partnership built around the client’s business.",
    canonical: "https://broadstreet.net/portfolio/tyler-brothers/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/portfolio/tyler-brothers/#webpage",
        url: "https://broadstreet.net/portfolio/tyler-brothers/",
        name: "Tyler Brothers | Broadstreet",
        description:
          "Explore Broadstreet’s work with Tyler Brothers: website design, online presence, and a partnership built around the client’s business.",
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
            name: "Tyler Brothers",
            item: "https://broadstreet.net/portfolio/tyler-brothers/",
          },
        ],
      },
    ],
  });

export default function PortfolioTylerBrothers() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Tyler Brothers
          </nav>
          <h1>Tyler Brothers</h1>
          <p className="lead">
            Explore Broadstreet’s work with Tyler Brothers: website design, online presence, and a
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
                    id="node-portfolio-58"
                    className="ds-2col-stacked node node-portfolio view-mode-full node-published node-not-promoted node-not-sticky author-broadstr odd clearfix clearfix"
                  >
                    <div className="group-header"></div>
                    <div className="group-left">
                      <div className="field field-name-field-image-page-view field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <a
                              href="http://www.tylerbrothers.net/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                alt="Tyler Brothers"
                                src="/assets/media/9ad5dc17aa183542.jpg"
                                loading="lazy"
                                decoding="async"
                                width="1084"
                                height="939"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <p>
                              <a href="http://www.tylerbrothers.net/">
                                Tyler Brothers department store
                              </a>{" "}
                              was founded in 1906 in the town of Wagener, SC. In 2006, the third
                              generation of Tyler Brothers, John and Al Tyler, asked us to help
                              transform their small-town business into one that could extend well
                              beyond the town limits. In 2010, Broadstreet and Tyler Brothers
                              decided to{" "}
                              <Link to="/open-source-development-services/">
                                port the site to Drupal
                              </Link>
                              , using the powerful Ubercart platform to provide Shopping Cart and{" "}
                              <Link to="/sell-your-products-online/">e-Commerce functionality</Link>
                              . With the easy functionality of Drupal, the Tylers are able to
                              maintain the on-line store themselves with regular product updates,
                              while we provide{" "}
                              <Link to="/services/digital-marketing-strategy-and-support/">
                                monthly digital marketing support
                              </Link>
                              , maintaining and updating their website content,{" "}
                              <Link to="/services/social-media-marketing/">social media</Link>{" "}
                              presence, and individualized on-line campaigns through{" "}
                              <Link to="/services/email-marketing/">e-mail marketing</Link>
                              {", Facebook & "}
                              <a href="/search-engine-marketing-services/">Google AdWords</a>. The
                              Tylers say as old as the store is, their customers continue getting
                              younger thanks to their on-line presence.
                            </p>
                            <p>
                              Once Broadstreet launched an e-commerce site to serve as the
                              foundation for the Tyler Brothers brand on-line, the store began to
                              expand their reach selling clothing and boots to new customers across
                              the nation.
                            </p>
                            <p>
                              Tyler Brothers then allowed us to expand their brand on social media
                              platforms such as{" "}
                              <a
                                href="https://www.facebook.com/TylerBros"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Facebook
                              </a>
                              ,{" "}
                              <a
                                href="https://twitter.com/Tylerbrothers"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Twitter
                              </a>
                              {" & "}
                              <a
                                href="https://instagram.com/tylerbrothers1904"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Instagram
                              </a>
                              {
                                ". By posting regular inventory updates and managing contests and giveaways they have generated a buzz in social media, resulting in younger customers and more sales. They continue to expand their social media presence using new platforms such as Snapchat. Social media marketing allows them to build & maintain a relationship with current clients while reaching thousands of fans who are interested in Tyler Brothers and want to do business with them."
                              }
                            </p>
                            <p>
                              {
                                "In addition to a powerful e-Commerce site & social media marketing, Broadstreet provides Tyler Brothers with general on-line and communications expertise that includes"
                              }
                            </p>
                            <ol>
                              <li>
                                <Link to="/services/local-online-marketing/">
                                  Showing Up Locally
                                </Link>
                              </li>
                              <li>
                                <Link to="/services/search-engine-optimization-seo/">
                                  Search Engine Optimization
                                </Link>
                              </li>
                              <li>
                                <Link to="/services/content-management-development/">
                                  Content Development (articles, new pages, graphic design)
                                </Link>
                              </li>
                              <li>
                                <Link to="/services/email-marketing/">
                                  Permission-Based Email Marketing
                                </Link>
                              </li>
                              <li>
                                <Link to="/services/google-adwords-ppc-search-engine-marketing-consulting/">
                                  Search Engine Marketing
                                </Link>
                              </li>
                            </ol>
                            <p>
                              Broadstreet implements email marketing campaigns for Tyler Brothers
                              using{" "}
                              <a href="http://www.constantcontact.com/welcomeback">
                                Constant Contact
                              </a>
                              , sending promotional emails with current deals, upcoming sales and
                              supporting print campaigns such as a{" "}
                              <a href="http://archive.constantcontact.com/fs123/1102168756385/archive/1114921198337.html">
                                Carhartt campaign
                              </a>{" "}
                              or the annual Christmas Sale. Together with Constant Contact, we are
                              able to help Tyler Brothers build relationships, drive revenue and
                              track their success with real results.
                            </p>
                            <p>
                              We also are able to use co-op funds from certain brands that they sell
                              to run special AdWords campaigns throughout the year.
                            </p>
                            <p>
                              This business in the small, rural town of Wagener, South Carolina
                              continues to see the power of investing in their on-line presence, and
                              we can't wait to see what the future holds for them.
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
