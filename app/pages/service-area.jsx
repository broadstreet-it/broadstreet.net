import { Link, useLocation } from "react-router";
import { pageSeo, serviceNode } from "../lib/seo";
import { AreaGrid, PageHero, SectionHead, ServiceGroups } from "../components/ui";

// One page per service area. app/routes.js maps each /web-design-<city>-<st>/ URL to this file.

const BLOG = {
  google: ["/blog/why-your-business-isnt-showing-google-and-how-fix-it/", "Why your business isn’t showing up on Google"],
  mobile: ["/blog/why-your-camden-sc-small-business-needs-mobile-friendly-website-2026/", "Why your website needs to be mobile-friendly"],
  adsSeo: ["/blog/google-ads-vs-seo-which-right-your-sumter-or-camden-sc-business/", "Google Ads vs. SEO: which is right for your Sumter or Camden business?"],
  local: ["/blog/local-seo-101-how-columbia-and-camden-sc-businesses-can-rank-higher-google/", "Local SEO 101 for Columbia and Camden businesses"],
  store: ["/blog/storefront-online-store-guide-ecommerce-camden-and-columbia-sc-retailers/", "From storefront to online store: eCommerce for Columbia retailers"],
};

const AREA_DATA = {
  "web-design-darlington-sc": { city: "Darlington", st: "SC", state: "South Carolina", accent: "var(--g-red)", local: "Darlington is best known for Darlington Raceway, and race weekends bring visitors searching for places to eat, stay and shop. We help Darlington businesses show up for those searches and for the locals who count on them all year.", reading: [BLOG.google, BLOG.mobile], extra: [] },
  "web-design-florence-sc": { city: "Florence", st: "SC", state: "South Carolina", accent: "var(--g-blue)", local: "Florence is the hub of the Pee Dee, where I-95 and I-20 meet. That means local customers and travelers are both searching on their phones. We make sure Florence businesses show up for both.", reading: [BLOG.google, BLOG.local], extra: ["florence marketing agency"] },
  "web-design-sumter-sc": { city: "Sumter", st: "SC", state: "South Carolina", accent: "var(--g-green)", local: "Sumter is home to Shaw Air Force Base, so new families are always arriving and searching for local businesses they don’t know yet. A strong Google presence puts you in front of them first.", reading: [BLOG.adsSeo, BLOG.google], extra: [] },
  "web-design-columbia-sc": { city: "Columbia", st: "SC", state: "South Carolina", accent: "var(--g-yellow)", local: "Columbia is the state capital and home to the University of South Carolina, which makes it one of the most competitive search markets in the state. Standing out takes a fast website, a well-run Google Business Profile and a clear plan.", reading: [BLOG.local, BLOG.store], extra: [] },
  "web-design-charlotte-nc": { city: "Charlotte", st: "NC", state: "North Carolina", accent: "var(--g-red)", local: "Charlotte is the largest city in the Carolinas, and small businesses there compete with national brands for the same searches. We help Charlotte-area businesses win the local searches that matter in their part of town.", reading: [BLOG.google, BLOG.mobile], extra: [] },
  "web-design-aiken-sc": { city: "Aiken", st: "SC", state: "South Carolina", accent: "var(--g-green)", local: "Aiken is known for its horse country and its historic downtown, which draw visitors and new residents alike. We help Aiken businesses get found by both.", reading: [BLOG.google, BLOG.mobile], extra: [] },
  "web-design-lexington-sc": { city: "Lexington", st: "SC", state: "South Carolina", accent: "var(--g-yellow)", local: "Lexington and the Lake Murray area keep growing, and new residents find almost everything by searching on their phones. We help Lexington businesses be the ones they find.", reading: [BLOG.local, BLOG.mobile], extra: ["lexington digital marketing"] },
  "web-design-myrtle-beach-sc": { city: "Myrtle Beach", full: "Myrtle Beach and the Grand Strand", st: "SC", state: "South Carolina", accent: "var(--g-blue)", local: "Along the Grand Strand, business rises and falls with the tourist season, and most visitors find restaurants, shops and services by searching on their phones. We help Myrtle Beach businesses get found by visitors in season and by locals all year.", reading: [BLOG.google, BLOG.mobile], extra: ["grand strand web design"] },
};

