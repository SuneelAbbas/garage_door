import React from "react";
import { Link } from "react-router-dom";
import "./ServicePages.css";
import { IconClock, IconTruck, IconWrench, IconShield } from "../data/icons";

const benefits = [
  {
    icon: <IconClock size={24} />,
    title: "24/7 Availability, 365 Days a Year",
    text: "Evenings, weekends, holidays — we never stop answering calls from Atlanta homeowners in need.",
  },
  {
    icon: <IconTruck size={24} />,
    title: "Rapid Response Across Metro Atlanta",
    text: "Our technicians are strategically located to reach you quickly, typically within 60–90 minutes of your call.",
  },
  {
    icon: <IconWrench size={24} />,
    title: "Fully Stocked Emergency Trucks",
    text: "We carry springs, cables, openers, sensors, rollers, and tools for nearly every make and model, so we can fix most issues in a single visit.",
  },
  {
    icon: <IconShield size={24} />,
    title: "Licensed & Insured for Emergency Work",
    text: "Safety is even more critical in an emergency. Our team follows strict protocols to secure your property and prevent further damage.",
  },
];

const steps = [
  { num: 1, title: "Answer Your Call", text: "When you call 470-666-4097, you speak directly to a live team member who assesses your situation and dispatches the nearest available technician." },
  { num: 2, title: "Arrive & Secure", text: "Our technician arrives, evaluates the immediate danger, and takes steps to secure your property." },
  { num: 3, title: "Diagnose & Repair", text: "We identify the root cause and perform the necessary repair using on-hand parts. If a permanent fix is not possible on the spot, we provide a temporary solution." },
  { num: 4, title: "Test & Confirm", text: "We test the repair thoroughly, ensure safe operation, and provide clear instructions on any next steps or precautions." },
];

const signs = [
  "The door is stuck open and will not close, leaving your home unsecured",
  "You hear a loud bang or snap — a spring or cable has likely broken",
  "The door came off its tracks and is leaning or hanging dangerously",
  "Your car is trapped inside the garage and you cannot get it out",
  "There is visible damage from a vehicle impact or severe weather",
];

const faqs = [
  { q: "Do you charge more for emergency service calls?", a: "We keep our emergency pricing fair and transparent. While there is a standard after-hours service fee, we do not inflate prices simply because it is late or a weekend. You will receive a clear quote before any work begins." },
  { q: "How quickly can you get to my home in Atlanta?", a: "Our average emergency response time is 60 to 90 minutes across most of Metro Atlanta. In urgent situations, we can prioritize your call and arrive even faster." },
  { q: "What should I do while waiting for the emergency technician?", a: "If the door is stuck open, do not attempt to force it closed — this can cause further damage or injury. Keep children and pets away from the door area." },
  { q: "Can you fix any garage door issue during an emergency call?", a: "We can resolve most common emergencies — broken springs, snapped cables, off-track doors, opener failures — in a single visit using parts from our fully stocked trucks. For major damage requiring custom parts, we will provide a temporary solution and schedule permanent repairs." },
];

export default function ServiceEmergency() {
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
            24/7 Emergency Response
          </div>
          <h1>24/7 Emergency Garage Door Service in Atlanta, GA</h1>
          <p className="page-hero-sub">
            A garage door emergency never happens at a convenient time. Whether your door is stuck open at 2 AM, your car is trapped inside, or a broken spring has made your door inoperable, Access Edge Garage Door is here to help — any time, day or night. Our emergency service team covers Atlanta and Metro Atlanta with rapid response, arriving equipped to handle the most urgent garage door problems safely and efficiently.
          </p>
          <div className="sv-hero-stats">
            <div className="sv-hero-stat">
              <span className="sv-hero-stat-num">24/7</span>
              <span className="sv-hero-stat-label">Always Available</span>
            </div>
            <div className="sv-hero-stat-divider" />
            <div className="sv-hero-stat">
              <span className="sv-hero-stat-num">60–90 Min</span>
              <span className="sv-hero-stat-label">Response Time</span>
            </div>
            <div className="sv-hero-stat-divider" />
            <div className="sv-hero-stat">
              <span className="sv-hero-stat-num">4.9★</span>
              <span className="sv-hero-stat-label">Avg. Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ WHY CHOOSE ════════ */}
      <section className="section why-choose sv-why-choose" data-reveal="fade-up">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Why Choose Us</span>
            <h2>Why Choose Us for Emergency Service</h2>
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
            <h2>Our Emergency Service Process</h2>
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
            <h2>When Every Minute Counts</h2>
          </div>
          <div className="overview-content">
            <p>Garage door emergencies range from the inconvenient to the dangerous. A door that will not open means you cannot get your car out for work in the morning. A door that will not close leaves your home and family exposed to the elements and potential intruders. And a broken spring or snapped cable creates a safety hazard that can cause injury or property damage if not addressed immediately. These situations require urgent, professional attention — not a voicemail box or a next-day appointment.</p>
            <p>Access Edge Garage Door built our reputation on being there when Atlanta homeowners need us most. Our team lives and works in this community, and we understand the urgency of getting your garage door secure and functional. We prioritize emergency calls, dispatching experienced technicians who can handle everything from broken torsion springs and frayed cables to off-track doors and malfunctioning openers. No overtime gimmicks, no inflated after-hours pricing — just honest, fast service when you need it most.</p>
          </div>
        </div>
      </section>

      {/* ════════ SIGNS ════════ */}
      <section className="section sv-signs" data-reveal="fade-up" style={{ background: "var(--light)" }}>
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">When to Call</span>
            <h2>Signs You Need Emergency Garage Door Service</h2>
            <p>If any of these situations sound familiar, call us immediately.</p>
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
          backgroundImage: `linear-gradient(rgba(10,20,40,.85), rgba(10,20,40,.85)), url(/images/cta-emergency.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="sv-cta-orb sv-cta-orb--1" />
        <div className="sv-cta-orb sv-cta-orb--2" />
        <div className="container">
          <h2>Emergency? We Are Standing By 24/7</h2>
          <p>Garage door emergency? Do not wait. Call Access Edge Garage Door 24/7 at 470-666-4097 for fast, reliable emergency service in Atlanta.</p>
          <a href="tel:4706664097" className="btn btn-orange">Call 470-666-4097 Now →</a>
        </div>
      </section>
    </div>
  );
}
