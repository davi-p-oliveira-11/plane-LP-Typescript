import React from "react";
import { logos } from "../constants/LogoCarousel";

import DataCard from "../components/DataCard";
import BigCard from "../components/BigCard";

export default function TestimonialSection() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto text-center">
      <h3 className="text-3xl font-semibold mb-4">Ready to launch?</h3>
      <p className="text-gray-300 mb-6 max-w-xl mx-auto">
        Boost your ideas with our top-notch solutions and blazing-fast delivery.
      </p>
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 text-left">
        <BigCard />
        <SmallCard />
      </div>
    </section>
  );
}
