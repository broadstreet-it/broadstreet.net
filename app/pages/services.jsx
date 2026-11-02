import { Link } from "react-router";
import { pageSeo, serviceNode } from "../lib/seo";
import { Icon, PageHero, SectionHead, ServiceGroups } from "../components/ui";

const TITLE = "Services | Web Design, SEO, Apps & CRM | Broadstreet.net";
const DESCRIPTION =
  "Web design, SEO, Google Ads, social media, app development and the Bridges CRM from Broadstreet.net in Camden, SC. Plus free Web Success videos and guides, no sign-up needed.";

export const meta = () =>
  pageSeo({
    path: "/services/",
    title: TITLE,
    description: DESCRIPTION,
    crumbs: [{ name: "Services", path: "/services/" }],
    extra: [
      serviceNode("SEO, Google Business Profile and Google Ads", "/services/get-found/", "Local SEO, Google Business Profile and Google Ads management."),
      serviceNode("Website design and online stores", "/services/websites/", "Mobile-friendly websites, online stores and Drupal development."),
      serviceNode("Social media and email marketing", "/services/stay-connected/", "Social media, email, video and social advertising."),
      serviceNode("Monthly support and lead generation", "/services/grow/", "Monthly support plans, lead generation, strategy and training."),
      serviceNode("App development", "/services/web-mobile-app-development/", "Custom mobile apps, web apps, portals and internal tools."),
      serviceNode("Bridges CRM", "/services/bridges-crm/", "A CRM with one inbox, automatic follow-up, booking and review requests."),
    ],
  });

