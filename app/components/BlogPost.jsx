import { Link, useNavigate } from "react-router";
import { BLOG_POSTS, blogBySlug } from "../data/blog";

// Older posts have small original images; show those at their real size instead of stretching them.
const isSmall = (image) => image.width < 600;

export const formatDate = (iso) =>
  iso ? new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : null;

/** Card for one post, used on /blogs/ and under each post. */
export function BlogCard({ post }) {
  const to = `/blog/${post.slug}/`;
  return (
    <article className="card blog-card">
      <Link to={to} tabIndex={-1} aria-hidden="true" className={`blog-thumb${isSmall(post.image) ? " small" : ""}`}>
        <img src={post.image.src} alt="" width={post.image.width} height={post.image.height} loading="lazy" decoding="async" />
      </Link>
      <div className="card-content">
        {post.date && <p className="blog-date">{formatDate(post.date)}</p>}
        <h3><Link to={to}>{post.title}</Link></h3>
        <p>{post.excerpt}</p>
      </div>
    </article>
  );
}

/**
 * Layout for one blog post: title + featured image, the article, then more posts.
 * Pass the article as children (hand-converted posts) or as `html` (posts imported from the old site).
 */
export default function BlogPost({ slug, html, children }) {
  const navigate = useNavigate();
  const post = blogBySlug[slug];
  const i = BLOG_POSTS.indexOf(post);
  const more = [1, 2, 3].map((n) => BLOG_POSTS[(i + n) % BLOG_POSTS.length]);
  const byline = [post.author && `By ${post.author}`, formatDate(post.date)].filter(Boolean).join(" · ");

  // Imported HTML uses plain <a> tags: route internal links client-side like <Link>.
  const onArticleClick = (e) => {
    const a = e.target.closest("a[href^='/']");
    if (!a || a.target || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (/\.[a-z0-9]{2,4}$/i.test(a.getAttribute("href"))) return; // files
    e.preventDefault();
    navigate(a.getAttribute("href"));
  };

  return (
    <>
      <section className="page-hero blog-hero" style={{ "--accent": "var(--g-blue)" }}>
        <div className="wrap blog-hero-grid">
          <div className="blog-hero-text">
            <ol className="breadcrumbs" aria-label="Breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blogs/">Blog</Link></li>
              <li aria-current="page">{post.title}</li>
            </ol>
            <span className="label" style={{ "--lc": "var(--g-blue)" }}>Broadstreet blog</span>
            <h1>{post.title}</h1>
            {byline && <p className="blog-byline">{byline}</p>}
            <Link className="blog-back" to="/blogs/">← All blog posts</Link>
          </div>
          <figure className={`blog-hero-image${isSmall(post.image) ? " small" : ""}`}>
            <img src={post.image.src} alt={post.title} width={post.image.width} height={post.image.height} decoding="async" fetchPriority="high" />
          </figure>
        </div>
      </section>

      <div className="wrap article-layout">
        {html ? (
          <article className="article-content blog-body" onClick={onArticleClick} dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <article className="article-content blog-body">{children}</article>
        )}
        <aside className="sidebar">
          <p className="eyebrow">Let’s move forward</p>
          <h2>What’s next for your business?</h2>
          <p>Start with a conversation about your goals, your customers, and where you want to grow.</p>
          <Link className="button" to="/contact/">Get a free consultation</Link>
          <a href="tel:+18035750564">(803) 575-0564</a>
          <Link to="/portfolio/">Explore our work</Link>
        </aside>
      </div>

      <section className="section alt">
        <div className="wrap">
          <h2 className="blog-more-title">More from the blog</h2>
          <div className="cards">
            {more.map((p) => <BlogCard key={p.slug} post={p} />)}
          </div>
        </div>
      </section>
    </>
  );
}
