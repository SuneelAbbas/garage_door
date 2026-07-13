import React from "react";
import { useParams, Link } from "react-router-dom";
import { getBlogPostBySlug, blogPosts } from "../data/blogPosts";
import "./BlogDetail.css";

export default function BlogDetail() {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);
  const [progress, setProgress] = React.useState(0);

  // Reading progress
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Not found state
  if (!post) {
    return (
      <div className="service-page">
        <section
          className="page-hero bd-hero"
          style={{
            backgroundImage: `linear-gradient(135deg,rgba(10,26,60,.75) 50%,rgba(10,26,60,.55)), url(/images/garage_vehicle.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bd-hero-orb bd-hero-orb--1" />
          <div className="bd-hero-orb bd-hero-orb--2" />
          <div className="bd-hero-grid" />
          <div className="container">
            <h1>Article Not Found</h1>
            <p className="page-hero-sub">The article you are looking for does not exist or has been removed.</p>
            <Link to="/blog" className="btn btn-orange" style={{ marginTop: "20px", display: "inline-block" }}>← Back to Blog</Link>
          </div>
        </section>
      </div>
    );
  }

  // Related posts (exclude current)
  const related = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

  // Share URL
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="service-page">
      {/* ════════ HERO ════════ */}
      <section
        className="page-hero bd-hero"
        style={{
          backgroundImage: `linear-gradient(135deg,rgba(10,26,60,.75) 50%,rgba(10,26,60,.55)), url(${post.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bd-hero-orb bd-hero-orb--1" />
        <div className="bd-hero-orb bd-hero-orb--2" />
        <div className="bd-hero-grid" />
        <div className="container">
          <p className="bd-breadcrumb">
            <Link to="/blog">Blog</Link> / {post.category}
          </p>
          <h1>{post.title}</h1>
          <div className="bd-meta">
            <span className="bd-meta-date">📅 {post.date}</span>
            <span className="bd-meta-cat">{post.category}</span>
          </div>
        </div>
      </section>

      {/* ════════ ARTICLE ════════ */}
      <section className="section" data-reveal="fade-up">
        {/* Reading Progress Bar */}
        <div className="bd-progress">
          <div className="bd-progress-bar" style={{ width: `${progress}%` }} />
        </div>

        <div className="container">
          <div className="bd-content-wrap">
            {post.content.map((section, i) => (
              <div key={i} className="bd-section">
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </div>
            ))}

            {/* Share */}
            <div className="bd-share">
              <span className="bd-share-label">Share this article:</span>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bd-share-btn"
                aria-label="Share on Facebook"
              >
                f
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bd-share-btn"
                aria-label="Share on Twitter"
              >
                𝕏
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Check out this article: ${shareUrl}`)}`}
                className="bd-share-btn"
                aria-label="Share via Email"
              >
                ✉
              </a>
            </div>

            {/* Footer */}
            <div className="bd-footer">
              <Link to="/blog" className="btn btn-outline">← Back to All Articles</Link>
              <Link to="/contact" className="btn btn-orange">Contact Us for Expert Help</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ RELATED POSTS ════════ */}
      {related.length > 0 && (
        <section className="section bd-related" data-reveal="fade-up">
          <div className="container">
            <div className="section-title">
              <span className="eyebrow">Keep Reading</span>
              <h2>Related Articles</h2>
            </div>
            <div className="bd-related-grid">
              {related.map(p => (
                <Link to={`/blog/${p.slug}`} key={p.slug} className="bd-related-card">
                  <img src={p.image} alt={p.alt} className="bd-related-img" loading="lazy" />
                  <div className="bd-related-body">
                    <span className="bd-related-cat">{p.category}</span>
                    <h4>{p.title}</h4>
                    <p>{p.teaser}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════════ CTA ════════ */}
      <section
        className="cta-banner sv-cta"
        style={{
          backgroundImage: `linear-gradient(rgba(10,20,40,.85), rgba(10,20,40,.85)), url(/images/cta-blog.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="sv-cta-orb sv-cta-orb--1" />
        <div className="sv-cta-orb sv-cta-orb--2" />
        <div className="container">
          <h2>Have a Question About Your Garage Door?</h2>
          <p>Our team is always ready to help with expert advice and professional service. Contact us today.</p>
          <Link to="/contact" className="btn btn-orange">Ask an Expert →</Link>
        </div>
      </section>
    </div>
  );
}
