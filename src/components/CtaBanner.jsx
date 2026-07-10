export default function CtaBanner({ ctaImage }) {
  return (
    <section
      className="cta-banner"
      style={
        ctaImage
          ? {
              backgroundImage: `linear-gradient(rgba(10,20,40,.85), rgba(10,20,40,.85)), url(${ctaImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <h2>Garage Door Problem? Let's Fix It Before It Gets Worse</h2>
      <p>
        From sudden breakdowns to ongoing issues, we provide fast and reliable garage door repair
        across Atlanta and nearby cities, often the same day.
      </p>
      <a href="#" className="btn btn-orange">📞 CALL NOW FOR IMMEDIATE SERVICE</a>
    </section>
  );
}
