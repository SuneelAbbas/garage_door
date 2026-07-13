import aboutImage from "../assets/images/garage_image.png";
import { IconCheckCircle, IconArrowRight } from "../data/icons";

export default function About() {
  return (
    <section className="section about">
      <div className="container">
        <div className="about-visual">
          <div className="about-image-wrap">
            <div className="about-image-main">
              <img src={aboutImage} alt="Access Edge Garage Door service team at work" className="about-img-el" loading="lazy" />
            </div>
          </div>

          {/* Floating stat card 1 */}
          <div className="stat-card about-stat--1">
            <div className="stat-card-num">500+</div>
            <div className="stat-card-label">Jobs Completed</div>
          </div>

          {/* Floating stat card 2 */}
          <div className="stat-card about-stat--2">
            <div className="stat-card-num">15+</div>
            <div className="stat-card-label">Years Experience</div>
          </div>
        </div>

        <div className="about-content">
          <span className="eyebrow">ABOUT US</span>
          <h2>Built on Trust. Driven by Reliable Garage Door Solutions</h2>
          <p>
            Access Edge Garage Door Technologies serves homeowners across Atlanta with safe,
            efficient, and long-lasting services, building trust and providing reliable garage
            door solutions. We complete every job, from quick repairs to full installations, with
            precision and care.
          </p>
          <div className="icon-chip-list">
            <span className="icon-chip">
              <span className="icon-chip-icon">
                <IconCheckCircle size={16} />
              </span>
              Reliable installation repairs
            </span>
            <span className="icon-chip">
              <span className="icon-chip-icon">
                <IconCheckCircle size={16} />
              </span>
              24/7 emergency support
            </span>
            <span className="icon-chip">
              <span className="icon-chip-icon">
                <IconCheckCircle size={16} />
              </span>
              Durable, high-quality materials
            </span>
            <span className="icon-chip">
              <span className="icon-chip-icon">
                <IconCheckCircle size={16} />
              </span>
              Customer-focused trusted service
            </span>
          </div>
          <a href="#" className="btn btn--primary">
            LEARN MORE ABOUT OUR SERVICES
            <IconArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
