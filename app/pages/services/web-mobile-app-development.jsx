import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "Web & Mobile App Development | Broadstreet",
    description:
      "Get a jump start by taking advantage of Broadstreet's Drupal experience. We offer affordable custom programming in Columbia, South Carolina and beyond. Our…",
    canonical: "https://broadstreet.net/services/web-mobile-app-development/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/services/web-mobile-app-development/#webpage",
        url: "https://broadstreet.net/services/web-mobile-app-development/",
        name: "Web & Mobile App Development | Broadstreet",
        description:
          "Get a jump start by taking advantage of Broadstreet's Drupal experience. We offer affordable custom programming in Columbia, South Carolina and beyond. Our…",
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
            name: "Web & Mobile App Development",
            item: "https://broadstreet.net/services/web-mobile-app-development/",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Web & Mobile App Development",
        description:
          "Get a jump start by taking advantage of Broadstreet's Drupal experience. We offer affordable custom programming in Columbia, South Carolina and beyond. Our…",
        provider: { "@id": "https://broadstreet.net/#organization" },
        url: "https://broadstreet.net/services/web-mobile-app-development/",
      },
    ],
  });

export default function ServicesWebMobileAppDevelopment() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {" / Web & Mobile App Development"}
          </nav>
          <h1>{"Web & Mobile App Development"}</h1>
          <p className="lead">
            Get a jump start by taking advantage of Broadstreet's Drupal experience. We offer
            affordable custom programming in Columbia, South Carolina and beyond. Our…
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
                    id="node-service-255"
                    className="ds-1col node node-service view-mode-full node-published node-not-promoted node-not-sticky author-tsliker odd clearfix clearfix"
                  >
                    <div className="field field-name-field-service-image field-type-image field-label-hidden">
                      <div className="field-items">
                        <div className="field-item even">
                          <img
                            className="adaptive-image"
                            alt={"Web & Mobile App Development"}
                            src="https://broadstreet.net/sites/broadstreet.net/files/styles/service_adaptive/adaptive-image/public/drupal.png?itok=O4o5ItZ-"
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
                            {
                              "Get a jump start by taking advantage of Broadstreet's Drupal experience. We offer affordable custom programming in Columbia, South Carolina and beyond. Our experienced, full-service design & programming teams will take your ideas for any custom application and turn them into a reality."
                            }
                          </p>
                          <p>
                            Our custom development skills have been used to create team time logging
                            applications, content management systems and more. Our professional
                            design team with experience in marketing will work to ensure easy use
                            and flow of custom applications.
                          </p>
                          <p>
                            Investing in second-rate programmers to cut costs can be risky and
                            costly to your success online. When you have Broadstreet design custom
                            applications, they are built to last.
                          </p>
                          <p>
                            Broadstreet uses an Agile development methodology and can put together
                            the right team to meet your needs.{" "}
                          </p>
                          <p>
                            {" "}
                            Read more about <a href="/drupal/">Drupal</a>.
                          </p>
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
