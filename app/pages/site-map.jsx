import { Link } from "react-router";
import { pageSeo } from "../lib/seo";
import { AREAS, PageHero } from "../components/ui";
import { SERVICE_MENU } from "../components/Header";
import { TEAM } from "../data/team";
import { PORTFOLIO } from "../data/portfolio";
import { BLOG_POSTS } from "../data/blog";
import { VIDEO_REVIEWS } from "../data/reviews";

// Built from the site's own data, so it stays current as pages are added.

export const meta = () =>
  pageSeo({
    path: "/site-map/",
    title: "Site Map | Broadstreet",
    description: "Every page on the Broadstreet website: services, service areas, our work, our team, client stories and the blog.",
    crumbs: [{ name: "Site map", path: "/site-map/" }],
  });

const ABOUT = "/about-broadstreet-consulting-camden-scs-trusted-digital-marketing-partner/";

const GROUPS = [
  {
    title: "Broadstreet",
    c: "var(--g-yellow)",
    links: [
      ["/", "Home"],
      [ABOUT, "About us"],
      ["/broadstreet-consulting-google-partners-google-adwords-certified/", "Google Partner"],
      ["/what-our-clients-are-saying/", "Reviews"],
      ["/contact/", "Contact"],
      ["/book-now/", "Book a call"],
      ["/search/", "Search"],
    ],
  },
  {
    title: "Services",
    c: "var(--g-blue)",
    links: [
      ["/services/", "All services"],
      ...SERVICE_MENU.flatMap((g) => [...(g.to ? [[g.to, g.title]] : []), ...g.items.map(([name, to]) => [to, name])]),
    ],
  },
  {
    title: "Web Success",
    c: "var(--g-red)",
    links: [
      ["/web-success/", "Web Success"],
      ["/web-success-videos/", "Web Success videos"],
      ["/downloads/", "Downloads"],
    ],
  },
  {
    title: "Service areas",
    c: "var(--g-green)",
    links: [["/camden-sc/", "Camden, SC"], ["/lancaster-sc/", "Lancaster, SC"], ...AREAS.map((a) => [`/${a.slug}/`, `${a.name}, ${a.st}`])],
  },
  {
    title: "Our team",
    c: "var(--gold)",
    links: [
      ["/staff/", "Meet the team"],
      ...TEAM.map((m) => [m.to, m.name]),
      ["/tom-sliker-technical-expert-digital-marketing-social-media-google-seo-search-marketing/", "Tom Sliker in the media"],
    ],
  },
  {
    title: "Our work",
    c: "var(--orange)",
    links: [["/portfolio/", "Portfolio"], ...PORTFOLIO.map((p) => [`/portfolio/${p.slug}/`, p.name])],
  },
  {
    title: "Client stories",
    c: "var(--g-blue)",
    links: VIDEO_REVIEWS.map((v) => [v.story, v.who]),
  },
];

function Group({ title, c, links, wide }) {
  const unique = links.filter(([to], i) => links.findIndex(([t]) => t === to) === i);
  return (
    <section className={`sitemap-group${wide ? " wide" : ""}`} style={{ "--sc": c }}>
      <h2>{title}</h2>
      <ul>{unique.map(([to, name]) => <li key={to}><Link to={to}>{name}</Link></li>)}</ul>
    </section>
  );
}

export default function SiteMap() {
  return (
    <div style={{ "--accent": "var(--g-green)" }}>
      <PageHero
        crumbs={[{ name: "Site map" }]}
        label="Site map"
        title={<>Every page, <span className="c-yellow">in one place</span></>}
        lede="Browse everything on the Broadstreet website, or search for something specific."
        actions={<Link className="button btn-yellow" to="/search/">Search the site</Link>}
      />

      <section className="section">
        <div className="wrap sitemap-cols">
          {GROUPS.map((g) => <Group key={g.title} {...g} />)}
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <Group
            wide
            title={`Blog (${BLOG_POSTS.length} posts)`}
            c="var(--g-red)"
            links={[["/blogs/", "All blog posts"], ...BLOG_POSTS.map((p) => [`/blog/${p.slug}/`, p.title])]}
          />
        </div>
      </section>
    </div>
  );
}
