import areasDoorImage from "../assets/images/garage_door_image.png";

const areas = [
  "ATLANTA", "MARIETTA", "SMYRNA", "KENNESAW", "ROSWELL",
  "ALPHARETTA", "SANDY SPRINGS", "DUNWOODY", "DECATUR", "NORCROSS",
  "LAWRENCEVILLE", "DULUTH", "JOHNS CREEK", "PEACHTREE CITY", "FAYETTEVILLE",
  "Stockbridge", "Lilburn", "Ellenwood", "Stone Mountain", "Tucker",
];

export default function ServiceAreas() {
  return (
    <section className="section areas">
      {/* Subtle map silhouette background */}
      <div className="areas-map-bg" aria-hidden="true">
        <img src={areasDoorImage} alt="" className="areas-bg-door" />
        <svg viewBox="0 0 800 600" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M400 50C250 50 120 150 100 280c-10 60 5 120 35 170 20 35 50 65 85 85 30 18 65 30 100 35 30 5 60 2 90-5 30-7 58-20 82-38 35-25 58-60 68-100 8-32 5-65-8-95-18-40-48-72-85-95-30-18-65-30-100-35-20-3-40-3-60 0-30 5-58 18-82 38-25 22-42 50-50 82-6 25-4 52 6 76 12 28 32 48 58 62 22 12 46 18 72 20 30 2 60-5 85-20 20-12 35-28 45-48 10-20 13-42 10-63-4-28-18-52-38-70-18-16-40-26-65-30-28-5-55-2-80 10-22 10-38 25-48 44-10 18-12 38-6 58 5 18 16 32 30 42l2-2c-10-8-18-20-22-34-5-18-2-38 8-55 12-20 30-35 52-42 25-8 52-5 75 8 22 12 38 32 48 55 8 20 8 42-2 60-10 18-25 30-44 38-22 10-48 12-72 8-22-4-42-14-58-30-16-16-25-38-25-60 0-25 10-48 28-65 18-18 42-28 68-30 30-2 60 5 85 22 25 16 42 40 52 68 8 22 8 46-2 68-10 20-25 36-44 48-22 14-48 22-75 22-32 0-62-10-88-30-25-18-42-45-50-75-8-32-5-65 10-95 15-30 38-52 65-68 30-18 65-28 100-28 35 0 70 10 100 28 28 16 50 40 65 68 15 30 18 63 10 95-8 30-25 57-50 75-26 20-56 30-88 30-27 0-53-8-75-22-19-12-34-28-44-48-10-22-10-46-2-68 10-28 27-52 52-68 25-17 55-24 85-22 26 2 50 12 68 30 18 17 28 40 28 65 0 22-9 44-25 60-16 16-36 26-58 30-24 4-50 2-72-8-19-8-34-20-44-38-10-18-10-40-2-60 10-23 26-43 48-55 23-13 50-16 75-8 22 7 40 22 52 42 10 17 13 37 8 55-4 14-12 26-22 34l2 2c14-10 25-24 30-42 6-20 4-40-6-58-10-19-26-34-48-44-25-12-52-15-80-10-25 4-47 14-65 30-20 18-34 42-38 70-3 21 0 43 10 63 10 20 25 36 45 48 25 15 55 22 85 20 26-2 50-8 72-20 26-14 46-34 58-62 10-24 12-51 6-76-8-32-25-60-50-82-24-20-52-33-82-38-20-4-40-4-60 0z" />
        </svg>
      </div>

      <div className="container">
        <div className="section-header">
          <div className="section-header-accent">
            <span className="eyebrow">SERVICE AREAS</span>
          </div>
          <h2>Garage Door Repair & Installation in Atlanta, GA and Surrounding Areas</h2>
          <p className="lead">
            We proudly serve homeowners and businesses throughout the following locations, ensuring
            fast response times and reliable service across the region.
          </p>
        </div>

        <div className="areas-counter">
          <span className="areas-counter-icon">📍</span>
          20+ Cities Served
        </div>

        <div className="areas-grid">
          {areas.map((area) => (
            <div className="area-chip" key={area}>
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 2a6 6 0 00-6 6c0 4 6 10 6 10s6-6 6-10a6 6 0 00-6-6z" />
                <circle cx="10" cy="8" r="2" />
              </svg>
              {area}
            </div>
          ))}
        </div>

        <p className="foot-note">
          Our services include garage door repair, spring replacement, opener repair and
          installation, new garage door installation, and emergency garage door services. Every
          job is completed using high-quality parts and industry-standard techniques to ensure
          lasting performance and safety.
          <br /><br />
          As a locally operated business, we understand the needs of homeowners in the Atlanta
          metro area and focus on delivering dependable service, transparent pricing, and
          efficient solutions tailored to each customer.
        </p>
      </div>
    </section>
  );
}
