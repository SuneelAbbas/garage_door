import { useState } from "react";

const faqs = [
  {
    q: "How quickly can you repair a garage door in Atlanta?",
    a: "In most cases we offer same-day service across the Atlanta metro area, and we prioritize emergency calls to get to you as fast as possible.",
  },
  {
    q: "Do you offer 24/7 emergency services for garage doors in Atlanta?",
    a: "Yes, our team is available around the clock for urgent garage door issues, including nights, weekends, and holidays.",
  },
  {
    q: "Do you serve areas outside of Atlanta?",
    a: "Yes, we proudly serve Marietta, Smyrna, Kennesaw, Roswell, Alpharetta, Sandy Springs, Dunwoody, Decatur, Norcross, Lawrenceville, Duluth, and many more surrounding communities.",
  },
  {
    q: "Are your garage door technicians licensed and experienced?",
    a: "Absolutely. All of our technicians are licensed, insured, and experienced in handling every type of garage door repair and installation.",
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? " faq-item--open" : ""}`} onClick={() => setOpen(!open)} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && setOpen(!open)} aria-expanded={open}>
      <div className="faq-item-head">
        {q}
        <span className="faq-item-toggle">+</span>
      </div>
      <div className="faq-item-answer">{a}</div>
    </div>
  );
}

export default function FaqBook() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    propertyType: "",
    serviceType: "",
    date: "",
    info: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", form);
    alert("Thanks! Your request has been submitted.");
  };

  const fields = [
    { name: "firstName", label: "First Name", type: "text", col: 1 },
    { name: "lastName", label: "Last Name", type: "text", col: 2 },
    { name: "phone", label: "Telephone", type: "tel", col: 1 },
    { name: "email", label: "Email", type: "email", col: 2 },
    { name: "propertyType", label: "Property Type", type: "text", col: 1 },
    { name: "serviceType", label: "Service Type", type: "text", col: 2 },
    { name: "date", label: "Preferred Date", type: "text", col: 1 },
    { name: "info", label: "Additional Information", type: "textarea", col: 2 },
  ];

  return (
    <section className="section faq-book">
      <div className="container">
        <div className="faq-col">
          <span className="eyebrow">FAQS</span>
          <h2>Frequently Asked Questions</h2>
          {faqs.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
        <div className="book-col">
          <span className="eyebrow">TAKE 1 MINUTE TODAY</span>
          <h2>Book Your Service Today</h2>
          <p style={{ color: "var(--gray)", marginBottom: 20 }}>
            Tired of waiting around? We make it easy. Book your service in just a few clicks.
          </p>
          <div className="book-card">
            <form className="book-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-group">
                  <label className="form-label" htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" placeholder="John" value={form.firstName} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" placeholder="Doe" value={form.lastName} onChange={handleChange} />
                </div>
              </div>
              <div className="row">
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Telephone</label>
                  <input type="tel" id="phone" name="phone" placeholder="(404) 555-0123" value={form.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} />
                </div>
              </div>
              <div className="row">
                <div className="form-group">
                  <label className="form-label" htmlFor="propertyType">Property Type</label>
                  <input type="text" id="propertyType" name="propertyType" placeholder="Residential / Commercial" value={form.propertyType} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="serviceType">Service Type</label>
                  <input type="text" id="serviceType" name="serviceType" placeholder="Repair / Installation" value={form.serviceType} onChange={handleChange} />
                </div>
              </div>
              <div className="row">
                <div className="form-group">
                  <label className="form-label" htmlFor="date">Preferred Date</label>
                  <input type="text" id="date" name="date" placeholder="MM/DD/YYYY" value={form.date} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="info">Additional Information</label>
                  <textarea id="info" name="info" placeholder="Tell us about your issue..." value={form.info} onChange={handleChange} />
                </div>
              </div>
              <button type="submit" className="btn btn--primary">
                BOOK APPOINTMENT
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 10h10M10 5l5 5-5 5" />
                </svg>
              </button>
            </form>
            <div className="form-trust">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              We respond within 30 minutes during business hours
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
