import { IconCheckCircle, IconArrowRight, IconStar, IconClock, IconAward, IconChat } from "../data/icons";

export default function Hero({ heroImage }) {
  return (
    <header className="hero">
      {/* ── Layered Background ── */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-orb hero-orb--gold" />
        <div className="hero-orb hero-orb--navy" />
        <div className="hero-orb hero-orb--accent" />
        <div className="hero-pattern" />
        {heroImage && (
          <div
            className="hero-bg-image"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
        )}
        <div className="hero-bg-overlay" />
      </div>

      <div className="container hero-container">
        {/* ════ Text Column ════ */}
        <div className="hero-text">
          {/* ── Eyebrow Pill ── */}
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            Serving Decatur, Tucker, Stone Mountain, Ellenwood, Stockbridge
          </div>

          {/* ── Headline ── */}
          <h1 className="hero-title">
            Garage Door Expert in Atlanta, GA, for Homes &{' '}
            <span className="hero-title-accent">Businesses</span>
          </h1>

          <p className="hero-desc">
            Fast, affordable garage door repair and installation across Atlanta.
            Same-day service for residential and commercial — backed by
            5-star ratings and 24/7 emergency response.
          </p>

          {/* ── Horizontal Pill Badges (consistent check-circle icons) ── */}
          <div className="hero-badges">
            <span className="hero-badge">
              <IconCheckCircle size={16} className="hero-badge-icon" />
              Same-Day Service
            </span>
            <span className="hero-badge">
              <IconCheckCircle size={16} className="hero-badge-icon" />
              Licensed & Insured
            </span>
            <span className="hero-badge">
              <IconCheckCircle size={16} className="hero-badge-icon" />
              5-Star Rated Local Business
            </span>
          </div>

          {/* ── Availability Urgency Indicator ── */}
          <div className="hero-availability">
            <span className="hero-availability-dot" />
            <span className="hero-availability-text">
              Available now — Same-day slots open
            </span>
          </div>

          {/* ── CTA Buttons ── */}
          <div className="hero-btns">
            <a href="tel:+15551234567" className="btn-hero btn-hero--primary btn-hero--glow">
              <span className="btn-hero-label">📞 CALL NOW</span>
            </a>
            <a href="#quote" className="btn-hero btn-hero--secondary">
              <span className="btn-hero-label">GET FREE ESTIMATE</span>
              <IconArrowRight size={16} className="btn-hero-arrow" />
            </a>
          </div>
        </div>

        {/* ════ Visual Column ════ */}
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <div className="hero-image-frame">
              <div className="hero-image-mask">
                {heroImage ? (
                  <img
                    src={heroImage}
                    alt="Access Edge Garage Door service team and truck"
                    className="hero-img-el"
                    loading="eager"
                  />
                ) : (
                  <div className="hero-image-ph">[ technician & service truck photo ]</div>
                )}
              </div>
            </div>

            {/* ── Floating Stat Card (Trustpilot) ── */}
            <div className="hero-stat-card">
              <div className="hero-stat-stars">
                <IconStar size={16} className="hero-stat-star" />
                <IconStar size={16} className="hero-stat-star" />
                <IconStar size={16} className="hero-stat-star" />
                <IconStar size={16} className="hero-stat-star" />
                <IconStar size={16} className="hero-stat-star" />
              </div>
              <span className="hero-stat-num">4.9</span>
              <span className="hero-stat-label">Trustpilot</span>
            </div>
          </div>

          {/* ── 3 Floating Badges (all animated consistently) ── */}
          <div className="hero-float hero-float--1">
            <span className="hero-float-icon">
              <IconClock size={20} />
            </span>
            <span className="hero-float-label">24/7 Service</span>
          </div>
          <div className="hero-float hero-float--2">
            <span className="hero-float-icon">
              <IconCheckCircle size={20} />
            </span>
            <span className="hero-float-label">Top Rated</span>
          </div>
          <div className="hero-float hero-float--3">
            <span className="hero-float-icon">
              <IconAward size={20} />
            </span>
            <span className="hero-float-label">4.9 Rating</span>
          </div>
        </div>
      </div>

      {/* ════ Full-Width Inline Message Card ════ */}
      <div className="hero-form-wrapper">
        <div className="container">
          <div className="hero-form-card">
            <div className="hero-form-header">
              <IconChat size={20} className="hero-form-header-icon" />
              <span className="hero-form-header-text">Send us a Message</span>
              <span className="hero-form-badge">Free Estimate</span>
            </div>
            <form className="hero-form" onSubmit={(e) => e.preventDefault()}>
              <div className="hero-form-row">
                <input
                  type="text"
                  className="hero-form-input"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  className="hero-form-input"
                  placeholder="Email Address"
                  required
                />
                <input
                  type="tel"
                  className="hero-form-input"
                  placeholder="Phone Number"
                  required
                />
                <select className="hero-form-input hero-form-select" required defaultValue="">
                  <option value="" disabled>Service Needed</option>
                  <option value="repair">Repair</option>
                  <option value="installation">Installation</option>
                  <option value="emergency">Emergency</option>
                  <option value="maintenance">Maintenance</option>
                </select>
              </div>
              <div className="hero-form-row hero-form-row--message">
                <textarea
                  className="hero-form-input hero-form-textarea"
                  placeholder="Tell us about your garage door issue..."
                  rows={3}
                  required
                />
              </div>
              <div className="hero-form-footer">
                <button type="submit" className="hero-form-btn">
                  Send Message
                  <IconArrowRight size={16} />
                </button>
                <span className="hero-form-trust">
                  <IconCheckCircle size={16} />
                  We respond within 10 minutes, even after hours
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}
