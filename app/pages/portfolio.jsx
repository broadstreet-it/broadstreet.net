import { useState } from "react";
import { Link } from "react-router";
import { pageSeo } from "../lib/seo";
import { PageHero, SectionHead } from "../components/ui";
import { WorkCard } from "../components/CaseStudy";
import { PORTFOLIO } from "../data/portfolio";

const TITLE = "Website Design Portfolio & Client Stories | Broadstreet.net";
const DESCRIPTION =
  "Explore Broadstreet.net’s website portfolio and client stories, from local service businesses to online retailers, nonprofits, schools and towns across the Carolinas.";

export const meta = () =>
  pageSeo({
    path: "/portfolio/",
    title: TITLE,
    description: DESCRIPTION,
    crumbs: [{ name: "Our Work", path: "/portfolio/" }],
    extra: [
      {
        "@type": "ItemList",
        name: "Broadstreet.net portfolio",
        itemListElement: PORTFOLIO.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: p.name,
          url: `https://broadstreet.net/portfolio/${p.slug}/`,
        })),
      },
    ],
  });

const FILTERS = ["All", "SEO", "Online store", "Social media", "Google Ads", "Drupal development"];

const STORIES = [
  { to: "/powers-gregory-staying-connected-customers/", small: "Powers & Gregory", title: "Staying connected", c: "#1E8E3E" },
  { to: "/wings-international-adventures/", small: "Wings", title: "International adventures", c: "var(--blue)" },
  { to: "/kershaw-county-council-aging-testimonial/", small: "Kershaw County Council on Aging", title: "Serving the community", c: "var(--g-red)" },
  { to: "/fj-rabon-testimonial/", small: "FJ Rabon", title: "Client testimonial", c: "var(--orange)" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.services.some(([s]) => s === filter));

  return (
    <div style={{ "--accent": "var(--g-red)" }}>
      <PageHero
        crumbs={[{ name: "Our Work" }]}
        label="Our work"
        title={<>Good work. <span className="c-red">Lasting relationships.</span></>}
        lede="Websites, search and marketing for local service businesses, online retailers, nonprofits, schools and towns across the Carolinas and beyond. Open any project to see the full story."
        actions={false}
      />

      <section className="section">
        <div className="wrap">
          <div className="work-filters" role="group" aria-label="Filter projects by service">
            {FILTERS.map((f) => (
              <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}>
                {f}
              </button>
            ))}
            <span className="work-count" aria-live="polite">{shown.length} projects</span>
          </div>
          <div className="work-grid">
            {shown.map((p) => <WorkCard key={p.slug} p={p} />)}
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
    </div>
  );
}
