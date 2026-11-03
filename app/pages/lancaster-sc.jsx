import { Link } from "react-router";
import { pageSeo, serviceNode } from "../lib/seo";
import { AreaGrid, PageHero, SectionHead, ServiceGroups } from "../components/ui";
import PhotoGrid from "../components/PhotoGrid";

const PATH = "/lancaster-sc/";
const TITLE = "Digital Marketing & SEO in Lancaster, SC | Broadstreet";
const DESCRIPTION =
  "Reach more customers in Lancaster, SC with Broadstreet’s website design, SEO, and paid advertising services. Start with a free digital marketing consultation.";

export const meta = () =>
  pageSeo({
    path: PATH,
    title: TITLE,
    description: DESCRIPTION,
    crumbs: [{ name: "Service Areas", path: "/#areas" }, { name: "Lancaster", path: PATH }],
    extra: [
      {
        ...serviceNode("Web design and digital marketing in Lancaster, SC", PATH, DESCRIPTION),
        areaServed: { "@type": "City", name: "Lancaster", containedInPlace: { "@type": "State", name: "South Carolina" } },
      },
    ],
  });

const SEARCHES = ["web design lancaster sc", "lancaster seo company", "google ads lancaster", "lancaster website developer", "indian land marketing"];
const img = (name, width, height) => ({ src: `/assets/media/places/${name}.webp`, width, height });

const PHOTOS = [
  {
    ...img("lancaster-mural", 1400, 787),
    alt: "Tom Sliker in front of a mural on Main Street in Lancaster",
    title: "Main Street",
    text: "Broadstreet founder and CEO Tom Sliker in front of a famous mural on Main Street.",
    c: "var(--g-red)",
  },
  {
    ...img("lancaster-punkys", 1400, 1050),
    alt: "Tom, John and Michaela having lunch at Punky’s on Main",
    title: "Lunch at Punky’s",
    text: "Tom, John and Michaela having lunch at Punky’s on Main.",
    c: "var(--g-yellow)",
  },
  {
    ...img("lancaster-golf-hole-7", 1400, 1050),
    alt: "Broadstreet.net sign at Hole 7, Lancaster Golf Club",
    title: "Lancaster Golf Club",
    text: "Broadstreet.net is proud to sponsor Hole 7 at the Lancaster Golf Club, the most iconic hole on the course.",
    c: "var(--g-green)",
  },
  {
    ...img("lancaster-chamber", 1400, 993),
    alt: "Tom Sliker with John and Jessica from the Lancaster County Chamber of Commerce",
    title: "Lancaster County Chamber of Commerce",
    text: "Tom with John and Jessica from the Lancaster County Chamber of Commerce.",
    c: "var(--g-blue)",
  },
  {
    ...img("lancaster-golf-tournament", 1400, 933),
    alt: "Danielle, Tiffany and John at the Rub of the Green Golf Tournament",
    title: "Rub of the Green",
    text: "Danielle, Tiffany and John at the Lancaster County Chamber of Commerce Rub of the Green Golf Tournament.",
    c: "var(--orange)",
  },
];

export default function LancasterSc() {
  return (
    <div style={{ "--accent": "var(--g-red)" }}>
      <PageHero
        crumbs={[{ name: "Service Areas", to: "/#areas" }, { name: "Lancaster" }]}
        label="Serving Lancaster, South Carolina"
        title={<>Helping <span className="accent">Lancaster</span> businesses grow online</>}
        lede="Reach more customers in Lancaster, SC with website design, SEO and paid advertising from a certified Google Partner team. Start with a free consultation."
      />

      <section className="section">
        <div className="wrap local">
          <div>
            <span className="label">Why Lancaster businesses call us</span>
            <h2>Local focus, <span className="accent">Lancaster results</span></h2>
            <p>
              Lancaster County has some of the fastest population growth in the Charlotte metro, and new residents find
              almost everything by searching on their phones. We help Lancaster businesses be the ones they find, through{" "}
              <Link to="/services/websites/">web development</Link>,{" "}
              <Link to="/services/search-engine-optimization-seo/">SEO</Link> and{" "}
              <Link to="/services/google-adwords-ppc-search-engine-marketing-consulting/">paid advertising</Link>.
            </p>
            <p>
              We opened a Lancaster office in 2023 and got to know the community through the Chamber, local events and lunch
              on Main Street. Today we serve Lancaster clients 100% remotely from our Camden office, with the same
              team and the same local focus. We’re a phone call or video chat away.
            </p>
          </div>
          <aside className="searches" aria-label="Example searches">
            <h3>Searches we help you win</h3>
            <p style={{ color: "var(--muted)" }}>When people in Lancaster search for what you do, you should be near the top.</p>
            <div className="chips">{SEARCHES.map((s) => <span key={s}>{s}</span>)}</div>
          </aside>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <SectionHead label="Part of the community" labelColor="var(--g-yellow)" title="Out and about in Lancaster" />
          <PhotoGrid items={PHOTOS} />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead label="Services in Lancaster" title={<>Everything you need, <span className="accent">one team</span></>} />
          <ServiceGroups />
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <SectionHead label="Service areas" labelColor="var(--g-green)" title="Where else we work" lede="Based in Camden, serving businesses across South Carolina and the Charlotte region." />
          <AreaGrid />
        </div>
      </section>
    </div>
  );
}
