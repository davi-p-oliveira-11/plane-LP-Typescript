import React from "react";

export default function DataCard() {
  return (
    <div className="flex-1 lg:flex-[0.4] bg-gray-50 shadow-md rounded-xl p-8  flex flex-col justify-center">
      <p className="text-lg font-semibold mb-1">Client Satisfaction</p>
      <p className="text-sm ">Based on survey responses from over 200 firms</p>
    </div>
  );
}
