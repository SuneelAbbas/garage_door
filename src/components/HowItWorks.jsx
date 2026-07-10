const steps = [
  {
    num: "1",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    title: "Contact Us",
    desc: "Give us a call or fill out the form. We'll listen to your issue and schedule a visit at your convenience — often the same day.",
  },
  {
    num: "2",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4" />
        <path d="M12 2a10 10 0 1010 10 10 10 0 00-10-10z" />
      </svg>
    ),
    title: "Free Estimate",
    desc: "Our technician arrives, inspects the issue thoroughly, and provides a clear, upfront quote — no hidden fees, no pressure.",
  },
  {
    num: "3",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Professional Service",
    desc: "We get to work using premium parts and proven techniques. Every repair and installation is done right the first time.",
  },
  {
    num: "4",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
    title: "Done Right",
    desc: "We test everything, clean up the workspace, and walk you through the results. Your satisfaction is our guarantee.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section how-it-works">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">How It Works</span>
          <h2>Garage Door Service in 4 Simple Steps</h2>
          <p className="how-sub">
            From your first call to the final test cycle — here's exactly what to expect when you
            choose Access Edge Garage Door.
          </p>
        </div>
        <div className="how-steps">
          {steps.map((s) => (
            <div className="how-step" key={s.num}>
              <div className="how-step-num-wrap">
                <span className="how-step-num">{s.num}</span>
              </div>
              <div className="how-step-icon">{s.icon}</div>
              <h3 className="how-step-title">{s.title}</h3>
              <p className="how-step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
