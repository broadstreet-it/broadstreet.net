import { Link } from "react-router";
import { Blocks, Facts, Faq, PageHero, Proof, Related, SectionHead, Steps } from "./ui";

/** One white card per service in a group; each opens that service's own page. */
function ServiceCards({ items }) {
  return (
    <div className="svc-grid svc-grid-2">
      {items.map((b) => (
        <article className="svc" key={b.id} style={{ "--c": b.color }}>
          <span className="label" style={{ "--lc": b.color, margin: 0 }}>{b.label}</span>
          <h3><Link to={b.link.to}>{b.title}</Link></h3>
          <p>{b.text}</p>
          <ul>{b.items.slice(0, 4).map((i) => <li key={i}>{i}</li>)}</ul>
          <Link className="more" to={b.link.to} aria-label={`Learn more about ${b.label}`}>Learn more →</Link>
        </article>
      ))}
    </div>
  );
}

/**
 * Layout shared by the service pages: hero, color facts, services (as cards linking to their
 * own pages when page.cards is set, otherwise feature blocks), steps, proof, FAQ and related.
 * `children` renders after the facts strip.
 */
export default function ServicePage({ page, children }) {
  return (
    <div style={{ "--accent": page.accent }}>
      <PageHero
        crumbs={[{ name: "Services", to: "/services/" }, { name: page.name }]}
        label={page.label}
        title={page.title}
        lede={page.lede}
        actions={page.actions}
        jump={page.jump}
      />
      <Facts items={page.facts} />
      {children}
      <section className="section">
        <div className="wrap">
          <SectionHead label={page.blocksLabel || "What we do"} title={page.blocksTitle} />
          {page.cards ? <ServiceCards items={page.blocks} /> : <Blocks items={page.blocks} />}
        </div>
      </section>
      <section className="section alt">
        <div className="wrap">
          <SectionHead label="How it works" labelColor="var(--g-yellow)" title={page.stepsTitle} />
          <Steps items={page.steps} />
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <Proof {...page.proof} />
        </div>
      </section>
      <section className="section alt" id="faq">
        <div className="wrap">
          <SectionHead label="Questions" title="Common questions" />
          <Faq items={page.faq} />
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <SectionHead label="Related services" labelColor="var(--g-green)" title="Pairs well with" />
          <Related items={page.related} />
        </div>
      </section>
    </div>
  );
}
