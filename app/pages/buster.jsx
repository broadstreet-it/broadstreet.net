import { Link } from "react-router";
import { seo } from "../lib/seo";

export const meta = () =>
  seo({
    title: "Buster | Broadstreet",
    description:
      "Buster may technically belong to Tom, our owner, but around the office everyone knows who is really in charge. As Broadstreet�s unofficial Chief Happiness…",
    canonical: "https://broadstreet.net/buster/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/buster/#webpage",
        url: "https://broadstreet.net/buster/",
        name: "Buster | Broadstreet",
        description:
          "Buster may technically belong to Tom, our owner, but around the office everyone knows who is really in charge. As Broadstreet�s unofficial Chief Happiness…",
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
            name: "Buster",
            item: "https://broadstreet.net/buster/",
          },
        ],
      },
    ],
  });

export default function Buster() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Buster
          </nav>
          <h1>Buster</h1>
          <p className="lead">
            Buster may technically belong to Tom, our owner, but around the office everyone knows
            who is really in charge. As Broadstreet�s unofficial Chief Happiness…
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
                    id="node-staff-468"
                    className="ds-2col-stacked node node-staff view-mode-full node-published node-not-promoted node-not-sticky author-mary odd clearfix clearfix"
                  >
                    <div className="group-header"></div>
                    <div className="group-left">
                      <div className="field field-name-field-photo-collage field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <img
                              alt="Buster"
                              src="/assets/media/ad6d4da04bcc8f0e.jpg"
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
                          <div className="field-item even">
                            Employee of the Century - Chief Happiness Officer
                          </div>
                        </div>
                      </div>
                      <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <h2></h2>
                            <p>
                              Buster may technically belong to Tom, our owner, but around the office
                              everyone knows who is really in charge. As Broadstreet’s unofficial
                              Chief Happiness Officer, Buster keeps the team (and Tom) on schedule
                              with plenty of tail wags, friendly greetings, and important
                              supervision.
                            </p>
                            <p>
                              A familiar face around Camden, Buster is Tom’s loyal sidekick and can
                              often be found tagging along on adventures throughout the community.
                              Whether he's riding along for a local outing, exploring the great
                              outdoors, or simply making new friends, Buster loves being wherever
                              the action is.
                            </p>
                            <p>
                              When he's not out adventuring, you can usually find him welcoming
                              clients at the office door or soaking up the sunshine in his favorite
                              spot inside the office. His responsibilities include greeting
                              visitors, providing moral support, and reminding everyone that a
                              little fresh air and fun are essential parts of a good workday.
                            </p>
                            <p>
                              Buster brings a little extra personality to Broadstreet every day, and
                              we're pretty sure our clients enjoy seeing him just as much as we
                              enjoy having him here.
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
