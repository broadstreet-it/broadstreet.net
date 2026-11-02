import { Link } from "react-router";

export const STRATEGIES = [
  ["Website", "Turn visitors into calls", "Your website is your home base, where you show your products and services to the world."],
  ["eCommerce", "Sell around the clock", "Use your website to sell products to customers through your online store."],
  ["Content", "Answer what customers ask", "Produce content that reaches new audiences and draws attention to your site from search results."],
  ["Social media", "Stay top of mind", "Promote your products, services and events to potential customers and send them to your site."],
  ["Email", "Bring customers back", "Use email and newsletters to keep a direct line to your customers."],
  ["Search", "Get found on Google", "Understand and use SEO to bring the right audiences to your website."],
];

const ESSENTIALS = [
  "Increasing online sales", "Your website and your storefront", "How Google works", "SEO and SEM basics",
  "Social media marketing", "Email marketing", "Bing, Yahoo & Google Local", "Buying ads that pay off", "Measuring success",
];

/** Green Web Success feature: free tag, six strategies, the 9 Essentials videos and the guides. */
export default function WebSuccessBand({ heading = true, more = false }) {
  return (
    <section className="section ws-band" id="web-success">
      <div className="wrap">
        {heading && (
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
        )}
        <div className="strategies">
          {STRATEGIES.map(([b, s]) => (
            <div className="strategy" key={b}><b>{b}</b><span>{s}</span></div>
          ))}
        </div>
        <div className="ws-body">
          <div className="ws-card">
            <h3>The 9 Essentials video series</h3>
            <ol>{ESSENTIALS.map((e) => <li key={e}>{e}</li>)}</ol>
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
        {more && (
          <p style={{ marginTop: 28 }}>
            <Link to="/web-success/" style={{ color: "#fff", fontWeight: 700 }}>Learn more about Web Success →</Link>
          </p>
        )}
      </div>
    </section>
  );
}
