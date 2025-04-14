import React from "react";
import InfoCard from "../components/InfoCard";

export default function InfoSection() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Our Key Features</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-16">
        Everything your team needs to collaborate and deliver better audits.
      </p>

      <div className="flex flex-col lg:flex-row items-center gap-12 text-left">
        <InfoCard />
      </div>
    </section>
  );
}
