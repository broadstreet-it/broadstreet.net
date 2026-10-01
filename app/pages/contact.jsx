import { Link } from "react-router";
import { seo } from "../lib/seo";

export const meta = () =>
  seo({
    title: "Contact Broadstreet | Free Digital Marketing Consultation",
    description:
      "Schedule a free digital marketing consultation with Broadstreet in Camden, SC. Call 803-575-0564 to discuss your website, SEO, advertising, and business goals.",
    canonical: "https://broadstreet.net/contact/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/contact/#webpage",
        url: "https://broadstreet.net/contact/",
        name: "Contact Broadstreet | Free Digital Marketing Consultation",
        description:
          "Schedule a free digital marketing consultation with Broadstreet in Camden, SC. Call 803-575-0564 to discuss your website, SEO, advertising, and business goals.",
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
            name: "Let’s talk about your business.",
            item: "https://broadstreet.net/contact/",
          },
        ],
      },
    ],
  });

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Let’s talk about your business.
          </nav>
          <h1>Let’s talk about your business.</h1>
          <p className="lead">
            Schedule a free digital marketing consultation with Broadstreet in Camden, SC. Call
            803-575-0564 to discuss your website, SEO, advertising, and business goals.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap contact-grid">
          <div className="contact-details">
            <h2>Start a conversation.</h2>
            <p>Tell us about your business, your customers, and what you want to achieve.</p>
            <h3>Call us</h3>
            <a href="tel:+18035750564">(803) 575-0564</a>
            <h3>Email us</h3>
            <a href="mailto:support@sliker.com">support@sliker.com</a>
            <h3>Visit our Camden office</h3>
            <p>
              537 E DeKalb St
              <br />
              Camden, SC 29020
            </p>
            <p>
              Mailing address: PO Box 515
              <br />
              Camden, SC 29021
            </p>
          </div>
          <div>
            <h2>Request a free consultation</h2>
            <iframe
              className="contact-embed"
              src="https://api.leadconnectorhq.com/widget/form/5nokjoO3gRGvKz8wqit8"
              title="Broadstreet consultation request form"
              loading="lazy"
              style={{ width: "100%", height: "720px", border: "0" }}
            ></iframe>
            <p className="form-note">
              If the form doesn’t load,{" "}
              <a href="mailto:support@sliker.com">email support@sliker.com</a> or call us directly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
