import Header from "./components/Header";
import Hero from "./components/Hero";
import HorizontalBand from "./components/HorizontalBand";
import Info from "./components/Info";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#00042A]">
      <Header />
      <Hero />
      <HorizontalBand />
      <Info />
    </main>
  );
}
