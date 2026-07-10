const leftFeatures = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "24/7 Emergency Garage Door Repairs",
    text: "24/7 garage door repairs for safety and reliability.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Customized Garage Door Solutions",
    text: "Personalized solutions ensuring secure, smooth garage doors.",
  },
];

const rightFeatures = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Experts You Can Trust Forever",
    text: "Trusted experts delivering lasting garage door quality.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: "Affordable Pricing, Exceptional Value",
    text: "Quality garage door services at affordable prices.",
  },
];

function FeatureCard({ icon, title, text }) {
  return (
    <div className="feature-card">
      <div className="feature-card-icon">{icon}</div>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

import featureVideo from "../assets/images/garage_video.mp4";

export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="features-grid">
          <div className="feature-col">
            {leftFeatures.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>

          {/* Redesigned center column with video background */}
          <div className="feature-center">
            <video className="feature-center-video" autoPlay muted loop playsInline preload="metadata">
              <source src={featureVideo} type="video/mp4" />
            </video>
            <div className="feature-center-overlay" />
            <div className="feature-center-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3>Garage Door Services You Can Count On</h3>
            <p>Family-owned and locally operated in Atlanta since 2010</p>
            <div className="feature-center-stat">
              <span className="feature-center-stat-num">4.9/5</span>
              <span className="feature-center-stat-label">Average Customer Rating</span>
            </div>
          </div>

          <div className="feature-col">
            {rightFeatures.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
