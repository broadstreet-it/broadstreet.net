import { Link } from "react-router";
import { seo } from "../lib/seo";

export const meta = () =>
  seo({
    title: "Tom Sliker | Broadstreet",
    description:
      "Tom Sliker serves as the ringleader for the Broadstreet team and has managed to build a diverse, talented, multi-faceted team that has performed a wide…",
    canonical: "https://broadstreet.net/tom-sliker/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/tom-sliker/#webpage",
        url: "https://broadstreet.net/tom-sliker/",
        name: "Tom Sliker | Broadstreet",
        description:
          "Tom Sliker serves as the ringleader for the Broadstreet team and has managed to build a diverse, talented, multi-faceted team that has performed a wide…",
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
            name: "Tom Sliker",
            item: "https://broadstreet.net/tom-sliker/",
          },
        ],
      },
    ],
  });

export default function TomSliker() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Tom Sliker
          </nav>
          <h1>Tom Sliker</h1>
          <p className="lead">
            Tom Sliker serves as the ringleader for the Broadstreet team and has managed to build a
            diverse, talented, multi-faceted team that has performed a wide…
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
                    id="node-staff-219"
                    className="ds-2col-stacked node node-staff view-mode-full node-published node-not-promoted node-not-sticky author-tsliker odd clearfix clearfix"
                  >
                    <div className="group-header"></div>
                    <div className="group-left">
                      <div className="field field-name-field-photo-collage field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <img
                              alt="Tom Sliker"
                              src="/assets/media/5add965935864475.jpg"
                              loading="lazy"
                              decoding="async"
                              width="400"
                              height="400"
                            />
                          </div>
                          <div className="field-item odd">
                            <img
                              alt="Tom Sliker"
                              src="/assets/media/7e8693b35eac9b3f.jpg"
                              loading="lazy"
                              decoding="async"
                              width="400"
                              height="400"
                            />
                          </div>
                          <div className="field-item even">
                            <img
                              alt="Tom Sliker"
                              src="/assets/media/70e4e1e989b0adcd.jpg"
                              loading="lazy"
                              decoding="async"
                              width="400"
                              height="400"
                            />
                          </div>
                          <div className="field-item odd">
                            <img
                              alt="Tom Sliker"
                              src="/assets/media/323b46e0f009a96e.jpg"
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
                          <div className="field-item even">President / CEO / Lead Consultant</div>
                        </div>
                      </div>
                      <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <p>
                              Tom Sliker serves as the ringleader for the Broadstreet team and has
                              managed to build a diverse, talented, multi-faceted team that has
                              performed a wide range of projects. With over 30 years of software
                              development and integration experience, Tom brings a wealth of
                              technical and business knowledge to his customers and his team.
                            </p>
                            <p>
                              {
                                "Tom graduated with a B.S. in Computer Science from the University of South Carolina. For ten years, he developed financial software for corporations such as BellSouth and Westinghouse. In the mid-1990’s, Tom began working as a consultant and software project manager throughout SC & served as a manager in two high-tech startups. From 2001-2013, Tom has worked in various roles for AgFirst Farm Credit Bank, located in Columbia, SC, and along the way picked up an MBA from the University of South Carolina, with a focus on International Business. "
                              }
                            </p>
                            <p>
                              In May of 2013, Tom left his day job to focus full-time on Broadstreet
                              Consulting. Besides the work of Broadstreet, Tom also stays busy
                              promoting Drupal and building the local Drupal community through
                              meetups and camps.
                            </p>
                            <p>
                              When he's not on his computer, Tom can be found hiking nearby or
                              somewhere in the mountains.{" "}
                              <Link to="/tom-sliker-technical-expert-digital-marketing-social-media-google-seo-search-marketing/">
                                Podcasts and videos featuring Tom.{" "}
                              </Link>
                            </p>
                            <p>
                              <strong>Connect with Tom: </strong>
                            </p>
                            <div className="social">
                              <a
                                className="fa fa-linkedin-square  fa-3x"
                                href="http://www.linkedin.com/pub/tom-sliker/5/532/8a6"
                                target="_blank"
                                rel="noopener noreferrer"
                              ></a>
                              <a
                                className="fa fa-facebook-square fa-3x"
                                href="https://www.facebook.com/sliker"
                                target="_blank"
                                rel="noopener noreferrer"
                              ></a>{" "}
                              <a
                                className="fa fa-twitter-square fa-3x"
                                href="https://www.twitter.com/tsliker"
                                target="_blank"
                                rel="noopener noreferrer"
                              ></a>{" "}
                              <a
                                className="fa fa-instagram  fa-3x"
                                href="https://instagram.com/tsliker"
                                target="_blank"
                                rel="noopener noreferrer"
                              ></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="field field-name-field-twitter-url field-type-text field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">@tsliker</div>
                        </div>
                      </div>
                      <div className="field field-name-field-facebook-url field-type-text field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">www.facebook.com/sliker</div>
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
