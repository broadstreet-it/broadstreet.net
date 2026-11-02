import { Blocks, Facts, Faq, PageHero, Proof, Related, SectionHead, Steps } from "./ui";

/**
 * Layout shared by the service pages: hero, color facts, detail blocks, steps,
 * proof, FAQ and related services. `children` renders after the facts strip.
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
          <Blocks items={page.blocks} note={page.blocksNote} />
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
          <Faq items={page.faq} note="Draft answers for the team to review before launch." />
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
