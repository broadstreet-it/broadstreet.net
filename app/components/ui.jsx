import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { ITEM_LINKS } from "../data/servicePaths";

// Shared building blocks for the redesigned pages.

/** Inner page hero. crumbs: [{name, to}] after Home; the last one is the current page (no link). */
export function PageHero({ crumbs = [], label, title, lede, actions, jump }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <ol className="breadcrumbs" aria-label="Breadcrumb">
          <li><Link to="/">Home</Link></li>
          {crumbs.map((c, i) =>
            i === crumbs.length - 1 ? (
              <li key={c.name} aria-current="page">{c.name}</li>
            ) : (
              <li key={c.name}><Link to={c.to}>{c.name}</Link></li>
            ),
          )}
        </ol>
        {label && <span className="label">{label}</span>}
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
        {actions !== false && (
          <div className="actions">
            {actions || (
              <>
                <Link className="button btn-yellow" to="/contact/">Get a free consultation</Link>
                <a className="button secondary" href="tel:+18035750564">Call (803) 575-0564</a>
              </>
            )}
          </div>
        )}
        {jump && (
          <nav className="jump" aria-label="On this page">
            {jump.map(([id, text]) => <a key={id} href={`#${id}`}>{text}</a>)}
          </nav>
        )}
      </div>
    </section>
  );
}

/** Four-color strip: items = [[big, small], ...] (4 items). */
export function Facts({ items }) {
  return (
    <div className="facts">
      {items.map(([b, s]) => (
        <div className="fact" key={b}><b>{b}</b><span>{s}</span></div>
      ))}
    </div>
  );
}

export function SectionHead({ label, labelColor, title, lede }) {
  return (
    <div className="head">
      {label && <span className="label" style={labelColor ? { "--lc": labelColor } : undefined}>{label}</span>}
      <h2>{title}</h2>
      {lede && <p className="lede">{lede}</p>}
    </div>
  );
}

