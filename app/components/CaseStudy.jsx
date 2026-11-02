import { Link } from "react-router";
import { pageSeo } from "../lib/seo";
import { PORTFOLIO, portfolioBySlug } from "../data/portfolio";
import { PageHero, SectionHead } from "./ui";

const domainOf = (url) => (url ? url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, "") : "");

export const caseStudyMeta = (slug) => {
  const p = portfolioBySlug[slug];
  const path = `/portfolio/${slug}/`;
  return pageSeo({
    path,
    title: `${p.name} | Client Story | Broadstreet.net`,
    description: p.description,
    crumbs: [{ name: "Our Work", path: "/portfolio/" }, { name: p.name, path }],
    extra: [
      {
        "@type": "CreativeWork",
        name: `${p.name} website`,
        about: p.name,
        ...(p.url ? { url: p.url } : {}),
        image: `https://broadstreet.net${p.image.src}`,
        creator: { "@id": "https://broadstreet.net/#organization" },
      },
    ],
  });
};

/** A site screenshot inside a browser-style frame. Tall screenshots scroll on hover. */
export function BrowserShot({ p, size = "large", eager = false }) {
  // Keep small screenshots near their real width so they don't get blown up and blurry.
  const narrow = size === "large" && p.image.width && p.image.width < 1000;
  return (
    <figure
      className={`browser browser-${size}`}
      style={narrow ? { maxWidth: Math.round(p.image.width * 1.6), marginInline: "auto" } : undefined}
    >
      <div className="browser-bar" aria-hidden="true">
        <i></i><i></i><i></i>
        <span>{domainOf(p.url) || p.name}</span>
      </div>
      <div className="browser-view">
        <img
          src={p.image.src}
          alt={size === "large" ? `${p.name} website designed by Broadstreet.net` : ""}
          width={p.image.width || undefined}
          height={p.image.height || undefined}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
        />
      </div>
    </figure>
  );
}

/** Layout for one portfolio entry. `children` is the client story. */
export default function CaseStudy({ slug, children }) {
  const p = portfolioBySlug[slug];
  const i = PORTFOLIO.findIndex((x) => x.slug === slug);
  const more = [1, 2, 3].map((n) => PORTFOLIO[(i + n) % PORTFOLIO.length]);

  return (
    <div style={{ "--accent": "var(--g-red)" }}>
      <PageHero
        crumbs={[{ name: "Our Work", to: "/portfolio/" }, { name: p.name }]}
        label="Client story"
        title={p.name}
        lede={p.description}
        actions={
          <>
            {p.url && (
              <a className="button btn-yellow" href={p.url} target="_blank" rel="noopener noreferrer">
                Visit the website ↗
              </a>
            )}
            <Link className="button secondary" to="/contact/">Start your project</Link>
          </>
        }
      />

      <section className="section showcase">
        <div className="wrap">
          <BrowserShot p={p} eager />
          <p className="showcase-note">Hover over the screenshot to scroll through the site.</p>
        </div>
      </section>

      <section className="section case-section">
        <div className="wrap case-grid">
          <article className="article-content case-story">
            <span className="label" style={{ "--lc": "var(--blue)" }}>The story</span>
            {children}
          </article>
          <aside className="case-details">
            <h2>Project details</h2>
            <dl>
              <dt>Client</dt>
              <dd>{p.name}</dd>
              {p.url && (
                <>
                  <dt>Website</dt>
                  <dd><a href={p.url} target="_blank" rel="noopener noreferrer">{domainOf(p.url)} ↗</a></dd>
                </>
              )}
              <dt>Services</dt>
              <dd className="chips">
                {p.services.map(([label, to]) => <Link key={to} to={to}>{label}</Link>)}
              </dd>
            </dl>
            <Link className="button btn-yellow" to="/contact/">Start a project like this</Link>
          </aside>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <SectionHead
            label="Our work"
            labelColor="var(--g-red)"
            title="More client stories"
            lede={<Link to="/portfolio/" style={{ color: "var(--g-yellow)", fontWeight: 700 }}>See the full portfolio →</Link>}
          />
          <div className="work-grid">
            {more.map((m) => <WorkCard key={m.slug} p={m} />)}
          </div>
        </div>
      </section>
    </div>
  );
}

/** Portfolio card used on the Our Work page and under each story. */
export function WorkCard({ p }) {
  return (
    <Link className="work-card" to={`/portfolio/${p.slug}/`}>
      <BrowserShot p={p} size="small" />
      <span className="work-card-body">
        <b>{p.name}</b>
        <span>{p.services.map((s) => s[0]).slice(0, 3).join(" · ")}</span>
      </span>
    </Link>
  );
}
