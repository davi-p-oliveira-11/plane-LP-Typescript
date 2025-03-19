import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

export default function Home() {
  return (
    <main className="max-w-[1260px] mx-auto px-5 py-8 md:py-0">
      <Navbar />
      <Hero />
    </main>
  );
}
