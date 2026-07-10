import { Link } from "react-router-dom";

export default function ServiceEmergency() {
  return (
    <div className="service-page">
      <section
        className="page-hero"
        style={{
          backgroundImage: `linear-gradient(135deg,rgba(10,26,60,.75) 50%,rgba(10,26,60,.55)), url(/images/hero-emergency.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h1>24/7 Emergency Garage Door Service in Atlanta, GA</h1>
          <p className="page-hero-sub">
            A garage door emergency never happens at a convenient time. Whether your door is stuck open at 2 AM, your car is trapped inside, or a broken spring has made your door inoperable, Access Edge Garage Door is here to help — any time, day or night. Our emergency service team covers Atlanta and Metro Atlanta with rapid response, arriving equipped to handle the most urgent garage door problems safely and efficiently.
          </p>
        </div>
      </section>

      <section className="section why-choose">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Why Choose Us</span>
            <h2>Why Choose Us for Emergency Service</h2>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🕐</div>
              <h3>24/7 Availability, 365 Days a Year</h3>
              <p>Evenings, weekends, holidays — we never stop answering calls from Atlanta homeowners in need.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🚚</div>
              <h3>Rapid Response Across Metro Atlanta</h3>
              <p>Our technicians are strategically located to reach you quickly, typically within 60–90 minutes of your call.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔧</div>
              <h3>Fully Stocked Emergency Trucks</h3>
              <p>We carry springs, cables, openers, sensors, rollers, and tools for nearly every make and model, so we can fix most issues in a single visit.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🛡️</div>
              <h3>Licensed & Insured for Emergency Work</h3>
              <p>Safety is even more critical in an emergency. Our team follows strict protocols to secure your property and prevent further damage.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Our Process</span>
            <h2>Our Emergency Service Process</h2>
          </div>
          <div className="process-steps">
            <div className="step">
              <span className="step-num">1</span>
              <h3>Answer Your Call</h3>
              <p>When you call 470-666-4097, you speak directly to a live team member who assesses your situation and dispatches the nearest available technician.</p>
            </div>
            <div className="step">
              <span className="step-num">2</span>
              <h3>Arrive & Secure</h3>
              <p>Our technician arrives, evaluates the immediate danger, and takes steps to secure your property.</p>
            </div>
            <div className="step">
              <span className="step-num">3</span>
              <h3>Diagnose & Repair</h3>
              <p>We identify the root cause and perform the necessary repair using on-hand parts. If a permanent fix is not possible on the spot, we provide a temporary solution.</p>
            </div>
            <div className="step">
              <span className="step-num">4</span>
              <h3>Test & Confirm</h3>
              <p>We test the repair thoroughly, ensure safe operation, and provide clear instructions on any next steps or precautions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section overview-section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Overview</span>
            <h2>When Every Minute Counts</h2>
          </div>
          <div className="overview-content">
            <p>Garage door emergencies range from the inconvenient to the dangerous. A door that will not open means you cannot get your car out for work in the morning. A door that will not close leaves your home and family exposed to the elements and potential intruders. And a broken spring or snapped cable creates a safety hazard that can cause injury or property damage if not addressed immediately. These situations require urgent, professional attention — not a voicemail box or a next-day appointment.</p>
            <p>Access Edge Garage Door built our reputation on being there when Atlanta homeowners need us most. Our team lives and works in this community, and we understand the urgency of getting your garage door secure and functional. We prioritize emergency calls, dispatching experienced technicians who can handle everything from broken torsion springs and frayed cables to off-track doors and malfunctioning openers. No overtime gimmicks, no inflated after-hours pricing — just honest, fast service when you need it most.</p>
          </div>
        </div>
      </section>

      <section className="section signs-section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">When to Call</span>
            <h2>Signs You Need Emergency Garage Door Service</h2>
          </div>
          <ul className="signs-list">
            <li>The door is stuck open and will not close, leaving your home unsecured</li>
            <li>You hear a loud bang or snap — a spring or cable has likely broken</li>
            <li>The door came off its tracks and is leaning or hanging dangerously</li>
            <li>Your car is trapped inside the garage and you cannot get it out</li>
            <li>There is visible damage from a vehicle impact or severe weather</li>
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
                <span>Do you charge more for emergency service calls?</span>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">We keep our emergency pricing fair and transparent. While there is a standard after-hours service fee, we do not inflate prices simply because it is late or a weekend. You will receive a clear quote before any work begins.</div>
            </div>
            <div className="faq-item">
              <div className="faq-item-head">
                <span>How quickly can you get to my home in Atlanta?</span>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">Our average emergency response time is 60 to 90 minutes across most of Metro Atlanta. In urgent situations, we can prioritize your call and arrive even faster.</div>
            </div>
            <div className="faq-item">
              <div className="faq-item-head">
                <span>What should I do while waiting for the emergency technician?</span>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">If the door is stuck open, do not attempt to force it closed — this can cause further damage or injury. Keep children and pets away from the door area.</div>
            </div>
            <div className="faq-item">
              <div className="faq-item-head">
                <span>Can you fix any garage door issue during an emergency call?</span>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">We can resolve most common emergencies — broken springs, snapped cables, off-track doors, opener failures — in a single visit using parts from our fully stocked trucks. For major damage requiring custom parts, we will provide a temporary solution and schedule permanent repairs.</div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="cta-banner"
        style={{
          backgroundImage: `linear-gradient(rgba(10,20,40,.85), rgba(10,20,40,.85)), url(/images/cta-emergency.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h2>Emergency? We Are Standing By 24/7</h2>
          <p>Garage door emergency? Do not wait. Call Access Edge Garage Door 24/7 at 470-666-4097 for fast, reliable emergency service in Atlanta.</p>
          <a href="tel:4706664097" className="btn btn-orange">Call 470-666-4097 Now →</a>
        </div>
      </section>
    </div>
  );
}
