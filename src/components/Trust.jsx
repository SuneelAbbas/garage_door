import trustImage from "../assets/images/garage_vehicle.png";

export default function Trust() {
  return (
    <section className="section trust">
      <div className="container">
        <div className="trust-visual">
          <div className="trust-image-wrap">
            <div className="trust-image-main">
              <img src={trustImage} alt="Access Edge Garage Door vehicle and team" className="trust-img-el" loading="lazy" />
            </div>
          </div>
        </div>

        <div className="trust-content">
          <span className="eyebrow">WHY HOMEOWNERS TRUST OUR GARAGE DOOR SERVICES</span>
          <h2>Why Homeowners Trust Us</h2>
          <p>
            Homeowners trust us because we deliver expert installation and repair services with
            fast and reliable response times. We use high-quality, durable materials to ensure
            lasting results, and we maintain honest pricing with a strong focus on customer
            satisfaction and service excellence.
          </p>
          <div className="icon-chip-list">
            <span className="icon-chip">
              <span className="icon-chip-icon">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 10l4 4 8-8" />
                </svg>
              </span>
              Expert installation and repair services
            </span>
            <span className="icon-chip">
              <span className="icon-chip-icon">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 10l4 4 8-8" />
                </svg>
              </span>
              Fast and reliable response times
            </span>
            <span className="icon-chip">
              <span className="icon-chip-icon">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 10l4 4 8-8" />
                </svg>
              </span>
              High-quality, durable materials
            </span>
            <span className="icon-chip">
              <span className="icon-chip-icon">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 10l4 4 8-8" />
                </svg>
              </span>
              Honest pricing and customer-focused service
            </span>
          </div>
          <div className="mission-card">
            <div className="mission-card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="mission-card-text">
              <strong>Our Mission:</strong>
              <span>Reliable Garage Door Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
