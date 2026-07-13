import React from "react";
import { Link } from "react-router-dom";
import "./ContactPage.css";

const cities = [
  "Atlanta", "Marietta", "Smyrna", "Kennesaw", "Roswell",
  "Alpharetta", "Sandy Springs", "Dunwoody", "Decatur", "Norcross",
  "Lawrenceville", "Duluth", "Johns Creek", "Peachtree City",
  "Fayetteville", "Stockbridge", "Lilburn", "Ellenwood",
  "Stone Mountain", "Tucker",
];

const processSteps = [
  { num: 1, title: "You Speak to a Real Person", text: "No automated menus, no voicemail loops. When you call, a friendly team member answers and listens to your needs." },
  { num: 2, title: "We Schedule at Your Convenience", text: "We offer same-day appointments whenever possible, and we work around your schedule — including early mornings, evenings, and weekends." },
  { num: 3, title: "A Technician Arrives Prepared", text: "Our trucks carry thousands of parts and tools so most repairs are completed in a single visit. No multiple trips, no waiting." },
];

export default function ContactPage() {
  return (
    <div className="service-page">
      {/* ════════ HERO ════════ */}
      <section
        className="page-hero cp-hero"
        style={{
          backgroundImage: `linear-gradient(135deg,rgba(10,26,60,.75) 50%,rgba(10,26,60,.55)), url(/images/garage_vehicle.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="cp-hero-orb cp-hero-orb--1" />
        <div className="cp-hero-orb cp-hero-orb--2" />
        <div className="cp-hero-orb cp-hero-orb--3" />
        <div className="cp-hero-grid" />
        <div className="container">
          <div className="cp-hero-badge">
            <span className="cp-hero-badge-dot" />
            Available 24/7 for Emergencies
          </div>
          <h1>Contact Access Edge Garage Door — We Are Here to Help</h1>
          <p className="page-hero-sub">
            Whether you need a quick repair, a new garage door installation, or emergency service, the Access Edge team is ready to assist. Reach out today, and we will have a technician on the way.
          </p>
          <div className="cp-hero-stats">
            <div className="cp-hero-stat">
              <span className="cp-hero-stat-num">470-666-4097</span>
              <span className="cp-hero-stat-label">Call or Text</span>
            </div>
            <div className="cp-hero-stat-divider" />
            <div className="cp-hero-stat">
              <span className="cp-hero-stat-num">24/7</span>
              <span className="cp-hero-stat-label">Emergency Service</span>
            </div>
            <div className="cp-hero-stat-divider" />
            <div className="cp-hero-stat">
              <span className="cp-hero-stat-num">Free</span>
              <span className="cp-hero-stat-label">Estimates</span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ CONTACT CARDS ════════ */}
      <section className="section" data-reveal="fade-up">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Contact Details</span>
            <h2>How to Reach Us</h2>
          </div>
          <div className="cp-cards" data-reveal-stagger>
            <div className="cp-card">
              <div className="cp-card-icon">📞</div>
              <h3>Phone</h3>
              <a href="tel:4706664097" className="cp-card-link">470-666-4097</a>
            </div>
            <div className="cp-card">
              <div className="cp-card-icon">📧</div>
              <h3>Email</h3>
              <a href="mailto:accessedgellc@gmail.com" className="cp-card-link">accessedgellc@gmail.com</a>
            </div>
            <div className="cp-card">
              <div className="cp-card-icon">📍</div>
              <h3>Service Area</h3>
              <p>Atlanta, GA &<br />All of Metro Atlanta</p>
            </div>
            <div className="cp-card">
              <div className="cp-card-icon">🕐</div>
              <h3>Hours</h3>
              <p>Mon–Sat, 9:00 AM – 7:00 PM</p>
              <p className="cp-card-emergency">24/7 Emergency Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ WHAT TO EXPECT ════════ */}
      <section className="section cp-process" data-reveal="fade-up" style={{ background: "var(--light)" }}>
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">What to Expect</span>
            <h2>What to Expect When You Contact Us</h2>
          </div>
          <div className="process-steps">
            {processSteps.map(s => (
              <div key={s.num} className="cp-step">
                <div className="cp-step-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ BOOKING FORM ════════ */}
      <section className="section" data-reveal="fade-up">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Book Online</span>
            <h2>Request a Service</h2>
            <p>When you reach out to Access Edge Garage Door, you are contacting a local, licensed, and insured team that has earned the trust of hundreds of Atlanta homeowners. We respond fast, communicate clearly, and never surprise you with hidden fees.</p>
          </div>
          <div className="cp-form-wrap">
            <form onSubmit={e => e.preventDefault()}>
              <div className="cp-form-row">
                <div className="cp-form-group">
                  <input type="text" placeholder="First Name" required />
                </div>
                <div className="cp-form-group">
                  <input type="text" placeholder="Last Name" required />
                </div>
              </div>
              <div className="cp-form-row">
                <div className="cp-form-group">
                  <input type="tel" placeholder="Phone" required />
                </div>
                <div className="cp-form-group">
                  <input type="email" placeholder="Email" required />
                </div>
              </div>
              <div className="cp-form-row">
                <div className="cp-form-group">
                  <select>
                    <option>Property Type</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                  </select>
                </div>
                <div className="cp-form-group">
                  <select>
                    <option>Service Type</option>
                    <option>Repair</option>
                    <option>New Installation</option>
                    <option>Emergency</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="cp-form-row">
                <div className="cp-form-group">
                  <input type="date" placeholder="Preferred Date" />
                </div>
                <div className="cp-form-group">
                  <input type="time" placeholder="Preferred Time" />
                </div>
              </div>
              <div className="cp-form-group" style={{ marginBottom: 14 }}>
                <textarea placeholder="Tell us about your garage door issue (optional)" />
              </div>
              <button type="submit" className="cp-form-submit">Submit Request →</button>
            </form>
          </div>
        </div>
      </section>

      {/* ════════ SERVICE AREA ════════ */}
      <section className="section" data-reveal="fade-up" style={{ background: "var(--light)" }}>
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Service Area</span>
            <h2>Communities We Serve</h2>
          </div>
          <div className="cp-area-grid">
            {cities.map(city => (
              <div key={city} className="cp-area-pill">{city}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section
        className="cta-banner sv-cta"
        style={{
          backgroundImage: `linear-gradient(rgba(10,20,40,.85), rgba(10,20,40,.85)), url(/images/cta-contact.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="sv-cta-orb sv-cta-orb--1" />
        <div className="sv-cta-orb sv-cta-orb--2" />
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Call us now at 470-666-4097 or fill out the form above. We are standing by to help with all your garage door needs.</p>
          <a href="tel:4706664097" className="btn btn-orange">Call 470-666-4097 →</a>
        </div>
      </section>
    </div>
  );
}
