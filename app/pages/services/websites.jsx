import { faqNode, pageSeo, serviceNode } from "../../lib/seo";
import ServicePage from "../../components/ServicePage";
import { RELATED } from "../../components/ui";

const PATH = "/services/websites/";
const TITLE = "Website Design & eCommerce in Camden, SC | Broadstreet.net";
const DESCRIPTION =
  "Fast, mobile-friendly website design and online stores for Carolina small businesses, plus Drupal development and inventory and accounting tools.";

const FAQ = [
  { q: "Will my website work on phones?", a: "Yes. Every site we build is mobile-friendly. Most of your customers will find you on a phone, so we design for phones first." },
  { q: "Can I update the site myself?", a: "Yes. We train you to make simple changes, and our monthly support plans cover the rest." },
  { q: "Can you redesign my existing website?", a: "Yes. We’ll review what’s working on your current site, keep it, and fix what isn’t." },
  { q: "Do you build online stores?", a: "Yes. We build full online stores and can connect them to your inventory and accounting systems." },
];

export const meta = () =>
  pageSeo({
    path: PATH,
    title: TITLE,
    description: DESCRIPTION,
    crumbs: [{ name: "Services", path: "/services/" }, { name: "Websites", path: PATH }],
    extra: [serviceNode("Website design and eCommerce", PATH, DESCRIPTION), faqNode(FAQ)],
  });

const page = {
  name: "Websites",
  accent: "var(--g-red)",
  label: "Websites · Design, online stores & development",
  title: <>Websites that make <span className="c-yellow">the phone ring</span></>,
  lede: "Simple, fast, mobile-friendly websites built to turn visitors into calls and emails. When you’re ready to sell online, we build full online stores that connect to your inventory and accounting.",
  cards: true,
  facts: [
    ["Mobile first", "Built for phones"],
    ["Built to convert", "More calls and emails"],
    ["SEO ready", "Set up to rank on Google"],
    ["Local support", "Updates when you need them"],
  ],
  blocksLabel: "What we build",
  blocksTitle: <>Four ways we <span className="c-red">build your business</span> online</>,
  blocks: [
    { id: "design", color: "var(--g-red)", label: "Website design", title: "A site that works as hard as you do", text: "Most visitors decide in seconds whether to call you. We build clean, fast sites that make it easy: clear services, your phone number in reach and a simple way to get in touch.", items: ["Custom design using your brand", "Mobile-friendly on every screen", "Click-to-call and contact forms", "Search-friendly pages and titles", "Training so you can make simple updates"], link: { to: "/services/mobile-friendly-website-design-development/", text: "More about website design" } },
    { id: "stores", color: "var(--gold)", label: "Online stores", title: "Sell around the clock", text: "We build full online stores that take payments, track inventory and handle shipping, so your shop stays open after you lock the front door.", items: ["Product catalog and secure checkout", "Shipping and tax setup", "Order emails for you and your customers", "Product pages built to show up on Google"], link: { to: "/services/ecommerce-website-development/", text: "More about eCommerce" } },
    { id: "drupal", color: "var(--g-blue)", label: "Drupal development", title: "Room to grow", text: "For larger sites and custom features, we build on Drupal, a proven open-source platform. You own your site, and it can grow with your business.", items: ["Custom features and content types", "Member areas and online forms", "Security updates and upgrades", "Hosting and backups"], link: { to: "/open-source-development-services/", text: "More about Drupal development" } },
    { id: "integration", color: "var(--g-green)", label: "Inventory & accounting", title: "One system, not three", text: "We connect your online store to the inventory and accounting systems you already use, so stock levels and sales stay in sync without retyping.", items: ["Inventory sync between store and shop", "Sales flowing into your accounting", "Fewer manual updates and errors"], link: { to: "/services/inventory-accounting-integration/", text: "More about integration" } },
  ],
  blocksNote: "Checklist items are suggestions. Confirm they match what the team offers before launch.",
  stepsTitle: "From first call to launch day",
  steps: [
    ["Free review", "We look at your current site, your goals and what your customers need to find."],
    ["Design", "You see your new site take shape and tell us what to change."],
    ["Build & launch", "We build, test on phones and computers, and launch with tracking in place."],
    ["Support", "Monthly updates and training keep your site fresh."],
  ],
  proof: {
    label: "Client review · Tyler Brothers",
    color: "var(--g-red)",
    quote: "We’re over 100 years old, and our customers keep getting younger.",
    cite: "Al Tyler, Tyler Brothers",
    side: { label: "See our work", title: "Sites we’ve built", text: "From law firms and contractors to schools and a town government, see how our sites help Carolina businesses grow.", to: "/portfolio/", link: "View our work" },
  },
  faq: FAQ,
  related: [RELATED.getFound, RELATED.stay, RELATED.apps],
};

export default function Websites() {
  return <ServicePage page={page} />;
}
