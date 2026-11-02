import { faqNode, pageSeo, serviceNode } from "../../lib/seo";
import ServicePage from "../../components/ServicePage";
import { RELATED } from "../../components/ui";

const PATH = "/services/get-found/";
const TITLE = "Local SEO & Google Ads in Camden, SC | Broadstreet.net";
const DESCRIPTION =
  "SEO, Google Business Profile and Google Ads management for Carolina businesses. Certified Google Partner since 2010. Free search review from Broadstreet.net.";

const FAQ = [
  { q: "What’s the difference between SEO and Google Ads?", a: "Google Ads puts you at the top of results right away, and you pay when someone clicks. SEO earns you a spot in the regular results over time, with no cost per click. Most local businesses do best with both." },
  { q: "How long does SEO take to work?", a: "SEO builds over time. You’ll see progress in your monthly reports, and we’ll set realistic expectations for your market during your free review." },
  { q: "Do you only work with businesses in Camden?", a: "No. We’re based in Camden and serve businesses across the Carolinas, and we work remotely with clients across the U.S." },
  { q: "Will I know what you’re doing each month?", a: "Yes. You get regular ranking reports and scheduled strategy reviews, and you can always call us." },
];

export const meta = () =>
  pageSeo({
    path: PATH,
    title: TITLE,
    description: DESCRIPTION,
    crumbs: [{ name: "Services", path: "/services/" }, { name: "Get Found", path: PATH }],
    extra: [serviceNode("Local SEO and Google Ads", PATH, DESCRIPTION), faqNode(FAQ)],
  });

const page = {
  name: "Get Found",
  accent: "var(--g-blue)",
  label: "Get Found · SEO, Google Business Profile & Google Ads",
  title: <>Be the business locals <span className="c-yellow">find first</span></>,
  lede: "When someone nearby searches for what you do, you should be at the top. We get you there with SEO, a strong Google Business Profile and Google Ads managed by our certified team.",
  jump: [["seo", "SEO"], ["gbp", "Google Business Profile"], ["ads", "Google Ads"], ["reports", "Ranking reports"], ["faq", "Questions"]],
  facts: [
    ["Certified Google Partner", "Google Ads experts on staff"],
    ["15+ years", "Ranking local businesses"],
    ["Google, Bing & Yahoo", "We track all three"],
    ["Free search review", "See where you stand today"],
  ],
  blocksTitle: <>Four ways we put you <span className="c-green">on the map</span></>,
  blocks: [
    { id: "seo", color: "var(--g-blue)", label: "Search engine optimization", title: "Rank higher without paying per click", text: "SEO is ongoing work, not a one-time setup. We keep improving your site’s content and structure so Google understands what you do and where you do it. Higher rankings bring more traffic, and more traffic brings more sales.", listTitle: "What we do", items: ["Keyword research for your town and trade", "On-page fixes: titles, headings, speed and mobile", "Local service and location pages", "Content that answers what customers search", "Ongoing monthly optimization"], link: { to: "/services/search-engine-optimization-seo/", text: "More about SEO" } },
    { id: "gbp", color: "var(--g-green)", label: "Google Business Profile", title: "Show up in the map results", text: "Your Google Business Profile is often the first thing people see, with your hours, photos, reviews and a call button. We set it up right and keep it active so you show up when people search nearby.", listTitle: "What we do", items: ["Profile setup, verification and cleanup", "Categories, services and hours kept current", "Photos and regular posts", "Help getting and answering reviews", "Bing and Apple Maps listings to match"], link: { to: "/services/local-online-marketing/", text: "More about local marketing" } },
    { id: "ads", color: "var(--g-red)", label: "Google Ads", title: "Get to the top of Google today", text: "Our pay-per-click campaigns are fully managed by a certified Google Ads consultant. We track every result and adjust your campaigns daily, so your budget goes to the searches that bring in customers.", listTitle: "What we do", items: ["Campaign setup and keyword targeting", "Ad writing and landing pages", "Call and form tracking", "Daily bid and budget adjustments", "Clear monthly results"], link: { to: "/services/google-adwords-ppc-search-engine-marketing-consulting/", text: "More about Google Ads" } },
    { id: "reports", color: "var(--gold)", label: "Ranking reports", title: "See exactly where you rank", text: "We track the search terms that matter for your business on Google, Bing and Yahoo, and show you how your rankings change month to month. No jargon, just where you stand and what we’re doing next.", listTitle: "What you get", items: ["Rankings for your key search terms", "Google, Bing and Yahoo tracking", "Traffic and call trends", "Scheduled strategy reviews"] },
  ],
  blocksNote: "Some checklist items are suggestions. Confirm they match what the team offers before launch.",
  stepsTitle: "From first call to first page",
  steps: [
    ["Free review", "We look at where you rank today, your Google profile and who you’re competing with."],
    ["Plan", "You get a plain-English plan with the search terms worth winning and what it takes."],
    ["Launch", "We fix your site, build out your profile and start campaigns with tracking in place."],
    ["Improve", "Monthly reports and strategy reviews keep you moving up."],
  ],
  proof: {
    label: "Client review · Laurel Technical Institute",
    quote: "Being in the top 3 in our search categories was paramount for the success of our school.",
    cite: "Doug Decker, Laurel Technical Institute & Laurel Business Institute",
    side: { label: "See where you stand", title: "Free search review", text: "We’ll show you where you rank on Google today and where your competitors do.", to: "/contact/", link: "Book your review" },
  },
  faq: FAQ,
  related: [RELATED.websites, RELATED.stay, RELATED.bridges],
};

export default function GetFound() {
  return <ServicePage page={page} />;
}
