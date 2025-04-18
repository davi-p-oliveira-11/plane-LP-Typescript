import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Companies from "./sections/Companies";
import CTA from "./sections/CTA";
import Hero from "./sections/Hero";
import InfoSection from "./sections/InfoSection";
import StatsSection from "./sections/StatsSection";
import TestimonialSection from "./sections/TestimonialSection";

export default function Home() {
  return (
    <>
      <main className="max-w-[1260px] mx-auto px-5 py-8 md:py-0">
        <Navbar />
        <Hero />
        <Companies />
        <InfoSection />
        <StatsSection />
        <TestimonialSection />
      </main>

      <div className="max-w-[1440px] bg-[#111827] text-white py-16">
        <CTA />
      </div>

      <div className="max-w-[1440px] bg-[#0F172A] text-white py-12">
        <Footer />
      </div>
    </>
  );
}
