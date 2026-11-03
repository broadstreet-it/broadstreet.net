import { Link } from "react-router";
import { pageSeo } from "../lib/seo";
import { PageHero } from "../components/ui";

const PATH = "/downloads/";

export const meta = () =>
  pageSeo({
    path: PATH,
    title: "Web Success Downloads: Worksheets & Strategy Charts | Broadstreet",
    description: "Free downloads for The 9 Essentials of Web Success: worksheets, strategy charts and the Broadstreet one-page brochure. No sign-up needed.",
    crumbs: [{ name: "Web Success", path: "/web-success/" }, { name: "Downloads", path: PATH }],
  });

const FILES = [
  {
    title: "Web Success Worksheets",
    text: "The worksheets for The 9 Essentials of Web Success, including the Web Success Strategy Charts.",
    href: "/assets/files/WebSuccessWorksheets.zip",
    meta: "ZIP · 2.8 MB",
    c: "var(--g-blue)",
  },
  {
    title: "Web Success Strategy Charts",
    text: "Just the strategy charts, as a single PDF.",
    href: "/assets/files/0-WebSuccessStrategy.pdf",
    meta: "PDF · 1.1 MB",
    c: "var(--g-red)",
  },
  {
    title: "Broadstreet one-page brochure",
    text: "A one-page overview of Broadstreet and what we do.",
    href: "/assets/files/Broadstreet-00-One-Pager.pdf",
    meta: "PDF · 0.2 MB",
    c: "#1E8E3E",
  },
];

export default function Downloads() {
  return (
    <div style={{ "--accent": "var(--g-yellow)" }}>
      <PageHero
        crumbs={[{ name: "Web Success", to: "/web-success/" }, { name: "Downloads" }]}
        label="Web Success downloads"
        title={<>Free worksheets &amp; <span className="c-yellow">strategy charts</span></>}
        lede="Download the tools that go with The 9 Essentials of Web Success. No sign-up needed."
        actions={
          <>
            <Link className="button btn-yellow" to="/web-success-videos/">Watch the videos</Link>
            <Link className="button secondary" to="/web-success/">About Web Success</Link>
          </>
        }
      />

      <section className="section">
        <div className="wrap dl-grid">
          {FILES.map((f) => (
            <a className="dl-card" key={f.href} href={f.href} download style={{ "--dc": f.c }}>
              <b>{f.title}</b>
              <span>{f.text}</span>
              <span className="dl-meta">⬇ Download · {f.meta}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
