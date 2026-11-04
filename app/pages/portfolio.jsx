import { useState } from "react";
import { pageSeo } from "../lib/seo";
import { PageHero } from "../components/ui";
import { WorkCard } from "../components/CaseStudy";
import { PORTFOLIO } from "../data/portfolio";

const TITLE = "Website Design Portfolio & Client Stories | Broadstreet.net";
const DESCRIPTION =
  "Explore Broadstreet.net’s website portfolio and client stories, from local service businesses to online stores, nonprofits, schools and towns.";

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
    </div>
  );
}
