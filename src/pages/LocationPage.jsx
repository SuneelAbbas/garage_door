import { useParams, Link } from "react-router-dom";
import { locations } from "../data/locations";

const servicesList = [
  { name: "New Garage Door Installation", path: "/services/installation" },
  { name: "Garage Door Repairs", path: "/services/repairs" },
  { name: "Spring Replacement", path: "/services/spring-replacement" },
  { name: "Opener Repair and Installation", path: "/services/opener" },
  { name: "Emergency Service", path: "/services/emergency" }
];

export default function LocationPage() {
  const { id } = useParams();
  const loc = locations.find(l => l.id === id);

  if (!loc) {
    return (
      <div className="service-page">
        <section className="page-hero">
          <div className="container">
            <h1>Location Not Found</h1>
            <p>The location you are looking for does not exist.</p>
            <Link to="/" className="btn btn-orange">Back to Home</Link>
          </div>
        </section>
      </div>
    );
  }

  const heroIndex = (locations.findIndex(l => l.id === id) % 3) + 1;

  return (
    <div className="service-page">
      <section
        className="page-hero"
        style={{
          backgroundImage: `linear-gradient(135deg,rgba(10,26,60,.75) 50%,rgba(10,26,60,.55)), url(/images/hero-location-${heroIndex}.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h1>New Garage Door Installation in {loc.fullName}</h1>
          <p className="page-hero-sub">{loc.hero}</p>
        </div>
      </section>

      <section className="section overview-section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">About {loc.name}</span>
            <h2>Serving the {loc.name} Community</h2>
          </div>
          <div className="overview-content">
            <p>{loc.intro}</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--light)" }}>
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Why Choose Us</span>
            <h2>Why {loc.name} Homeowners Choose Access Edge</h2>
          </div>
          <div className="benefits-grid">
            {loc.bullets.map((bullet, i) => (
              <div key={i} className="benefit-card">
                <div className="benefit-icon">✅</div>
                <p>{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Our Services</span>
            <h2>Services Available in {loc.name}</h2>
          </div>
          <div className="services-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
            {servicesList.map((svc, i) => (
              <Link to={svc.path} key={i} className="service-card" style={{ textAlign: "center", textDecoration: "none" }}>
                <h3>{svc.name}</h3>
                <span className="arrow-btn">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--light)" }}>
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">FAQs</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {loc.faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <div className="faq-item-head">
                  <span>{faq.q}</span>
                  <span className="faq-toggle">+</span>
                </div>
                <div className="faq-answer">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="cta-banner"
        style={{
          backgroundImage: `linear-gradient(rgba(10,20,40,.85), rgba(10,20,40,.85)), url(/images/cta-location.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h2>Upgrade Your Garage Door in {loc.name}</h2>
          <p>{loc.name} homeowners, call Access Edge Garage Door at <strong>470-666-4097</strong> for your free new door consultation today.</p>
          <a href="tel:4706664097" className="btn btn-orange">Call 470-666-4097 →</a>
        </div>
      </section>
    </div>
  );
}
