import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "Video Production | Broadstreet",
    description: "Below are some examples of video production work we have done for our customers:",
    canonical: "https://broadstreet.net/services/video-production/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/services/video-production/#webpage",
        url: "https://broadstreet.net/services/video-production/",
        name: "Video Production | Broadstreet",
        description:
          "Below are some examples of video production work we have done for our customers:",
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
            name: "Video Production",
            item: "https://broadstreet.net/services/video-production/",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Video Production",
        description:
          "Below are some examples of video production work we have done for our customers:",
        provider: { "@id": "https://broadstreet.net/#organization" },
        url: "https://broadstreet.net/services/video-production/",
      },
    ],
  });

export default function ServicesVideoProduction() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Video Production
          </nav>
          <h1>Video Production</h1>
          <p className="lead">
            Below are some examples of video production work we have done for our customers:
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
                    id="node-service-441"
                    className="ds-1col node node-service view-mode-full node-published node-not-promoted node-not-sticky author-tsliker odd clearfix clearfix"
                  >
                    <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                      <div className="field-items">
                        <div className="field-item even">
                          <p>
                            Below are some examples of video production work we have done for our
                            customers:
                          </p>
                          <p>
                            <iframe
                              title="YouTube video player"
                              src="https://www.youtube.com/embed/_NhEo1XxIQM"
                              loading="lazy"
                              allowFullScreen
                            ></iframe>
                            <iframe
                              title="YouTube video player"
                              src="https://www.youtube.com/embed/LWWfkG1JIkc"
                              loading="lazy"
                              allowFullScreen
                            ></iframe>
                            <iframe
                              title="YouTube video player"
                              src="https://www.youtube.com/embed/PgUA9cFKr74"
                              loading="lazy"
                              allowFullScreen
                            ></iframe>
                            <iframe
                              title="YouTube video player"
                              src="https://www.youtube.com/embed/FBTVQw_E7TU"
                              loading="lazy"
                              allowFullScreen
                            ></iframe>
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
