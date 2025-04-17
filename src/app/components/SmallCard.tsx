import React from "react";
import Image from "next/image";
import infoCard from "../../../public/images/assets/info-card-1.svg";

export default function TestimonialCard() {
  return (
    <div className="flex-1 lg:flex-[0.4] shadow-lg rounded-xl overflow-hidden flex flex-col  bg-white">
      <div className="w-full h-64 relative">
        <Image src={infoCard} alt="Jane Doe" fill className="object-cover" />
      </div>

      <div className="p-6 flex flex-col ">
        <p className="font-semibold text-gray-900">Jane Doe</p>
        <p className="text-sm text-gray-600">Partner at Aprio</p>
      </div>
    </div>
  );
}
