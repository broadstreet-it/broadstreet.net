import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "Backcountry & Beyond | Broadstreet",
    description:
      "Explore Broadstreet’s work with Backcountry & Beyond: website design, online presence, and a partnership built around the client’s business.",
    canonical: "https://broadstreet.net/portfolio/backcountry-beyond/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/portfolio/backcountry-beyond/#webpage",
        url: "https://broadstreet.net/portfolio/backcountry-beyond/",
        name: "Backcountry & Beyond | Broadstreet",
        description:
          "Explore Broadstreet’s work with Backcountry & Beyond: website design, online presence, and a partnership built around the client’s business.",
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
            name: "Backcountry & Beyond",
            item: "https://broadstreet.net/portfolio/backcountry-beyond/",
          },
        ],
      },
    ],
  });

export default function PortfolioBackcountryBeyond() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {" / Backcountry & Beyond"}
          </nav>
          <h1>{"Backcountry & Beyond"}</h1>
          <p className="lead">
            {
              "Explore Broadstreet’s work with Backcountry & Beyond: website design, online presence, and a partnership built around the client’s business."
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
                    id="node-portfolio-387"
                    className="ds-2col-stacked node node-portfolio view-mode-full node-published node-not-promoted node-not-sticky author-ajwillis odd clearfix clearfix"
                  >
                    <div className="group-header"></div>
                    <div className="group-left">
                      <div className="field field-name-field-image-page-view field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <a
                              href="http://www.backcountryandbeyond.net/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                alt={"Backcountry & Beyond"}
                                src="/assets/media/e050cfca2f874814.jpg"
                                loading="lazy"
                                decoding="async"
                                width="1788"
                                height="752"
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
                                "In the summer of 2018, Jeff & DeWitt of Backcountry & Beyond came to us for help getting their online presence started before the grand opening they had planned for September in Salisbury, NC. They were opening a new retail store selling top quality products in-store and online for those who love the outdoors. They wanted a website that could not just tell people more about their store, but that could become an experience for their customers and have "
                              }
                              <Link to="/services/ecommerce-website-development/">
                                custom e-commerce functions
                              </Link>{" "}
                              to sell products nationwide and grow as their store grows. They were
                              also ready to get started on{" "}
                              <Link to="/services/social-media-marketing/">social media</Link>
                              {
                                " so they had a good following for when the store was ready to be opened. Broadstreet designed and developed a fully custom e-commerce Website in Drupal that Backcountry & Beyond customers would be able to easily find and navigate through the large selection of outdoor products. We — ve helped Backcountry & Beyond grow a following from 0 to hundreds on social media in just a couple of months. We manage their extensive "
                              }
                              <Link to="/services/email-marketing/">email marketing campaigns</Link>{" "}
                              developing custom email automation and email list segmentation. For
                              monthly support, we focus on{" "}
                              <Link to="/services/search-engine-optimization-seo/">
                                search engine optimization
                              </Link>
                              ,{" "}
                              <Link to="/services/content-management-development/">
                                content creation
                              </Link>
                              {", social media & email marketing."}
                            </p>
                            <p>
                              After multiple consultations and bringing them onto an{" "}
                              <Link to="/services/digital-marketing-strategy-and-support/">
                                ongoing support plan
                              </Link>
                              {
                                ", Broadstreet is helping Backcountry & Beyond get off to a great start."
                              }
                            </p>
                            <p>
                              {
                                "Broadstreet started with Backcountry & Beyond by designing a website with no e-commerce function yet, so that they had a place to direct people for more information about their grand opening while going to summer festivals and promoting their store. We also immediately launched Backcountry & Beyond into"
                              }
                              <Link to="/services/social-media-marketing/">
                                {" "}
                                social media marketing
                              </Link>
                              {
                                " on Facebook, Twitter & Instagram, posting almost daily for the company as well as helping the company learn the best practices for posting themselves. Broadstreet manages and maintains their social media presence, building customer relationships and establishing trust. We also maintain a very active blog on the Backcountry & Beyond website providing relative information to the products they sell which will help draw customers in for the experience of the website. This blog helps get the right people to the site through link-sharing and also helps increase their rank in the search engines."
                              }
                            </p>
                            <p>
                              Soon after developing the website, Broadstreet began{" "}
                              <Link to="/services/email-marketing/">email marketing</Link> using
                              Mail Chimp. We have begun to establish a significant mailing list with
                              a couple of hundred sign-ups before the grand opening even happened.
                              We then sent out emails to increase awareness of the grand opening in
                              Salisbury, NC.{" "}
                            </p>
                            <p>
                              {
                                "We can see that working with Backcountry & Beyond will be a lot of fun, as they are open to trying new opportunities in growing their online presence."
                              }
                            </p>
                            <div>
                              We offer free consultations to help determine which internet marketing
                              solutions are right for your business and your goals. <br />
                              <br />
                              <br />
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
