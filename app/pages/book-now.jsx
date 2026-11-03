import { Link } from "react-router";
import { pageSeo } from "../lib/seo";
import { PageHero } from "../components/ui";

export const meta = () =>
  pageSeo({
    path: "/book-now/",
    title: "Book a 30-Minute Call with Tom Sliker | Broadstreet",
    description: "Schedule a free 30-minute appointment with Tom Sliker of Broadstreet.net to talk about your website, Google presence and marketing goals.",
    crumbs: [{ name: "Contact", path: "/contact/" }, { name: "Book a call", path: "/book-now/" }],
  });

export default function BookNow() {
  return (
    <div style={{ "--accent": "var(--g-yellow)" }}>
      <PageHero
        crumbs={[{ name: "Contact", to: "/contact/" }, { name: "Book a call" }]}
        label="Book a call"
        title={<>Pick a time with <span className="c-yellow">Tom Sliker</span></>}
        lede="Schedule a 30-minute appointment with Tom to talk about your website, your Google presence and where you want to grow."
        actions={false}
      />
      <section className="section">
        <div className="wrap book-layout">
          <div className="form-card">
            <h2>Choose a time</h2>
            <iframe
              className="booking-embed"
              src="https://api.leadconnectorhq.com/widget/booking/oXumrjaleJ5UOqsr098h"
              title="Book a 30-minute appointment with Tom Sliker"
              loading="lazy"
            ></iframe>
          </div>
          <aside className="contact-cards">
            <a className="contact-card" href="tel:+18035750564" style={{ "--cc": "var(--g-red)" }}>
              <span className="contact-kicker">Rather talk now?</span>
              <b>(803) 575-0564</b>
              <span>Call and we’ll find a time together.</span>
            </a>
            <Link className="contact-card" to="/contact/" style={{ "--cc": "var(--g-blue)" }}>
              <span className="contact-kicker">Not sure yet?</span>
              <b>Send us a message</b>
              <span>Tell us about your business and we’ll reach out →</span>
            </Link>
          </aside>
        </div>
      </section>
    </div>
  );
}
