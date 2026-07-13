import React from "react";
import { Link } from "react-router-dom";
import "./ServicePages.css";

const benefits = [
  {
    icon: "🔧",
    title: "Expert Knowledge of Torsion & Extension Springs",
    text: "We assess your door's weight and size to install the correct spring type with the right tension every time.",
  },
  {
    icon: "🛡️",
    title: "Safety-First Approach",
    text: "Springs are under lethal tension. Our technicians are trained in advanced safety protocols and use industry-spec tools to prevent accidents.",
  },
  {
    icon: "⭐",
    title: "High-Quality, Long-Lasting Springs",
    text: "We use premium-grade oil-tempered springs rated for 20,000+ cycles, so your replacement lasts years longer than budget alternatives.",
  },
  {
    icon: "⚡",
    title: "Fast Turnaround, Same-Day Service",
    text: "Most spring replacements are completed within 1–2 hours, and we carry a full range of springs on our trucks.",
  },
];

const steps = [
  { num: 1, title: "Inspect the System", text: "We check both springs, cables, drums, and hardware for wear, damage, or improper tension." },
  { num: 2, title: "Select the Correct Springs", text: "Based on door weight, height, and usage frequency, we choose the right gauge, length, and winding configuration." },
  { num: 3, title: "Safe Removal & Installation", text: "We release tension on the old spring using proper winding bars, remove it, and install the new spring with precise tension calibration." },
  { num: 4, title: "Test & Balance", text: "We cycle the door multiple times, adjust tension for smooth operation, and verify the auto-reverse safety system." },
];

const signs = [
  "The door is extremely heavy and difficult to lift manually",
  "You heard a loud bang or snapping sound from the garage area",
  "The door opens unevenly, with one side lifting faster than the other",
  "Visible gaps, rust, or stretching in the spring coils",
  "The door slams down quickly when closing instead of lowering smoothly",
];

const faqs = [
  { q: "How long do garage door springs typically last?", a: "Standard torsion and extension springs last 7 to 10 years or roughly 10,000 to 20,000 cycles (one open/close equals one cycle). Using springs rated for higher cycles extends their lifespan significantly." },
  { q: "Can I replace just one spring, or should I replace both?", a: "We always recommend replacing both springs at the same time, even if only one has broken. The other spring has endured the same wear and will likely fail soon. Replacing both saves you money on a second service call." },
  { q: "Is garage door spring replacement dangerous?", a: "Yes, it is one of the most dangerous DIY garage door repairs. Springs store tremendous energy, and improper handling can cause serious injury or property damage. Always hire a licensed professional." },
  { q: "How much does spring replacement cost in Atlanta?", a: "Spring replacement typically costs between $150 and $400 depending on spring type, door size, and whether one or both springs are replaced. We provide free, upfront quotes." },
];

export default function ServiceSpring() {
  const [openFaq, setOpenFaq] = React.useState(null);

  return (
    <div className="service-page">
      {/* ════════ HERO ════════ */}
      <section
        className="page-hero sv-hero"
        style={{
          backgroundImage: `linear-gradient(135deg,rgba(10,26,60,.75) 50%,rgba(10,26,60,.55)), url(/images/garage_image.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="sv-hero-orb sv-hero-orb--1" />
        <div className="sv-hero-orb sv-hero-orb--2" />
        <div className="sv-hero-orb sv-hero-orb--3" />
        <div className="sv-hero-grid" />
        <div className="container">
          <div className="sv-hero-badge">
            <span className="sv-hero-badge-dot" />
            Atlanta's Spring Replacement Specialists
          </div>
          <h1>Professional Garage Door Spring Replacement in Atlanta, GA</h1>
          <p className="page-hero-sub">
            Your garage door springs do the heavy lifting — literally. Torsion and extension springs counterbalance the weight of the door, making it possible to open and close smoothly. When a spring breaks, your door becomes inoperable and potentially dangerous. At Access Edge Garage Door, we specialize in fast, safe spring replacement for homes and businesses across Atlanta and Metro Atlanta.
          </p>
          <div className="sv-hero-stats">
            <div className="sv-hero-stat">
              <span className="sv-hero-stat-num">5000+</span>
              <span className="sv-hero-stat-label">Springs Replaced</span>
            </div>
            <div className="sv-hero-stat-divider" />
            <div className="sv-hero-stat">
              <span className="sv-hero-stat-num">4.9★</span>
              <span className="sv-hero-stat-label">Avg. Rating</span>
            </div>
            <div className="sv-hero-stat-divider" />
            <div className="sv-hero-stat">
              <span className="sv-hero-stat-num">1–2 Hour</span>
              <span className="sv-hero-stat-label">Typical Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ WHY CHOOSE ════════ */}
      <section className="section why-choose sv-why-choose" data-reveal="fade-up">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Why Choose Us</span>
            <h2>Why Choose Us for Spring Replacement</h2>
          </div>
          <div className="benefits-grid" data-reveal-stagger>
            {benefits.map((b, i) => (
              <div key={i} className="benefit-card sv-benefit-card">
                <div className="sv-benefit-icon-circle">
                  <div className="benefit-icon">{b.icon}</div>
                </div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ PROCESS ════════ */}
      <section className="section sv-process" data-reveal="fade-up" style={{ background: "var(--light)" }}>
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Our Process</span>
            <h2>Our Spring Replacement Process</h2>
          </div>
          <div className="process-steps">
            {steps.map((s) => (
              <div key={s.num} className="step sv-step">
                <div className="sv-step-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ OVERVIEW ════════ */}
      <section className="section overview-section sv-overview" data-reveal="fade-up">
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

      {/* ════════ SIGNS ════════ */}
      <section className="section sv-signs" data-reveal="fade-up" style={{ background: "var(--light)" }}>
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Signs You Need Spring Replacement</span>
            <h2>Time for New Springs?</h2>
            <p>If your garage door is showing any of these signs, your springs may need attention.</p>
          </div>
          <ul className="signs-list sv-signs-list">
            {signs.map((s, i) => (
              <li key={i}>
                <span className="sv-sign-icon">⚠</span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ════════ FAQS ════════ */}
      <section className="section sv-faq" data-reveal="fade-up">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">FAQs</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div
                key={i}
                className={`faq-item sv-faq-item${openFaq === i ? " sv-faq-item--open" : ""}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="faq-item-head sv-faq-item-head">
                  <span>{f.q}</span>
                  <span className="faq-toggle sv-faq-toggle">+</span>
                </div>
                <div className="faq-answer sv-faq-answer">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section
        className="cta-banner sv-cta"
        data-reveal="fade-up"
        style={{
          backgroundImage: `linear-gradient(rgba(10,20,40,.85), rgba(10,20,40,.85)), url(/images/cta-spring.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="sv-cta-orb sv-cta-orb--1" />
        <div className="sv-cta-orb sv-cta-orb--2" />
        <div className="container">
          <h2>Broken Spring? Call Us Today</h2>
          <p>Is your garage door heavy or unresponsive? Do not risk it — call Access Edge Garage Door for safe, professional spring replacement today.</p>
          <Link to="/contact" className="btn btn-orange">Book Spring Service →</Link>
        </div>
      </section>
    </div>
  );
}
