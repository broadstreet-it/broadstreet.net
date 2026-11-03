import { Link } from "react-router";
import { pageSeo, serviceNode } from "../lib/seo";
import { AreaGrid, PageHero, SectionHead, ServiceGroups } from "../components/ui";
import PhotoGrid from "../components/PhotoGrid";

const PATH = "/camden-sc/";
const TITLE = "Digital Marketing & Web Design in Camden, SC | Broadstreet";
const DESCRIPTION =
  "Work with a local Camden, SC team for website design, SEO, Google Ads, and digital marketing. Visit Broadstreet at 537 E DeKalb St or book a free consultation.";

export const meta = () =>
  pageSeo({
    path: PATH,
    title: TITLE,
    description: DESCRIPTION,
    crumbs: [{ name: "Service Areas", path: "/#areas" }, { name: "Camden", path: PATH }],
    extra: [
      {
        ...serviceNode("Web design and digital marketing in Camden, SC", PATH, DESCRIPTION),
        areaServed: { "@type": "City", name: "Camden", containedInPlace: { "@type": "State", name: "South Carolina" } },
      },
    ],
  });

const MAPS = "https://www.google.com/maps/search/?api=1&query=Broadstreet.net%2C+537+E+DeKalb+St%2C+Camden%2C+SC+29020";
const SEARCHES = ["web design camden sc", "camden seo company", "google ads camden", "camden website developer", "kershaw county marketing"];
const img = (name, width, height) => ({ src: `/assets/media/places/${name}.webp`, width, height });

const STORY = [
  {
    ...img("camden-ribbon-cutting", 1400, 774),
    alt: "Broadstreet team and Camden community members cutting the ribbon at 1119 Little Street",
    title: "July 2023 · Little Street",
    text: "We opened our first office at 1119 Little Street with a ribbon-cutting, joined by members of the Camden community. It reflected steady demand from Camden businesses looking for a digital marketing partner they could meet face-to-face, not an out-of-state agency working from a call center.",
    c: "var(--g-blue)",
  },
  {
    ...img("camden-office", 1200, 675),
    alt: "Ribbon-cutting outside Broadstreet’s office at 537 E DeKalb St, Camden",
    title: "2025 · 537 E DeKalb St",
    text: "We moved to a larger, better space for clients in downtown Camden, steps away from Camden’s own Broad Street. Stop by anytime to chat.",
    c: "var(--g-yellow)",
  },
];

const COMMUNITY = [
  {
    ...img("camden-chamber-gala", 1400, 946),
    alt: "Tom Sliker with Broadstreet staff at the Kershaw County Chamber of Commerce Awards Gala",
    title: "Kershaw County Chamber of Commerce",
    text: "Tom with Broadstreet staff Kristen, Tiffany and Daneen at the Chamber’s Awards Gala. Tom has been an active Chamber member since 2018, which keeps us connected to what’s actually happening in local business.",
    c: "var(--g-red)",
  },
  {
    ...img("camden-kccoa", 1400, 1050),
    alt: "Tom Sliker with Bruce at the Kershaw County Council on Aging",
    title: "Kershaw County Council on Aging",
    text: "Tom with Bruce at KCCOA. Tom volunteers for KCCOA’s Meals on Wheels program and enjoys helping seniors in the Camden community.",
    c: "var(--g-green)",
  },
  {
    ...img("camden-woolard-tech", 1400, 1050),
    alt: "Tom Sliker with instructor LaKeith Bufford at Woolard Technology Center",
    title: "Woolard Technology Center",
    text: "Tom serves on the Information Technology Advisory Board at WTC, home to dedicated instructors like LaKeith Bufford.",
    c: "var(--g-blue)",
  },
  {
    ...img("camden-powers-gregory-shoot", 1400, 933),
    alt: "Broadstreet on a photo shoot for Powers & Gregory",
    title: "Powers & Gregory",
    text: "A photo shoot for Powers & Gregory, one of our long-term local partners. We’ve helped them grow through consistent SEO and paid search to compete as a top heating and cooling company in the Kershaw area.",
    c: "var(--gold)",
  },
  {
    ...img("camden-mattress-outlet", 1400, 1050),
    alt: "Tom Sliker with Steve, owner of Mattress Outlet of Camden",
    title: "Mattress Outlet of Camden",
    text: "We love connecting with Camden business owners, like Steve at Mattress Outlet, who showed us his extensive collection of mattresses.",
    c: "var(--orange)",
  },
];

