import { IconPhone, IconCheckCircle, IconWrench, IconClipboard } from "../data/icons";

const steps = [
  {
    num: "1",
    icon: <IconPhone size={24} />,
    title: "Contact Us",
    desc: "Give us a call or fill out the form. We'll listen to your issue and schedule a visit at your convenience — often the same day.",
  },
  {
    num: "2",
    icon: <IconClipboard size={24} />,
    title: "Free Estimate",
    desc: "Our technician arrives, inspects the issue thoroughly, and provides a clear, upfront quote — no hidden fees, no pressure.",
  },
  {
    num: "3",
    icon: <IconWrench size={24} />,
    title: "Professional Service",
    desc: "We get to work using premium parts and proven techniques. Every repair and installation is done right the first time.",
  },
  {
    num: "4",
    icon: <IconCheckCircle size={24} />,
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
