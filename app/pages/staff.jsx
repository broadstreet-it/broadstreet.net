import { Link } from "react-router";
import { pageSeo } from "../lib/seo";
import { Facts, PageHero, SectionHead } from "../components/ui";
import { TEAM } from "../data/team";

const TITLE = "Our Team | Broadstreet.net, Camden, SC";
const DESCRIPTION =
  "Meet the Broadstreet.net team in Camden, SC: the people behind our website design, development, content and digital marketing for businesses across the Carolinas.";

export const meta = () =>
  pageSeo({
    path: "/staff/",
    title: TITLE,
    description: DESCRIPTION,
    crumbs: [{ name: "Our Team", path: "/staff/" }],
    extra: TEAM.filter((m) => m.name !== "Buster").map((m) => ({
      "@type": "Person",
      name: m.name,
      jobTitle: m.title,
      image: `https://broadstreet.net${m.photo.src}`,
      url: `https://broadstreet.net${m.to}`,
      worksFor: { "@id": "https://broadstreet.net/#organization" },
    })),
  });

export default function Staff() {
  return (
    <div style={{ "--accent": "var(--g-yellow)" }}>
      <PageHero
        crumbs={[{ name: "Our Team" }]}
        label="Our team"
        title={<>People you can <span className="c-yellow">count on</span></>}
        lede="We’re a small team in Camden, SC. When you call Broadstreet, you talk to the people who design, build and market your website."
      />
      <Facts
        items={[
          ["Local team", "Based in Camden, SC"],
          ["Since 2010", "Helping clients succeed online"],
          ["In-house", "Design, development & marketing"],
          ["1 office dog", "Buster says hi"],
        ]}
      />

      <section className="section">
        <div className="wrap">
          <SectionHead label="Meet the team" title={<>The people behind <span className="c-yellow">your website</span></>} />
          <div className="team-grid">
            {TEAM.map((m) => (
              <article className="member-card" key={m.name} style={{ "--mc": m.color }}>
                <Link to={m.to} className="member-photo" tabIndex={-1} aria-hidden="true">
                  <img src={m.photo.src} alt="" width={m.photo.width} height={m.photo.height} loading="lazy" decoding="async" />
                </Link>
                <div className="member-body">
                  <h3><Link to={m.to}>{m.name}</Link></h3>
                  <span className="member-title">{m.title}</span>
                  <p>{m.bio}</p>
                  {m.email && <a className="member-email" href={`mailto:${m.email}`}>{m.email}</a>}
                  <div className="member-links">
                    <Link to={m.to}>Read more →</Link>
                    {m.links.map(([label, href]) => (
                      <a key={href} href={href} target="_blank" rel="noopener noreferrer">{label}</a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
            <article className="member-card say-hi">
              <h3>Come say hi</h3>
              <p>Stop by the office at 537 E DeKalb St in Camden, or give us a call. Buster will probably meet you at the door.</p>
              <Link className="button btn-yellow" to="/contact/">Contact us</Link>
              <a href="tel:+18035750564" style={{ color: "#fff", fontWeight: 700 }}>(803) 575-0564</a>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
