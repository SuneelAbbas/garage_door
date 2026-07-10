import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { locations } from "../data/locations";

/* ── Service definitions ── */
const services = [
  { path: "/services/installation", label: "New Garage Door Installation", icon: "door" },
  { path: "/services/repairs", label: "Garage Door Repairs", icon: "wrench" },
  { path: "/services/spring-replacement", label: "Spring Replacement", icon: "spring" },
  { path: "/services/opener", label: "Opener Repair & Installation", icon: "remote" },
  { path: "/services/emergency", label: "Emergency Service", icon: "emergency" },
];

/* ── Inline SVG icons ── */
const icons = {
  door: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="20" rx="2" />
      <line x1="9" y1="3" x2="9" y2="23" />
      <circle cx="12" cy="13" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  wrench: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  spring: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12c0-2.5 2-4 4-4s4 1.5 4 4-2 4-4 4-4-1.5-4-4z" />
      <path d="M14 12c0-2.5 2-4 4-4s4 1.5 4 4-2 4-4 4-4-1.5-4-4z" />
      <line x1="6" y1="8" x2="10" y2="8" />
      <line x1="14" y1="8" x2="18" y2="8" />
      <line x1="6" y1="16" x2="10" y2="16" />
      <line x1="14" y1="16" x2="18" y2="16" />
    </svg>
  ),
  remote: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
      <circle cx="12" cy="8" r="1.5" fill="currentColor" stroke="none" />
      <line x1="9" y1="14" x2="15" y2="14" />
    </svg>
  ),
  emergency: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  location: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" fill="currentColor" stroke="none" />
    </svg>
  ),
  chevronDown: (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
  arrowRight: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  phone: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  menu: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  ),
  close: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
};

/* ── Group locations into columns of 4 ── */
const locationCols = [];
for (let i = 0; i < locations.length; i += 4) {
  locationCols.push(locations.slice(i, i + 4));
}

