import { IconClock, IconLayers, IconShield, IconDollar, IconCheck } from "../data/icons";

const leftFeatures = [
  {
    icon: <IconClock size={24} />,
    title: "24/7 Emergency Garage Door Repairs",
    text: "24/7 garage door repairs for safety and reliability.",
  },
  {
    icon: <IconLayers size={24} />,
    title: "Customized Garage Door Solutions",
    text: "Personalized solutions ensuring secure, smooth garage doors.",
  },
];

const rightFeatures = [
  {
    icon: <IconShield size={24} />,
    title: "Experts You Can Trust Forever",
    text: "Trusted experts delivering lasting garage door quality.",
  },
  {
    icon: <IconDollar size={24} />,
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
              <IconCheck size={28} />
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
