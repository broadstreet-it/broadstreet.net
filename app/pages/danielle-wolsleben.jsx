import { Link } from "react-router";
import { seo } from "../lib/seo";

export const meta = () =>
  seo({
    title: "Danielle Wolsleben | Broadstreet",
    description:
      "Danielle is a Nebraska native with a B.A. in Graphic Design from Wayne State College. She joined Broadstreet in 2021 after Air Force life brought her family…",
    canonical: "https://broadstreet.net/danielle-wolsleben/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/danielle-wolsleben/#webpage",
        url: "https://broadstreet.net/danielle-wolsleben/",
        name: "Danielle Wolsleben | Broadstreet",
        description:
          "Danielle is a Nebraska native with a B.A. in Graphic Design from Wayne State College. She joined Broadstreet in 2021 after Air Force life brought her family…",
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
            name: "Danielle Wolsleben",
            item: "https://broadstreet.net/danielle-wolsleben/",
          },
        ],
      },
    ],
  });

export default function DanielleWolsleben() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Danielle Wolsleben
          </nav>
          <h1>Danielle Wolsleben</h1>
          <p className="lead">
            Danielle is a Nebraska native with a B.A. in Graphic Design from Wayne State College.
            She joined Broadstreet in 2021 after Air Force life brought her family…
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
                    id="node-staff-429"
                    className="ds-2col-stacked node node-staff view-mode-full node-published node-not-promoted node-not-sticky author-tiffany odd clearfix clearfix"
                  >
                    <div className="group-header"></div>
                    <div className="group-left">
                      <div className="field field-name-field-photo-collage field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <img
                              alt="Danielle Wolsleben"
                              src="/assets/media/c686779ff32b5325.jpg"
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
                              Danielle is a Nebraska native with a B.A. in Graphic Design from Wayne
                              State College. She joined Broadstreet in 2021 after Air Force life
                              brought her family to Camden, SC. Since then, Danielle and Nevin have
                              welcomed two little boys into the family, and their next adventure has
                              taken them to Texas.
                              <br />
                              <br />
                              <br />
                              <br /> As a Content Specialist, Danielle helps Broadstreet clients
                              create strong, consistent online identities through graphic design and
                              digital content. Her work includes social media content, website
                              design, logo design, and brand development.
                              <br />
                              <br />
                              <br />
                              <br /> Outside of work, Danielle embraces the wonderfully busy life of
                              a boy mom. She enjoys family adventures, home projects, photography,
                              movies, and relaxing whenever she gets the chance.
                            </p>
                            <p>
                              <strong>Connect with Danielle: </strong>
                            </p>
                            <div className="social">
                              <a
                                className="fa fa-linkedin-square  fa-3x"
                                href="https://www.linkedin.com/in/daniellerutar/"
                                target="_blank"
                                rel="noopener noreferrer"
                              ></a>
                              <a
                                className="fa fa-facebook-square fa-3x"
                                href="https://www.facebook.com/danielle.rutar"
                                target="_blank"
                                rel="noopener noreferrer"
                              ></a>{" "}
                              <a
                                className="fa fa-instagram  fa-3x"
                                href="https://www.instagram.com/daniellewolsleben/"
                                target="_blank"
                                rel="noopener noreferrer"
                              ></a>
                            </div>
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
