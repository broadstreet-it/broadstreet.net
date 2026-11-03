import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { pageSeo } from "../lib/seo";
import { PageHero } from "../components/ui";
import { CLIENT_REVIEWS, VIDEO_REVIEWS } from "../data/reviews";

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

// Tile colors, assigned by position. Tiles fill three columns left to right, so side-by-side
// neighbors are 1 apart and stacked neighbors 3 apart; with 7 colors neither ever repeats.
const PALETTE = [
  { c: "#1A66A8" },
  { c: "#C5221F" },
  { c: "#FBBC05", dark: true },
  { c: "#1E8E3E" },
  { c: "#C2410C" },
  { c: "#0B3561" },
  { c: "#E8A400", dark: true },
];
const COLUMNS = 3;

// Written reviews with a video every few tiles.
const TILES = (() => {
  const tiles = CLIENT_REVIEWS.map((r) => ({ ...r, key: r.who }));
  VIDEO_REVIEWS.forEach((v, i) => tiles.splice(1 + i * 5, 0, { ...v, key: v.youtube }));
  return tiles.map((t, i) => ({ ...t, ...PALETTE[i % PALETTE.length], order: i }));
})();

/** Full review or video in a modal dialog. */
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
      className={`review-dialog${review?.youtube ? " video" : ""}`}
      aria-labelledby="review-dialog-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose(); // click on the backdrop
      }}
      style={review ? { "--rc": review.c } : undefined}
    >
      {review?.youtube && (
        <div className="review-dialog-inner">
          <div className="review-video">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${review.youtube}?autoplay=1&rel=0`}
              title={review.title}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          </div>
          <h2 id="review-dialog-title">{review.title}</h2>
          <p className="review-who">
            {review.who}
            <small>{review.biz}</small>
          </p>
          <Link className="review-story" to={review.story} onClick={onClose}>Read the full story →</Link>
          <button type="button" className="review-close" onClick={onClose} aria-label="Close video">×</button>
        </div>
      )}
      {review && !review.youtube && (
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

function Tile({ t, onOpen }) {
  const cls = `rv-card${t.dark ? " dark" : ""}${t.youtube ? " video" : ""}`;
  return (
    <button type="button" className={cls} style={{ "--rc": t.c, order: t.order }} onClick={() => onOpen(t)} aria-haspopup="dialog">
      {t.youtube ? (
        <>
          <span className="rv-thumb">
            <img src={t.thumb} alt="" width="960" height="540" loading="lazy" decoding="async" />
            <span className="rv-play" aria-hidden="true">▶</span>
          </span>
          <span className="rv-kicker">Video testimonial</span>
          <span className="review-headline">{t.who}</span>
          <span className="review-who"><small>{t.biz}</small></span>
          <span className="review-more">▶ Watch the video</span>
        </>
      ) : (
        <>
          <span className="stars" aria-hidden="true">★★★★★</span>
          <span className="review-headline">“{t.headline}”</span>
          {t.excerpt && <span className="review-excerpt">{t.excerpt}</span>}
          <span className="review-who">
            {t.who}
            <small>{t.biz}</small>
          </span>
          {t.full && <span className="review-more">Read full review →</span>}
        </>
      )}
    </button>
  );
}

export default function WhatOurClientsAreSaying() {
  const [open, setOpen] = useState(null);
  const columns = Array.from({ length: COLUMNS }, (_, c) => TILES.filter((t) => t.order % COLUMNS === c));

  return (
    <div style={{ "--accent": "var(--g-yellow)" }}>
      <PageHero
        crumbs={[{ name: "Reviews" }]}
        label="Client reviews"
        title={<>Our clients tell the story <span className="c-yellow">best</span></>}
        lede="Rated 5.0 stars on Google. Hear from Broadstreet clients about website development, responsive support, online visibility and business growth. Tap any review to read it in full, or any video to watch it."
        actions={
          <>
            <Link className="button btn-yellow" to="/contact/">Start your success story</Link>
            <a className="button secondary" href={GOOGLE_REVIEWS} target="_blank" rel="noopener noreferrer">See our Google reviews ↗</a>
          </>
        }
      />

      <section className="section">
        <div className="wrap">
          {/* On phones the columns dissolve (display: contents) and `order` restores reading order. */}
          <div className="review-masonry">
            {columns.map((col, c) => (
              <div className="rv-col" key={c}>
                {col.map((t) => <Tile key={t.key} t={t} onOpen={setOpen} />)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewDialog review={open} onClose={() => setOpen(null)} />
    </div>
  );
}
