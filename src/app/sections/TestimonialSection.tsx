import React from "react";
import { logos } from "../constants/LogoCarousel";
import TestimonialCard from "../components/TestimonialCard";
import DataCard from "../components/DataCard";

export default function TestimonialSection() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto text-center">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 text-left">
        <TestimonialCard />
        <DataCard />
      </div>
    </section>
  );
}
