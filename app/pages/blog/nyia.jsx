import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "nyia's blog | Broadstreet",
    description:
      "Artificial intelligence is everywhere right now, and for good reason. It can draft an email in seconds, brainstorm a month of post ideas, and crunch numbers…",
    canonical: "https://broadstreet.net/blog/nyia/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/blog/nyia/#webpage",
        url: "https://broadstreet.net/blog/nyia/",
        name: "nyia's blog | Broadstreet",
        description:
          "Artificial intelligence is everywhere right now, and for good reason. It can draft an email in seconds, brainstorm a month of post ideas, and crunch numbers…",
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
            name: "nyia's blog",
            item: "https://broadstreet.net/blog/nyia/",
          },
        ],
      },
    ],
  });

export default function BlogNyia() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / nyia's blog
          </nav>
          <h1>nyia's blog</h1>
          <p className="lead">
            Artificial intelligence is everywhere right now, and for good reason. It can draft an
            email in seconds, brainstorm a month of post ideas, and crunch numbers…
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
                  <article
                    id="node-blog-479"
                    className="node node-blog node-promoted node-teaser node-published node-not-sticky author-nyia odd clearfix"
                  >
                    <header>
                      <h2 className="node-title">
                        <Link
                          title="AI Alone Isn't a Marketing Strategy"
                          to="/blog/ai-alone-isnt-marketing-strategy/"
                        >
                          AI Alone Isn't a Marketing Strategy
                        </Link>
                      </h2>
                    </header>
                    <footer className="submitted">
                      Submitted <time dateTime="2026-08-12">Wed, 08/12/2026</time> by{" "}
                      <span className="username">nyia</span>
                    </footer>
                    <div className="content clearfix">
                      <div className="field field-name-field-image-page-view field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <img
                              alt="nyia's blog"
                              src="/assets/media/838c136eb9650bf0.png"
                              loading="lazy"
                              decoding="async"
                              width="350"
                              height="350"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <p>
                              Artificial intelligence is everywhere right now, and for good reason.
                              It can draft an email in seconds, brainstorm a month of post ideas,
                              and crunch numbers faster than any person could. But somewhere along
                              the way, a myth took hold: that you can hand your marketing to a tool
                              and walk away. At <Link to="/">Broadstreet</Link>, we use AI every
                              day, and we can tell you plainly that AI alone is not a marketing
                              strategy. It is a powerful assistant. It is not the plan.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix">
                      <nav className="links node-links clearfix">
                        <ul className="links inline">
                          <li className="node-readmore first last">
                            <Link
                              title="AI Alone Isn't a Marketing Strategy"
                              to="/blog/ai-alone-isnt-marketing-strategy/"
                            >
                              Read more
                              <span className="element-invisible">
                                {" "}
                                about AI Alone Isn't a Marketing Strategy
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </article>
                  <article
                    id="node-blog-477"
                    className="node node-blog node-promoted node-teaser node-published node-not-sticky author-nyia even clearfix"
                  >
                    <header>
                      <h2 className="node-title">
                        <Link
                          title="Why Your Business Isn't Showing Up on Google (and How to Fix It)"
                          to="/blog/why-your-business-isnt-showing-google-and-how-fix-it/"
                        >
                          Why Your Business Isn't Showing Up on Google (and How to Fix It)
                        </Link>
                      </h2>
                    </header>
                    <footer className="submitted">
                      Submitted <time dateTime="2026-08-06">Thu, 08/06/2026</time> by{" "}
                      <span className="username">nyia</span>
                    </footer>
                    <div className="content clearfix">
                      <div className="field field-name-field-image-page-view field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <img
                              alt="nyia's blog"
                              src="/assets/media/32d1386884ed0008.png"
                              loading="lazy"
                              decoding="async"
                              width="350"
                              height="350"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <p>
                              You know your business is good. Your customers know it too. So why
                              does someone searching for exactly what you offer end up finding three
                              competitors before they ever see your name? It is one of the most
                              common frustrations we hear at <Link to="/">Broadstreet</Link>, and
                              the good news is that it is almost always fixable. Here are the usual
                              suspects.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix">
                      <nav className="links node-links clearfix">
                        <ul className="links inline">
                          <li className="node-readmore first last">
                            <Link
                              title="Why Your Business Isn't Showing Up on Google (and How to Fix It)"
                              to="/blog/why-your-business-isnt-showing-google-and-how-fix-it/"
                            >
                              Read more
                              <span className="element-invisible">
                                {" "}
                                about Why Your Business Isn't Showing Up on Google (and How to Fix
                                It)
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </article>
                  <article
                    id="node-blog-475"
                    className="node node-blog node-promoted node-teaser node-published node-not-sticky author-nyia odd clearfix"
                  >
                    <header>
                      <h2 className="node-title">
                        <Link
                          title="What We Love About Small Towns (And Why We Never Left)"
                          to="/blog/what-we-love-about-small-towns-and-why-we-never-left/"
                        >
                          What We Love About Small Towns (And Why We Never Left)
                        </Link>
                      </h2>
                    </header>
                    <footer className="submitted">
                      Submitted <time dateTime="2026-07-21">Tue, 07/21/2026</time> by{" "}
                      <span className="username">nyia</span>
                    </footer>
                    <div className="content clearfix">
                      <div className="field field-name-field-image-page-view field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <img
                              alt="nyia's blog"
                              src="/assets/media/dcb3cb05e76260e7.png"
                              loading="lazy"
                              decoding="async"
                              width="350"
                              height="350"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <p>
                              There's a particular kind of quiet you get in Camden on a Sunday
                              morning. The kind where you can hear the birds arguing over a
                              birdfeeder two yards away, where the guy at the hardware store already
                              knows you're there for a specific bolt because he sold you the last
                              one, where somebody's dog has clearly decided the whole street belongs
                              to him and nobody's arguing.
                            </p>
                            <p>
                              We've built our business inside that quiet. Not despite it. Because of
                              it.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix">
                      <nav className="links node-links clearfix">
                        <ul className="links inline">
                          <li className="node-readmore first last">
                            <Link
                              title="What We Love About Small Towns (And Why We Never Left)"
                              to="/blog/what-we-love-about-small-towns-and-why-we-never-left/"
                            >
                              Read more
                              <span className="element-invisible">
                                {" "}
                                about What We Love About Small Towns (And Why We Never Left)
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div className="feed-icon clearfix">
              <a
                className="feed-icon"
                title="Subscribe to RSS - nyia's blog"
                href="/blog/543/feed/"
              >
                <img
                  alt="Subscribe to RSS - nyia's blog"
                  src="/assets/media/bc11c9de0a70a021.png"
                  loading="lazy"
                  decoding="async"
                  width="16"
                  height="16"
                />
              </a>
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
