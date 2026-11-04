import { faqNode, pageSeo, serviceNode } from "../../lib/seo";
import ServicePage from "../../components/ServicePage";
import { RELATED } from "../../components/ui";

const PATH = "/services/grow/";
const TITLE = "Monthly Website Support & Lead Generation | Broadstreet.net";
const DESCRIPTION =
  "Monthly website support plans with design and content updates, training and strategy reviews, plus lead generation for Carolina businesses.";

const FAQ = [
  { q: "What counts as an update?", a: "Text and photo changes, new pages, specials, staff changes and design tweaks. If you’re not sure, just send it and we’ll let you know." },
  { q: "How do I send a change?", a: "Call, text or email us. We’ll take care of it and let you know when it’s done." },
  { q: "Can I get support for a site you didn’t build?", a: "Often, yes. We’ll take a look during your free consultation and tell you plainly what’s possible." },
];

export const meta = () =>
  pageSeo({
    path: PATH,
    title: TITLE,
    description: DESCRIPTION,
    crumbs: [{ name: "Services", path: "/services/" }, { name: "Grow", path: PATH }],
    extra: [serviceNode("Monthly support and lead generation", PATH, DESCRIPTION), faqNode(FAQ)],
  });

const page = {
  name: "Grow",
  accent: "var(--g-green)",
  label: "Grow · Support, leads & training",
  title: <>A team in your corner, <span className="c-green">every month</span></>,
  lede: "Your website and marketing need regular care. Our monthly plans cover updates, training and strategy reviews, so your website and marketing keep up as your business grows.",
  actions: undefined,
  cards: true,
  facts: [
    ["Updates", "Design and content changes"],
    ["Training", "For you and your staff"],
    ["Strategy reviews", "Scheduled check-ins"],
    ["Lead generation", "More calls and forms"],
  ],
  blocksTitle: <>Three ways we <span className="c-green">keep you growing</span></>,
  blocks: [
    { id: "support", color: "var(--g-green)", label: "Monthly support plans", title: "Never worry about your website again", text: "Send us a change and we’ll make it. Our plans cover design and content updates, training and scheduled strategy reviews.", listTitle: "Every plan includes", items: ["Design and content updates", "Training for you and your staff", "Scheduled strategy reviews", "A local team that answers the phone"], link: { to: "/services/digital-marketing-strategy-and-support/", text: "More about ongoing support" } },
    { id: "leads", color: "var(--g-blue)", label: "Lead generation", title: "More calls, forms and walk-ins", text: "We combine your website, Google and social media into one plan aimed at a single goal: more people contacting your business, and knowing where each one came from.", items: ["Call and form tracking", "Landing pages for your offers", "Follow-up by email", "Monthly lead reports"], link: { to: "/lead-generation-services/", text: "More about lead generation" } },
    { id: "training", color: "var(--gold)", label: "Strategy reviews & training", title: "Know what’s working", text: "We sit down with you on a regular schedule to look at the numbers, talk about what’s working and plan what’s next, in plain English.", items: ["Regular strategy meetings", "Reviews of your traffic and leads", "Hands-on training for your team"], link: { to: "/services/strategy-training/", text: "More about strategy & training" } },
  ],
  stepsTitle: "How a plan works",
  steps: [
    ["Free consultation", "We learn about your business and what you need help with each month."],
    ["Pick a plan", "We recommend the support that fits your goals and budget."],
    ["Send requests", "Call, text or email changes any time. We take care of them."],
    ["Review together", "Scheduled strategy reviews keep your plan on track."],
  ],
  proof: {
    label: "Client review · Thompson Rental Services",
    quote: "When I text or email they respond almost immediately.",
    cite: "Benji Glover, Thompson Rental Services",
    side: { label: "Long-term clients", title: "Clients stay for years", text: "Many of our clients have been with us for years. Read what they say about working with our team.", to: "/what-our-clients-are-saying/", link: "Read our reviews" },
  },
  faq: FAQ,
  related: [RELATED.websites, RELATED.getFound, RELATED.bridges],
};

export default function Grow() {
  return <ServicePage page={page} />;
}
