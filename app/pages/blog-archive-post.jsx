import { useLoaderData } from "react-router";
import { pageSeo, SITE_URL } from "../lib/seo";
import BlogPost from "../components/BlogPost";

// One route per post imported from the old site (see app/data/blogArchiveSlugs.js).
// The post text is read at build time and prerendered; it isn't bundled into the app.
const POSTS = import.meta.glob("../data/blog-archive/*.json");

export async function loader({ request }) {
  // the prerender data request is /blog/<slug>.data (or /blog/<slug>/_.data)
  const slug = new URL(request.url).pathname.replace(/(\/_)?\.data$/, "").split("/").filter(Boolean)[1];
  const load = POSTS[`../data/blog-archive/${slug}.json`];
  if (!load) throw new Response("Not found", { status: 404 });
  return (await load()).default;
}

export const meta = ({ data, loaderData }) => {
  const post = loaderData || data;
  const path = `/blog/${post.slug}/`;
  return pageSeo({
    path,
    title: `${post.title} | Broadstreet Blog`,
    description: post.excerpt,
    crumbs: [{ name: "Blog", path: "/blogs/" }, { name: post.title, path }],
    extra: [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        ...(post.date ? { datePublished: post.date } : {}),
        ...(post.image ? { image: `${SITE_URL}${post.image.src}` } : {}),
        ...(post.author ? { author: { "@type": "Person", name: post.author } } : {}),
        mainEntityOfPage: { "@id": `${SITE_URL}${path}#webpage` },
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  });
};

export default function BlogArchivePost() {
  const post = useLoaderData();
  return <BlogPost slug={post.slug} html={post.html} />;
}
