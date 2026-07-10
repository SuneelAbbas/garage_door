import Hero from "../components/Hero";
import heroTeamImage from "../assets/images/heroimage.jpeg";
import HowItWorks from "../components/HowItWorks";
import Services from "../components/Services";
import About from "../components/About";
import Features from "../components/Features";
import Gallery from "../components/Gallery";
import ServiceAreas from "../components/ServiceAreas";
import CtaBanner from "../components/CtaBanner";
import Trust from "../components/Trust";
import Reviews from "../components/Reviews";
import FaqBook from "../components/FaqBook";
import ctaBgImage from "../assets/images/garage_door_image.png";

export default function HomePage() {
  return (
    <>
      <Hero heroImage={heroTeamImage} />
      <HowItWorks />
      <Services />
      <About />
      <Features />
      <Gallery />
      <ServiceAreas />
      <CtaBanner ctaImage={ctaBgImage} />
      <Trust />
      <Reviews />
      <FaqBook />
    </>
  );
}
