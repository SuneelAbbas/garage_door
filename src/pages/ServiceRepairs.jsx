import { Link } from "react-router-dom";

export default function ServiceRepairs() {
  return (
    <div className="service-page">
      <section
        className="page-hero"
        style={{
          backgroundImage: `linear-gradient(135deg,rgba(10,26,60,.75) 50%,rgba(10,26,60,.55)), url(/images/hero-repairs.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h1>Expert Garage Door Repairs in Atlanta — Fast, Reliable, Affordable</h1>
          <p className="page-hero-sub">
            When your garage door breaks down, it is more than an inconvenience — it is a security risk and a disruption to your daily routine. At Access Edge Garage Door, we provide fast, professional repair services across Atlanta and Metro Atlanta. From broken springs and snapped cables to off-track doors and malfunctioning openers, our technicians arrive equipped to diagnose and fix the problem on the spot.
          </p>
        </div>
      </section>

      <section className="section why-choose">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Why Choose Us</span>
            <h2>Why Choose Us for Garage Door Repairs</h2>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Same-Day Service Across Atlanta</h3>
              <p>We understand emergencies do not wait. Most repairs are completed the same day you call, with no extra charge for rush scheduling.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔧</div>
              <h3>Experienced, Certified Technicians</h3>
              <p>Every repair is performed by skilled professionals who know every make and model inside and out.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📋</div>
              <h3>Transparent, Upfront Pricing</h3>
              <p>We diagnose the issue, explain your options, and give you the price before any work begins. No surprises, ever.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🛡️</div>
              <h3>Licensed & Insured for Your Protection</h3>
              <p>Your property and safety matter. We carry full liability insurance and workers' compensation coverage.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Our Process</span>
            <h2>Our Garage Door Repair Process</h2>
          </div>
          <div className="process-steps">
            <div className="step">
              <span className="step-num">1</span>
              <h3>Diagnose the Problem</h3>
              <p>We inspect every component — springs, cables, rollers, tracks, hinges, opener — to identify the root cause.</p>
            </div>
            <div className="step">
              <span className="step-num">2</span>
              <h3>Explain Your Options</h3>
              <p>You get a clear breakdown of what is needed, how much it costs, and how long it will take.</p>
            </div>
            <div className="step">
              <span className="step-num">3</span>
              <h3>Professional Repair</h3>
              <p>Using premium-grade replacement parts, we complete the repair with precision and safety as our top priorities.</p>
            </div>
            <div className="step">
              <span className="step-num">4</span>
              <h3>Safety & Functionality Test</h3>
              <p>We run multiple open/close cycles, test the auto-reverse safety system, and ensure smooth, quiet operation before we leave.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section overview-section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Overview</span>
            <h2>Professional Garage Door Repair You Can Trust</h2>
          </div>
          <div className="overview-content">
            <p>Garage doors are complex mechanical systems that endure significant wear and tear. Between the tension in the springs, the constant movement of cables and rollers, and the strain on the opener motor, something is bound to need attention eventually. When that happens, attempting a do-it-yourself repair can be dangerous — garage door springs are under extreme tension and can cause serious injury if mishandled. That is where Access Edge Garage Door comes in.</p>
            <p>We have been keeping Atlanta homes safe and functional with prompt, professional garage door repairs. Whether you live in a historic bungalow in Decatur, a modern home in Alpharetta, or a townhouse in Midtown, we bring the same level of expertise and care to every job. Our trucks are stocked with thousands of parts from leading manufacturers, which means fewer return visits and faster service for you. From minor adjustments to major component replacements, we get your door working like new — and we stand behind every repair with a warranty on parts and labor.</p>
          </div>
        </div>
      </section>

      <section className="section signs-section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Signs You Need Repairs</span>
            <h2>Signs You Need Garage Door Repair</h2>
          </div>
          <ul className="signs-list">
            <li>The door will not open or close fully, reverses unexpectedly, or moves erratically</li>
            <li>You hear grinding, scraping, or snapping sounds during operation</li>
            <li>The door is sagging, crooked, or has visible gaps when closed</li>
            <li>Your remote or wall switch works intermittently or not at all</li>
            <li>The door feels heavy or difficult to lift manually</li>
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
                <span>Can you repair my garage door the same day?</span>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">In most cases, yes. We keep a full inventory of common replacement parts on our trucks and schedule same-day service for customers in Atlanta and the surrounding metro area. Call us before noon for the best chance of same-day repair.</div>
            </div>
            <div className="faq-item">
              <div className="faq-item-head">
                <span>How long does a typical garage door repair take?</span>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">Most repairs — including spring replacements, cable repairs, and opener troubleshooting — are completed within 1 to 3 hours. We work efficiently without cutting corners.</div>
            </div>
            <div className="faq-item">
              <div className="faq-item-head">
                <span>Is it safe to use my garage door if it is making strange noises?</span>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">We recommend stopping use immediately and calling a professional. Unusual noises often indicate worn springs, loose hardware, or failing rollers that can lead to sudden failure or injury.</div>
            </div>
            <div className="faq-item">
              <div className="faq-item-head">
                <span>Do you charge for service calls or estimates?</span>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">We provide free estimates for all repairs. There is no charge for the diagnostic visit — you only pay for the work you approve.</div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="cta-banner"
        style={{
          backgroundImage: `linear-gradient(rgba(10,20,40,.85), rgba(10,20,40,.85)), url(/images/cta-repairs.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h2>Need a Repair? We Are Ready to Help</h2>
          <p>Do not let a broken garage door disrupt your day. Call Access Edge Garage Door for fast, professional repair service in Atlanta.</p>
          <Link to="/contact" className="btn btn-orange">Schedule Your Repair →</Link>
        </div>
      </section>
    </div>
  );
}
