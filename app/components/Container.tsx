"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import Hero from "./Hero";
import HorizontalBand from "./HorizontalBand";
import Info from "./Info";
import Featured from "./Featured";
import Projects from "./Projects";
import TemplateView from "./TemplateView";
import Services from "./Services";
import ServicePage from "./ServicePage";
import ContactPage from "./ContactPage";
import { business, ecommerce, landingPages } from "../data/demoProjects";

const Container = () => {
  const Showtemplate = useSelector((state: RootState) => state.template.show);

  return (
    <div className="relative overflow-hidden bg-[--primary]">
      <Hero />
      <HorizontalBand />
      <Info />
      <Featured />
      <Projects
        ecommerce={ecommerce}
        landingPages={landingPages}
        business={business}
      />
      {Showtemplate && <TemplateView />}

      <Services />
      <ServicePage />
      <ContactPage />
    </div>
  );
};

export default Container;