export default function CamdenSc() {
  return (
    <div style={{ "--accent": "var(--g-yellow)" }}>
      <PageHero
        crumbs={[{ name: "Service Areas", to: "/#areas" }, { name: "Camden" }]}
        label="Serving Camden, South Carolina"
        title={<>Your digital marketing team in <span className="accent">Camden</span></>}
        lede="Website design, SEO, Google Ads and digital marketing from a local team in downtown Camden. Visit us at 537 E DeKalb St or book a free consultation."
      />

      <section className="section">
        <div className="wrap local">
          <div>
            <span className="label">Right here in Camden</span>
            <h2>Local help, <span className="accent">right around the corner</span></h2>
            <p>
              Broadstreet helps small businesses in Camden and Lugoff grow their online presence through web development,
              SEO and paid advertising. Our office sits at <strong>537 E DeKalb St</strong>, right in the heart of downtown,
              so whether you need a new website, a stronger Google presence or a full digital marketing strategy, local help
              is right around the corner.
            </p>
            <p>
              Camden isn’t just where our office happens to be. It’s home, and the place we build relationships with local
              business owners rather than treating clients as accounts. From the historic storefronts along DeKalb Street to
              the growing business community out toward Lugoff, we build strategies around how people in Camden and Kershaw
              County actually search, shop and find local businesses online.
            </p>
            <p>
              Our team handles everything from custom websites and Drupal development to Google Ads, local SEO and ongoing
              social media, all in-house, by people who live and work in the same community as our clients. That means faster
              turnaround, direct access to your account manager, and a team that already understands the local market.
            </p>
          </div>
          <div className="local-side">
            <aside className="searches visit-card" aria-label="Visit our office">
              <h3>Visit our office</h3>
              <address>
                <b>Broadstreet.net</b>
                537 E DeKalb St<br />Camden, SC 29020
              </address>
              <p>Mailing address: PO Box 515, Camden, SC 29021</p>
              <div className="visit-actions">
                <a className="button btn-yellow" href={MAPS} target="_blank" rel="noopener noreferrer">Get directions ↗</a>
                <a className="button secondary" href="tel:+18035750564">(803) 575-0564</a>
              </div>
            </aside>
            <aside className="searches" aria-label="Example searches">
              <h3>Searches we help you win</h3>
              <div className="chips">{SEARCHES.map((s) => <span key={s}>{s}</span>)}</div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <SectionHead
            label="Our Camden story"
            labelColor="var(--g-blue)"
            title={<>From Little Street to <span className="c-yellow">steps from Broad Street</span></>}
            lede={<><Link to="/about-broadstreet-consulting-camden-scs-trusted-digital-marketing-partner/" style={{ color: "var(--g-yellow)", fontWeight: 700 }}>See our full timeline →</Link></>}
          />
          <PhotoGrid items={STORY} />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead label="Part of the community" labelColor="var(--g-green)" title="Out and about in Kershaw County" />
          <PhotoGrid items={COMMUNITY} />
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <SectionHead label="Services in Camden" title={<>Everything you need, <span className="accent">one local team</span></>} />
          <ServiceGroups />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead label="Service areas" labelColor="var(--g-green)" title="Where else we work" lede="Based in Camden, serving businesses across South Carolina and the Charlotte region." />
          <AreaGrid />
        </div>
      </section>
    </div>
  );
}
