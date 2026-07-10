export default function ContactPage() {
  return (
    <div className="service-page">
      <section
        className="page-hero"
        style={{
          backgroundImage: `linear-gradient(135deg,rgba(10,26,60,.75) 50%,rgba(10,26,60,.55)), url(/images/hero-contact.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h1>Contact Access Edge Garage Door — We Are Here to Help</h1>
          <p className="page-hero-sub">
            Whether you need a quick repair, a new garage door installation, or emergency service, the Access Edge team is ready to assist. Reach out today, and we will have a technician on the way.
          </p>
        </div>
      </section>

      {/* Contact Details */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Contact Details</span>
            <h2>How to Reach Us</h2>
          </div>
          <div className="contact-details-grid">
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Phone</h3>
              <a href="tel:4706664097" className="contact-link">470-666-4097</a>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <a href="mailto:accessedgellc@gmail.com" className="contact-link">accessedgellc@gmail.com</a>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Service Area</h3>
              <p>Atlanta, GA and all of Metro Atlanta</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">🕐</div>
              <h3>Hours</h3>
              <p>Mon–Sat, 9:00 AM – 7:00 PM</p>
              <p style={{ fontWeight: 700, color: "var(--orange)", marginTop: 4 }}>24/7 Emergency Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section" style={{ background: "var(--light)" }}>
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Service Area</span>
            <h2>Communities We Serve</h2>
          </div>
          <div className="areas-grid" style={{ maxWidth: 1000, margin: "0 auto" }}>
            {["Atlanta", "Marietta", "Smyrna", "Kennesaw", "Roswell", "Alpharetta", "Sandy Springs", "Dunwoody", "Decatur", "Norcross", "Lawrenceville", "Duluth", "Johns Creek", "Peachtree City", "Fayetteville", "Stockbridge", "Lilburn", "Ellenwood", "Stone Mountain", "Tucker"].map(city => (
              <div key={city} className="area-pill">{city}</div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">What to Expect</span>
            <h2>What to Expect When You Contact Us</h2>
          </div>
          <div className="process-steps">
            <div className="step">
              <span className="step-num">1</span>
              <h3>You Speak to a Real Person</h3>
              <p>No automated menus, no voicemail loops. When you call, a friendly team member answers and listens to your needs.</p>
            </div>
            <div className="step">
              <span className="step-num">2</span>
              <h3>We Schedule at Your Convenience</h3>
              <p>We offer same-day appointments whenever possible, and we work around your schedule — including early mornings, evenings, and weekends.</p>
            </div>
            <div className="step">
              <span className="step-num">3</span>
              <h3>A Technician Arrives Prepared</h3>
              <p>Our trucks carry thousands of parts and tools so most repairs are completed in a single visit. No multiple trips, no waiting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section" style={{ background: "var(--light)" }}>
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Book Online</span>
            <h2>Request a Service</h2>
            <p>When you reach out to Access Edge Garage Door, you are contacting a local, licensed, and insured team that has earned the trust of hundreds of Atlanta homeowners. We respond fast, communicate clearly, and never surprise you with hidden fees. Your garage door is in good hands.</p>
          </div>
          <div className="book-form" style={{ maxWidth: 700, margin: "0 auto" }}>
            <form onSubmit={e => e.preventDefault()}>
              <div className="row">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
              </div>
              <div className="row">
                <input type="tel" placeholder="Phone" required />
                <input type="email" placeholder="Email" required />
              </div>
              <div className="row">
                <select style={{ width: "100%", padding: 12, border: "1px solid var(--border)", borderRadius: 6, fontSize: 14, background: "#fff" }}>
                  <option>Property Type</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                </select>
                <select style={{ width: "100%", padding: 12, border: "1px solid var(--border)", borderRadius: 6, fontSize: 14, background: "#fff" }}>
                  <option>Service Type</option>
                  <option>Repair</option>
                  <option>New Installation</option>
                  <option>Emergency</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="row">
                <input type="date" placeholder="Preferred Date" />
              </div>
              <textarea placeholder="Additional Information" style={{ width: "100%", padding: 12, border: "1px solid var(--border)", borderRadius: 6, fontSize: 14, minHeight: 80, marginBottom: 14 }} />
              <button type="submit" className="btn btn-orange" style={{ width: "100%", justifyContent: "center" }}>Submit Request →</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
