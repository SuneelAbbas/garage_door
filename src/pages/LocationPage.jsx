import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { locations } from "../data/locations";
import "./LocationPage.css";

/* ── Gallery Images ── */
import beforeImg from "../assets/images/before_garage_door.png";
import afterImg from "../assets/images/garage_door_image.png";

/* ── SVG Icons ── */
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
);
const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

/* ── Services list ── */
const servicesList = [
  { name: "New Garage Door Installation", path: "/services/installation", icon: "🚪" },
  { name: "Garage Door Repairs", path: "/services/repairs", icon: "🔧" },
  { name: "Spring Replacement", path: "/services/spring-replacement", icon: "⚙️" },
  { name: "Opener Repair & Installation", path: "/services/opener", icon: "🔄" },
  { name: "Emergency Service", path: "/services/emergency", icon: "🚨" },
];

/* ── Testimonials ── */
const testimonials = [
  {
    text: "They installed a beautiful new door for us and the whole process was smooth from quote to cleanup. Highly recommend!",
    author: "Michael T.",
    area: " satisfied homeowner",
    avatar: "MT",
    stars: 5,
  },
  {
    text: "Professional, on time, and the door looks fantastic. Our neighbors already asked who did the installation.",
    author: "Sarah K.",
    area: " happy customer",
    avatar: "SK",
    stars: 5,
  },
  {
    text: "Great communication and fair pricing. The team took the time to explain everything and the installation was flawless.",
    author: "David R.",
    area: " verified buyer",
    avatar: "DR",
    stars: 5,
  },
];

/* ── Process steps ── */
const processSteps = [
  { num: "01", icon: "📞", title: "Free Consultation", desc: "We visit your home, measure your opening, and discuss your style and budget." },
  { num: "02", icon: "🎨", title: "Door Selection", desc: "Choose from steel, wood, or composite in hundreds of colors and configurations." },
  { num: "03", icon: "🔧", title: "Professional Install", desc: "Our team handles removal, track setup, spring installation, and calibration." },
  { num: "04", icon: "✨", title: "Walkthrough & Cleanup", desc: "We clean everything, haul away the old door, and show you your new door's features." },
];

/* ── Gallery items ── */
const galleryItems = [
  { before: beforeImg, after: afterImg, caption: "Complete garage transformation with a new insulated steel door — boosted curb appeal and energy efficiency." },
];

/* ── Count-up hook ── */
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

/* ── Scroll reveal hook ── */
function useScrollReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ── FAQ Accordion ── */
function FaqItem({ q, a, isOpen, onClick }) {
  return (
    <div
      className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
      onClick={onClick}
    >
      <div className="faq-item-head">
        <span>{q}</span>
        <span className="faq-item-toggle">+</span>
      </div>
      <div className="faq-item-answer">{a}</div>
    </div>
  );
}