export const AREA_SLUGS = Object.keys(AREA_DATA);

const slugFrom = (pathname) => pathname.replace(/^\/|\/$/g, "");
const areaFor = (pathname) => AREA_DATA[slugFrom(pathname)];

export const meta = ({ location }) => {
  const slug = slugFrom(location.pathname);
  const a = AREA_DATA[slug];
  if (!a) return [];
  const path = `/${slug}/`;
  const title = `Web Design & SEO in ${a.city}, ${a.st} | Broadstreet.net`;
  const description = `Web design, local SEO, Google Ads and social media for ${a.city}, ${a.st} businesses. Broadstreet.net is a certified Google Partner serving the Carolinas since 2010. Free consultation.`;
  return pageSeo({
    path,
    title,
    description,
    crumbs: [{ name: "Service Areas", path: "/#areas" }, { name: a.city, path }],
    extra: [
      {
        ...serviceNode(`Web design and Google marketing in ${a.city}, ${a.st}`, path, description),
        areaServed: { "@type": "City", name: a.city, containedInPlace: { "@type": "State", name: a.state } },
      },
    ],
  });
};

export default function ServiceArea() {
  const { pathname } = useLocation();
  const slug = slugFrom(pathname);
  const a = areaFor(pathname);
  if (!a) return null;
  const low = a.city.toLowerCase();
  const searches = [`web design ${low} ${a.st.toLowerCase()}`, `${low} seo company`, `google ads ${low}`, `${low} website developer`, ...a.extra];

  return (
    <div style={{ "--accent": a.accent }}>
      <PageHero
        crumbs={[{ name: "Service Areas", to: "/#areas" }, { name: a.city }]}
        label={`Serving ${a.full || a.city}, ${a.state}`}
        title={<>Web design &amp; Google marketing in <span className="accent">{a.city}</span></>}
        lede={`Websites, local SEO, Google Ads and social media for ${a.city} businesses, from a certified Google Partner team that has served the Carolinas since 2010.`}
      />

      <section className="section">
        <div className="wrap local">
          <div>
            <span className="label">Why {a.city} businesses call us</span>
            <h2>Local know-how, <span className="accent">{a.city} results</span></h2>
            <p>{a.local}</p>
            <p>We’re a certified Google Partner based in Camden, and we’ve helped Carolina businesses get found online since 2010. We can meet in person or work with you by phone and video, whichever suits you.</p>
            <p className="draft">Draft local copy. Add a {a.city} client example or photo here before launch.</p>
          </div>
          <aside className="searches" aria-label="Example searches">
            <h3>Searches we help you win</h3>
            <p style={{ color: "var(--muted)" }}>When people in {a.city} search for what you do, you should be near the top.</p>
            <div className="chips">{searches.map((s) => <span key={s}>{s}</span>)}</div>
          </aside>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <SectionHead label={`Services in ${a.city}`} title={<>Everything you need, <span className="accent">one local team</span></>} />
          <ServiceGroups />
        </div>
      </section>

      <section className="section">
        <div className="wrap proof">
          <figure className="big-quote">
            <span className="label" style={{ "--lc": "#E3ECF8" }}>From our clients</span>
            <blockquote>“Broadstreet has been fantastic to work with.”</blockquote>
            <cite>Doug Decker, Laurel Technical Institute &amp; Laurel Business Institute</cite>
          </figure>
          <div className="side">
            <span className="label" style={{ "--lc": "var(--g-yellow)" }}>Helpful reading</span>
            <h3>From our blog</h3>
            {a.reading.map(([to, text]) => <Link key={to} to={to}>{text} →</Link>)}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <SectionHead label="Service areas" labelColor="var(--g-green)" title="Where we work" lede="Based in Camden, serving businesses across South Carolina and the Charlotte region." />
          <AreaGrid current={slug} />
        </div>
      </section>
    </div>
  );
}
