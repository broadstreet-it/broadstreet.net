import { useRef } from "react";
import { Link } from "react-router";
import { pageSeo } from "../lib/seo";
import { Facts, PageHero, SectionHead } from "../components/ui";

const PATH = "/about-broadstreet-consulting-camden-scs-trusted-digital-marketing-partner/";

export const meta = () =>
  pageSeo({
    path: PATH,
    title: "About Broadstreet | Your Digital Marketing Team in Camden, SC",
    description:
      "Meet Broadstreet, a Camden, SC digital marketing company helping businesses with websites, SEO, Google Ads, and ongoing support for over 20 years.",
    crumbs: [{ name: "About", path: PATH }],
  });

const ERAS = {
  sos: { name: "Sliker Office Solutions", color: "var(--gold)" },
  start: { name: "Broadstreet begins", color: "var(--g-blue)" },
  community: { name: "Drupal & community", color: "var(--g-green)" },
  growth: { name: "Growing with our clients", color: "var(--g-red)" },
};

// Dates come from the old About page, Tom's bio and the dated posts on the blog.
const TIMELINE = [
  { era: "sos", month: "Feb", year: "1992", title: "Sliker Office Solutions opens", text: "Bookkeeping and secretarial services for small businesses in Wagener, SC." },
  { era: "sos", month: "May", year: "1994", title: "Into software", text: "SOS starts building custom Microsoft Access and Visual Basic applications." },
  { era: "sos", month: "Oct", year: "1994", title: "Our first website", text: "Founder Tom Sliker builds his first website." },
  { era: "sos", month: "May", year: "1995", title: "An early hospital intranet", text: "SOS helps launch one of the first hospital intranets for a large regional health care organization." },
  { era: "sos", month: "", year: "1996–2001", title: "Boom and bust", text: "Tom rides out the dot-com boom (and bust), registering sliker.com along the way." },
  { era: "sos", month: "Sep", year: "2006", title: "Websites for small business", text: "SOS refocuses on affordable website and eCommerce solutions built for small businesses." },
  { era: "start", month: "Dec", year: "2007", title: "Broadstreet Consulting is formed", text: "A team of developers and consultants delivering affordable websites, eCommerce and online communities." },
  { era: "start", month: "Apr", year: "2008", title: "All in on Drupal", text: "Every client website moves to Drupal, the open-source content management system." },
  { era: "start", month: "Sep", year: "2008", title: "The blog begins", text: "Tom speaks to the Greater Columbia Chamber of Commerce’s IT Council, and the Broadstreet blog starts.", to: "/blog/speaking-columbia-chamber-commerce-itc/" },
  { era: "start", month: "Jan", year: "2010", title: "Support plans & social media", text: "Ongoing support plans arrive, along with email and social media marketing." },
  { era: "start", month: "Apr", year: "2010", title: "Our first ad", text: "After years of word-of-mouth growth, Broadstreet runs its first ad in the Wagener Monthly.", to: "/blog/broadstreets-first-advertisement/" },
  { era: "start", month: "Jun", year: "2010", title: "The first Drupal Camp SC", text: "Tom presents “Which Drupal Modules Should I Use?” at the first Drupal Camp South Carolina.", to: "/blog/drupal-camp-sc-presentation-posted/" },
  { era: "community", month: "May", year: "2013", title: "Broadstreet goes full time", text: "Tom leaves his day job to focus full-time on Broadstreet." },
  { era: "community", month: "Oct", year: "2013", title: "Free Drupal training", text: "Broadstreet and IT-oLogy offer a free Introduction to Drupal class in Columbia.", to: "/blog/free-drupal-training-offered-broadstreet-it-ology/" },
  { era: "community", month: "Apr", year: "2014", title: "DrupalCamp South Carolina", text: "The first stand-alone DrupalCamp SC brings the state’s Drupal community together.", to: "/blog/drupalcamp-south-carolina-coming-now/" },
  { era: "community", month: "Nov", year: "2015", title: "Google certified", text: "Broadstreet earns Google AdWords certification on the way to becoming a Google Partner agency.", to: "/blog/we-are-now-certified-google-adwords/" },
  { era: "growth", month: "Jun", year: "2017", title: "Web Success launches", text: "“The 9 Essentials of Web Success” shares our framework for winning online.", to: "/web-success/" },
  { era: "growth", month: "Jun", year: "2020", title: "Help through COVID-19", text: "Broadstreet clients receive $3,500 in Google ad credits to stay in touch with customers.", to: "/blog/google-gives-broadstreet-clients-3500-ad-credit-covid-19-relief/" },
  { era: "growth", month: "Jul", year: "2023", title: "Our first Camden office", text: "Broadstreet opens its first office location, on Little Street in Camden, with a ribbon-cutting.", to: "/camden-sc/" },
  { era: "growth", month: "Oct", year: "2023", title: "Serving Lancaster", text: "A Lancaster office opens to serve one of the fastest-growing counties in the Charlotte metro. Today we serve Lancaster clients 100% remotely.", to: "/lancaster-sc/" },
  { era: "growth", month: "", year: "2025", title: "Steps from Broad Street", text: "We move to a larger, better space for clients, just steps away from Camden’s own Broad Street." },
  { era: "growth", month: "", year: "Today", title: "Your digital marketing team", text: "Websites, SEO, Google Ads and social media for businesses across the Carolinas.", to: "/services/" },
];

