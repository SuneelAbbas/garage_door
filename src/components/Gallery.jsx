import beforeImg1 from "../assets/images/garage_image.png";
import afterImg1 from "../assets/images/garage_door_image.png";
import beforeImg2 from "../assets/images/garage_vehicle.png";
import afterImg2 from "../assets/images/garage_door_image.png";

const projects = [
  {
    before: beforeImg1,
    after: afterImg1,
    caption: "Complete spring replacement + new rollers — restored smooth, quiet operation in under 2 hours.",
  },
  {
    before: beforeImg2,
    after: afterImg2,
    caption: "Full garage door replacement with insulated steel door — boosted curb appeal and energy efficiency.",
  },
];

export default function Gallery() {
  return (
    <section className="section gallery">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Before & After</span>
          <h2>Real Projects, Real Results</h2>
          <p className="gallery-sub">
            See the difference professional garage door service makes. Every job we complete is
            backed by precision, quality materials, and a commitment to customer satisfaction.
          </p>
        </div>
        <div className="gallery-grid">
          {projects.map((p, i) => (
            <div className="gallery-card" key={i}>
              <div className="gallery-pair">
                <figure className="gallery-figure gallery-figure--before">
                  <div className="gallery-label">Before</div>
                  <img
                    src={p.before}
                    alt={`Before project ${i + 1}`}
                    className="gallery-img"
                    loading="lazy"
                  />
                </figure>
                <figure className="gallery-figure gallery-figure--after">
                  <div className="gallery-label gallery-label--after">After</div>
                  <img
                    src={p.after}
                    alt={`After project ${i + 1}`}
                    className="gallery-img"
                    loading="lazy"
                  />
                </figure>
              </div>
              <p className="gallery-caption">{p.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
