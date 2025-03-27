import React from "react";
import LogoCarousel from "../components/LogoCarousel";

export default function Companies() {
  return (
    <section className="w-full px-4 py-16 md:py-24 flex flex-col items-center text-center">
      <p>
        Top 500 firms trust Fieldguide to improve efficiency, revenue, and
        client experiences
      </p>
      <LogoCarousel />
    </section>
  );
}