/* ── Component ── */
export default function LocationPage() {
  const { id } = useParams();
  const loc = locations.find((l) => l.id === id);

  /* FAQ state */
  const [openFaq, setOpenFaq] = useState(null);

  /* Stats */
  const homesServed = useCountUp(650);
  const yearsExp = useCountUp(12);
  const doorsInstalled = useCountUp(3200);
  const satisfaction = useCountUp(98);

  /* Scroll reveal refs */
  const aboutRef = useScrollReveal();
  const benefitsRef = useScrollReveal();
  const servicesRef = useScrollReveal();
  const processRef = useScrollReveal();
  const galleryRef = useScrollReveal();
  const faqRef = useScrollReveal();

  if (!loc) {
    return (
      <div className="service-page">
        <section className="page-hero">
          <div className="container">
            <h1>Location Not Found</h1>
            <p>The location you are looking for does not exist.</p>
            <Link to="/" className="btn btn--primary" style={{ marginTop: 20 }}>
              Back to Home <ArrowRight />
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const heroIndex = (locations.findIndex((l) => l.id === id) % 3) + 1;

  /* Nearby locations */
  const currentIdx = locations.findIndex((l) => l.id === id);
  const nearby = [];
  if (currentIdx > 0) nearby.push(locations[currentIdx - 1]);
  if (currentIdx < locations.length - 1) nearby.push(locations[currentIdx + 1]);
  // If no neighbors, pick first two others
  if (nearby.length === 0) {
    nearby.push(locations[(currentIdx + 1) % locations.length]);
    nearby.push(locations[(currentIdx + 2) % locations.length]);
  }

  return (
    <div className="loc-detail">

      {/* ════════════ HERO ════════════ */}
      <section className="loc-detail-hero">
        <div className="loc-detail-hero-bg">
          <img
            src={`/images/hero-location-${heroIndex}.webp`}
            alt={loc.fullName}
          />
        </div>
        <div className="loc-detail-hero-pattern" />
        <div className="container">
          {/* Breadcrumb */}
          <div className="loc-detail-breadcrumb">
            <Link to="/">Home</Link>
            <span className="loc-detail-breadcrumb-sep">/</span>
            <Link to="/locations">Locations</Link>
            <span className="loc-detail-breadcrumb-sep">/</span>
            <span>{loc.name}</span>
          </div>

          {/* Hero badges */}
          <div className="loc-detail-hero-badges">
            <span className="loc-detail-hero-badge">📍 {loc.fullName}</span>
            <span className="loc-detail-hero-badge">✅ Free Estimates</span>
            <span className="loc-detail-hero-badge">⭐ 4.9 Avg. Rating</span>
          </div>

          <h1>
            New Garage Door Installation in{" "}
            <span className="highlight">{loc.fullName}</span>
          </h1>
          <p className="loc-detail-hero-desc">{loc.hero}</p>

          <div className="loc-detail-hero-actions">
            <a href="tel:4706664097" className="btn btn--primary">
              <PhoneIcon /> Call 470-666-4097
            </a>
            <Link to="/contact" className="btn btn--white">
              Get Free Quote <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════ ABOUT ════════════ */}
      <section className="loc-about-section" ref={aboutRef}>
        <div className="container">
          <div className="loc-about-grid">
            <div className="loc-about-image-wrap">
              <div className="loc-about-image-frame">
                <div className="loc-about-image-main">
                  <img
                    src="/src/assets/images/garage_door_image.png"
                    alt={`Garage door installation in ${loc.fullName}`}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentNode.innerHTML =
                        '<div class="loc-about-image-ph">🏠 Garage Door Installation</div>';
                    }}
                  />
                </div>
              </div>
              <div className="loc-about-stat">
                <span className="loc-about-stat-icon">🏆</span>
                <div>
                  <div className="loc-about-stat-num">12+ Years</div>
                  <div className="loc-about-stat-label">Trusted Service</div>
                </div>
              </div>
            </div>
            <div className="loc-about-content">
              <span className="eyebrow">About {loc.name}</span>
              <h2>Serving the {loc.name} Community with Excellence</h2>
              <p>{loc.intro}</p>
              <Link to="/about" className="btn btn--secondary">
                Learn More About Us <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ STATS COUNTER ════════════ */}
      <section className="loc-detail-stats">
        <div className="container">
          <div className="loc-detail-stats-grid">
            <div className="loc-detail-stat-card" ref={homesServed.ref}>
              <div className="loc-detail-stat-icon">🏠</div>
              <div className="loc-detail-stat-num">{homesServed.val}+</div>
              <div className="loc-detail-stat-label">Homes Served in Area</div>
            </div>
            <div className="loc-detail-stat-card" ref={yearsExp.ref}>
              <div className="loc-detail-stat-icon">⭐</div>
              <div className="loc-detail-stat-num">{yearsExp.val}+</div>
              <div className="loc-detail-stat-label">Years Experience</div>
            </div>
            <div className="loc-detail-stat-card" ref={doorsInstalled.ref}>
              <div className="loc-detail-stat-icon">🚪</div>
              <div className="loc-detail-stat-num">{doorsInstalled.val.toLocaleString()}+</div>
              <div className="loc-detail-stat-label">Doors Installed</div>
            </div>
            <div className="loc-detail-stat-card" ref={satisfaction.ref}>
              <div className="loc-detail-stat-icon">💯</div>
              <div className="loc-detail-stat-num">{satisfaction.val}%</div>
              <div className="loc-detail-stat-label">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ WHY CHOOSE US ════════════ */}
      <section className="loc-benefits-section" ref={benefitsRef}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Why Choose Us</span>
            <h2>Why {loc.name} Homeowners Choose Access Edge</h2>
            <p>
              We bring expertise, transparency, and a commitment to quality to
              every installation in {loc.name}.
            </p>
          </div>
          <div className="loc-benefits-grid">
            {loc.bullets.map((bullet, i) => (
              <div key={i} className="loc-benefit-card">
                <div className="loc-benefit-card-icon">
                  {["🏆", "🛡️", "⚡", "💰"][i % 4]}
                </div>
                <p>{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ SERVICES ════════════ */}
      <section className="loc-services-section" ref={servicesRef}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Services</span>
            <h2>Services Available in {loc.name}</h2>
            <p>
              Beyond new installations, we offer a full range of garage door
              services for {loc.name} homeowners.
            </p>
          </div>
          <div className="loc-services-grid">
            {servicesList.map((svc, i) => (
              <Link to={svc.path} key={i} className="loc-service-card">
                <div className="loc-service-card-icon">{svc.icon}</div>
                <h3>{svc.name}</h3>
                <span>
                  Learn More <ArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ PROCESS ════════════ */}
      <section className="loc-process-section" ref={processRef}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow" style={{ color: "var(--orange)" }}>
              Our Process
            </span>
            <h2>How We Install Your New Garage Door</h2>
            <p>
              From consultation to final walkthrough, we make the experience
              seamless for {loc.name} homeowners.
            </p>
          </div>
          <div className="loc-process-grid">
            {processSteps.map((step, i) => (
              <div key={i} className="loc-process-step">
                <div className="loc-process-num">{step.num}</div>
                <div className="loc-process-icon">{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ GALLERY ════════════ */}
      <section className="loc-gallery-section" ref={galleryRef}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Before & After</span>
            <h2>Recent Installations</h2>
            <p>See the transformation our garage door installations bring to homes in communities like {loc.name}.</p>
          </div>
          <div className="loc-gallery-wrap">
            {galleryItems.map((item, i) => (
              <div key={i} className="loc-gallery-card">
                <div className="loc-gallery-pair">
                  <div className="loc-gallery-divider" />
                  <figure className="loc-gallery-figure">
                    <span className="loc-gallery-label">Before</span>
                    <img
                      src={item.before}
                      alt={`Before project ${i + 1}`}
                      className="loc-gallery-img"
                      loading="lazy"
                    />
                  </figure>
                  <figure className="loc-gallery-figure">
                    <span className="loc-gallery-label loc-gallery-label--after">After</span>
                    <img
                      src={item.after}
                      alt={`After project ${i + 1}`}
                      className="loc-gallery-img"
                      loading="lazy"
                    />
                  </figure>
                </div>
                <div className="loc-gallery-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ TESTIMONIALS ════════════ */}
      <section className="loc-testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow" style={{ color: "var(--orange)" }}>
              Testimonials
            </span>
            <h2>What Our Customers Say</h2>
            <p>
              Hear from homeowners we've served across the Atlanta area.
            </p>
          </div>
          <div className="loc-testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="loc-testimonial-card">
                <div className="loc-testimonial-stars">
                  {"★".repeat(t.stars)}
                </div>
                <p className="loc-testimonial-text">"{t.text}"</p>
                <div className="loc-testimonial-author">
                  <div className="loc-testimonial-avatar">{t.avatar}</div>
                  <div>
                    <div>{t.author}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,.4)" }}>
                      {t.area}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ FAQ ════════════ */}
      <section className="loc-faq-section" ref={faqRef}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">FAQs</span>
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about garage door installation in {loc.name}.</p>
          </div>
          <div className="loc-faq-list">
            {loc.faqs.map((faq, i) => (
              <FaqItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ NEARBY LOCATIONS ════════════ */}
      {nearby.length > 0 && (
        <section className="loc-nearby-section">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Nearby Areas</span>
              <h2>We Also Serve Nearby Communities</h2>
              <p>
                Explore other neighborhoods we serve near {loc.name}.
              </p>
            </div>
            <div className="loc-nearby-grid">
              {nearby.map((n) => (
                <Link
                  to={`/locations/${n.id}`}
                  key={n.id}
                  className="loc-nearby-card"
                >
                  <div className="loc-nearby-card-icon">📍</div>
                  <h4>{n.name}</h4>
                  <span>
                    View Location <ArrowRight />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
          <h2>Upgrade Your Garage Door in {loc.name}</h2>
          <p>
            {loc.name} homeowners, call Access Edge Garage Door at{" "}
            <strong style={{ color: "var(--orange)" }}>470-666-4097</strong> for
            your free new door consultation today.
          </p>
          <a href="tel:4706664097" className="btn btn--primary">
            <PhoneIcon /> Call 470-666-4097
          </a>
        </div>
      </section>
    </div>
  );
}
