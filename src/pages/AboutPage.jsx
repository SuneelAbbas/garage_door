import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="service-page">
      <section
        className="page-hero"
        style={{
          backgroundImage: `linear-gradient(135deg,rgba(10,26,60,.75) 50%,rgba(10,26,60,.55)), url(/images/hero-about.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h1>About Access Edge Garage Door — Atlanta's Trusted Garage Door Team</h1>
          <p className="page-hero-sub">
            Every great home deserves a garage door that works perfectly every time. That simple belief is what drives us at Access Edge Garage Door.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section overview-section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Our Story</span>
            <h2>How We Became Atlanta's Trusted Garage Door Company</h2>
          </div>
          <div className="overview-content">
            <p>Access Edge Garage Door was founded with a straightforward mission: give Atlanta homeowners a garage door service they can actually trust. Too often, homeowners call a garage door company only to deal with hidden fees, rushed work, or technicians who do not show up when promised. We saw an opportunity to do things differently — and that is exactly what we have done.</p>
            <p>Starting with a single truck and a commitment to honest pricing, we built Access Edge Garage Door one job at a time, one satisfied customer at a time. We focused on the neighborhoods we know — from the historic streets of Decatur to the sprawling suburbs of Marietta, Roswell, and Alpharetta. Every call we answered, every spring we replaced, every new door we installed reinforced our belief that quality work and clear communication matter more than anything. Today, we serve homeowners across all of Metro Atlanta with a team of experienced technicians who share the same values: show up on time, do the job right, charge a fair price, and treat every home like it is our own.</p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section" style={{ background: "var(--light)" }}>
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Our Mission</span>
            <h2>What Drives Us Every Day</h2>
          </div>
          <div className="mission-full">
            <div className="mission-box" style={{ maxWidth: "100%", marginTop: 0 }}>
              <div className="icon" style={{ fontSize: 40 }}>🎯</div>
              <p style={{ fontSize: 16, fontWeight: 600 }}>To provide Atlanta homeowners and small business owners with professional garage door services that are safe, reliable, and transparent — delivered by skilled technicians who take pride in their work and treat every customer like a neighbor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Our Values</span>
            <h2>What We Stand For</h2>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">⏰</div>
              <h3>Reliability</h3>
              <p>We show up when we say we will, with the parts and expertise needed to get the job done in one visit. No excuses, no delays.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔨</div>
              <h3>Craftsmanship</h3>
              <p>Every spring we wind, every track we align, every opener we program is done to the highest standard. We do not cut corners because your safety depends on our work.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3>Honesty</h3>
              <p>You get upfront pricing, clear explanations, and honest recommendations. We never recommend work you do not need, and we never add surprise charges to your bill.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🏘️</div>
              <h3>Community</h3>
              <p>We live and work in Atlanta. The families we serve are our neighbors, and building a trusted reputation in this community matters more to us than any single sale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="section" style={{ background: "var(--light)" }}>
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Why Trust Us</span>
            <h2>Why Homeowners Trust Access Edge</h2>
          </div>
          <div className="trust-checks" style={{ maxWidth: 700, margin: "0 auto" }}>
            <ul className="signs-list">
              <li><strong>Licensed & Fully Insured</strong> — Every Access Edge technician is background-checked, trained, and covered by liability insurance and workers' compensation, so you are protected on every job.</li>
              <li><strong>5-Star Rated Across Atlanta</strong> — We have earned hundreds of 5-star reviews from homeowners throughout Metro Atlanta, with consistent praise for our punctuality, professionalism, and fair pricing.</li>
              <li><strong>Same-Day Service, Every Day</strong> — Whether it is a routine repair or a full installation, we prioritize same-day service so you are never left waiting.</li>
              <li><strong>Warranty-Backed Work</strong> — Every repair and installation we perform is backed by a warranty on parts and labor. We stand behind our work because we know it is done right.</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className="cta-banner"
        style={{
          backgroundImage: `linear-gradient(rgba(10,20,40,.85), rgba(10,20,40,.85)), url(/images/cta-about.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h2>Experience the Access Edge Difference</h2>
          <p>Call us today to schedule your service and see why Atlanta homeowners trust Access Edge Garage Door.</p>
          <Link to="/contact" className="btn btn-orange">Get in Touch →</Link>
        </div>
      </section>
    </div>
  );
}
