import React from "react";
import { Link } from "react-router-dom";
import "./ServicePages.css";
import { IconAward, IconShield, IconLightning, IconDollar } from "../data/icons";

const benefits = [
  {
    icon: <IconAward size={24} />,
    title: "Premium Brands, Custom Fit",
    text: "We partner with leading manufacturers to offer a wide range of styles, materials, and insulation levels so you get a door that matches your home and budget.",
  },
  {
    icon: <IconShield size={24} />,
    title: "Licensed & Insured Professionals",
    text: "Every installation is performed by our trained, background-checked technicians who take pride in precise, code-compliant work.",
  },
  {
    icon: <IconLightning size={24} />,
    title: "Same-Day Service Available",
    text: "Need a new door fast? We offer same-day installation for select models across the Atlanta area.",
  },
  {
    icon: <IconDollar size={24} />,
    title: "Free, Transparent Quotes",
    text: "We provide detailed written estimates with no hidden fees. The price we quote is the price you pay — no surprises.",
  },
];

const steps = [
  { num: 1, title: "Free Consultation & Quote", text: "We assess your current setup, discuss your style and budget, and provide a transparent quote." },
  { num: 2, title: "Door Selection", text: "Choose from steel, wood, aluminum, or composite in hundreds of colors and configurations." },
  { num: 3, title: "Professional Installation", text: "Our technicians handle removal, track setup, spring installation, wiring, and calibration." },
  { num: 4, title: "Cleanup & Walkthrough", text: "We haul away the old door, clean the workspace, and walk you through your new door's operation." },
];

const signs = [
  "Visible rust, dents, or corrosion on the door panels",
  "High energy bills — poor insulation is driving up heating and cooling costs",
  "Frequent breakdowns or repairs costing more than a replacement",
  "Excessive noise during operation (grinding, squeaking, rattling)",
  "Outdated appearance that detracts from your home's curb appeal",
];

const faqs = [
  { q: "How much does a new garage door installation cost in Atlanta?", a: "The cost varies based on door size, material, insulation level, and custom features. On average, Atlanta homeowners invest between $900 and $4,500 for a complete installation. We provide free, no-obligation quotes tailored to your specific needs." },
  { q: "How long does a new garage door installation take?", a: "Most standard installations are completed in 4 to 6 hours. More complex custom doors may require a full day. We schedule around your availability and work efficiently to minimize disruption." },
  { q: "Do you handle old door removal and disposal?", a: "Yes. Every installation includes full removal of your existing door and hardware, plus complete cleanup and haul-away. You will not have to lift a finger." },
  { q: "What garage door brands do you carry?", a: "We work with top manufacturers including Clopay, Amarr, Wayne Dalton, and CHI Overhead Doors, offering steel, wood, aluminum, and composite options at multiple price points." },
];

export default function ServiceInstallation() {
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
            Atlanta's Trusted Installers
          </div>
          <h1>Professional New Garage Door Installation in Atlanta, GA</h1>
          <p className="page-hero-sub">
            Your garage door is one of the most visible features of your home. At Access Edge Garage Door, we install premium garage doors that boost curb appeal, improve energy efficiency, and increase property value. Serving Atlanta and all of Metro Atlanta, our experienced team handles everything from custom door selection to professional installation and cleanup.
          </p>
          <div className="sv-hero-stats">
            <div className="sv-hero-stat">
              <span className="sv-hero-stat-num">500+</span>
              <span className="sv-hero-stat-label">Doors Installed</span>
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
            <h2>Why Choose Us for New Garage Door Installation</h2>
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
            <h2>How We Install Your New Garage Door</h2>
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
            <h2>What to Expect from Your New Garage Door Installation</h2>
          </div>
          <div className="overview-content">
            <p>A new garage door installation is one of the most cost-effective home improvement projects you can undertake. According to Remodeling Magazine's Cost vs. Value Report, replacing a garage door consistently ranks among the top home improvement projects for return on investment — often recouping over 90% of the cost at resale.</p>
            <p>At Access Edge Garage Door, we treat every installation as a custom job. We do not cut corners, use substandard materials, or rush the process. Our team takes precise measurements, ensures proper track alignment, installs high-quality springs and rollers, and calibrates the door for smooth, quiet operation. We use only top-grade hardware — including galvanized steel tracks, sealed ball-bearing rollers, and heavy-duty hinges — so your new door performs reliably for years.</p>
            <p>We serve homeowners across Metro Atlanta, including Decatur, Tucker, Stone Mountain, Ellenwood, Stockbridge, and all surrounding communities. Whether you are building a new home, replacing an aging door, or upgrading to a more energy-efficient model, Access Edge Garage Door is your trusted partner for quality installation.</p>
          </div>
        </div>
      </section>

      {/* ════════ SIGNS ════════ */}
      <section className="section sv-signs" data-reveal="fade-up" style={{ background: "var(--light)" }}>
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Signs You Need a New Garage Door</span>
            <h2>Time for an Upgrade?</h2>
            <p>If your garage door is showing any of these signs, it may be time to consider a replacement.</p>
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
          backgroundImage: `linear-gradient(rgba(10,20,40,.85), rgba(10,20,40,.85)), url(/images/cta-installation.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="sv-cta-orb sv-cta-orb--1" />
        <div className="sv-cta-orb sv-cta-orb--2" />
        <div className="container">
          <h2>Ready to Transform Your Home?</h2>
          <p>Ready to transform your home with a beautiful, energy-efficient garage door? Call Access Edge Garage Door for your free consultation and quote today.</p>
          <Link to="/contact" className="btn btn-orange">Get Your Free Quote →</Link>
        </div>
      </section>
    </div>
  );
}
