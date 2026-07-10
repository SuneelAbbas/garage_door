import { Link } from "react-router-dom";
import { locations } from "../data/locations";

export default function LocationsIndex() {
  return (
    <div className="service-page">
      <section className="page-hero">
        <div className="container">
          <h1>New Garage Door Installation — Atlanta Neighborhoods</h1>
          <p className="page-hero-sub">
            Access Edge Garage Door proudly serves homeowners across Atlanta and Metro Atlanta. Find your neighborhood below and discover how we can help you with a professional new garage door installation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Our Locations</span>
            <h2>Atlanta Communities We Serve</h2>
          </div>
          <div className="locations-grid">
            {locations.map(loc => (
              <Link to={`/locations/${loc.id}`} key={loc.id} className="location-card">
                <div className="location-icon">📍</div>
                <h3>{loc.name}</h3>
                <p>New Garage Door Installation in {loc.fullName}</p>
                <span className="arrow-btn">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Not Sure Which Location?</h2>
          <p>No matter where you are in Metro Atlanta, we serve your area. Call us at 470-666-4097 to schedule your free consultation.</p>
          <Link to="/contact" className="btn btn-orange">Contact Us →</Link>
        </div>
      </section>
    </div>
  );
}
