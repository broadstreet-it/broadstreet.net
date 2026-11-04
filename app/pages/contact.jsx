import { pageSeo } from "../lib/seo";
import { PageHero } from "../components/ui";
import EmailChooser from "../components/EmailChooser";

const TITLE = "Contact Broadstreet | Free Digital Marketing Consultation";
const DESCRIPTION =
  "Schedule a free digital marketing consultation with Broadstreet in Camden, SC. Call 803-575-0564 to discuss your website, SEO, advertising, and business goals.";

export const meta = () =>
  pageSeo({ path: "/contact/", title: TITLE, description: DESCRIPTION, crumbs: [{ name: "Contact", path: "/contact/" }] });

const MAPS = "https://www.google.com/maps/search/?api=1&query=Broadstreet.net%2C+537+E+DeKalb+St%2C+Camden%2C+SC+29020";

export default function Contact() {
  return (
    <div style={{ "--accent": "var(--g-yellow)" }}>
      <PageHero
        crumbs={[{ name: "Contact" }]}
        label="Contact us"
        title={<>Let’s talk about <span className="c-yellow">your business</span></>}
        lede="Tell us about your business, your customers and what you want to achieve. The consultation is free, and you’ll talk to the people who would do the work."
        actions={false}
      />

      <section className="section">
        <div className="wrap contact-layout">
          <div className="contact-cards">
            <a className="contact-card" href="tel:+18035750564" style={{ "--cc": "var(--g-red)" }}>
              <span className="contact-kicker">Call us</span>
              <b>(803) 575-0564</b>
              <span>Talk to a real person in Camden.</span>
            </a>
            <div className="contact-card" style={{ "--cc": "var(--g-blue)" }}>
              <span className="contact-kicker">Email us</span>
              <EmailChooser className="contact-email" email="support@sliker.com">support@sliker.com</EmailChooser>
              <span>We’ll get back to you quickly.</span>
            </div>
            <div className="contact-card" style={{ "--cc": "var(--g-green)" }}>
              <span className="contact-kicker">Visit our Camden office</span>
              <b>537 E DeKalb St<br />Camden, SC 29020</b>
              <span>Mailing address: PO Box 515, Camden, SC 29021</span>
              <a className="contact-link" href={MAPS} target="_blank" rel="noopener noreferrer">Get directions ↗</a>
            </div>
          </div>

          <div className="form-card">
            <h2>Request a free consultation</h2>
            <iframe
              className="contact-embed"
              src="https://api.leadconnectorhq.com/widget/form/5nokjoO3gRGvKz8wqit8"
              title="Broadstreet consultation request form"
              loading="lazy"
            ></iframe>
            <p className="form-note">
              If the form doesn’t load, <EmailChooser email="support@sliker.com">email support@sliker.com</EmailChooser> or
              call us directly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
