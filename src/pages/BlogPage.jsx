import { useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import "./BlogHero.css";

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 3;

export default function BlogPage() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const visiblePosts = blogPosts.slice(0, visibleCount);
  const hasMore = visibleCount < blogPosts.length;

  const handleSeeMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, blogPosts.length));
  };

  return (
    <>
      {/* ════════ HERO — Premium ════════ */}
      <section
        className="page-hero bl-hero"
        style={{
          backgroundImage: `linear-gradient(135deg,rgba(10,26,60,.75) 50%,rgba(10,26,60,.55)), url(/images/garage_vehicle.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bl-hero-orb bl-hero-orb--1" />
        <div className="bl-hero-orb bl-hero-orb--2" />
        <div className="bl-hero-orb bl-hero-orb--3" />
        <div className="bl-hero-grid" />
        <div className="container">
          <div className="bl-hero-badge">
            <span className="bl-hero-badge-dot" />
            Expert Advice & Tips
          </div>
          <div className="bl-hero-content">
            <h1>Access Edge Garage Door Blog</h1>
            <p className="page-hero-sub">
              Welcome to our blog — your go-to resource for garage door maintenance tips, repair advice, and guidance tailored to Atlanta homeowners.
            </p>
          </div>
          <div className="bl-hero-stats">
            <div className="bl-hero-stat">
              <span className="bl-hero-stat-num">20+</span>
              <span className="bl-hero-stat-label">Articles</span>
            </div>
            <div className="bl-hero-stat-divider" />
            <div className="bl-hero-stat">
              <span className="bl-hero-stat-num">Expert</span>
              <span className="bl-hero-stat-label">Written Guides</span>
            </div>
            <div className="bl-hero-stat-divider" />
            <div className="bl-hero-stat">
              <span className="bl-hero-stat-num">Free</span>
              <span className="bl-hero-stat-label">Resources</span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ BLOG GRID ════════ */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Latest Articles</span>
            <h2>Garage Door Tips & Advice for Atlanta Homeowners</h2>
          </div>

          <div className="blog-grid">
            {visiblePosts.map((post) => (
              <Link to={`/blog/${post.slug}`} key={post.slug} className="blog-card">
                <img
                  src={post.image}
                  alt={post.alt}
                  className="blog-card-image"
                  loading="lazy"
                />
                <div className="blog-card-content">
                  <span className="blog-card-category">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.teaser}</p>
                  <span className="blog-read-more">Read More →</span>
                </div>
              </Link>
            ))}
          </div>

          {/* ════════ SEE MORE BUTTON ════════ */}
          {hasMore && (
            <div className="bl-see-more-wrap">
              <button
                className="bl-see-more-btn"
                onClick={handleSeeMore}
                type="button"
              >
                <span>See More Articles</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <p className="bl-see-more-count">
                Showing {visibleCount} of {blogPosts.length} articles
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section
        className="cta-banner"
        style={{
          backgroundImage: `linear-gradient(rgba(10,20,40,.85), rgba(10,20,40,.85)), url(/images/cta-blog.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h2>Have a Question About Your Garage Door?</h2>
          <p>Our team is always ready to help with expert advice and professional service. Contact us today.</p>
          <Link to="/contact" className="btn btn-orange">Ask an Expert →</Link>
        </div>
      </section>
    </>
  );
}