const BELIEFS = [
  ["The internet builds relationships", "We believe in the power of the internet to build and strengthen human relationships.", "var(--g-blue)"],
  ["Technology serves people", "Technology should serve people, not the other way around.", "var(--g-red)"],
  ["Community matters", "Online communities and social networks enrich the human experience.", "var(--gold)"],
  ["Small and focused wins", "The future of the web belongs to small, focused communities rather than large, generic ones.", "#1E8E3E"],
  ["A level playing field", "The internet gives smart small businesses the tools to compete globally.", "var(--blue)"],
  ["Sharing makes us stronger", "We believe in the sharing economy, including open-source software.", "var(--orange)"],
];

function Timeline() {
  const ref = useRef(null);
  const step = (dir) => {
    const el = ref.current;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="timeline-wrap">
      <div className="timeline-top">
        <ul className="timeline-legend" aria-label="Eras">
          {Object.values(ERAS).map((e) => (
            <li key={e.name} style={{ "--tc": e.color }}>{e.name}</li>
          ))}
        </ul>
        <div className="timeline-nav">
          <button type="button" onClick={() => step(-1)} aria-label="Earlier events">←</button>
          <button type="button" onClick={() => step(1)} aria-label="Later events">→</button>
        </div>
      </div>
      {/* Keyboard users can focus the strip and scroll it with the arrow keys. */}
      <ol className="timeline" ref={ref} tabIndex={0} aria-label="Broadstreet timeline, 1992 to today">
        {TIMELINE.map((t) => (
          <li key={`${t.year}-${t.title}`} style={{ "--tc": ERAS[t.era].color }}>
            <p className="tl-date">
              {t.month && <span>{t.month}</span>}
              <b>{t.year}</b>
            </p>
            <span className="tl-dot" aria-hidden="true" />
            <div className="tl-card">
              <h3>{t.title}</h3>
              <p>{t.text}</p>
              {t.to && <Link to={t.to}>{t.to.startsWith("/blog/") ? "Read the post" : "Learn more"} →</Link>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function About() {
  return (
    <div style={{ "--accent": "var(--g-yellow)" }}>
      <PageHero
        crumbs={[{ name: "About" }]}
        label="About Broadstreet"
        title={<>Local roots. <span className="c-yellow">A wider perspective.</span></>}
        lede="We’ve been helping South Carolina businesses do business online since before most of them had websites at all."
      />

      <section className="section timeline-section">
        <div className="wrap">
          <SectionHead
            label="Our story"
            labelColor="var(--g-yellow)"
            title={<>From Wagener to Camden, <span className="c-yellow">since 1992</span></>}
            lede="Scroll through the milestones that made us who we are."
          />
          <Timeline />
        </div>
      </section>

      <Facts
        items={[
          ["Since 1992", "Serving small businesses in South Carolina"],
          ["1994", "The year we built our first website"],
          ["Google Partner", "Certified in Google Ads"],
          ["Drupal experts", "Open-source websites since 2008"],
        ]}
      />

      <section className="section">
        <div className="wrap about-intro">
          <div>
            <SectionHead label="Who we are" labelColor="var(--g-blue)" title="A long history serving South Carolina businesses online" />
          </div>
          <div className="about-copy">
            <p>
              Broadstreet Consulting is a Camden, South Carolina-based digital marketing and web development agency
              helping small businesses in Camden, Lancaster, and across the Midlands grow their online presence and
              increase sales. As a Google Partner certified in Google Ads, our team combines local know-how with proven
              digital strategy to help businesses attract and engage customers through the web and social media.
            </p>
            <p>
              We built our first website in 1994 and have been helping South Carolina businesses do business online
              since 1998. What started as a small operation in Wagener, SC has grown into a full-service digital
              marketing agency. Today, our focus is on building dynamic online communities and digital strategies that
              help local businesses compete and grow. We also specialize in{" "}
              <Link to="/services/content-management-development/">Drupal</Link>, the open-source content management
              system that powers flexible, scalable business websites.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap about-name">
          <figure className="about-name-photo">
            <img src="/assets/media/3d201295fa073418.jpg" alt="Three kids on bicycles waiting at a busy crosswalk" width="710" height="472" loading="lazy" decoding="async" />
          </figure>
          <div className="about-copy">
            <span className="label" style={{ "--lc": "var(--g-red)" }}>Why “Broadstreet”</span>
            <h2>Never cross Broad Street</h2>
            <p>
              Growing up on the outskirts of Trenton, New Jersey, in a small town called Yardville, I had the run of a
              very safe neighborhood, with one rule: never cross Broad Street. It was a busy, dangerous highway that
              required real experience and judgment to navigate. Some people got hurt crossing it. Some didn’t make it
              across at all.
            </p>
            <p>
              That memory stuck with me. When I thought about the thousands of small businesses eager to tap into the
              power of the internet but unsure how to get there, Broad Street came to mind again. So many local
              business owners can see the opportunity the web offers, but the path to get there feels unfamiliar and
              intimidating. That’s exactly why Broadstreet exists: to help business owners navigate the internet with
              confidence. We’re here to offer a hand, share our experience, and help you cross over.
            </p>
            <p className="about-sign">— <Link to="/tom-sliker/">Tom Sliker</Link>, founder</p>
            <p>Fittingly, since 2025 our Camden office has been just steps away from Camden’s own Broad Street.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap about-partner">
          <Link to="/broadstreet-consulting-google-partners-google-adwords-certified/" className="about-badge">
            <img src="/assets/media/887cd580aaba36d5.png" alt="Google Partner" width="634" height="238" loading="lazy" decoding="async" />
          </Link>
          <div className="about-copy">
            <span className="label" style={{ "--lc": "var(--g-green)" }}>Google Partner</span>
            <h2>A double layer of quality assurance</h2>
            <p>
              Google reserves Partner status for agencies it recognizes as trustworthy, high-performing and current on
              best practices. We’re listed on Google’s official Partner Search, so you can verify our credentials, and
              Partner status gives our team access to exclusive Google training, product updates and industry research
              across Google Search and YouTube advertising.
            </p>
            <p>
              To keep it, we must continuously meet Google’s standards for certified staff, service quality and account
              performance. Google can, and does, revoke the badge from agencies that stop meeting the bar. When you work
              with Broadstreet, you get our standards and Google’s.
            </p>
            <Link className="button btn-yellow" to="/broadstreet-consulting-google-partners-google-adwords-certified/">
              About our Google certification
            </Link>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <SectionHead label="What we believe" labelColor="var(--g-yellow)" title="The ideas behind our work" />
          <div className="beliefs">
            {BELIEFS.map(([title, text, c]) => (
              <article className="belief" key={title} style={{ "--bc": c }}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap about-team">
          <SectionHead label="Our team" labelColor="var(--g-blue)" title="The people behind Broadstreet" lede="When you call, you talk to the people who design, build and market your website." />
          <Link className="button btn-yellow" to="/staff/">Meet the team</Link>
        </div>
      </section>
    </div>
  );
}
