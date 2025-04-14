import React from "react";
import { logos } from "../constants/LogoCarousel";

export default function CTA() {
  return (
    <section className="py-20 px-4 text-center max-w-4xl mx-auto">
      <h3 className="text-3xl font-bold mb-4">
        Ready to transform your workflow?
        <br />
        Get started with our platform today.
      </h3>

      <p className="mb-8 text-gray-600">
        Sign up now and join thousands of professionals already using our
        solution.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 max-w-2xl mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:w-[85%] px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
        />
        <button className="w-full sm:w-[15%] bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition">
          Join
        </button>
      </div>

      <div className="mx-auto max-w-[696px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 justify-items-center">
        {logos.slice(0, 7).map((logo, index) => (
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
