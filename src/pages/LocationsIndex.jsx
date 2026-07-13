import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { locations } from "../data/locations";
import "./LocationPage.css";

/* ── SVG Icons (inline, no deps) ── */
const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

/* ── Stat counter hook ── */
function useCountUp(end, duration = 1800) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const start = performance.now();
          const step = (now) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setVal(Math.floor(eased * end));
            if (t < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return { val, ref };
}

export default function LocationsIndex() {
  const [query, setQuery] = useState("");

  const filtered = locations.filter(
    (l) =>
      l.name.toLowerCase().includes(query.toLowerCase()) ||
      l.fullName.toLowerCase().includes(query.toLowerCase())
  );

  const served = useCountUp(14);
  const homes = useCountUp(8500);
  const years = useCountUp(12);
  const stars = useCountUp(4.9);

  return (
    <div className="loc-index">

      {/* ════════════ HERO ════════════ */}
      <section className="loc-index-hero">
        <div className="loc-index-hero-bg">
          <div className="loc-hero-orb loc-hero-orb--1" />
          <div className="loc-hero-orb loc-hero-orb--2" />
          <div className="loc-hero-orb loc-hero-orb--3" />
          <div className="loc-hero-grid" />
        </div>
        <div className="container">
          <div className="loc-hero-badge">
            <span className="loc-hero-badge-dot" />
            Serving Atlanta & Metro Atlanta
          </div>
          <h1>
            Find Your <span className="highlight">Neighborhood</span>
          </h1>
          <p className="loc-hero-desc">
            Access Edge Garage Door proudly serves homeowners across Atlanta and
            Metro Atlanta. Find your neighborhood below and discover how we can
            help you with a professional new garage door installation.
          </p>

          <div className="loc-hero-stats">
            <div className="loc-hero-stat">
              <span className="loc-hero-stat-num">{locations.length}</span>
              <span className="loc-hero-stat-label">Communities</span>
            </div>
            <div className="loc-hero-stat-divider" />
            <div className="loc-hero-stat">
              <span className="loc-hero-stat-num">12+</span>
              <span className="loc-hero-stat-label">Years Experience</span>
            </div>
            <div className="loc-hero-stat-divider" />
            <div className="loc-hero-stat">
              <span className="loc-hero-stat-num">4.9★</span>
              <span className="loc-hero-stat-label">Avg. Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ SEARCH BAR ════════════ */}
      <section className="loc-search-section">
        <div className="container">
          <div className="loc-search-card">
            <div className="loc-search-row">
              <div className="loc-search-input-wrap">
                <SearchIcon />
                <input
                  type="text"
                  className="loc-search-input"
                  placeholder="Search your neighborhood…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <span className="loc-search-count">
                {filtered.length} {filtered.length === 1 ? "area" : "areas"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ LOCATIONS GRID ════════════ */}
      <section className="loc-index-grid-section">
        <div className="container">
          {filtered.length > 0 ? (
            <div className="loc-index-grid">
              {filtered.map((loc) => (
                <Link
                  to={`/locations/${loc.id}`}
                  key={loc.id}
                  className="loc-card"
                >
                  <div className="loc-card-icon-wrap">
                    <MapPinIcon />
                  </div>
                  <h3>{loc.name}</h3>
                  <p>New Garage Door Installation in {loc.fullName}</p>
                  <div className="loc-card-arrow">&rarr;</div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="loc-no-results">
              <div className="loc-no-results-icon">🔍</div>
              <h3>No neighborhoods found</h3>
              <p>
                We couldn't find "{query}" in our service areas. Try a different
                search or{" "}
                <a href="tel:4706664097" style={{ color: "var(--orange)", fontWeight: 700 }}>
                  call us
                </a>{" "}
                to check if we serve your area.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ════════════ STATS COUNTER ════════════ */}
      <section className="loc-stats-section">
        <div className="container">
          <div className="loc-stats-grid">
            <div className="loc-stat-item" ref={served.ref}>
              <div className="loc-stat-icon">🏘️</div>
              <div className="loc-stat-number">{served.val}+</div>
              <div className="loc-stat-label">Communities Served</div>
            </div>
            <div className="loc-stat-item" ref={homes.ref}>
              <div className="loc-stat-icon">🏠</div>
              <div className="loc-stat-number">{homes.val.toLocaleString()}+</div>
              <div className="loc-stat-label">Homes Improved</div>
            </div>
            <div className="loc-stat-item" ref={years.ref}>
              <div className="loc-stat-icon">⭐</div>
              <div className="loc-stat-number">{years.val}+</div>
              <div className="loc-stat-label">Years of Excellence</div>
            </div>
            <div className="loc-stat-item" ref={stars.ref}>
              <div className="loc-stat-icon">💎</div>
              <div className="loc-stat-number">{stars.val}</div>
              <div className="loc-stat-label">Avg. Star Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section
        className="cta-banner"
        style={{
          backgroundImage: `linear-gradient(rgba(10,20,40,.85), rgba(10,20,40,.85)), url(/images/cta-location.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h2>Not Sure Which Location?</h2>
          <p>
            No matter where you are in Metro Atlanta, we serve your area. Call us
            at 470-666-4097 to schedule your free consultation.
          </p>
          <Link to="/contact" className="btn btn--primary">
            Contact Us <ArrowIcon />
          </Link>
        </div>
      </section>
    </div>
  );
}
