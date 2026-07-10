const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 21V11a2 2 0 012-2h2a2 2 0 012 2v10" />
        <path d="M3 21V6a2 2 0 012-2h14a2 2 0 012 2v15" />
        <path d="M12 7V5" />
      </svg>
    ),
    title: "New Garage Door Installation",
    text: "High-quality garage door installation ensuring safety, durability, and smooth long-term performance.",
    featured: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Garage Door Repairs",
    text: "Expert repair services for all garage door issues, restoring safe and reliable operation quickly.",
    featured: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Spring Replacement",
    text: "Safe and precise spring replacement to restore balance, performance, and durability.",
    featured: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
    title: "Opener Repair and Installation",
    text: "Reliable opener repair and installation services for smooth and secure garage door operation.",
    featured: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 01-3.46 0" />
      </svg>
    ),
    title: "24/7 Emergency Garage Door Service",
    text: "Fast emergency garage door repair in Atlanta, GA, for urgent issues, available day and night.",
    featured: true, // This card spans 2 columns as featured
  },
];

function ServiceCard({ icon, title, text, featured }) {
  return (
    <div className={`service-card${featured ? " service-card--featured" : ""}`}>
      <div className="service-card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <a href="#" className="service-card-learn">
        Learn More
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 10h10M10 5l5 5-5 5" />
        </svg>
      </a>
    </div>
  );
}

export default function Services() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-header-accent">
            <span className="eyebrow">OUR SERVICES</span>
          </div>
          <h2>Professional Garage Door Services in Atlanta, GA</h2>
          <p>
            Our experienced technicians deliver reliable and long-lasting results for garage door
            repair, new garage door installation, spring replacement, and opener repair. We proudly
            serve Atlanta and surrounding areas with fast, professional service backed by trusted
            customer support.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
