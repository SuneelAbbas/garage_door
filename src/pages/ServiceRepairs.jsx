import React from "react";
import { Link } from "react-router-dom";
import "./ServicePages.css";

const benefits = [
  {
    icon: "⚡",
    title: "Same-Day Service Across Atlanta",
    text: "We understand emergencies do not wait. Most repairs are completed the same day you call, with no extra charge for rush scheduling.",
  },
  {
    icon: "🔧",
    title: "Experienced, Certified Technicians",
    text: "Every repair is performed by skilled professionals who know every make and model inside and out.",
  },
  {
    icon: "📋",
    title: "Transparent, Upfront Pricing",
    text: "We diagnose the issue, explain your options, and give you the price before any work begins. No surprises, ever.",
  },
  {
    icon: "🛡️",
    title: "Licensed & Insured for Your Protection",
    text: "Your property and safety matter. We carry full liability insurance and workers' compensation coverage.",
  },
];

const steps = [
  { num: 1, title: "Diagnose the Problem", text: "We inspect every component — springs, cables, rollers, tracks, hinges, opener — to identify the root cause." },
  { num: 2, title: "Explain Your Options", text: "You get a clear breakdown of what is needed, how much it costs, and how long it will take." },
  { num: 3, title: "Professional Repair", text: "Using premium-grade replacement parts, we complete the repair with precision and safety as our top priorities." },
  { num: 4, title: "Safety & Functionality Test", text: "We run multiple open/close cycles, test the auto-reverse safety system, and ensure smooth, quiet operation before we leave." },
];

const signs = [
  "The door will not open or close fully, reverses unexpectedly, or moves erratically",
  "You hear grinding, scraping, or snapping sounds during operation",
  "The door is sagging, crooked, or has visible gaps when closed",
  "Your remote or wall switch works intermittently or not at all",
  "The door feels heavy or difficult to lift manually",
];

const faqs = [
  { q: "Can you repair my garage door the same day?", a: "In most cases, yes. We keep a full inventory of common replacement parts on our trucks and schedule same-day service for customers in Atlanta and the surrounding metro area. Call us before noon for the best chance of same-day repair." },
  { q: "How long does a typical garage door repair take?", a: "Most repairs — including spring replacements, cable repairs, and opener troubleshooting — are completed within 1 to 3 hours. We work efficiently without cutting corners." },
  { q: "Is it safe to use my garage door if it is making strange noises?", a: "We recommend stopping use immediately and calling a professional. Unusual noises often indicate worn springs, loose hardware, or failing rollers that can lead to sudden failure or injury." },
  { q: "Do you charge for service calls or estimates?", a: "We provide free estimates for all repairs. There is no charge for the diagnostic visit — you only pay for the work you approve." },
];

export default function ServiceRepairs() {
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
            Atlanta's Trusted Repair Experts
          </div>
          <h1>Expert Garage Door Repairs in Atlanta — Fast, Reliable, Affordable</h1>
          <p className="page-hero-sub">
            When your garage door breaks down, it is more than an inconvenience — it is a security risk and a disruption to your daily routine. At Access Edge Garage Door, we provide fast, professional repair services across Atlanta and Metro Atlanta. From broken springs and snapped cables to off-track doors and malfunctioning openers, our technicians arrive equipped to diagnose and fix the problem on the spot.
          </p>
          <div className="sv-hero-stats">
            <div className="sv-hero-stat">
              <span className="sv-hero-stat-num">1000+</span>
              <span className="sv-hero-stat-label">Repairs Completed</span>
            </div>
            <div className="sv-hero-stat-divider" />
            <div className="sv-hero-stat">
              <span className="sv-hero-stat-num">4.9★</span>
              <span className="sv-hero-stat-label">Avg. Rating</span>
            </div>
            <div className="sv-hero-stat-divider" />
            <div className="sv-hero-stat">
              <span className="sv-hero-stat-num">Same-Day</span>
              <span className="sv-hero-stat-label">Service Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ WHY CHOOSE ════════ */}
      <section className="section why-choose sv-why-choose" data-reveal="fade-up">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Why Choose Us</span>
            <h2>Why Choose Us for Garage Door Repairs</h2>
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
            <h2>Our Garage Door Repair Process</h2>
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
            <h2>Professional Garage Door Repair You Can Trust</h2>
          </div>
          <div className="overview-content">
            <p>Garage doors are complex mechanical systems that endure significant wear and tear. Between the tension in the springs, the constant movement of cables and rollers, and the strain on the opener motor, something is bound to need attention eventually. When that happens, attempting a do-it-yourself repair can be dangerous — garage door springs are under extreme tension and can cause serious injury if mishandled. That is where Access Edge Garage Door comes in.</p>
            <p>We have been keeping Atlanta homes safe and functional with prompt, professional garage door repairs. Whether you live in a historic bungalow in Decatur, a modern home in Alpharetta, or a townhouse in Midtown, we bring the same level of expertise and care to every job. Our trucks are stocked with thousands of parts from leading manufacturers, which means fewer return visits and faster service for you. From minor adjustments to major component replacements, we get your door working like new — and we stand behind every repair with a warranty on parts and labor.</p>
          </div>
        </div>
      </section>

      {/* ════════ SIGNS ════════ */}
      <section className="section sv-signs" data-reveal="fade-up" style={{ background: "var(--light)" }}>
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Signs You Need Repairs</span>
            <h2>Signs You Need Garage Door Repair</h2>
            <p>If your garage door is showing any of these signs, it is time to call a professional.</p>
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
          backgroundImage: `linear-gradient(rgba(10,20,40,.85), rgba(10,20,40,.85)), url(/images/cta-repairs.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="sv-cta-orb sv-cta-orb--1" />
        <div className="sv-cta-orb sv-cta-orb--2" />
        <div className="container">
          <h2>Need a Repair? We Are Ready to Help</h2>
          <p>Do not let a broken garage door disrupt your day. Call Access Edge Garage Door for fast, professional repair service in Atlanta.</p>
          <Link to="/contact" className="btn btn-orange">Schedule Your Repair →</Link>
        </div>
      </section>
    </div>
  );
}