/* ── Component ── */
export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

  /* Scroll detection for glassmorphism */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobileLocationsOpen(false);
  }, [pathname]);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* ── Helpers ── */
  const isActive = (p) => pathname === p;
  const isServiceActive = () => services.some((s) => pathname.startsWith(s.path));
  const isLocationActive = () => locations.some((l) => pathname.startsWith(`/locations/${l.id}`));
  const navLinkClass = (p) => `nav-link${isActive(p) ? " active" : ""}`;

  return (
    <>
      <nav
        className={`navbar${scrolled ? " navbar-scrolled" : ""}${mobileOpen ? " mobile-open" : ""}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container">
          {/* ── Logo ── */}
          <Link to="/" className="logo" onClick={() => setMobileOpen(false)} aria-label="Access Edge Garage Door — Home">
            <div className="logo-icon-box" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="18" rx="2" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <rect x="8" y="14" width="8" height="8" rx="1" fill="rgba(255,255,255,.2)" stroke="#fff" />
                <line x1="12" y1="14" x2="12" y2="22" />
              </svg>
            </div>
            <div className="logo-text">
              <span className="logo-brand">ACCESS EDGE</span>
              <span className="logo-sub">GARAGE DOOR</span>
            </div>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <div className="nav-links" role="menubar">
            <Link to="/" className={navLinkClass("/")} role="menuitem">
              HOME
              {isActive("/") && <span className="nav-indicator" />}
            </Link>

            {/* ── Services Dropdown ── */}
            <div
              className={`nav-dropdown${isServiceActive() ? " active" : ""}`}
              role="none"
            >
              <button
                className="nav-dropdown-trigger"
                role="menuitem"
                aria-haspopup="true"
                aria-expanded={false}
                tabIndex={0}
              >
                SERVICES
                <span className="dropdown-chevron" aria-hidden="true">{icons.chevronDown}</span>
              </button>
              <div className="dropdown-menu card-services" role="menu" aria-label="Services">
                <div className="dropdown-header">Our Services</div>
                {services.map((s) => (
                  <Link
                    key={s.path}
                    to={s.path}
                    className={`dropdown-item${isActive(s.path) ? " active" : ""}`}
                    role="menuitem"
                  >
                    <span className="dropdown-item-icon">{icons[s.icon]}</span>
                    <span className="dropdown-item-label">{s.label}</span>
                    <span className="dropdown-item-accent" />
                  </Link>
                ))}
              </div>
            </div>

            {/* ── Locations Dropdown ── */}
            <div
              className={`nav-dropdown${isLocationActive() ? " active" : ""}`}
              role="none"
            >
              <button
                className="nav-dropdown-trigger"
                role="menuitem"
                aria-haspopup="true"
                aria-expanded={false}
                tabIndex={0}
              >
                LOCATIONS
                <span className="dropdown-chevron" aria-hidden="true">{icons.chevronDown}</span>
              </button>
              <div className="dropdown-menu card-locations" role="menu" aria-label="Service Areas">
                <div className="dropdown-header">Service Areas</div>
                <div className="dropdown-card-grid">
                  {locationCols.map((col, ci) => (
                    <div key={ci} className="dropdown-card-col">
                      {col.map((loc) => (
                        <Link
                          key={loc.id}
                          to={`/locations/${loc.id}`}
                          className={`dropdown-item${pathname === `/locations/${loc.id}` ? " active" : ""}`}
                          role="menuitem"
                        >
                          <span className="dropdown-item-icon dropdown-item-icon--pin">{icons.location}</span>
                          <span className="dropdown-item-label">{loc.name}</span>
                          <span className="dropdown-item-accent" />
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/about" className={navLinkClass("/about")} role="menuitem">
              ABOUT US
              {isActive("/about") && <span className="nav-indicator" />}
            </Link>
            <Link to="/blog" className={navLinkClass("/blog")} role="menuitem">
              BLOG
              {isActive("/blog") && <span className="nav-indicator" />}
            </Link>
            <Link to="/contact" className={navLinkClass("/contact")} role="menuitem">
              CONTACT US
              {isActive("/contact") && <span className="nav-indicator" />}
            </Link>
          </div>

          {/* ── Right Side: Phone + CTA ── */}
          <div className="nav-right">
            <a href="tel:+14706664097" className="nav-phone" aria-label="Call us at 470-666-4097">
              <span className="phone-badge" aria-hidden="true">{icons.phone}</span>
              <span className="phone-number">470-666-4097</span>
            </a>
            <Link to="/contact" className="btn-nav-cta">
              <span className="cta-text">REQUEST A QUOTE</span>
              <span className="cta-arrow" aria-hidden="true">{icons.arrowRight}</span>
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className={`hamburger${mobileOpen ? " open" : ""}`}
            onClick={() => setMobileOpen((p) => !p)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </nav>

      {/* ── Mobile Panel ── */}
      <div
        className={`mobile-panel${mobileOpen ? " open" : ""}`}
        aria-hidden={!mobileOpen}
        role="dialog"
        aria-label="Mobile navigation"
      >
        <div className="mobile-panel-inner">
          {/* Nav links */}
          <Link to="/" className="mobile-link" onClick={() => setMobileOpen(false)}>Home</Link>

          {/* Services accordion */}
          <div className="mobile-accordion">
            <button
              className="mobile-accordion-trigger"
              onClick={() => setMobileServicesOpen((p) => !p)}
              aria-expanded={mobileServicesOpen}
            >
              Services
              <span className={`accordion-chevron${mobileServicesOpen ? " open" : ""}`} aria-hidden="true">
                {icons.chevronDown}
              </span>
            </button>
            <div className={`mobile-accordion-body${mobileServicesOpen ? " open" : ""}`}>
              {services.map((s) => (
                <Link key={s.path} to={s.path} className="mobile-sub-link" onClick={() => setMobileOpen(false)}>
                  <span className="mobile-sub-icon">{icons[s.icon]}</span>
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Locations accordion */}
          <div className="mobile-accordion">
            <button
              className="mobile-accordion-trigger"
              onClick={() => setMobileLocationsOpen((p) => !p)}
              aria-expanded={mobileLocationsOpen}
            >
              Locations
              <span className={`accordion-chevron${mobileLocationsOpen ? " open" : ""}`} aria-hidden="true">
                {icons.chevronDown}
              </span>
            </button>
            <div className={`mobile-accordion-body${mobileLocationsOpen ? " open" : ""}`}>
              {locations.map((loc) => (
                <Link key={loc.id} to={`/locations/${loc.id}`} className="mobile-sub-link" onClick={() => setMobileOpen(false)}>
                  <span className="mobile-sub-icon">{icons.location}</span>
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/about" className="mobile-link" onClick={() => setMobileOpen(false)}>About Us</Link>
          <Link to="/blog" className="mobile-link" onClick={() => setMobileOpen(false)}>Blog</Link>
          <Link to="/contact" className="mobile-link" onClick={() => setMobileOpen(false)}>Contact Us</Link>

          {/* Mobile bottom bar */}
          <div className="mobile-panel-bottom">
            <a href="tel:+14706664097" className="mobile-phone">
              <span className="phone-badge" aria-hidden="true">{icons.phone}</span>
              470-666-4097
            </a>
            <Link to="/contact" className="btn-nav-cta mobile-cta" onClick={() => setMobileOpen(false)}>
              <span className="cta-text">REQUEST A QUOTE</span>
              <span className="cta-arrow" aria-hidden="true">{icons.arrowRight}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {mobileOpen && <div className="mobile-overlay" onClick={() => setMobileOpen(false)} />}
    </>
  );
}
