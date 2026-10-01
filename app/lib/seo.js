// Shared SEO helpers. Each route module calls seo({...}) from its `meta` export,
// and React Router renders the tags into <head> at prerender time.

export const SITE_URL = "https://broadstreet.net";

export const ORGANIZATION = {
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: "Broadstreet Consulting, LLC",
  url: `${SITE_URL}/`,
  telephone: "+1-803-575-0564",
  email: "support@sliker.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "537 E DeKalb St",
    addressLocality: "Camden",
    addressRegion: "SC",
    postalCode: "29020",
    addressCountry: "US",
  },
  areaServed: ["South Carolina", "United States"],
  logo: `${SITE_URL}/assets/media/17ef7f579089c28c.png`,
  sameAs: [
    "https://www.facebook.com/broadstreetconsulting",
    "https://www.youtube.com/user/BroadstConsulting",
  ],
};

export const WEBSITE = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: "Broadstreet",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const DEFAULT_ROBOTS = "index,follow,max-image-preview:large";

/**
 * @param {object} page
 * @param {string} page.title
 * @param {string} page.description
 * @param {string} page.canonical  absolute URL
 * @param {string} [page.robots]
 * @param {object[]} [page.graph]  page-specific JSON-LD nodes (WebPage, BreadcrumbList, ...)
 */
export function seo({ title, description, canonical, robots = DEFAULT_ROBOTS, graph = [] }) {
  return [
    { title },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: canonical },
    { name: "robots", content: robots },
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: canonical },
    { property: "og:site_name", content: "Broadstreet" },
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@graph": [ORGANIZATION, WEBSITE, ...graph],
      },
    },
  ];
}
