import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { locations } from "../data/locations";
import { IconDoor, IconWrench, IconSpring, IconRemote, IconWarning, IconLocation, IconChevronDown, IconArrowRight, IconPhone } from "../data/icons";

/* ── Service definitions ── */
const services = [
  { path: "/services/installation", label: "New Garage Door Installation", icon: "door" },
  { path: "/services/repairs", label: "Garage Door Repairs", icon: "wrench" },
  { path: "/services/spring-replacement", label: "Spring Replacement", icon: "spring" },
  { path: "/services/opener", label: "Opener Repair & Installation", icon: "remote" },
  { path: "/services/emergency", label: "Emergency Service", icon: "emergency" },
];

/* ── Flat design icons ── */
const icons = {
  door: <IconDoor size={20} />,
  wrench: <IconWrench size={20} />,
  spring: <IconSpring size={20} />,
  remote: <IconRemote size={20} />,
  emergency: <IconWarning size={20} />,
  location: <IconLocation size={16} />,
  chevronDown: <IconChevronDown size={10} />,
  arrowRight: <IconArrowRight size={16} />,
  phone: <IconPhone size={16} />,
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
              <IconDoor size={22} />
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
                <Link key={s.path} to={s.path} className={`mobile-sub-link${isActive(s.path) ? " active" : ""}`} onClick={() => setMobileOpen(false)}>
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
                <Link key={loc.id} to={`/locations/${loc.id}`} className={`mobile-sub-link${pathname === `/locations/${loc.id}` ? " active" : ""}`} onClick={() => setMobileOpen(false)}>
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
