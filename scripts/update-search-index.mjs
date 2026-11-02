// One-off for the 2026 redesign: drop removed pages from public/search-index.json
// and add the new service and service-area pages. Safe to re-run.
import fs from "node:fs";

const file = "public/search-index.json";
const index = JSON.parse(fs.readFileSync(file, "utf8"));

const removed = ["/portfolio/backcountry-beyond/", "/portfolio/fairfield-county-chamber/", "/web-success/", "/web-success-signup/"];
const removedNames = /backcountry|fairfield county chamber/gi;

const areas = [
  ["columbia-sc", "Columbia, SC"], ["lexington-sc", "Lexington, SC"], ["sumter-sc", "Sumter, SC"], ["florence-sc", "Florence, SC"],
  ["darlington-sc", "Darlington, SC"], ["aiken-sc", "Aiken, SC"], ["myrtle-beach-sc", "Myrtle Beach, SC"], ["charlotte-nc", "Charlotte, NC"],
];

const added = [
  { href: "/services/get-found/", title: "Get Found: SEO, Google Business Profile & Google Ads", description: "Local SEO, Google Business Profile and Google Ads management for Carolina businesses.", text: "SEO search engine optimization Google Business Profile Google Ads ranking reports local search maps" },
  { href: "/services/websites/", title: "Websites", description: "Fast, mobile-friendly website design and online stores.", text: "website design eCommerce online store Drupal development inventory accounting integration mobile-friendly" },
  { href: "/services/stay-connected/", title: "Stay Connected: social media & email", description: "Social media marketing, email marketing, video and social ads.", text: "social media Facebook Instagram LinkedIn email marketing video content social advertising" },
  { href: "/services/grow/", title: "Grow: monthly support & lead generation", description: "Monthly support plans, lead generation, strategy reviews and training.", text: "monthly support plans updates training strategy reviews free redesigns lead generation" },
  { href: "/services/bridges-crm/", title: "Bridges CRM", description: "One inbox, automatic follow-up, booking and review requests.", text: "CRM customer relationship management leads pipeline inbox texting follow-up missed call text back booking reminders reviews" },
  ...areas.map(([slug, name]) => ({
    href: `/web-design-${slug}/`,
    title: `Web design & SEO in ${name}`,
    description: `Web design, local SEO, Google Ads and social media for ${name} businesses.`,
    text: `${name} web design SEO Google Ads social media marketing website developer`,
  })),
];

const out = index
  .filter((e) => !removed.includes(e.href))
  .map((e) => ({ ...e, text: (e.text || "").replace(removedNames, "") }))
  .filter((e) => !added.some((a) => a.href === e.href))
  .concat(added);

fs.writeFileSync(file, JSON.stringify(out));
console.log(`search index: ${index.length} -> ${out.length} entries`);
