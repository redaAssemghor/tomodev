import Header from "./components/Header";
import Hero from "./components/Hero";
import HorizontalBand from "./components/HorizontalBand";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold px-4">they trust us</h1>
        <HorizontalBand />
      </div>
    </main>
  );
}
