import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "SEO Services in Camden, SC | Broadstreet",
    description:
      "Improve your search visibility with Broadstreet’s SEO services: keyword research, competitor analysis, content improvements, and an ongoing strategy for growth.",
    canonical: "https://broadstreet.net/services/search-engine-optimization-seo/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/services/search-engine-optimization-seo/#webpage",
        url: "https://broadstreet.net/services/search-engine-optimization-seo/",
        name: "SEO Services in Camden, SC | Broadstreet",
        description:
          "Improve your search visibility with Broadstreet’s SEO services: keyword research, competitor analysis, content improvements, and an ongoing strategy for growth.",
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
            name: "Help the right customers find you.",
            item: "https://broadstreet.net/services/search-engine-optimization-seo/",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Help the right customers find you.",
        description:
          "Improve your search visibility with Broadstreet’s SEO services: keyword research, competitor analysis, content improvements, and an ongoing strategy for growth.",
        provider: { "@id": "https://broadstreet.net/#organization" },
        url: "https://broadstreet.net/services/search-engine-optimization-seo/",
      },
    ],
  });

export default function ServicesSearchEngineOptimizationSeo() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Help the right customers find you.
          </nav>
          <h1>Help the right customers find you.</h1>
          <p className="lead">
            Improve your search visibility with Broadstreet’s SEO services: keyword research,
            competitor analysis, content improvements, and an ongoing strategy for growth.
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
                    id="node-service-311"
                    className="ds-1col node node-service view-mode-full node-published node-not-promoted node-not-sticky author-tsliker odd clearfix clearfix"
                  >
                    <div className="field field-name-field-service-image field-type-image field-label-hidden">
                      <div className="field-items">
                        <div className="field-item even">
                          <img
                            className="adaptive-image"
                            alt="Search Engine Optimization (SEO)"
                            title="Search Engine Optimization (SEO)"
                            src="https://broadstreet.net/sites/broadstreet.net/files/styles/service_adaptive/adaptive-image/public/seo.png?itok=BNktnvw9"
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
                              "Our SEO service will give you the foundation that you need in your online presence that will bring your website to the first page of search engines such as Google & Bing."
                            }
                          </p>
                          <p>
                            <span>
                              Being found on Google is critically important to your business. Our
                              experienced, full-service SEO team will take you to the next level
                              with our knowledge of Google's changes, updates to its algorithm, and
                              partnership with Google directly. It's hard to keep track of all the
                              changes, but we've been doing this for over 15 years. Our proven
                              solutions and experience have helped our clients increase their
                              traffic, reach new customers, and increase sales.
                            </span>
                          </p>
                          <p>
                            <span>
                              Broadstreet will help you develop and improve search rankings for your
                              most important web pages.{" "}
                            </span>
                          </p>
                          <p>
                            <strong>Our Search Engine Optimization services include:</strong>
                          </p>
                          <ul>
                            <li>Create keyword list</li>
                            <li>Perform competitor analysis</li>
                            <li>Update website / Create content</li>
                            <li>Link-building</li>
                            <li>Link sharing</li>
                            <li>and so much more</li>
                          </ul>
                          <p>
                            <span>
                              {
                                "We focus on keywords & search terms that will bring traffic to your site and convert searches to loyal customers. We will guide you through the transition as you transform your business using the Internet."
                              }
                            </span>
                          </p>
                          <div>
                            <Link className="custombutton" to="/contact/">
                              Schedule A Free Consultation
                            </Link>
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
