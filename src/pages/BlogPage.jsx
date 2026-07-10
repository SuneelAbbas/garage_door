import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

export default function BlogPage() {
  return (
    <div className="service-page">
      <section
        className="page-hero"
        style={{
          backgroundImage: `linear-gradient(135deg,rgba(10,26,60,.75) 50%,rgba(10,26,60,.55)), url(/images/hero-blog.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h1>Access Edge Garage Door Blog</h1>
          <p className="page-hero-sub">
            Welcome to our blog — your go-to resource for garage door maintenance tips, repair advice, and guidance tailored to Atlanta homeowners. Whether you are troubleshooting a noisy door or considering an upgrade, we have you covered.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Latest Articles</span>
            <h2>Garage Door Tips & Advice for Atlanta Homeowners</h2>
          </div>
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <Link to={`/blog/${post.slug}`} key={post.slug} className="blog-card">
                <img src={post.image} alt={post.alt} className="blog-card-image" loading="lazy" />
                <div className="blog-card-content">
                  <span className="blog-card-category">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.teaser}</p>
                  <span className="blog-read-more">Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
    </div>
  );
}
