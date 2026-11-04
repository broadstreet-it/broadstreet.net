import { Link } from "react-router";
import { pageSeo } from "../lib/seo";
import { TEAM, teamBySlug } from "../data/team";
import { PageHero, SectionHead } from "./ui";
import EmailChooser from "./EmailChooser";

export const staffMeta = (slug) => {
  const m = teamBySlug[slug];
  const description = m.description || (m.about[0].length > 155 ? m.bio : m.about[0]);
  return pageSeo({
    path: m.to,
    title: `${m.name}, ${m.title} | Broadstreet.net`,
    description,
    crumbs: [{ name: "Our Team", path: "/staff/" }, { name: m.name, path: m.to }],
    extra:
      slug === "buster"
        ? []
        : [
            {
              "@type": "Person",
              name: m.name,
              jobTitle: m.title,
              image: `https://broadstreet.net${m.photo.src}`,
              url: `https://broadstreet.net${m.to}`,
              worksFor: { "@id": "https://broadstreet.net/#organization" },
              ...(m.links.length ? { sameAs: m.links.map(([, href]) => href) } : {}),
            },
          ],
  });
};

/** Profile page for one team member. */
export default function StaffProfile({ slug }) {
  const m = teamBySlug[slug];
  const first = m.name.split(" ")[0];
  const others = TEAM.filter((x) => x.slug !== slug);

  return (
    <div style={{ "--accent": m.color }}>
      <PageHero
        crumbs={[{ name: "Our Team", to: "/staff/" }, { name: m.name }]}
        label={m.title}
        title={m.name}
        lede={m.bio}
        actions={
          <>
            {m.emailUser ? (
              <EmailChooser className="button btn-yellow" user={m.emailUser}>Email {first}</EmailChooser>
            ) : (
              <Link className="button btn-yellow" to="/contact/">Contact us</Link>
            )}
            <a className="button secondary" href="tel:+18035750564">Call (803) 575-0564</a>
          </>
        }
      />

      <section className="section">
        <div className="wrap profile-grid">
          <aside className="profile-card" style={{ "--mc": m.color }}>
            <div className="profile-photo">
              <img src={m.photo.src} alt={m.name} width={m.photo.width} height={m.photo.height} decoding="async" />
            </div>
            <div className="profile-card-body">
              <h2>{m.name}</h2>
              <span className="member-title">{m.title}</span>
              {m.emailUser && <EmailChooser className="profile-email" user={m.emailUser}>✉ Email {first}</EmailChooser>}
              {m.links.length > 0 && (
                <div className="profile-social">
                  {m.links.map(([label, href]) => (
                    <a key={href} href={href} target="_blank" rel="noopener noreferrer">{label} ↗</a>
                  ))}
                </div>
              )}
            </div>
          </aside>

          <article className="article-content profile-story">
            <span className="label" style={{ "--lc": "var(--blue)" }}>About {first}</span>
            {m.about.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
            {m.more && (
              <p><Link to={m.more.to}>{m.more.text} →</Link></p>
            )}
            {m.gallery && (
              <div className="profile-gallery">
                {m.gallery.map((src) => (
                  <img key={src} src={src} alt={`${m.name}`} width="400" height="400" loading="lazy" decoding="async" />
                ))}
              </div>
            )}
          </article>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <SectionHead
            label="Our team"
            labelColor="var(--g-yellow)"
            title="Meet the rest of the team"
            lede={<Link to="/staff/" style={{ color: "var(--g-yellow)", fontWeight: 700 }}>See the whole team →</Link>}
          />
          <div className="team-grid team-grid-6">
            {others.map((o) => (
              <Link className="member-card" key={o.slug} to={o.to} style={{ "--mc": o.color }}>
                <span className="member-photo"><img src={o.photo.src} alt="" width={o.photo.width} height={o.photo.height} loading="lazy" decoding="async" /></span>
                <span className="member-body">
                  <b className="member-name">{o.name}</b>
                  <span className="member-title">{o.title}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
