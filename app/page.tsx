import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-gray-100 to-gray-300">
      <Header />
      <Hero />
    </main>
  );
}
