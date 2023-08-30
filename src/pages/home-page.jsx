// import components
import Clients from "../components/clients";
import PageHeader from "../components/header";
import NumbersSection from "../components/numbers";
import Quote from "../components/quote";
import WhySection from "../components/why";
import ServiceSection from "../components/services-section";
import AboutSection from "../components/about";
import Leaders from "../components/leaders";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    document.title = "Home | Shree Shakti Trading";
  }, []);
  return (
    <div style={{position:"relative"}}>
      <PageHeader />
      <NumbersSection />
      <ServiceSection />
      <AboutSection />
      <WhySection />
      <Clients />
      <Leaders />
      {/* <Quote /> */}
    </div>
  );
}
