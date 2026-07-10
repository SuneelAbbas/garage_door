import { Link } from "react-router-dom";

export default function ServiceOpener() {
  return (
    <div className="service-page">
      <section
        className="page-hero"
        style={{
          backgroundImage: `linear-gradient(135deg,rgba(10,26,60,.75) 50%,rgba(10,26,60,.55)), url(/images/hero-opener.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h1>Garage Door Opener Repair & Installation in Atlanta, GA</h1>
          <p className="page-hero-sub">
            Your garage door opener is the brain of your entry system. When it starts acting up — refusing to respond, reversing mid-cycle, or making strange electronic noises — it disrupts your entire day. At Access Edge Garage Door, we repair and install all major garage door opener brands across Atlanta and Metro Atlanta. Whether you need a quick fix or want to upgrade to a smart opener with Wi-Fi connectivity, we have you covered.
          </p>
        </div>
      </section>

      <section className="section why-choose">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Why Choose Us</span>
            <h2>Why Choose Us for Opener Repair and Installation</h2>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🏷️</div>
              <h3>All Major Brands Serviced</h3>
              <p>We work on Chamberlain, LiftMaster, Genie, Craftsman, Sommer, and more, with genuine replacement parts in stock.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📱</div>
              <h3>Smart Opener Experts</h3>
              <p>Upgrade to a Wi-Fi-enabled opener with smartphone control, voice assistant compatibility, and real-time alerts — we install and set up everything.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔋</div>
              <h3>Battery Backup Included</h3>
              <p>Our recommended openers include built-in battery backup, so you can still open and close your door during power outages common in Atlanta storms.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🤫</div>
              <h3>Quiet, Vibration-Free Operation</h3>
              <p>We install belt-drive and DC motor openers that run whisper-quiet — perfect for homes with bedrooms above or adjacent to the garage.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Our Process</span>
            <h2>Our Opener Installation Process</h2>
          </div>
          <div className="process-steps">
            <div className="step">
              <span className="step-num">1</span>
              <h3>Evaluate Your Needs</h3>
              <p>We assess your door weight, ceiling height, and desired features to recommend the right opener type (chain-drive, belt-drive, or jackshaft).</p>
            </div>
            <div className="step">
              <span className="step-num">2</span>
              <h3>Remove Old Unit</h3>
              <p>We safely disconnect and remove your existing opener, checking wiring and ceiling mounting for safety.</p>
            </div>
            <div className="step">
              <span className="step-num">3</span>
              <h3>Install New Opener</h3>
              <p>We mount the rail and motor unit, connect the drive mechanism, install safety sensors, and program remote controls and keypads.</p>
            </div>
            <div className="step">
              <span className="step-num">4</span>
              <h3>Program Smart Features</h3>
              <p>We connect your opener to Wi-Fi, set up the mobile app, pair with voice assistants, and show you how to use every feature.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section overview-section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Overview</span>
            <h2>Modern Openers for Modern Homes</h2>
          </div>
          <div className="overview-content">
            <p>Modern garage door openers have come a long way from the simple remote-controlled units of the past. Today's openers offer smartphone control, motion-detecting lights, battery backup, ultra-quiet belt-drive motors, and even built-in security cameras. But with more technology comes more potential for issues. Flickering sensors, worn gears, failed circuit boards, and signal interference can all cause your opener to malfunction. When your opener leaves you stranded — stuck outside in the rain or unable to leave for work — you need a technician who can diagnose and fix the problem fast.</p>
            <p>At Access Edge Garage Door, we stay current with the latest opener technology so we can service older units and install cutting-edge replacements. Our technicians are factory-trained on Chamberlain, LiftMaster, and Genie systems, and we carry a wide selection of openers on our trucks for immediate installation. Whether you live in a new construction home in Johns Creek needing a Wi-Fi-enabled smart opener or an older Atlanta bungalow requiring a wall-mount jackshaft opener for low headroom, we match the right opener to your space and budget.</p>
          </div>
        </div>
      </section>

      <section className="section signs-section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Signs You Need Opener Service</span>
            <h2>Signs You Need Opener Repair or Replacement</h2>
          </div>
          <ul className="signs-list">
            <li>The remote or keypad works only when standing close to the door</li>
            <li>The opener makes grinding or buzzing sounds but the door does not move</li>
            <li>The door reverses before touching the floor, or opens randomly on its own</li>
            <li>The motor runs but the door stays put (worn gears or stripped sprocket)</li>
            <li>Your opener is over 10–12 years old and lacks modern safety features</li>
          </ul>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">FAQs</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            <div className="faq-item">
              <div className="faq-item-head">
                <span>What type of garage door opener is best for Atlanta homes?</span>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">Belt-drive openers with DC motors are the most popular choice — they are quiet, reliable, and ideal for attached garages. Wi-Fi connectivity and battery backup are highly recommended for convenience and storm preparedness.</div>
            </div>
            <div className="faq-item">
              <div className="faq-item-head">
                <span>Can I keep my existing remote controls with a new opener?</span>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">In most cases, no. New openers use updated radio frequencies and rolling-code technology for security. However, we can program compatible external receivers if needed. Most new openers include two remotes and a wall console.</div>
            </div>
            <div className="faq-item">
              <div className="faq-item-head">
                <span>How long does opener installation take?</span>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">A standard opener installation takes approximately 2 to 3 hours, including removal of the old unit, mounting, wiring, programming, and safety testing.</div>
            </div>
            <div className="faq-item">
              <div className="faq-item-head">
                <span>Do you offer smart garage door openers with Wi-Fi?</span>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">Yes. We install Chamberlain MyQ and LiftMaster Wi-Fi openers that let you monitor and control your door from anywhere using your smartphone. You can also set schedules, receive activity alerts, and integrate with Amazon Key and Google Assistant.</div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="cta-banner"
        style={{
          backgroundImage: `linear-gradient(rgba(10,20,40,.85), rgba(10,20,40,.85)), url(/images/cta-opener.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h2>Upgrade Your Opener Today</h2>
          <p>Upgrade your outdated or malfunctioning opener today. Call Access Edge Garage Door for expert opener repair and installation in Atlanta.</p>
          <Link to="/contact" className="btn btn-orange">Schedule Opener Service →</Link>
        </div>
      </section>
    </div>
  );
}
