import Header from "./components/Header";
import Hero from "./components/Hero";
import HorizontalBand from "./components/HorizontalBand";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <HorizontalBand />
    </main>
  );
}
