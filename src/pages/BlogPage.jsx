import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "5 Signs Your Garage Door Springs Need Replacing (And Why You Should Not Wait)",
    teaser: "Learn to recognize the warning signs of worn-out springs before they snap — and understand why professional replacement is the only safe option."
  },
  {
    title: "Garage Door Maintenance Checklist for Atlanta Homeowners",
    teaser: "A seasonal guide to keeping your garage door in peak condition through Atlanta's hot summers, stormy springs, and occasional winter freezes."
  },
  {
    title: "New Garage Door or Repair: How to Decide What Is Right for Your Home",
    teaser: "Not sure whether to fix your old door or invest in a new one? We break down the cost, value, and key factors every homeowner should consider."
  },
  {
    title: "How to Choose the Right Garage Door Opener for Your Atlanta Home",
    teaser: "From belt-drive to chain-drive, smart features to battery backup — everything you need to know before buying a new opener."
  },
  {
    title: "Why Garage Door Safety Sensors Matter And How to Keep Them Working",
    teaser: "Understanding the critical safety reverse system, common sensor issues, and simple maintenance tips to keep your family safe."
  },
  {
    title: "Garage Door Curb Appeal: How a New Door Transforms Your Atlanta Home",
    teaser: "See how upgrading your garage door can boost your home's value, improve energy efficiency, and completely change the look of your property."
  }
];

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
            {blogPosts.map((post, i) => (
              <div key={i} className="blog-card">
                <div className="blog-image-placeholder">
                  <span>📝</span>
                </div>
                <div className="blog-card-content">
                  <h3>{post.title}</h3>
                  <p>{post.teaser}</p>
                  <span className="blog-read-more">Read More →</span>
                </div>
              </div>
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
