import Navbar from "./components/Navbar";
import Companies from "./sections/Companies";
import Hero from "./sections/Hero";

export default function Home() {
  return (
    <main className="max-w-[1260px] mx-auto px-5 py-8 md:py-0">
      <Navbar />
      <Hero />
      <Companies />
    </main>
  );
}
