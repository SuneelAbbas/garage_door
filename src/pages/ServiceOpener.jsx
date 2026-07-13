import React from "react";
import { Link } from "react-router-dom";
import "./ServicePages.css";
import { IconTag, IconRemote, IconBattery, IconQuiet } from "../data/icons";

const benefits = [
  {
    icon: <IconTag size={24} />,
    title: "All Major Brands Serviced",
    text: "We work on Chamberlain, LiftMaster, Genie, Craftsman, Sommer, and more, with genuine replacement parts in stock.",
  },
  {
    icon: <IconRemote size={24} />,
    title: "Smart Opener Experts",
    text: "Upgrade to a Wi-Fi-enabled opener with smartphone control, voice assistant compatibility, and real-time alerts — we install and set up everything.",
  },
  {
    icon: <IconBattery size={24} />,
    title: "Battery Backup Included",
    text: "Our recommended openers include built-in battery backup, so you can still open and close your door during power outages common in Atlanta storms.",
  },
  {
    icon: <IconQuiet size={24} />,
    title: "Quiet, Vibration-Free Operation",
    text: "We install belt-drive and DC motor openers that run whisper-quiet — perfect for homes with bedrooms above or adjacent to the garage.",
  },
];

const steps = [
  { num: 1, title: "Evaluate Your Needs", text: "We assess your door weight, ceiling height, and desired features to recommend the right opener type (chain-drive, belt-drive, or jackshaft)." },
  { num: 2, title: "Remove Old Unit", text: "We safely disconnect and remove your existing opener, checking wiring and ceiling mounting for safety." },
  { num: 3, title: "Install New Opener", text: "We mount the rail and motor unit, connect the drive mechanism, install safety sensors, and program remote controls and keypads." },
  { num: 4, title: "Program Smart Features", text: "We connect your opener to Wi-Fi, set up the mobile app, pair with voice assistants, and show you how to use every feature." },
];

const signs = [
  "The remote or keypad works only when standing close to the door",
  "The opener makes grinding or buzzing sounds but the door does not move",
  "The door reverses before touching the floor, or opens randomly on its own",
  "The motor runs but the door stays put (worn gears or stripped sprocket)",
  "Your opener is over 10–12 years old and lacks modern safety features",
];

const faqs = [
  { q: "What type of garage door opener is best for Atlanta homes?", a: "Belt-drive openers with DC motors are the most popular choice — they are quiet, reliable, and ideal for attached garages. Wi-Fi connectivity and battery backup are highly recommended for convenience and storm preparedness." },
  { q: "Can I keep my existing remote controls with a new opener?", a: "In most cases, no. New openers use updated radio frequencies and rolling-code technology for security. However, we can program compatible external receivers if needed. Most new openers include two remotes and a wall console." },
  { q: "How long does opener installation take?", a: "A standard opener installation takes approximately 2 to 3 hours, including removal of the old unit, mounting, wiring, programming, and safety testing." },
  { q: "Do you offer smart garage door openers with Wi-Fi?", a: "Yes. We install Chamberlain MyQ and LiftMaster Wi-Fi openers that let you monitor and control your door from anywhere using your smartphone. You can also set schedules, receive activity alerts, and integrate with Amazon Key and Google Assistant." },
];

export default function ServiceOpener() {
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
            Atlanta's Opener Experts
          </div>
          <h1>Garage Door Opener Repair & Installation in Atlanta, GA</h1>
          <p className="page-hero-sub">
            Your garage door opener is the brain of your entry system. When it starts acting up — refusing to respond, reversing mid-cycle, or making strange electronic noises — it disrupts your entire day. At Access Edge Garage Door, we repair and install all major garage door opener brands across Atlanta and Metro Atlanta. Whether you need a quick fix or want to upgrade to a smart opener with Wi-Fi connectivity, we have you covered.
          </p>
          <div className="sv-hero-stats">
            <div className="sv-hero-stat">
              <span className="sv-hero-stat-num">2000+</span>
              <span className="sv-hero-stat-label">Openers Installed</span>
            </div>
            <div className="sv-hero-stat-divider" />
            <div className="sv-hero-stat">
              <span className="sv-hero-stat-num">4.9★</span>
              <span className="sv-hero-stat-label">Avg. Rating</span>
            </div>
            <div className="sv-hero-stat-divider" />
            <div className="sv-hero-stat">
              <span className="sv-hero-stat-num">Wi-Fi</span>
              <span className="sv-hero-stat-label">Smart Setup Included</span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ WHY CHOOSE ════════ */}
      <section className="section why-choose sv-why-choose" data-reveal="fade-up">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Why Choose Us</span>
            <h2>Why Choose Us for Opener Repair and Installation</h2>
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
            <h2>Our Opener Installation Process</h2>
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
            <h2>Modern Openers for Modern Homes</h2>
          </div>
          <div className="overview-content">
            <p>Modern garage door openers have come a long way from the simple remote-controlled units of the past. Today's openers offer smartphone control, motion-detecting lights, battery backup, ultra-quiet belt-drive motors, and even built-in security cameras. But with more technology comes more potential for issues. Flickering sensors, worn gears, failed circuit boards, and signal interference can all cause your opener to malfunction. When your opener leaves you stranded — stuck outside in the rain or unable to leave for work — you need a technician who can diagnose and fix the problem fast.</p>
            <p>At Access Edge Garage Door, we stay current with the latest opener technology so we can service older units and install cutting-edge replacements. Our technicians are factory-trained on Chamberlain, LiftMaster, and Genie systems, and we carry a wide selection of openers on our trucks for immediate installation. Whether you live in a new construction home in Johns Creek needing a Wi-Fi-enabled smart opener or an older Atlanta bungalow requiring a wall-mount jackshaft opener for low headroom, we match the right opener to your space and budget.</p>
          </div>
        </div>
      </section>

      {/* ════════ SIGNS ════════ */}
      <section className="section sv-signs" data-reveal="fade-up" style={{ background: "var(--light)" }}>
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Signs You Need Opener Service</span>
            <h2>Signs You Need Opener Repair or Replacement</h2>
            <p>If your opener is acting up, it may be time for service.</p>
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
          backgroundImage: `linear-gradient(rgba(10,20,40,.85), rgba(10,20,40,.85)), url(/images/cta-opener.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="sv-cta-orb sv-cta-orb--1" />
        <div className="sv-cta-orb sv-cta-orb--2" />
        <div className="container">
          <h2>Upgrade Your Opener Today</h2>
          <p>Upgrade your outdated or malfunctioning opener today. Call Access Edge Garage Door for expert opener repair and installation in Atlanta.</p>
          <Link to="/contact" className="btn btn-orange">Schedule Opener Service →</Link>
        </div>
      </section>
    </div>
  );
}
