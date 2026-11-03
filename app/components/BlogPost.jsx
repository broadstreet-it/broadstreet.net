import { Link } from "react-router";
import { BLOG_POSTS, blogBySlug } from "../data/blog";

/** Layout for one blog post: title + featured image, the article, then more posts. */
export default function BlogPost({ slug, children }) {
  const post = blogBySlug[slug];
  const i = BLOG_POSTS.indexOf(post);
  const more = [1, 2, 3].map((n) => BLOG_POSTS[(i + n) % BLOG_POSTS.length]);

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
            <Link className="blog-back" to="/blogs/">← All blog posts</Link>
          </div>
          <figure className="blog-hero-image">
            <img src={post.image.src} alt={post.title} width={post.image.width} height={post.image.height} decoding="async" fetchPriority="high" />
          </figure>
        </div>
      </section>

      <div className="wrap article-layout">
        <article className="article-content blog-body">{children}</article>
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
            {more.map((p) => (
              <article className="card" key={p.slug}>
                <Link to={`/blog/${p.slug}/`} tabIndex={-1} aria-hidden="true">
                  <img src={p.image.src} alt="" width={p.image.width} height={p.image.height} loading="lazy" decoding="async" />
                </Link>
                <div className="card-content">
                  <h3><Link to={`/blog/${p.slug}/`}>{p.title}</Link></h3>
                  <p>{p.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
