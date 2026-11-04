import { faqNode, pageSeo, serviceNode } from "../../lib/seo";
import ServicePage from "../../components/ServicePage";
import { RELATED } from "../../components/ui";

const PATH = "/services/web-mobile-app-development/";
const TITLE = "App Development for Small Businesses in SC | Broadstreet.net";
const DESCRIPTION =
  "Custom mobile apps, web apps, customer portals and internal tools for Carolina small businesses. Planned, designed and built by Broadstreet.net in Camden, SC.";

const FAQ = [
  { q: "Do I need an app, or is a website enough?", a: "Many businesses only need a great website. An app makes sense when customers come back often or your team needs a tool for daily work. We’ll tell you plainly which one fits." },
  { q: "Do you build for both iPhone and Android?", a: "Yes. We can build apps that work on both, or a web app that works in any browser." },
  { q: "Will you help after the app launches?", a: "Yes. We keep your app updated, fix issues and add features as your business grows." },
];

export const meta = () =>
  pageSeo({
    path: PATH,
    title: TITLE,
    description: DESCRIPTION,
    crumbs: [{ name: "Services", path: "/services/" }, { name: "App Development", path: PATH }],
    extra: [serviceNode("App development", PATH, DESCRIPTION), faqNode(FAQ)],
  });

const page = {
  name: "App Development",
  accent: "var(--g-blue)",
  label: "App development · New",
  title: <>Apps that make <span className="c-yellow">business easier</span></>,
  lede: "Custom apps that make it easier for customers to buy from you and for your team to get work done. We plan, design and build them, then keep them running.",
  jump: [["mobile", "Mobile apps"], ["web-apps", "Web apps & portals"], ["tools", "Internal tools"], ["connect", "Connections"], ["faq", "Questions"]],
  facts: [
    ["iPhone & Android", "Mobile apps for your customers"],
    ["Web apps", "Portals that work in any browser"],
    ["Internal tools", "Less paperwork for your team"],
    ["Local team", "Built and supported from Camden"],
  ],
  blocksLabel: "What we build",
  blocksTitle: <>Four kinds of apps <span className="c-blue">we build</span></>,
  blocks: [
    { id: "mobile", color: "var(--g-blue)", label: "Mobile apps", title: "Your business on their home screen", text: "A mobile app keeps your business one tap away. Customers can order, book, check rewards or get updates without searching for you.", listTitle: "Good for", items: ["Ordering and reordering", "Booking appointments", "Loyalty and rewards", "Push notifications for specials and updates"] },
    { id: "web-apps", color: "var(--g-red)", label: "Web apps & customer portals", title: "Self-service your customers will use", text: "A secure portal on your website where customers can log in to check orders, pay invoices, download documents or request service, without calling your office.", listTitle: "Good for", items: ["Order and job status", "Invoices and online payments", "Shared documents and forms", "Service requests"] },
    { id: "tools", color: "var(--gold)", label: "Internal tools", title: "Replace the spreadsheets", text: "Simple apps built around how your team actually works: job tracking, scheduling, inspections, inventory counts and more, on a phone, tablet or computer.", listTitle: "Good for", items: ["Job and project tracking", "Field checklists and photos", "Scheduling and dispatch", "Inventory and equipment logs"] },
    { id: "connect", color: "var(--g-green)", label: "Connections", title: "Works with what you already use", text: "We connect your app to your website, online store, accounting software and the Bridges CRM, so information is entered once and shows up everywhere it’s needed.", listTitle: "We can connect", items: ["Your website and online store", "Accounting and inventory systems", "The Bridges CRM", "Payment processing"] },
  ],
  stepsTitle: "From idea to app",
  steps: [
    ["Talk it through", "Tell us what you want customers or staff to be able to do. We’ll help you decide what’s worth building."],
    ["Design", "You see screens and try out how the app will work before we build it."],
    ["Build & test", "We build the app and test it on real phones and computers with your team."],
    ["Launch & support", "We launch it, train your team and keep it updated as your business changes."],
  ],
  proof: {
    label: "Client review",
    quote: "Five stars! Friendly and creative, and very helpful.",
    cite: "Chardukian Patteson, Broadstreet client",
    side: { label: "Have an idea?", title: "Talk it through with us", text: "Book a free consultation. We’ll talk through your idea and tell you what it would take to build it.", to: "/contact/", link: "Book a consultation" },
  },
  faq: FAQ,
  related: [RELATED.bridges, RELATED.websites, RELATED.grow],
};

export default function AppDevelopment() {
  return <ServicePage page={page} />;
}
