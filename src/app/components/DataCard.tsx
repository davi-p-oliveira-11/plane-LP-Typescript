import React from "react";

export default function DataCard() {
  return (
    <div className="flex-1 lg:flex-[0.3] bg-gray-50 shadow-md rounded-xl p-8 text-center flex flex-col justify-center">
      <h2 className="text-4xl font-bold text-blue-600 mb-2">98%</h2>
      <p className="text-lg font-semibold mb-1">Client Satisfaction</p>
      <p className="text-sm ">Based on survey responses from over 200 firms</p>
    </div>
  );
}
