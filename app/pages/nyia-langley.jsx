import { Link } from "react-router";
import { seo } from "../lib/seo";

export const meta = () =>
  seo({
    title: "Nyia Langley | Broadstreet",
    description:
      "Nyia Langley brings over 7 years of social media strategy and content experience to the Broadstreet team. She specializes in helping brands build a…",
    canonical: "https://broadstreet.net/nyia-langley/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/nyia-langley/#webpage",
        url: "https://broadstreet.net/nyia-langley/",
        name: "Nyia Langley | Broadstreet",
        description:
          "Nyia Langley brings over 7 years of social media strategy and content experience to the Broadstreet team. She specializes in helping brands build a…",
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
            name: "Nyia Langley",
            item: "https://broadstreet.net/nyia-langley/",
          },
        ],
      },
    ],
  });

export default function NyiaLangley() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Nyia Langley
          </nav>
          <h1>Nyia Langley</h1>
          <p className="lead">
            Nyia Langley brings over 7 years of social media strategy and content experience to the
            Broadstreet team. She specializes in helping brands build a…
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
                    id="node-staff-478"
                    className="ds-2col-stacked node node-staff view-mode-full node-published node-not-promoted node-not-sticky author-mary odd clearfix clearfix"
                  >
                    <div className="group-header"></div>
                    <div className="group-left">
                      <div className="field field-name-field-photo-collage field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <img
                              alt="Nyia Langley"
                              src="/assets/media/c0e507c32bb78879.png"
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
                          <div className="field-item even">Content Specialist</div>
                        </div>
                      </div>
                      <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <p>
                              Nyia Langley brings over 7 years of social media strategy and content
                              experience to the Broadstreet team. She specializes in helping brands
                              build a consistent, strategic online presence, creating content that
                              reflects who they are and speaks directly to the people they want to
                              reach. Nyia believes great content starts with clarity, and she loves
                              helping businesses find theirs.
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