export default function Services() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Services" }]}
        label="Our services"
        title={<>Everything your business <span className="accent">needs online</span></>}
        lede="Websites, Google, social media, custom apps and a CRM that follows up for you. Hire us for one service or let us run the whole plan, all with one local team."
        actions={false}
        jump={[
          ["get-found", "Get Found"], ["websites", "Websites"], ["stay-connected", "Stay Connected"], ["grow", "Grow"],
          ["apps", "App Development"], ["bridges", "Bridges CRM"], ["web-success", "Web Success"],
        ]}
      />

      <section className="section">
        <div className="wrap">
          <SectionHead label="Core services" title={<>Get found, get calls, <span className="c-yellow">keep growing</span></>} />
          <ServiceGroups withIds />
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <SectionHead
            label="New from Broadstreet"
            labelColor="var(--g-yellow)"
            title={<>Apps and a CRM <span className="c-yellow">built for small business</span></>}
            lede="Two new ways we help you work smarter: custom apps for your customers and staff, and a CRM that keeps every lead from slipping through the cracks."
          />
          <div className="new-grid">
            <article className="offer" id="apps" style={{ "--oc": "var(--g-blue)" }}>
              <div className="top"><span className="ic">{Icon.phone}</span><span className="new">New</span></div>
              <h3>App development</h3>
              <p>Custom apps that make it easier for customers to buy from you and for your team to get work done. We plan, design and build them, and keep them running.</p>
              <h4>What we can build</h4>
              <ul className="checks">
                <li>Mobile apps for iPhone and Android</li>
                <li>Web apps and customer portals</li>
                <li>Booking, ordering and loyalty tools</li>
                <li>Internal tools that replace spreadsheets and paperwork</li>
                <li>Connections to the systems you already use</li>
              </ul>
              <Link className="button" to="/services/web-mobile-app-development/">Explore App Development</Link>
            </article>
            <article className="offer" id="bridges" style={{ "--oc": "var(--g-red)" }}>
              <div className="top"><span className="ic">{Icon.bridge}</span><span className="new">New</span></div>
              <h3>Bridges CRM</h3>
              <p>Our own customer relationship manager, set up for your business. Every call, text, email, form and booking lands in one place, and follow-ups go out automatically so no lead goes cold.</p>
              <h4>What it does</h4>
              <ul className="checks">
                <li>All your contacts and leads in one place</li>
                <li>One inbox for texts, emails and social messages</li>
                <li>Automatic follow-up texts and emails</li>
                <li>Text back when you miss a call</li>
                <li>Online booking and appointment reminders</li>
                <li>Review requests sent after every job</li>
                <li>A sales pipeline you can see at a glance</li>
              </ul>
              <Link className="button" to="/services/bridges-crm/">Explore Bridges CRM</Link>
            </article>
          </div>
          <p className="draft">Draft feature lists. Confirm what app development and Bridges CRM include before launch.</p>
        </div>
      </section>

      <section className="section ws-band" id="web-success">
        <div className="wrap">
          <div className="ws-top">
            <div>
              <span className="free-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12l4.5 4.5L19 7" stroke="currentColor" strokeWidth="3.4" fill="none" /></svg>
                Free · No sign-up
              </span>
              <span className="label">Web Success</span>
              <h2>Learn how to win online</h2>
            </div>
            <p>Web Success is the framework we use with every client. Watch the videos and download the guides any time. No forms, no email required.</p>
          </div>
          <div className="strategies">
            {[
              ["Website", "Turn visitors into calls"], ["eCommerce", "Sell around the clock"], ["Content", "Answer what customers ask"],
              ["Social media", "Stay top of mind"], ["Email", "Bring customers back"], ["Search", "Get found on Google"],
            ].map(([b, s]) => (
              <div className="strategy" key={b}><b>{b}</b><span>{s}</span></div>
            ))}
          </div>
          <div className="ws-body">
            <div className="ws-card">
              <h3>The 9 Essentials video series</h3>
              <ol>
                <li>Increasing online sales</li><li>Your website and your storefront</li><li>How Google works</li>
                <li>SEO and SEM basics</li><li>Social media marketing</li><li>Email marketing</li>
                <li>Bing, Yahoo &amp; Google Local</li><li>Buying ads that pay off</li><li>Measuring success</li>
              </ol>
              <div className="actions">
                <Link className="button btn-green" to="/web-success-videos/">▶ Watch the series</Link>
              </div>
            </div>
            <div className="ws-card">
              <h3>Free guides</h3>
              <p>Downloadable worksheets and guides that walk you through each part of the Web Success framework. Open them right away, no sign-up.</p>
              <div className="actions">
                <Link className="button btn-outline-dark" to="/downloads/">Browse the guides</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead label="Every service" title="Looking for something specific?" />
          <ul className="content-index">
            <li><Link to="/services/mobile-friendly-website-design-development/">Mobile-friendly website design</Link></li>
            <li><Link to="/services/ecommerce-website-development/">eCommerce website development</Link></li>
            <li><Link to="/services/search-engine-optimization-seo/">Search engine optimization (SEO)</Link></li>
            <li><Link to="/services/google-adwords-ppc-search-engine-marketing-consulting/">Google Ads management</Link></li>
            <li><Link to="/services/local-online-marketing/">Local online marketing</Link></li>
            <li><Link to="/services/social-media-marketing/">Social media marketing</Link></li>
            <li><Link to="/services/email-marketing/">Email marketing</Link></li>
            <li><Link to="/services/content-management-development/">Content management &amp; development</Link></li>
            <li><Link to="/services/video-production/">Video production</Link></li>
            <li><Link to="/services/logo-design/">Logo design</Link></li>
            <li><Link to="/services/digital-marketing-strategy-and-support/">Strategy &amp; ongoing support</Link></li>
            <li><Link to="/services/secure-hosting-technical-support/">Secure hosting &amp; technical support</Link></li>
            <li><Link to="/lead-generation-services/">Lead generation</Link></li>
            <li><Link to="/services/web-mobile-app-development/">Web &amp; mobile app development</Link></li>
            <li><Link to="/services/bridges-crm/">Bridges CRM</Link></li>
          </ul>
        </div>
      </section>
    </>
  );
}
