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
  areaServed: [
    "Camden, SC", "Lancaster, SC", "Columbia, SC", "Lexington, SC", "Sumter, SC", "Florence, SC",
    "Darlington, SC", "Aiken, SC", "Myrtle Beach, SC", "Charlotte, NC", "United States",
  ],
  logo: `${SITE_URL}/assets/media/17ef7f579089c28c.png`,
  sameAs: [
    "https://www.facebook.com/broadstreetconsulting",
    "https://www.youtube.com/user/BroadstConsulting",
    "https://www.linkedin.com/company/broadstreet-consulting/",
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
/**
 * Shorthand for a standard page: WebPage + BreadcrumbList (+ any extra nodes).
 * @param {object} page
 * @param {string} page.path   site path with trailing slash, e.g. "/services/get-found/"
 * @param {string} page.title
 * @param {string} page.description
 * @param {{name: string, path: string}[]} [page.crumbs]  trail after Home; last item is this page
 * @param {object[]} [page.extra]  extra JSON-LD nodes (Service, FAQPage, ...)
 */
export function pageSeo({ path, title, description, crumbs = [], extra = [] }) {
  const url = `${SITE_URL}${path}`;
  const trail = [{ name: "Home", path: "/" }, ...crumbs];
  return seo({
    title,
    description,
    canonical: url,
    graph: [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
      },
      ...(crumbs.length
        ? [{
            "@type": "BreadcrumbList",
            itemListElement: trail.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: c.name,
              item: `${SITE_URL}${c.path}`,
            })),
          }]
        : []),
      ...extra,
    ],
  });
}

/** JSON-LD Service node provided by Broadstreet. */
export const serviceNode = (name, path, description) => ({
  "@type": "Service",
  name,
  description,
  url: `${SITE_URL}${path}`,
  provider: { "@id": `${SITE_URL}/#organization` },
});

/** JSON-LD FAQPage node from [{q, a}] pairs. */
export const faqNode = (items) => ({
  "@type": "FAQPage",
  mainEntity: items.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});

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
