import React from "react";
import Image from "next/image";
import { logos } from "../constants/LogoCarousel";

export default function TestimonialSection() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto text-center">
      <h3 className="text-2xl font-bold mb-2">What our clients say</h3>
      <p className="mb-6 max-w-xl mx-auto">
        Trusted by accounting firms and professionals worldwide.
      </p>
      <div className="mx-auto max-w-[696px] grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        {logos.slice(0, 4).map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={logo}
              alt={`Logo ${index}`}
              className="w-20 h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
