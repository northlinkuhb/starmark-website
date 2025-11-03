import AboutUsSection from "./_components/AboutUsSection";
import Faq from "./_components/Faq";
import Hero from "./_components/Hero";
import Load from "./_components/Load";
import ServiceSection from "./_components/ServiceSection";
import Values from "./_components/Values";

export default function Home() {
  return (
    <div>
      <Load />
      <Hero />
      <AboutUsSection />
      <ServiceSection />
      <Values />
      <Faq />
    </div>
  );
}
