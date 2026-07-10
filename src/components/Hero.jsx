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
            Access Edge Garage Door is a trusted service provider in Atlanta, GA, and one of the
            garage door specialists in Atlanta, GA, serving residential and commercial customers.
            Our team operates as 24/7 garage door experts in Atlanta, GA, providing rapid response
            for emergency repair and installation needs. Customers rely on us as reliable garage
            door experts in Atlanta for honest pricing, quality workmanship, and consistent service.
          </p>

          {/* ── Horizontal Pill Badges ── */}
          <div className="hero-badges">
            <span className="hero-badge">
              <svg className="hero-badge-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 10l4 4 8-8" />
              </svg>
              Same-Day Service
            </span>
            <span className="hero-badge">
              <svg className="hero-badge-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 10l4 4 8-8" />
              </svg>
              Licensed & Insured
            </span>
            <span className="hero-badge">
              <svg className="hero-badge-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 10l4 4 8-8" />
              </svg>
              5-Star Rated Local Business
            </span>
          </div>

          <p className="hero-bold">
            Access Edge Garage Door – Opening the Way Home in Atlanta, Georgia
          </p>

          {/* ── CTA Buttons ── */}
          <div className="hero-btns">
            <a href="#" className="btn-hero btn-hero--primary">
              <span className="btn-hero-label">GET FREE ESTIMATE</span>
              <svg className="btn-hero-arrow" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 10h10M10 5l5 5-5 5" />
              </svg>
            </a>
            <a href="#" className="btn-hero btn-hero--secondary">
              <span className="btn-hero-label">📞 CALL NOW</span>
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

            {/* ── Floating Stat Card ── */}
            <div className="hero-stat-card">
              <div className="hero-stat-stars">
                <svg className="hero-stat-star" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 1l2.39 4.84 5.34.78-3.86 3.77.91 5.33L10 13.71l-4.78 2.51.91-5.33-3.86-3.77 5.34-.78L10 1z" />
                </svg>
                <svg className="hero-stat-star" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 1l2.39 4.84 5.34.78-3.86 3.77.91 5.33L10 13.71l-4.78 2.51.91-5.33-3.86-3.77 5.34-.78L10 1z" />
                </svg>
                <svg className="hero-stat-star" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 1l2.39 4.84 5.34.78-3.86 3.77.91 5.33L10 13.71l-4.78 2.51.91-5.33-3.86-3.77 5.34-.78L10 1z" />
                </svg>
                <svg className="hero-stat-star" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 1l2.39 4.84 5.34.78-3.86 3.77.91 5.33L10 13.71l-4.78 2.51.91-5.33-3.86-3.77 5.34-.78L10 1z" />
                </svg>
                <svg className="hero-stat-star" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 1l2.39 4.84 5.34.78-3.86 3.77.91 5.33L10 13.71l-4.78 2.51.91-5.33-3.86-3.77 5.34-.78L10 1z" />
                </svg>
              </div>
              <span className="hero-stat-num">4.9</span>
              <span className="hero-stat-label">Trustpilot</span>
            </div>
          </div>

          {/* ── 2 Floating Badges ── */}
          <div className="hero-float hero-float--1">
            <span className="hero-float-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </span>
            <span className="hero-float-label">24/7 Service</span>
          </div>
          <div className="hero-float hero-float--2">
            <span className="hero-float-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12l2 2 4-4" />
                <path d="M12 2a10 10 0 1010 10 10 10 0 00-10-10z" />
              </svg>
            </span>
            <span className="hero-float-label">Top Rated</span>
          </div>
        </div>
      </div>
    </header>
  );
}
