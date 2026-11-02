import { Link } from "react-router";
import { faqNode, seo } from "../lib/seo";
import { AreaGrid, Faq, Facts, ReviewRotator, SectionHead, ServiceGroups } from "../components/ui";

const TITLE = "Web Design, SEO & Google Ads in Camden, SC | Broadstreet.net";
const DESCRIPTION =
  "Broadstreet.net is Camden, SC's local Google Partner. Websites, SEO, Google Ads, social media, apps and the Bridges CRM for businesses across the Carolinas. Free consultation.";

const FAQ = [
  {
    q: "What does Broadstreet do?",
    a: "Broadstreet provides website design and development, SEO, Google Ads management, eCommerce, social media, email marketing, content creation, app development, the Bridges CRM and ongoing digital marketing support.",
  },
  {
    q: "Where does Broadstreet work?",
    a: "Our office is in Camden, South Carolina. We work with businesses across the Carolinas, including Columbia, Lexington, Sumter, Florence, Darlington, Aiken, Myrtle Beach, Lancaster and Charlotte, and with clients across the United States.",
  },
  {
    q: "How do I get started?",
    a: "Schedule a free consultation or call (803) 575-0564. We’ll talk about your business, your goals and the services that fit your needs.",
  },
];

export const meta = () =>
  seo({
    title: TITLE,
    description: DESCRIPTION,
    canonical: "https://broadstreet.net/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/#webpage",
        url: "https://broadstreet.net/",
        name: TITLE,
        description: DESCRIPTION,
        isPartOf: { "@id": "https://broadstreet.net/#website" },
        about: { "@id": "https://broadstreet.net/#organization" },
      },
      faqNode(FAQ),
    ],
  });

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="wrap">
          <span className="badge">
            <span className="dots" aria-hidden="true">
              <i style={{ background: "var(--g-blue)" }}></i>
              <i style={{ background: "var(--g-red)" }}></i>
              <i style={{ background: "var(--g-yellow)" }}></i>
              <i style={{ background: "var(--g-green)" }}></i>
            </span>
            Certified Google Partner
          </span>
          <p className="meta">Broadstreet.net · Camden, SC · Serving the Carolinas since 2010</p>
          <h1>
            Marketing that makes your <span className="c-yellow">phone ring</span>
          </h1>
          <p className="lede">
            Websites, SEO, Google Ads, social media and email for local businesses. One Camden team
            handles all of it, so you can get back to running your business.
          </p>
          <div className="actions">
            <Link className="button" to="/contact/">Get a free consultation</Link>
            <Link className="button secondary" to="/services/">See our services</Link>
          </div>
        </div>
      </section>
      <Facts
        items={[
          ["15+ years of experience", "Helping clients succeed online since 2010"],
          ["Certified Google Partner", "Search and Google Ads experts"],
          ["Carolinas & beyond", "Serving businesses across the Carolinas and beyond"],
          ["Full-service marketing", "Websites, SEO, Google Ads and social media"],
        ]}
      />

      <section className="section" id="services">
        <div className="wrap">
          <SectionHead
            label="Our services"
            title={<>Everything you need to <span className="c-blue">get found</span>, get calls and grow</>}
            lede="Hire us for one service or let us run the whole plan. Everything is done in-house by our Camden team."
          />
          <ServiceGroups />
          <div className="all-svc">
            <Link className="button btn-yellow" to="/services/">See all services</Link>
          </div>
        </div>
      </section>

      <section className="section alt" id="work">
        <div className="wrap">
          <SectionHead
            label="Our work"
            labelColor="var(--g-red)"
            title={<>Real results for <span className="c-red">Carolina businesses</span></>}
          />
          <div className="cases">
            <Link className="case big" to="/portfolio/laureledu/" style={{ "--cc": "var(--blue)" }}>
              <small>Laurel Technical Institute · Google Ads &amp; SEO</small>
              <h3>Five times the conversions from Google Ads</h3>
              <blockquote>
                “Being in the top 3 in our search categories was paramount for the success of our
                school.”
              </blockquote>
              <cite>Doug Decker</cite>
              <span className="more">Read the story →</span>
            </Link>
            <Link className="case" to="/portfolio/tyler-brothers/" style={{ "--cc": "var(--g-red)" }}>
              <small>Tyler Brothers</small>
              <h3>100 years and counting</h3>
              <p>“We’re over 100 years old, and our customers keep getting younger.”</p>
              <span className="more">Read the story →</span>
            </Link>
            <Link className="case" to="/powers-gregory-staying-connected-customers/" style={{ "--cc": "#1E8E3E" }}>
              <small>Powers &amp; Gregory</small>
              <h3>Staying connected</h3>
              <p>Keeping an HVAC company in touch with its customers.</p>
              <span className="more">Read the story →</span>
            </Link>
            <Link className="case outline" to="/kershaw-county-council-aging-testimonial/">
              <small>Kershaw County Council on Aging</small>
              <h3>Serving the community</h3>
              <p>Helping a local nonprofit reach the people it serves.</p>
              <span className="more">Read the story →</span>
            </Link>
            <Link className="case dark" to="/wings-international-adventures/" style={{ "--cc": "var(--g-yellow)" }}>
              <small>Wings</small>
              <h3>International adventures</h3>
              <p>Reaching customers well beyond the Carolinas.</p>
              <span className="more">Read the story →</span>
            </Link>
          </div>
          <div className="all-svc">
            <Link className="button btn-yellow" to="/portfolio/">View our portfolio</Link>
          </div>
        </div>
      </section>

      <section className="section" id="reviews">
        <div className="wrap">
          <SectionHead label="Reviews" labelColor="var(--g-green)" title="What our clients say" />
          <div className="reviews">
            <figure className="review-card">
              <span className="stars" aria-label="Five stars" style={{ fontSize: "1.3rem" }}>★★★★★</span>
              <blockquote>“Broadstreet has been fantastic to work with.”</blockquote>
              <cite>Doug Decker, Laurel Technical Institute &amp; Laurel Business Institute</cite>
              <div className="actions">
                <Link className="button" to="/what-our-clients-are-saying/">Read our reviews</Link>
              </div>
            </figure>
            <ReviewRotator />
          </div>
        </div>
      </section>

      <section className="section alt" id="areas">
        <div className="wrap">
          <SectionHead
            label="Service areas"
            labelColor="var(--g-yellow)"
            title={<>Local to Camden. <span className="c-yellow">Working across the Carolinas.</span></>}
            lede="We meet clients in person or work by phone and video. Pick your area to see how we help businesses there."
          />
          <AreaGrid />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead label="Questions" title="Start with a few answers" />
          <Faq items={FAQ} />
        </div>
      </section>
    </>
  );
}
