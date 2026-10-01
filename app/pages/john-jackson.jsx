import { Link } from "react-router";
import { seo } from "../lib/seo";

export const meta = () =>
  seo({
    title: "John Jackson | Broadstreet",
    description:
      "John Jackson, hailing from Cassatt, SC, brings a passion for technology and entrepreneurship to his role in sales at Broadstreet. From his early days…",
    canonical: "https://broadstreet.net/john-jackson/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/john-jackson/#webpage",
        url: "https://broadstreet.net/john-jackson/",
        name: "John Jackson | Broadstreet",
        description:
          "John Jackson, hailing from Cassatt, SC, brings a passion for technology and entrepreneurship to his role in sales at Broadstreet. From his early days…",
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
            name: "John Jackson",
            item: "https://broadstreet.net/john-jackson/",
          },
        ],
      },
    ],
  });

export default function JohnJackson() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / John Jackson
          </nav>
          <h1>John Jackson</h1>
          <p className="lead">
            John Jackson, hailing from Cassatt, SC, brings a passion for technology and
            entrepreneurship to his role in sales at Broadstreet. From his early days…
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
                    id="node-staff-455"
                    className="ds-2col-stacked node node-staff view-mode-full node-published node-not-promoted node-not-sticky author-heather odd clearfix clearfix"
                  >
                    <div className="group-header"></div>
                    <div className="group-left">
                      <div className="field field-name-field-photo-collage field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <img
                              alt="John Jackson"
                              src="/assets/media/44a6a524e9070cbb.jpg"
                              loading="lazy"
                              decoding="async"
                              width="400"
                              height="400"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="group-right">
                      <div className="field field-name-field-staff-job-title field-type-text field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">Web Developer</div>
                        </div>
                      </div>
                      <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <p>
                              John Jackson, hailing from Cassatt, SC, brings a passion for
                              technology and entrepreneurship to his role in sales at Broadstreet.
                              From his early days tinkering with PlayStation consoles to diving into
                              coding and digital marketing ventures, John's diverse background
                              enriches the team’s creative approach. Under the mentorship of Tom
                              Sliker, founder and president of Broadstreet, John has quickly
                              embraced his position, demonstrating remarkable progress and
                              dedication.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
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
