import { useParams, Link } from "react-router-dom";
import { getBlogPostBySlug } from "../data/blogPosts";

export default function BlogDetail() {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <div className="service-page">
        <section className="page-hero" style={{
          backgroundImage: `linear-gradient(135deg,rgba(10,26,60,.75) 50%,rgba(10,26,60,.55)), url(/images/hero-blog.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
          <div className="container">
            <h1>Article Not Found</h1>
            <p className="page-hero-sub">The article you're looking for doesn't exist or has been removed.</p>
            <Link to="/blog" className="btn btn-orange" style={{ marginTop: "20px", display: "inline-block" }}>← Back to Blog</Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="service-page">
      {/* Hero Section */}
      <section
        className="page-hero"
        style={{
          backgroundImage: `linear-gradient(135deg,rgba(10,26,60,.75) 50%,rgba(10,26,60,.55)), url(${post.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <p className="blog-detail-breadcrumb">
            <Link to="/blog">Blog</Link> / {post.category}
          </p>
          <h1>{post.title}</h1>
          <div className="blog-detail-meta">
            <span className="blog-detail-date">{post.date}</span>
            <span className="blog-detail-category">{post.category}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section">
        <div className="container">
          <div className="blog-detail-content">
            {post.content.map((section, i) => (
              <div key={i} className="blog-detail-section">
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </div>
            ))}
          </div>

          {/* Back to Blog + CTA */}
          <div className="blog-detail-footer">
            <Link to="/blog" className="btn btn-outline">← Back to All Articles</Link>
            <Link to="/contact" className="btn btn-orange">Contact Us for Expert Help</Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
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
