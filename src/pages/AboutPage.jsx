import React from "react";
import { Link } from "react-router-dom";
import "./AboutPage.css";
import { IconAlarm, IconHammer, IconHandshake, IconNeighborhood, IconShield, IconStar, IconLightning, IconLock } from "../data/icons";

const values = [
  {
    icon: <IconAlarm size={24} />,
    title: "Reliability",
    text: "We show up when we say we will, with the parts and expertise needed to get the job done in one visit. No excuses, no delays.",
  },
  {
    icon: <IconHammer size={24} />,
    title: "Craftsmanship",
    text: "Every spring we wind, every track we align, every opener we program is done to the highest standard. We do not cut corners because your safety depends on our work.",
  },
  {
    icon: <IconHandshake size={24} />,
    title: "Honesty",
    text: "You get upfront pricing, clear explanations, and honest recommendations. We never recommend work you do not need, and we never add surprise charges to your bill.",
  },
  {
    icon: <IconNeighborhood size={24} />,
    title: "Community",
    text: "We live and work in Atlanta. The families we serve are our neighbors, and building a trusted reputation in this community matters more to us than any single sale.",
  },
];

const trustItems = [
  {
    icon: <IconShield size={24} />,
    title: "Licensed & Fully Insured",
    text: "Every Access Edge technician is background-checked, trained, and covered by liability insurance and workers' compensation, so you are protected on every job.",
  },
  {
    icon: <IconStar size={24} />,
    title: "5-Star Rated Across Atlanta",
    text: "We have earned hundreds of 5-star reviews from homeowners throughout Metro Atlanta, with consistent praise for our punctuality, professionalism, and fair pricing.",
  },
  {
    icon: <IconLightning size={24} />,
    title: "Same-Day Service, Every Day",
    text: "Whether it is a routine repair or a full installation, we prioritize same-day service so you are never left waiting.",
  },
  {
    icon: <IconLock size={24} />,
    title: "Warranty-Backed Work",
    text: "Every repair and installation we perform is backed by a warranty on parts and labor. We stand behind our work because we know it is done right.",
  },
];

