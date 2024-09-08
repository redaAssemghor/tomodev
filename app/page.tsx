"use client";
import { Provider } from "react-redux";
import Featured from "./components/Featured";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HorizontalBand from "./components/HorizontalBand";
import Info from "./components/Info";
import { store } from "@/store/store";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="overflow-hidden bg-[#00042A]">
        <Header />
        <Hero />
        <HorizontalBand />
        <Info />
        <Featured />
      </main>
    </Provider>
  );
}
