import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "D & T Steel, Inc | Broadstreet",
    description:
      "Explore Broadstreet’s work with D & T Steel, Inc: website design, online presence, and a partnership built around the client’s business.",
    canonical: "https://broadstreet.net/portfolio/d-t-steel-inc/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/portfolio/d-t-steel-inc/#webpage",
        url: "https://broadstreet.net/portfolio/d-t-steel-inc/",
        name: "D & T Steel, Inc | Broadstreet",
        description:
          "Explore Broadstreet’s work with D & T Steel, Inc: website design, online presence, and a partnership built around the client’s business.",
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
            name: "D & T Steel, Inc",
            item: "https://broadstreet.net/portfolio/d-t-steel-inc/",
          },
        ],
      },
    ],
  });

export default function PortfolioDTSteelInc() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {" / D & T Steel, Inc"}
          </nav>
          <h1>{"D & T Steel, Inc"}</h1>
          <p className="lead">
            {
              "Explore Broadstreet’s work with D & T Steel, Inc: website design, online presence, and a partnership built around the client’s business."
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
                    id="node-portfolio-363"
                    className="ds-2col-stacked node node-portfolio view-mode-full node-published node-not-promoted node-not-sticky author-ajwillis odd clearfix clearfix"
                  >
                    <div className="group-header"></div>
                    <div className="group-left">
                      <div className="field field-name-field-image-page-view field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <a
                              href="http://www.dtsteelinc.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                alt={"D & T Steel, Inc"}
                                src="/assets/media/fa71fa13a5351e8c.jpg"
                                loading="lazy"
                                decoding="async"
                                width="527"
                                height="505"
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
                                "D&T Steel, Inc. was founded by Donna & Travis Crumpton in 1990. The company began as a small fabricator, which produced stairs, handrails, ladders and gates."
                              }
                            </p>
                            <p>
                              {
                                "After a few years of diligence, hard work and God's blessings, D&T blossomed into a fabricator and erector of multi-story buildings, such as hospitals, detention facilities, and office buildings."
                              }
                            </p>
                            <p>
                              {
                                'D&T Steel became a member of the American Institute for Steel Construction (AISC) in 2003. Under the AISC, D&T is certified in the "Standards for Steel Building Structures and Steel Erectors; providing qualified personnel, organization & experience to meet the requirements of the certification program.'
                              }
                            </p>
                            <p>
                              Our hands-on experience as steel fabricators and erectors give us an
                              edge when it comes to estimating, scheduling and managing projects.
                              Our project managers are experienced fabricators and erectors and we
                              take satisfaction in having the knowledge to solve problems quickly
                              and effectively. Having this experience makes us very competitive in
                              our bidding and enables us to keep clients in budget with their
                              projects.
                            </p>
                            <p>
                              {
                                "D&T Steel proudly boasts of an excellent safety record which keeps our projects flowing smoothly. Our in-house safety manager keeps all employees informed and trained with OSHA safety regulations. D&T is also a drug-free workplace and all of our workers are tested for substance abuse."
                              }
                            </p>
                            <p>
                              {
                                "D&T is recognized throughout South Carolina, North Carolina and Georgia as being among the best, when it comes to fabrication and erecting steel products, while adhering to project specifications, and budgets and schedules."
                              }
                            </p>
                            <p>
                              We've built a dedicated team that takes pride in the products that we
                              make. We are committed to quality, on-time delivery and continued cost
                              savings for our customers. We have invested in the best equipment and
                              employees required to provide the highest quality finished product
                              that exceeds your needs.
                            </p>
                            <p>
                              {
                                "Our goal is to meet our client's needs and requirements while providing a quality product, on time and within budget. From stairs and handrails to multi-story buildings, D&T Steel can fabricate and install any steel product. We are committed to providing the highest quality products and services to each and every customer."
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
