"use client";
import Hero from "./Hero";
import Info from "./Info";
import Featured from "./Featured";
import Projects from "./Projects";
import Services from "./Services";
import ServicePage from "./ServicePage";
import ContactPage from "./ContactPage";
import { business, ecommerce, landingPages } from "../data/demoProjects";

const Container = () => {
  return (
    <div className="relative overflow-hidden bg-[--primary]">
      <Hero />
      <Info />
      <Featured />
      <Projects
        ecommerce={ecommerce}
        landingPages={landingPages}
        business={business}
      />

      <Services />
      <ServicePage />
      <ContactPage />
    </div>
  );
};

export default Container;
