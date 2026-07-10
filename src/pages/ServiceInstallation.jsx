import { Link } from "react-router-dom";

export default function ServiceInstallation() {
  return (
    <div className="service-page">
      {/* Hero */}
      <section
        className="page-hero"
        style={{
          backgroundImage: `linear-gradient(135deg,rgba(10,26,60,.75) 50%,rgba(10,26,60,.55)), url(/images/hero-installation.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h1>Professional New Garage Door Installation in Atlanta, GA</h1>
          <p className="page-hero-sub">
            Your garage door is one of the most visible features of your home. At Access Edge Garage Door, we install premium garage doors that boost curb appeal, improve energy efficiency, and increase property value. Serving Atlanta and all of Metro Atlanta, our experienced team handles everything from custom door selection to professional installation and cleanup.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-choose">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Why Choose Us</span>
            <h2>Why Choose Us for New Garage Door Installation</h2>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🏆</div>
              <h3>Premium Brands, Custom Fit</h3>
              <p>We partner with leading manufacturers to offer a wide range of styles, materials, and insulation levels so you get a door that matches your home and budget.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🛡️</div>
              <h3>Licensed & Insured Professionals</h3>
              <p>Every installation is performed by our trained, background-checked technicians who take pride in precise, code-compliant work.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Same-Day Service Available</h3>
              <p>Need a new door fast? We offer same-day installation for select models across the Atlanta area.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Free, Transparent Quotes</h3>
              <p>We provide detailed written estimates with no hidden fees. The price we quote is the price you pay — no surprises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ background: "var(--light)" }}>
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Our Process</span>
            <h2>How We Install Your New Garage Door</h2>
          </div>
          <div className="process-steps">
            <div className="step">
              <div className="step-num">1</div>
              <h3>Free Consultation & Quote</h3>
              <p>We assess your current setup, discuss your style and budget, and provide a transparent quote.</p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <h3>Door Selection</h3>
              <p>Choose from steel, wood, aluminum, or composite in hundreds of colors and configurations.</p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <h3>Professional Installation</h3>
              <p>Our technicians handle removal, track setup, spring installation, wiring, and calibration.</p>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <h3>Cleanup & Walkthrough</h3>
              <p>We haul away the old door, clean the workspace, and walk you through your new door's operation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section overview-section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Overview</span>
            <h2>What to Expect from Your New Garage Door Installation</h2>
          </div>
          <div className="overview-content">
            <p>A new garage door installation is one of the most cost-effective home improvement projects you can undertake. According to Remodeling Magazine's Cost vs. Value Report, replacing a garage door consistently ranks among the top home improvement projects for return on investment — often recouping over 90% of the cost at resale.</p>
            <p>At Access Edge Garage Door, we treat every installation as a custom job. We do not cut corners, use substandard materials, or rush the process. Our team takes precise measurements, ensures proper track alignment, installs high-quality springs and rollers, and calibrates the door for smooth, quiet operation. We use only top-grade hardware — including galvanized steel tracks, sealed ball-bearing rollers, and heavy-duty hinges — so your new door performs reliably for years.</p>
            <p>We serve homeowners across Metro Atlanta, including Decatur, Tucker, Stone Mountain, Ellenwood, Stockbridge, and all surrounding communities. Whether you are building a new home, replacing an aging door, or upgrading to a more energy-efficient model, Access Edge Garage Door is your trusted partner for quality installation.</p>
          </div>
        </div>
      </section>

      {/* Signs */}
      <section className="section" style={{ background: "var(--light)" }}>
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Signs You Need a New Garage Door</span>
            <h2>Time for an Upgrade?</h2>
            <p>If your garage door is showing any of these signs, it may be time to consider a replacement.</p>
          </div>
          <ul className="signs-list">
            <li>Visible rust, dents, or corrosion on the door panels</li>
            <li>High energy bills — poor insulation is driving up heating and cooling costs</li>
            <li>Frequent breakdowns or repairs costing more than a replacement</li>
            <li>Excessive noise during operation (grinding, squeaking, rattling)</li>
            <li>Outdated appearance that detracts from your home's curb appeal</li>
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">FAQs</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            <div className="faq-item">
              <div className="faq-item-head">
                <span>How much does a new garage door installation cost in Atlanta?</span>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">The cost varies based on door size, material, insulation level, and custom features. On average, Atlanta homeowners invest between $900 and $4,500 for a complete installation. We provide free, no-obligation quotes tailored to your specific needs.</div>
            </div>
            <div className="faq-item">
              <div className="faq-item-head">
                <span>How long does a new garage door installation take?</span>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">Most standard installations are completed in 4 to 6 hours. More complex custom doors may require a full day. We schedule around your availability and work efficiently to minimize disruption.</div>
            </div>
            <div className="faq-item">
              <div className="faq-item-head">
                <span>Do you handle old door removal and disposal?</span>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">Yes. Every installation includes full removal of your existing door and hardware, plus complete cleanup and haul-away. You will not have to lift a finger.</div>
            </div>
            <div className="faq-item">
              <div className="faq-item-head">
                <span>What garage door brands do you carry?</span>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">We work with top manufacturers including Clopay, Amarr, Wayne Dalton, and CHI Overhead Doors, offering steel, wood, aluminum, and composite options at multiple price points.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="cta-banner"
        style={{
          backgroundImage: `linear-gradient(rgba(10,20,40,.85), rgba(10,20,40,.85)), url(/images/cta-installation.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h2>Ready to Transform Your Home?</h2>
          <p>Ready to transform your home with a beautiful, energy-efficient garage door? Call Access Edge Garage Door for your free consultation and quote today.</p>
          <Link to="/contact" className="btn btn-orange">Get Your Free Quote →</Link>
        </div>
      </section>
    </div>
  );
}
