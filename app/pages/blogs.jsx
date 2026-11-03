import { Link, useLocation } from "react-router";
import { pageSeo } from "../lib/seo";
import { PageHero } from "../components/ui";
import { BlogCard } from "../components/BlogPost";
import { BLOG_POSTS, BLOG_PAGE_SIZE, BLOG_PAGES } from "../data/blog";

// /blogs/ is page 1; /blogs/page/2/ … /blogs/page/N/ share this file (see routes.js).
const pageFrom = (pathname) => Number(pathname.match(/\/blogs\/page\/(\d+)/)?.[1] || 1);
const pageHref = (n) => (n === 1 ? "/blogs/" : `/blogs/page/${n}/`);

export const meta = ({ location }) => {
  const page = pageFrom(location.pathname);
  return pageSeo({
    path: pageHref(page),
    title: `Digital Marketing Insights & Advice | Broadstreet Blog${page > 1 ? ` (page ${page})` : ""}`,
    description:
      "Read practical insights from Broadstreet on website design, local SEO, Google Ads, content, and digital marketing for small businesses.",
    crumbs: [{ name: "Blog", path: "/blogs/" }, ...(page > 1 ? [{ name: `Page ${page}`, path: pageHref(page) }] : [])],
  });
};

export default function Blogs() {
  const page = pageFrom(useLocation().pathname);
  const posts = BLOG_POSTS.slice((page - 1) * BLOG_PAGE_SIZE, page * BLOG_PAGE_SIZE);

  return (
    <div style={{ "--accent": "var(--g-blue)" }}>
      <PageHero
        crumbs={page > 1 ? [{ name: "Blog", to: "/blogs/" }, { name: `Page ${page}` }] : [{ name: "Blog" }]}
        label="Broadstreet blog"
        title={<>Ideas for your next <span className="c-yellow">stage of growth</span></>}
        lede={`Practical insights on website design, local SEO, Google Ads, content and digital marketing for small businesses. ${BLOG_POSTS.length} posts since 2008.`}
        actions={false}
      />
      <section className="section">
        <div className="wrap">
          <div className="cards">
            {posts.map((p) => <BlogCard key={p.slug} post={p} />)}
          </div>
          <nav className="blog-pager" aria-label="Blog pages">
            {page > 1 ? <Link className="pager-step" to={pageHref(page - 1)}>← Newer</Link> : <span className="pager-step" aria-hidden="true" />}
            <ol>
              {Array.from({ length: BLOG_PAGES }, (_, i) => i + 1).map((n) => (
                <li key={n}>
                  {n === page ? <span aria-current="page">{n}</span> : <Link to={pageHref(n)} aria-label={`Page ${n}`}>{n}</Link>}
                </li>
              ))}
            </ol>
            {page < BLOG_PAGES ? <Link className="pager-step" to={pageHref(page + 1)}>Older →</Link> : <span className="pager-step" aria-hidden="true" />}
          </nav>
        </div>
      </section>
    </div>
  );
}