const faqs = [
  { q: "What areas of Atlanta does Access Edge Garage Door serve?", a: "We serve the entire Metro Atlanta area, including Atlanta proper, Decatur, Tucker, Stone Mountain, Ellenwood, Stockbridge, Marietta, Roswell, Alpharetta, Johns Creek, Sandy Springs, Brookhaven, and all surrounding communities. If you are in Metro Atlanta, we can help." },
  { q: "Are your technicians licensed and insured?", a: "Yes, absolutely. Every Access Edge technician is background-checked, fully trained, and covered by comprehensive liability insurance and workers' compensation. Your safety and property protection are our top priorities." },
  { q: "Do you offer same-day service?", a: "Yes. We prioritize same-day service for most repairs and installations across Metro Atlanta. Call us before noon for the best chance of same-day service. Emergency calls are answered 24/7." },
  { q: "What makes Access Edge different from other garage door companies?", a: "Three things: transparency, craftsmanship, and community. We give upfront pricing with no hidden fees, we never cut corners on quality, and we treat every customer like a neighbor. We have built our reputation one job at a time, and we stand behind every repair and installation with a warranty." },
  { q: "How long has Access Edge Garage Door been in business?", a: "We have been serving Atlanta homeowners for over a decade, growing from a single truck to a trusted team serving all of Metro Atlanta. Our longevity and thousands of 5-star reviews speak to our commitment to quality and customer satisfaction." },
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = React.useState(null);

  return (
    <div className="service-page">
      {/* ════════ HERO ════════ */}
      <section
        className="page-hero ab-hero"
        style={{
          backgroundImage: `linear-gradient(135deg,rgba(10,26,60,.75) 50%,rgba(10,26,60,.55)), url(/images/garage_vehicle.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="ab-hero-orb ab-hero-orb--1" />
        <div className="ab-hero-orb ab-hero-orb--2" />
        <div className="ab-hero-orb ab-hero-orb--3" />
        <div className="ab-hero-grid" />
        <div className="container">
          <div className="ab-hero-badge">
            <span className="ab-hero-badge-dot" />
            Trusted Since 2013
          </div>
          <h1>About Access Edge Garage Door — Atlanta's Trusted Garage Door Team</h1>
          <p className="page-hero-sub">
            Every great home deserves a garage door that works perfectly every time. That simple belief is what drives us at Access Edge Garage Door. For over a decade, we have been serving Atlanta homeowners with honest, professional garage door services.
          </p>
          <div className="ab-hero-stats">
            <div className="ab-hero-stat">
              <span className="ab-hero-stat-num">10+ Years</span>
              <span className="ab-hero-stat-label">Serving Atlanta</span>
            </div>
            <div className="ab-hero-stat-divider" />
            <div className="ab-hero-stat">
              <span className="ab-hero-stat-num">5000+</span>
              <span className="ab-hero-stat-label">Homes Served</span>
            </div>
            <div className="ab-hero-stat-divider" />
            <div className="ab-hero-stat">
              <span className="ab-hero-stat-num">4.9★</span>
              <span className="ab-hero-stat-label">Avg. Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ OUR STORY ════════ */}
      <section className="section ab-story" data-reveal="fade-up">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Our Story</span>
            <h2>How We Became Atlanta's Trusted Garage Door Company</h2>
          </div>
          <div className="ab-story-content">
            <p>Access Edge Garage Door was founded with a straightforward mission: give Atlanta homeowners a garage door service they can actually trust. Too often, homeowners call a garage door company only to deal with hidden fees, rushed work, or technicians who do not show up when promised. We saw an opportunity to do things differently — and that is exactly what we have done.</p>
            <p>Starting with a single truck and a commitment to honest pricing, we built Access Edge Garage Door one job at a time, one satisfied customer at a time. We focused on the neighborhoods we know — from the historic streets of Decatur to the sprawling suburbs of Marietta, Roswell, and Alpharetta. Every call we answered, every spring we replaced, every new door we installed reinforced our belief that quality work and clear communication matter more than anything.</p>
            <p>Today, we serve homeowners across all of Metro Atlanta with a team of experienced technicians who share the same values: show up on time, do the job right, charge a fair price, and treat every home like it is our own. We have grown from that single truck to a fleet of fully stocked service vehicles, but the principles that got us here have never changed.</p>
          </div>
        </div>
      </section>

      {/* ════════ MISSION & VISION ════════ */}
      <section className="section" data-reveal="fade-up" style={{ background: "var(--light)" }}>
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Our Purpose</span>
            <h2>Mission & Vision</h2>
          </div>
          <div className="ab-mission-grid">
            <div className="ab-mission-card ab-mission-card--mission">
              <div className="ab-mission-icon">🎯</div>
              <h3>Our Mission</h3>
              <blockquote>
                "To provide Atlanta homeowners and small business owners with professional garage door services that are safe, reliable, and transparent — delivered by skilled technicians who take pride in their work and treat every customer like a neighbor."
              </blockquote>
            </div>
            <div className="ab-mission-card ab-mission-card--vision">
              <div className="ab-mission-icon">🔭</div>
              <h3>Our Vision</h3>
              <blockquote>
                "To be the most trusted and respected garage door company in Metro Atlanta — known not just for our technical expertise, but for our unwavering commitment to honesty, quality, and community."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ STATS COUNTER ════════ */}
      <section className="section ab-stats" data-reveal="fade-up">
        <div className="ab-stats-orb ab-stats-orb--1" />
        <div className="ab-stats-orb ab-stats-orb--2" />
        <div className="container">
          <div className="section-title">
            <span className="eyebrow" style={{ color: "rgba(255,255,255,.5)" }}>By the Numbers</span>
            <h2 style={{ color: "#fff" }}>Our Impact in Metro Atlanta</h2>
          </div>
          <div className="ab-stats-grid">
            <div className="ab-stat-item">
              <div className="ab-stat-number">10<span>+</span></div>
              <div className="ab-stat-label">Years in Business</div>
              <div className="ab-stat-divider" />
            </div>
            <div className="ab-stat-item">
              <div className="ab-stat-number">5000<span>+</span></div>
              <div className="ab-stat-label">Homes Served</div>
              <div className="ab-stat-divider" />
            </div>
            <div className="ab-stat-item">
              <div className="ab-stat-number">800<span>+</span></div>
              <div className="ab-stat-label">5-Star Reviews</div>
              <div className="ab-stat-divider" />
            </div>
            <div className="ab-stat-item">
              <div className="ab-stat-number">15<span>+</span></div>
              <div className="ab-stat-label">Certified Techs</div>
              <div className="ab-stat-divider" />
            </div>
          </div>
        </div>
      </section>

      {/* ════════ OUR VALUES ════════ */}
      <section className="section ab-values" data-reveal="fade-up">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Our Values</span>
            <h2>What We Stand For</h2>
          </div>
          <div className="benefits-grid" data-reveal-stagger>
            {values.map((v, i) => (
              <div key={i} className="benefit-card ab-value-card">
                <div className="ab-value-icon-circle">
                  <div className="benefit-icon">{v.icon}</div>
                </div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ WHY TRUST US ════════ */}
      <section className="section ab-trust" data-reveal="fade-up">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Why Trust Us</span>
            <h2>Why Homeowners Trust Access Edge</h2>
          </div>
          <div className="ab-trust-grid">
            {trustItems.map((t, i) => (
              <div key={i} className="ab-trust-item">
                <div className="ab-trust-icon">{t.icon}</div>
                <div className="ab-trust-text">
                  <strong>{t.title}</strong>
                  <p>{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ FAQS ════════ */}
      <section className="section ab-faq" data-reveal="fade-up">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">FAQs</span>
            <h2>Frequently Asked Questions About Access Edge</h2>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div
                key={i}
                className={`faq-item ab-faq-item${openFaq === i ? " ab-faq-item--open" : ""}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="faq-item-head ab-faq-item-head">
                  <span>{f.q}</span>
                  <span className="faq-toggle ab-faq-toggle">+</span>
                </div>
                <div className="faq-answer ab-faq-answer">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section
        className="cta-banner ab-cta"
        style={{
          backgroundImage: `linear-gradient(rgba(10,20,40,.85), rgba(10,20,40,.85)), url(/images/cta-about.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="ab-cta-orb ab-cta-orb--1" />
        <div className="ab-cta-orb ab-cta-orb--2" />
        <div className="container">
          <h2>Experience the Access Edge Difference</h2>
          <p>Call us today to schedule your service and see why Atlanta homeowners trust Access Edge Garage Door.</p>
          <Link to="/contact" className="btn btn-orange">Get in Touch →</Link>
        </div>
      </section>
    </div>
  );
}
