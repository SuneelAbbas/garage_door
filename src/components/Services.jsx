import { IconGarage, IconWrench, IconLayers, IconRemote, IconBell } from "../data/icons";

const services = [
  {
    icon: <IconGarage size={24} />,
    title: "New Garage Door Installation",
    text: "High-quality garage door installation ensuring safety, durability, and smooth long-term performance.",
    featured: false,
  },
  {
    icon: <IconWrench size={24} />,
    title: "Garage Door Repairs",
    text: "Expert repair services for all garage door issues, restoring safe and reliable operation quickly.",
    featured: false,
  },
  {
    icon: <IconLayers size={24} />,
    title: "Spring Replacement",
    text: "Safe and precise spring replacement to restore balance, performance, and durability.",
    featured: false,
  },
  {
    icon: <IconRemote size={24} />,
    title: "Opener Repair and Installation",
    text: "Reliable opener repair and installation services for smooth and secure garage door operation.",
    featured: false,
  },
  {
    icon: <IconBell size={24} />,
    title: "24/7 Emergency Garage Door Service",
    text: "Fast emergency garage door repair in Atlanta, GA, for urgent issues, available day and night.",
    featured: true,
  },
];

import { IconArrowRight } from "../data/icons";

function ServiceCard({ icon, title, text, featured }) {
  return (
    <div className={`service-card${featured ? " service-card--featured" : ""}`}>
      <div className="service-card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <a href="#" className="service-card-learn">
        Learn More
        <IconArrowRight size={16} />
      </a>
    </div>
  );
}

export default function Services() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-header-accent">
            <span className="eyebrow">OUR SERVICES</span>
          </div>
          <h2>Professional Garage Door Services in Atlanta, GA</h2>
          <p>
            Our experienced technicians deliver reliable and long-lasting results for garage door
            repair, new garage door installation, spring replacement, and opener repair. We proudly
            serve Atlanta and surrounding areas with fast, professional service backed by trusted
            customer support.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
