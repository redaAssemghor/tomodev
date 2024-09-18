"use client";
import { Provider } from "react-redux";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import HorizontalBand from "./components/HorizontalBand";
import Info from "./components/Info";
import { store } from "@/store/store";
import Projects from "./components/Projects";
import Services from "./components/Services";
import ServicePage from "./components/ServicePage";
import ContactPage from "./components/ContactPage";
import { cart, featured, wallet } from "./data/demoProjects";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="overflow-hidden bg-[--primary]">
        <Hero />
        <HorizontalBand />
        <Info />
        <Featured />
        <Projects cart={cart} featured={featured} wallet={wallet} />
        <Services />
        <ServicePage />
        <ContactPage />
      </main>
    </Provider>
  );
}
