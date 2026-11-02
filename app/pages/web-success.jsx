import { Link } from "react-router";
import { faqNode, pageSeo } from "../lib/seo";
import { Facts, Faq, PageHero, Related, RELATED, SectionHead } from "../components/ui";
import WebSuccessBand, { STRATEGIES } from "../components/WebSuccess";

const PATH = "/web-success/";
const TITLE = "Web Success: Free Videos & Guides | Broadstreet.net";
const DESCRIPTION =
  "Web Success is Broadstreet's free framework for winning online: the 9 Essentials video series and downloadable guides. No sign-up needed.";

const FAQ = [
  { q: "Do I have to sign up?", a: "No. The videos and guides are free and open to everyone. No forms, no email required." },
  { q: "Who is Web Success for?", a: "Business owners and nonprofits who want to understand how websites, Google, social media and email fit together." },
  { q: "Can Broadstreet help me put it into practice?", a: "Yes. Web Success is the same framework we use with clients. Book a free consultation and we’ll talk about your plan." },
];

export const meta = () =>
  pageSeo({
    path: PATH,
    title: TITLE,
    description: DESCRIPTION,
    crumbs: [{ name: "Services", path: "/services/" }, { name: "Web Success", path: PATH }],
    extra: [{ "@type": "Course", name: "Web Success: The 9 Essentials", description: DESCRIPTION, isAccessibleForFree: true, provider: { "@id": "https://broadstreet.net/#organization" } }, faqNode(FAQ)],
  });

export default function WebSuccess() {
  return (
    <div style={{ "--accent": "var(--g-green)" }}>
      <PageHero
        crumbs={[{ name: "Services", to: "/services/" }, { name: "Web Success" }]}
        label="Web Success · Free · No sign-up"
        title={<>Learn how to <span className="c-green">win online</span></>}
        lede="Web Success is the framework we use with every client: a set of ideas and actions you can put together into a web strategy that fits your business. Watch the videos and download the guides any time, for free."
        actions={
          <>
            <Link className="button btn-yellow" to="/web-success-videos/">▶ Watch the 9 Essentials</Link>
            <Link className="button secondary" to="/downloads/">Download the guides</Link>
          </>
        }
      />
      <Facts
        items={[
          ["Free", "No cost, ever"],
          ["No sign-up", "No forms or email"],
          ["9 Essentials", "Video series"],
          ["Guides", "Worksheets to download"],
        ]}
      />

      <section className="section">
        <div className="wrap">
          <SectionHead label="The framework" title={<>Six strategies, <span className="c-green">one plan</span></>} lede="Every business applies them a little differently. Together they cover everything it takes to grow online." />
          <div className="why-grid">
            {STRATEGIES.map(([b, , text], i) => (
              <div className="why" key={b} style={{ "--wc": ["var(--g-blue)", "var(--g-red)", "var(--g-yellow)", "var(--g-green)"][i % 4] }}>
                <h3>{b} strategy</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WebSuccessBand heading={false} />

      <section className="section" id="faq">
        <div className="wrap">
          <SectionHead label="Questions" title="Common questions" />
          <Faq items={FAQ} />
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <SectionHead label="Put it into practice" labelColor="var(--g-yellow)" title="Services that help" />
          <Related items={[RELATED.websites, RELATED.getFound, RELATED.stay]} />
        </div>
      </section>
    </div>
  );
}
