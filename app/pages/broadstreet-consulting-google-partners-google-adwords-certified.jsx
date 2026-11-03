import { Link } from "react-router";
import { pageSeo } from "../lib/seo";
import { PageHero, SectionHead } from "../components/ui";
import PartnerCard from "../components/PartnerCard";

const PATH = "/broadstreet-consulting-google-partners-google-adwords-certified/";
const ADS = "/services/google-adwords-ppc-search-engine-marketing-consulting/";

export const meta = () =>
  pageSeo({
    path: PATH,
    title: "Google Partner & Google Ads Certified Agency | Broadstreet",
    description:
      "Broadstreet is a certified Google Partner agency in Camden, SC. Learn what Google Partner status means and why it matters when someone manages your Google Ads.",
    crumbs: [
      { name: "About", path: "/about-broadstreet-consulting-camden-scs-trusted-digital-marketing-partner/" },
      { name: "Google Partner", path: PATH },
    ],
  });

const ADVANTAGES = [
  {
    title: "Certified Google Ads managers",
    text: "Partner status requires certified Google Ads professionals managing client accounts, and Google makes sure those certifications stay current. Partners must know the full range of Google Ads features, from negative keywords to ad assets and ad scheduling, and use them in ways that pay off for the client.",
    c: "var(--g-blue)",
  },
  {
    title: "Accountable for results",
    text: "Google reviews how Partners manage their clients’ accounts, including campaign performance, ad quality and client retention, to make sure clients get results and are happy with the service. Better ad quality usually means a lower cost per click and a higher return.",
    c: "var(--g-red)",
  },
  {
    title: "Always testing",
    text: "Partners are expected to keep improving campaigns: testing different ads and messages, and reaching the right people within your target market, so more of the right customers find your website.",
    c: "#1E8E3E",
  },
  {
    title: "Early access to new features",
    text: "Google Partners get access to beta features, so we can test and use new Google Ads tools before they’re available to everyone.",
    c: "var(--orange)",
  },
];

const READING = [
  ["/blog/benefits-working-google-partner/", "The benefits of working with a Google Partner"],
  ["/blog/google-ads-vs-seo-which-right-your-sumter-or-camden-sc-business/", "Google Ads vs. SEO: which is right for your business?"],
  ["/blog/5-tips-succeeding-google-adwords/", "5 tips for succeeding with Google Ads"],
];

export default function GooglePartner() {
  return (
    <div style={{ "--accent": "var(--g-blue)" }}>
      <PageHero
        crumbs={[
          { name: "About", to: "/about-broadstreet-consulting-camden-scs-trusted-digital-marketing-partner/" },
          { name: "Google Partner" },
        ]}
        label="Google Partner"
        title={<>A certified <span className="c-yellow">Google Partner</span> agency</>}
        lede="Google Partners are online marketing companies trusted by Google. The badge recognizes companies that excel with Google’s products, and Broadstreet is proud to carry it."
        actions={
          <>
            <Link className="button btn-yellow" to="/contact/">Talk to us about Google Ads</Link>
            <Link className="button secondary" to={ADS}>Our Google Ads management</Link>
          </>
        }
      />

      <section className="section">
        <div className="wrap about-partner">
          <PartnerCard link={false} />
          <div className="about-copy">
            <span className="label" style={{ "--lc": "var(--g-blue)" }}>What’s a Google Partner?</span>
            <h2>Trusted by Google, accountable to you</h2>
            <p>
              The Google Partner badge recognizes companies whose businesses are healthy, whose customers are happy, and
              who use Google best practices. As a Google Partner, we’re listed on Google Partner Search, Google’s directory
              of Partners, and we have access to special events and training, industry research and product updates.
            </p>
            <p>
              We’re well-versed in all things Google Ads and devoted to paid search marketing for a wide variety of
              clients. To keep Partner status we must continuously meet Google’s standards: certified employees, quality
              customer service and real results for clients. An agency that stops meeting them can lose its badge, so
              the standard holds no matter when Partner status was first earned.
            </p>
            <p className="partner-promise">
              When you work with Broadstreet, you get a double quality guarantee: ours, and Google’s.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <SectionHead label="The advantages" labelColor="var(--g-yellow)" title="Why work with a Google Partner?" />
          <div className="beliefs beliefs-2">
            {ADVANTAGES.map((a) => (
              <article className="belief" key={a.title} style={{ "--bc": a.c }}>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap local">
          <div>
            <span className="label">Your Google Ads account</span>
            <h2>Why hire a <span className="accent">certified professional?</span></h2>
            <p>
              Hiring a Google Partner to manage your Google Ads account can save you time and maximize your return on
              investment.
            </p>
            <p>
              Google Partners are agencies and online experts certified by Google to manage Google Ads accounts. That
              certification signals a healthy company, happy customers and a team that follows Google’s best practices.
            </p>
            <div className="actions" style={{ marginTop: 24 }}>
              <Link className="button btn-yellow" to="/contact/">Contact us about your Google Ads</Link>
            </div>
          </div>
          <aside className="searches reading-card" aria-label="Helpful reading">
            <h3>Helpful reading</h3>
            {READING.map(([to, text]) => <Link key={to} to={to}>{text} →</Link>)}
            <Link to={ADS}>How we manage Google Ads →</Link>
          </aside>
        </div>
      </section>
    </div>
  );
}
