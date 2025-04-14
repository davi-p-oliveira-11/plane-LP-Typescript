import React from "react";
import Image from "next/image";

export default function TestimonialCard() {
  return (
    <div className="flex-1 lg:flex-[0.7] shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row">
      <Image
        src="/images/assets/man1.svg"
        alt="Testimonial"
        width={180}
        height={180}
        className="w-full md:w-48 h-full object-cover"
      />
      <div className="p-6 flex flex-col justify-center">
        <p className="text-lg font-medium mb-4 italic">
          “Using this platform has revolutionized how we handle audits. The
          collaboration and automation saved us countless hours.”
        </p>
        <p className="font-semibold">Jane Doe</p>
        <p className="text-sm">Partner at Aprio</p>
      </div>
    </div>
  );
}