/** Detail blocks: [{id, color, label, title, text, listTitle, items}] */
export function Blocks({ items, note }) {
  return (
    <>
      <div className="blocks">
        {items.map((b) => (
          <article className="block" id={b.id} key={b.id} style={{ "--bc": b.color }}>
            <div>
              <span className="label">{b.label}</span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
              {b.link && <p><Link to={b.link.to} style={{ color: b.color, fontWeight: 700 }}>{b.link.text} →</Link></p>}
            </div>
            <div>
              <h4>{b.listTitle || "What’s included"}</h4>
              <ul className="checks">{b.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
      {note && <p className="draft">{note}</p>}
    </>
  );
}

const STEP_COLORS = ["var(--g-blue)", "var(--g-red)", "var(--g-yellow)", "var(--g-green)"];

/** Four numbered steps: [[title, text], ...] */
export function Steps({ items }) {
  return (
    <div className="steps">
      {items.map(([t, p], i) => (
        <div className="step" key={t} style={{ "--sc": STEP_COLORS[i % 4] }}>
          <span className="n">{String(i + 1).padStart(2, "0")}</span>
          <h3>{t}</h3>
          <p>{p}</p>
        </div>
      ))}
    </div>
  );
}

/** FAQ accordion: [{q, a}] */
export function Faq({ items, note }) {
  return (
    <>
      <div className="faq">
        {items.map(({ q, a }, i) => (
          <details key={q} open={i === 0}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
      {note && <p className="draft">{note}</p>}
    </>
  );
}

/** Related service cards: [{to, color, title, text, cta}] */
export function Related({ items }) {
  return (
    <div className="related">
      {items.map((r) => (
        <Link className="rel" to={r.to} key={r.to} style={{ "--rc": r.color }}>
          <h3>{r.title}</h3>
          <p>{r.text}</p>
          <span>{r.cta || `Explore ${r.title}`} →</span>
        </Link>
      ))}
    </div>
  );
}

export const RELATED = {
  getFound: { to: "/services/get-found/", color: "var(--g-blue)", title: "Get Found", text: "SEO and Google Ads bring new customers to you." },
  websites: { to: "/services/websites/", color: "var(--g-red)", title: "Websites", text: "Fast, mobile-friendly sites that turn visits into calls." },
  stay: { to: "/services/stay-connected/", color: "var(--g-yellow)", title: "Stay Connected", text: "Social media and email keep customers coming back." },
  grow: { to: "/services/grow/", color: "var(--g-green)", title: "Grow", text: "Monthly support, lead generation and training." },
  apps: { to: "/services/web-mobile-app-development/", color: "var(--g-blue)", title: "App Development", text: "Custom apps for your customers and your team." },
  bridges: { to: "/services/bridges-crm/", color: "var(--g-red)", title: "Bridges CRM", text: "Every lead in one place, with automatic follow-up." },
};

/** Big quote card with an optional side card. */
export function Proof({ quote, cite, label, color, side }) {
  return (
    <div className="proof">
      <figure className="big-quote" style={color ? { "--qc": color } : undefined}>
        {label && <span className="label" style={{ "--lc": "#E3ECF8" }}>{label}</span>}
        <blockquote>“{quote}”</blockquote>
        <cite>{cite}</cite>
      </figure>
      {side && (
        <div className="side">
          <span className="label" style={{ "--lc": "var(--g-yellow)" }}>{side.label}</span>
          <h3>{side.title}</h3>
          <p>{side.text}</p>
          <Link to={side.to}>{side.link} →</Link>
        </div>
      )}
    </div>
  );
}

export const REVIEWS = [
  { q: "When I text or email they respond almost immediately.", who: "Benji Glover", biz: "Thompson Rental Services", c: "var(--g-blue)" },
  { q: "We're acquiring new customers every week. Sales growth is strong.", who: "Larry Parker", biz: "CotDoc", c: "var(--g-red)" },
  { q: "We're over 100 years old, and our customers keep getting younger.", who: "Al Tyler", biz: "Tyler Brothers", c: "var(--g-yellow)", dark: true },
  { q: "They are great to work with and very knowledgeable about improving business exposure!", who: "Mindy Melinda", biz: "Home & Land Pros LLC", c: "#1E8E3E" },
  { q: "We are more than impressed with his ongoing assistance to keep us up to date.", who: "RWS", biz: "Powers & Gregory", c: "var(--blue)" },
  { q: "I highly recommend Broadstreet Consulting! Tom has been great to work with!", who: "Megan Tenley", biz: "Broadstreet client", c: "var(--orange)" },
];

/** Square that fades through client reviews every few seconds. */
export function ReviewRotator({ items = REVIEWS }) {
  const [i, setI] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => {
      if (!paused.current) setI((n) => (n + 1) % items.length);
    }, 5500);
    return () => clearInterval(t);
  }, [items.length]);

  const pause = () => { paused.current = true; };
  const resume = () => { paused.current = false; };

  return (
    <div
      className={`rotator${items[i].dark ? " dark-dots" : ""}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="More client reviews"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
    >
      {items.map((r, n) => (
        <figure
          key={r.who}
          className={`slide${n === i ? " on" : ""}`}
          style={{ "--sc": r.c, ...(r.dark ? { "--st": "#06182E" } : {}) }}
          aria-hidden={n !== i}
        >
          <span className="stars" aria-label="Five stars">★★★★★</span>
          <q>{r.q}</q>
          <figcaption>{r.who}<small>{r.biz}</small></figcaption>
        </figure>
      ))}
      <div className="rdots" role="group" aria-label="Choose a review">
        {items.map((r, n) => (
          <button
            key={r.who}
            type="button"
            aria-label={`Show review ${n + 1}`}
            aria-current={n === i}
            onClick={() => setI(n)}
          />
        ))}
      </div>
    </div>
  );
}

export const AREAS = [
  { slug: "web-design-columbia-sc", name: "Columbia", st: "SC", c: "var(--g-yellow)" },
  { slug: "web-design-lexington-sc", name: "Lexington", st: "SC", c: "var(--g-green)" },
  { slug: "web-design-sumter-sc", name: "Sumter", st: "SC", c: "var(--g-blue)" },
  { slug: "web-design-florence-sc", name: "Florence", st: "SC", c: "var(--g-red)" },
  { slug: "web-design-darlington-sc", name: "Darlington", st: "SC", c: "var(--g-yellow)" },
  { slug: "web-design-aiken-sc", name: "Aiken", st: "SC", c: "var(--g-green)" },
  { slug: "web-design-myrtle-beach-sc", name: "Myrtle Beach", st: "& the Grand Strand", c: "var(--g-blue)" },
  { slug: "web-design-charlotte-nc", name: "Charlotte", st: "NC", c: "var(--g-red)" },
];

export function AreaGrid({ current }) {
  return (
    <>
      <div className="area-grid">
        {AREAS.map((a) => (
          <Link
            className="area"
            key={a.slug}
            to={`/${a.slug}/`}
            style={{ "--c": a.c }}
            aria-current={a.slug === current ? "page" : undefined}
          >
            <b>{a.name}</b>
            <span>{a.st}</span>
          </Link>
        ))}
      </div>
    </>
  );
}

export const Icon = {
  search: (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="2.4" fill="none" /><path d="M15.5 15.5L21 21" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></svg>
  ),
  screen: (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2.2" fill="none" /><path d="M8 21h8M12 18v3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
  ),
  chat: (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinejoin="round" /></svg>
  ),
  grow: (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 18l6-6 4 4 6-8" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 8h5v5" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" /></svg>
  ),
  phone: (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="2.5" width="12" height="19" rx="2.5" stroke="currentColor" strokeWidth="2.2" fill="none" /><path d="M10.5 18.5h3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
  ),
  bridge: (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 17h20M4 17V11a8 8 0 0116 0v6M8 17v-4M12 17v-6M16 17v-4" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" /></svg>
  ),
};

/** The four core service groups as white cards. */
export const GROUPS = [
  { id: "get-found", to: "/services/get-found/", c: "var(--g-blue)", icon: "search", title: "Get Found", text: "Show up when nearby customers search on Google.", items: ["Search engine optimization", "Google Business Profile", "Google Ads management", "Monthly ranking reports"], more: "Learn more about search" },
  { id: "websites", to: "/services/websites/", c: "var(--g-red)", icon: "screen", title: "Websites", text: "Fast, mobile-friendly sites built to turn visits into calls.", items: ["Website design", "Online stores", "Drupal development", "Inventory & accounting links"], more: "Learn more about websites" },
  { id: "stay-connected", to: "/services/stay-connected/", c: "var(--gold)", icon: "chat", title: "Stay Connected", text: "Keep customers coming back between visits.", items: ["Social media marketing", "Email marketing", "Video & content creation", "Social advertising"], more: "Learn more about social" },
  { id: "grow", to: "/services/grow/", c: "var(--g-green)", icon: "grow", title: "Grow", text: "Ongoing support, new leads and training every month.", items: ["Monthly support plans", "Lead generation", "Strategy reviews & training", "Monthly reports"], more: "Learn more about support" },
];

export function ServiceGroups({ withIds = false }) {
  return (
    <div className="svc-grid">
      {GROUPS.map((g) => (
        <article className="svc" key={g.id} id={withIds ? g.id : undefined} style={{ "--c": g.c }}>
          <span className="ic">{Icon[g.icon]}</span>
          <h3>{g.title}</h3>
          <p>{g.text}</p>
          <ul>
            {g.items.map((i) => (
              <li key={i}>{ITEM_LINKS[i] ? <Link to={ITEM_LINKS[i]}>{i}</Link> : i}</li>
            ))}
          </ul>
          <Link className="more" to={g.to}>{g.more} →</Link>
        </article>
      ))}
    </div>
  );
}
