import { Link } from "react-router-dom";

export default function ServiceSpring() {
  return (
    <div className="service-page">
      <section
        className="page-hero"
        style={{
          backgroundImage: `linear-gradient(135deg,rgba(10,26,60,.75) 50%,rgba(10,26,60,.55)), url(/images/hero-spring.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h1>Professional Garage Door Spring Replacement in Atlanta, GA</h1>
          <p className="page-hero-sub">
            Your garage door springs do the heavy lifting — literally. Torsion and extension springs counterbalance the weight of the door, making it possible to open and close smoothly. When a spring breaks, your door becomes inoperable and potentially dangerous. At Access Edge Garage Door, we specialize in fast, safe spring replacement for homes and businesses across Atlanta and Metro Atlanta.
          </p>
        </div>
      </section>

      <section className="section why-choose">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Why Choose Us</span>
            <h2>Why Choose Us for Spring Replacement</h2>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🔧</div>
              <h3>Expert Knowledge of Torsion & Extension Springs</h3>
              <p>We assess your door's weight and size to install the correct spring type with the right tension every time.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🛡️</div>
              <h3>Safety-First Approach</h3>
              <p>Springs are under lethal tension. Our technicians are trained in advanced safety protocols and use industry-spec tools to prevent accidents.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⭐</div>
              <h3>High-Quality, Long-Lasting Springs</h3>
              <p>We use premium-grade oil-tempered springs rated for 20,000+ cycles, so your replacement lasts years longer than budget alternatives.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Fast Turnaround, Same-Day Service</h3>
              <p>Most spring replacements are completed within 1–2 hours, and we carry a full range of springs on our trucks.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Our Process</span>
            <h2>Our Spring Replacement Process</h2>
          </div>
          <div className="process-steps">
            <div className="step">
              <span className="step-num">1</span>
              <h3>Inspect the System</h3>
              <p>We check both springs, cables, drums, and hardware for wear, damage, or improper tension.</p>
            </div>
            <div className="step">
              <span className="step-num">2</span>
              <h3>Select the Correct Springs</h3>
              <p>Based on door weight, height, and usage frequency, we choose the right gauge, length, and winding configuration.</p>
            </div>
            <div className="step">
              <span className="step-num">3</span>
              <h3>Safe Removal & Installation</h3>
              <p>We release tension on the old spring using proper winding bars, remove it, and install the new spring with precise tension calibration.</p>
            </div>
            <div className="step">
              <span className="step-num">4</span>
              <h3>Test & Balance</h3>
              <p>We cycle the door multiple times, adjust tension for smooth operation, and verify the auto-reverse safety system.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section overview-section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Overview</span>
            <h2>Why Spring Replacement Requires a Professional</h2>
          </div>
          <div className="overview-content">
            <p>Garage door springs are the most stressed component of your entire garage door system. Each time you open or close your door, the springs endure a full cycle of tension and release. Over time, metal fatigue sets in, and eventually the spring snaps. You might hear a loud bang — that is the sound of a torsion spring breaking. When this happens, the door may slam shut, get stuck partway, or refuse to move at all. Attempting to lift a door with broken springs is not only difficult but dangerous, as the full weight of the door becomes unmanageable.</p>
            <p>At Access Edge Garage Door, we replace broken springs with precision and speed. Our technicians serve homeowners throughout Atlanta — from Buckhead to East Atlanta and everywhere in between — replacing both torsion springs (mounted above the door) and extension springs (mounted along the tracks). We use only high-cycle springs that outlast standard options by thousands of cycles, saving you money and hassle in the long run. When a spring breaks, call us. We will have your door back in action the same day.</p>
          </div>
        </div>
      </section>

      <section className="section signs-section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Signs You Need Spring Replacement</span>
            <h2>Signs You Need Spring Replacement</h2>
          </div>
          <ul className="signs-list">
            <li>The door is extremely heavy and difficult to lift manually</li>
            <li>You heard a loud bang or snapping sound from the garage area</li>
            <li>The door opens unevenly, with one side lifting faster than the other</li>
            <li>Visible gaps, rust, or stretching in the spring coils</li>
            <li>The door slams down quickly when closing instead of lowering smoothly</li>
          </ul>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">FAQs</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            <div className="faq-item">
              <div className="faq-item-head">
                <span>How long do garage door springs typically last?</span>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">Standard torsion and extension springs last 7 to 10 years or roughly 10,000 to 20,000 cycles (one open/close equals one cycle). Using springs rated for higher cycles extends their lifespan significantly.</div>
            </div>
            <div className="faq-item">
              <div className="faq-item-head">
                <span>Can I replace just one spring, or should I replace both?</span>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">We always recommend replacing both springs at the same time, even if only one has broken. The other spring has endured the same wear and will likely fail soon. Replacing both saves you money on a second service call.</div>
            </div>
            <div className="faq-item">
              <div className="faq-item-head">
                <span>Is garage door spring replacement dangerous?</span>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">Yes, it is one of the most dangerous DIY garage door repairs. Springs store tremendous energy, and improper handling can cause serious injury or property damage. Always hire a licensed professional.</div>
            </div>
            <div className="faq-item">
              <div className="faq-item-head">
                <span>How much does spring replacement cost in Atlanta?</span>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">Spring replacement typically costs between $150 and $400 depending on spring type, door size, and whether one or both springs are replaced. We provide free, upfront quotes.</div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="cta-banner"
        style={{
          backgroundImage: `linear-gradient(rgba(10,20,40,.85), rgba(10,20,40,.85)), url(/images/cta-spring.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h2>Broken Spring? Call Us Today</h2>
          <p>Is your garage door heavy or unresponsive? Do not risk it — call Access Edge Garage Door for safe, professional spring replacement today.</p>
          <Link to="/contact" className="btn btn-orange">Book Spring Service →</Link>
        </div>
      </section>
    </div>
  );
}
