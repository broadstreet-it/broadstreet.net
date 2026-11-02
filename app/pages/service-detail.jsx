import { Link, useLocation } from "react-router";
import { faqNode, pageSeo, serviceNode } from "../lib/seo";
import { Facts, Faq, PageHero, Related, SectionHead, Steps } from "../components/ui";
import { DRAFT, GROUP_INFO, SERVICE_DETAILS } from "../data/serviceDetails";

// One page per service item. app/routes.js maps each path in SERVICE_DETAILS to this file.

const withSlash = (p) => (p.endsWith("/") ? p : `${p}/`);

export const meta = ({ location }) => {
  const path = withSlash(location.pathname);
  const s = SERVICE_DETAILS[path];
  if (!s) return [];
  const g = GROUP_INFO[s.group];
  return pageSeo({
    path,
    title: s.title,
    description: s.description,
    crumbs: [
      { name: "Services", path: "/services/" },
      { name: g.name, path: g.to },
      { name: s.name, path },
    ],
    extra: [serviceNode(s.name, path, s.description), faqNode(s.faq)],
  });
};

function siblings(path, s) {
  return Object.entries(SERVICE_DETAILS)
    .filter(([p, o]) => p !== path && (o.group === s.group || o.alsoGroup === s.group))
    .slice(0, 3)
    .map(([p, o]) => ({ to: p, color: GROUP_INFO[s.group].accent, title: o.name, text: o.lede.split(". ")[0] + ".", cta: "Learn more" }));
}

export default function ServiceDetail() {
  const { pathname } = useLocation();
  const path = withSlash(pathname);
  const s = SERVICE_DETAILS[path];
  if (!s) return null;
  const g = GROUP_INFO[s.group];

  return (
    <div style={{ "--accent": g.accent }}>
      <PageHero
        crumbs={[{ name: "Services", to: "/services/" }, { name: g.name, to: g.to }, { name: s.name }]}
        label={`${g.name} · ${s.name}`}
        title={s.h1}
        lede={s.lede}
      />
      <Facts items={s.facts} />

      <section className="section">
        <div className="wrap detail-grid">
          <div>
            <SectionHead label="What’s included" title={<>What you <span className="accent">get</span></>} />
            <ul className="checks detail-checks">{s.included.map((i) => <li key={i}>{i}</li>)}</ul>
            <p className="draft">{DRAFT}</p>
          </div>
          <aside className="side detail-side">
            <span className="label" style={{ "--lc": "var(--g-yellow)" }}>Free consultation</span>
            <h3>Is {s.name.toLowerCase()} right for you?</h3>
            <p>Tell us about your business. We’ll tell you plainly whether this will help and what it would take.</p>
            <Link to="/contact/">Book a free consultation →</Link>
            <a href="tel:+18035750564">Call (803) 575-0564 →</a>
          </aside>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <SectionHead label="Why it matters" labelColor="var(--g-yellow)" title="How it helps your business" />
          <div className="why-grid">
            {s.why.map(([t, p], i) => (
              <div className="why" key={t} style={{ "--wc": ["var(--g-blue)", "var(--g-red)", "var(--g-green)"][i % 3] }}>
                <h3>{t}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead label="How it works" title="What to expect" />
          <Steps items={s.steps} />
        </div>
      </section>

      <section className="section alt" id="faq">
        <div className="wrap">
          <SectionHead label="Questions" title="Common questions" />
          <Faq items={s.faq} />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead
            label={`More in ${g.name}`}
            labelColor="var(--g-green)"
            title="Related services"
            lede={<Link to={g.to} style={{ color: "var(--g-yellow)", fontWeight: 700 }}>See everything in {g.name} →</Link>}
          />
          <Related items={siblings(path, s)} />
        </div>
      </section>
    </div>
  );
}
