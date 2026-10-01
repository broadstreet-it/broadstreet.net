import { Link } from "react-router";
import { seo } from "../lib/seo";

export const meta = () =>
  seo({
    title: "Mary Souto | Broadstreet",
    description:
      "Mary joins our team from Lugoff, where she shares her home with her husband, four daughters, and two black labs who have proudly earned the title of �the…",
    canonical: "https://broadstreet.net/mary-souto/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/mary-souto/#webpage",
        url: "https://broadstreet.net/mary-souto/",
        name: "Mary Souto | Broadstreet",
        description:
          "Mary joins our team from Lugoff, where she shares her home with her husband, four daughters, and two black labs who have proudly earned the title of �the…",
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
            name: "Mary Souto",
            item: "https://broadstreet.net/mary-souto/",
          },
        ],
      },
    ],
  });

export default function MarySouto() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Mary Souto
          </nav>
          <h1>Mary Souto</h1>
          <p className="lead">
            Mary joins our team from Lugoff, where she shares her home with her husband, four
            daughters, and two black labs who have proudly earned the title of �the…
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
                    id="node-staff-467"
                    className="ds-2col-stacked node node-staff view-mode-full node-published node-not-promoted node-not-sticky author-mary odd clearfix clearfix"
                  >
                    <div className="group-header"></div>
                    <div className="group-left">
                      <div className="field field-name-field-photo-collage field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <img
                              alt="Mary Souto"
                              src="/assets/media/cf88dd1fa73264a6.jpg"
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
                          <div className="field-item even">Content Specialist - Web Design</div>
                        </div>
                      </div>
                      <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <p>
                              Mary joins our team from Lugoff, where she shares her home with her
                              husband, four daughters, and two black labs who have proudly earned
                              the title of — the best dogs ever. — With a passion for creativity and
                              storytelling, Mary brings years of experience in marketing, graphic
                              design, and digital content creation to Broadstreet.
                            </p>
                            <p>
                              As a content specialist, Mary helps bring our clients — brands to life
                              through engaging messaging, thoughtful strategy, and creative
                              campaigns. She also works as one of our web designers, combining her
                              eye for design with her understanding of what makes a website both
                              beautiful and effective.
                            </p>
                            <p>
                              Whether she's crafting the perfect social media post, creating a fresh
                              website design, or helping businesses connect with their customers,
                              Mary brings creativity, attention to detail, and a genuine passion for
                              helping local businesses grow.
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
