import { Link } from "react-router";
import { seo } from "../lib/seo";

export const meta = () =>
  seo({
    title: "Digital Marketing & Web Design in Camden, SC | Broadstreet",
    description:
      "Grow your business with Broadstreet: website design, SEO, Google Ads, and ongoing digital marketing support in Camden, SC. Schedule a free consultation.",
    canonical: "https://broadstreet.net/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/#webpage",
        url: "https://broadstreet.net/",
        name: "Digital Marketing & Web Design in Camden, SC | Broadstreet",
        description:
          "Grow your business with Broadstreet: website design, SEO, Google Ads, and ongoing digital marketing support in Camden, SC. Schedule a free consultation.",
        isPartOf: { "@id": "https://broadstreet.net/#website" },
        about: { "@id": "https://broadstreet.net/#organization" },
      },
    ],
  });

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Your local digital marketing partner</p>
            <h1>
              Your business.
              <br />
              Your next chapter.
              <br />
              <em>Let’s build it now.</em>
            </h1>
            <p className="lead">
              Websites, search, and digital marketing that help the right people find you—and give
              them a reason to choose you.
            </p>
            <div className="actions">
              <Link className="button" to="/contact/">
                Let’s grow your business
              </Link>
              <Link className="button secondary" to="/portfolio/">
                Explore our work
              </Link>
            </div>
            <p className="hero-note">Over 20 years of experience. A team that knows your name.</p>
          </div>
          <Link
            className="hero-work"
            to="/portfolio/palmetto-glass/"
            aria-label="Explore our work for Palmetto Glass"
          >
            <img
              src="/assets/media/cff38687931332f5.png"
              alt="Palmetto Glass website designed by Broadstreet"
              width="680"
              height="440"
              fetchPriority="high"
            />
            <span className="caption">
              <strong>Palmetto Glass</strong>
              <span>Website design · SEO</span>
            </span>
          </Link>
        </div>
      </section>
      <div className="proof">
        <div className="wrap">
          <div>
            <strong>20+ years</strong>
            <span>Helping businesses move forward</span>
          </div>
          <div>
            <strong>Local roots</strong>
            <span>Camden, SC. Relationships that last.</span>
          </div>
          <div>
            <strong>One connected team</strong>
            <span>Websites, marketing, and ongoing support</span>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">What we do</p>
              <h2>
                A stronger online presence.
                <br />A partner at every step.
              </h2>
            </div>
            <Link to="/services/">View all services</Link>
          </div>
          <div className="cards">
            <article className="card">
              <div className="card-content">
                <span className="number">01</span>
                <h3>Website design</h3>
                <p>A better first impression. A clearer path from visitor to customer.</p>
                <Link to="/services/mobile-friendly-website-design-development/">
                  Explore website design
                </Link>
              </div>
            </article>
            <article className="card">
              <div className="card-content">
                <span className="number">02</span>
                <h3>Search engine optimization</h3>
                <p>Help people find your business when they’re searching for what you do.</p>
                <Link to="/services/search-engine-optimization-seo/">
                  Explore search engine optimization
                </Link>
              </div>
            </article>
            <article className="card">
              <div className="card-content">
                <span className="number">03</span>
                <h3>{"Google Ads & paid search"}</h3>
                <p>Connect with the right audience through focused, measurable campaigns.</p>
                <Link to="/services/google-adwords-ppc-search-engine-marketing-consulting/">
                  {"Explore google ads & paid search"}
                </Link>
              </div>
            </article>
            <article className="card">
              <div className="card-content">
                <span className="number">04</span>
                <h3>eCommerce</h3>
                <p>Bring your products online and reach customers beyond your storefront.</p>
                <Link to="/services/ecommerce-website-development/">Explore ecommerce</Link>
              </div>
            </article>
            <article className="card">
              <div className="card-content">
                <span className="number">05</span>
                <h3>{"Content & social media"}</h3>
                <p>
                  Stay visible, share your expertise, and build stronger customer relationships.
                </p>
                <Link to="/services/social-media-marketing/">
                  {"Explore content & social media"}
                </Link>
              </div>
            </article>
            <article className="card">
              <div className="card-content">
                <span className="number">06</span>
                <h3>{"Strategy & ongoing support"}</h3>
                <p>Keep your website current and your marketing focused as your business grows.</p>
                <Link to="/services/digital-marketing-strategy-and-support/">
                  {"Explore strategy & ongoing support"}
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="section pale">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>
                Built for businesses
                <br />
                like yours.
              </h2>
            </div>
            <Link to="/portfolio/">Explore the portfolio</Link>
          </div>
          <div className="cards">
            <article className="card">
              <Link to="/portfolio/palmetto-glass/" tabIndex="-1" aria-hidden="true">
                <img
                  src="/assets/media/cff38687931332f5.png"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Client story</p>
                <h3>
                  <Link to="/portfolio/palmetto-glass/">Palmetto Glass</Link>
                </h3>
                <p>
                  Explore Broadstreet’s work with Palmetto Glass: website design, online presence,
                  and a partnership built around the client’s business.
                </p>
              </div>
            </article>
            <article className="card">
              <Link to="/portfolio/big-red-barn-retreat/" tabIndex="-1" aria-hidden="true">
                <img
                  src="/assets/media/c2325cd1cbb6b73a.png"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Client story</p>
                <h3>
                  <Link to="/portfolio/big-red-barn-retreat/">The Big Red Barn Retreat</Link>
                </h3>
                <p>
                  Explore Broadstreet’s work with The Big Red Barn Retreat: website design, online
                  presence, and a partnership built around the client’s business.
                </p>
              </div>
            </article>
            <article className="card">
              <Link to="/portfolio/busbee-truck-parts/" tabIndex="-1" aria-hidden="true">
                <img
                  src="/assets/media/43174c6d2a2add50.png"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Client story</p>
                <h3>
                  <Link to="/portfolio/busbee-truck-parts/">Busbee Truck Parts</Link>
                </h3>
                <p>
                  Explore Broadstreet’s work with Busbee Truck Parts: website design, online
                  presence, and a partnership built around the client’s business.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="quote">
            <div>
              <p className="eyebrow">The difference is personal</p>
              <h2>
                Real people.
                <br />
                Real progress.
              </h2>
              <Link to="/what-our-clients-are-saying/">More client stories</Link>
            </div>
            <blockquote>
              “I can’t thank Tom and his team enough for the phenomenal increase in sales we’ve
              experienced. We’ve gone from a two-man body shop to an international business that
              employs 25 people.”<cite>Doug Busbee · Busbee Truck Parts</cite>
            </blockquote>
          </div>
        </div>
      </section>
      <section className="section pale">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">From the Broadstreet team</p>
              <h2>
                A little perspective.
                <br />A practical next step.
              </h2>
            </div>
            <Link to="/blogs/">Read more insights</Link>
          </div>
          <div className="cards">
            <article className="card">
              <Link to="/blog/ai-alone-isnt-marketing-strategy/" tabIndex="-1" aria-hidden="true">
                <img
                  src="/assets/media/838c136eb9650bf0.png"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Insights</p>
                <h3>
                  <Link to="/blog/ai-alone-isnt-marketing-strategy/">
                    AI Alone Isn't a Marketing Strategy
                  </Link>
                </h3>
                <p>
                  Artificial intelligence is everywhere right now, and for good reason. It can draft
                  an email in seconds, brainstorm a month of post ideas, and crunch numbers…
                </p>
              </div>
            </article>
            <article className="card">
              <Link
                to="/blog/why-your-business-isnt-showing-google-and-how-fix-it/"
                tabIndex="-1"
                aria-hidden="true"
              >
                <img
                  src="/assets/media/32d1386884ed0008.png"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Insights</p>
                <h3>
                  <Link to="/blog/why-your-business-isnt-showing-google-and-how-fix-it/">
                    Why Your Business Isn't Showing Up on Google (and How to Fix It)
                  </Link>
                </h3>
                <p>
                  You know your business is good. Your customers know it too. So why does someone
                  searching for exactly what you offer end up finding three competitors before…
                </p>
              </div>
            </article>
            <article className="card">
              <Link
                to="/blog/what-we-love-about-small-towns-and-why-we-never-left/"
                tabIndex="-1"
                aria-hidden="true"
              >
                <img
                  src="/assets/media/dcb3cb05e76260e7.png"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Insights</p>
                <h3>
                  <Link to="/blog/what-we-love-about-small-towns-and-why-we-never-left/">
                    What We Love About Small Towns (And Why We Never Left)
                  </Link>
                </h3>
                <p>
                  There's a particular kind of quiet you get in Camden on a Sunday morning. The kind
                  where you can hear the birds arguing over a birdfeeder two yards away,…
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Meet Broadstreet</p>
          <h2>
            Small-town roots.
            <br />
            Long-term relationships.
          </h2>
          <p className="lead">
            Based in Camden, South Carolina, we help businesses throughout the Carolinas and across
            the country build a stronger presence online. We bring your website, search marketing,
            content, and ongoing support together around your goals.
          </p>
          <Link to="/about-broadstreet-consulting-camden-scs-trusted-digital-marketing-partner/">
            Get to know our company
          </Link>
          <div className="faq">
            <h2>Start with a few answers.</h2>
            <details>
              <summary>What does Broadstreet do?</summary>
              <p>
                Broadstreet provides website design and development, SEO, Google Ads management,
                eCommerce, social media, email marketing, content creation, and ongoing digital
                marketing support.
              </p>
            </details>
            <details>
              <summary>Where does Broadstreet work?</summary>
              <p>
                Our home office is in Camden, South Carolina. We work with businesses in the
                Carolinas and across the United States, including clients in Camden and Lancaster.
              </p>
            </details>
            <details>
              <summary>How do I get started?</summary>
              <p>
                Schedule a free consultation or call (803) 575-0564. We’ll talk about your business,
                your goals, and the online marketing services that fit your needs.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
