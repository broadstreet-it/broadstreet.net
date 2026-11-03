import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { pageSeo } from "../lib/seo";
import { PageHero, SectionHead } from "../components/ui";
import { CLIENT_REVIEWS } from "../data/reviews";

const TITLE = "Client Reviews & Testimonials | Broadstreet";
const DESCRIPTION =
  "Hear from Broadstreet clients about website development, responsive support, online visibility, and business growth. Explore their reviews and testimonials.";

export const meta = () =>
  pageSeo({
    path: "/what-our-clients-are-saying/",
    title: TITLE,
    description: DESCRIPTION,
    crumbs: [{ name: "Reviews", path: "/what-our-clients-are-saying/" }],
  });

const GOOGLE_REVIEWS = "https://share.google/1NhuaGRKBP359VyvA";

const STORIES = [
  { to: "/powers-gregory-staying-connected-customers/", small: "Powers & Gregory", title: "Staying connected", c: "#1E8E3E" },
  { to: "/wings-international-adventures/", small: "Wings", title: "International adventures", c: "var(--blue)" },
  { to: "/kershaw-county-council-aging-testimonial/", small: "Kershaw County Council on Aging", title: "Serving the community", c: "var(--g-red)" },
  { to: "/fj-rabon-testimonial/", small: "FJ Rabon", title: "Client testimonial", c: "var(--orange)" },
];

/** Full review in a modal dialog. */
function ReviewDialog({ review, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const d = ref.current;
    if (review && !d.open) d.showModal();
    if (!review && d.open) d.close();
  }, [review]);

  return (
    <dialog
      ref={ref}
      className="review-dialog"
      aria-labelledby="review-dialog-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose(); // click on the backdrop
      }}
      style={review ? { "--rc": review.c } : undefined}
    >
      {review && (
        <div className="review-dialog-inner">
          <span className="stars" aria-label="Five stars">★★★★★</span>
          <h2 id="review-dialog-title">“{review.headline}”</h2>
          {review.full?.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
          <p className="review-who">
            {review.who}
            <small>{review.biz}</small>
          </p>
          <button type="button" className="review-close" onClick={onClose} aria-label="Close review">×</button>
        </div>
      )}
    </dialog>
  );
}

export default function WhatOurClientsAreSaying() {
  const [open, setOpen] = useState(null);

  return (
    <div style={{ "--accent": "var(--g-yellow)" }}>
      <PageHero
        crumbs={[{ name: "Reviews" }]}
        label="Client reviews"
        title={<>Our clients tell the story <span className="c-yellow">best</span></>}
        lede="Rated 5.0 stars on Google. Hear from Broadstreet clients about website development, responsive support, online visibility and business growth. Tap any review to read it in full."
        actions={
          <>
            <Link className="button btn-yellow" to="/contact/">Start your success story</Link>
            <a className="button secondary" href={GOOGLE_REVIEWS} target="_blank" rel="noopener noreferrer">See our Google reviews ↗</a>
          </>
        }
      />

      <section className="section">
        <div className="wrap">
          <div className="review-masonry">
            {CLIENT_REVIEWS.map((r) => (
              <button
                type="button"
                key={r.who}
                className={`rv-card${r.dark ? " dark" : ""}`}
                style={{ "--rc": r.c }}
                onClick={() => setOpen(r)}
                aria-haspopup="dialog"
              >
                <span className="stars" aria-hidden="true">★★★★★</span>
                <span className="review-headline">“{r.headline}”</span>
                {r.excerpt && <span className="review-excerpt">{r.excerpt}</span>}
                <span className="review-who">
                  {r.who}
                  <small>{r.biz}</small>
                </span>
                {r.full && <span className="review-more">Read full review →</span>}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <SectionHead label="Client stories" labelColor="var(--g-yellow)" title="Results in their own words" />
          <div className="cases cases-4">
            {STORIES.map((s) => (
              <Link className="case" key={s.to} to={s.to} style={{ "--cc": s.c }}>
                <small>{s.small}</small>
                <h3>{s.title}</h3>
                <span className="more">Read the story →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ReviewDialog review={open} onClose={() => setOpen(null)} />
    </div>
  );
}
