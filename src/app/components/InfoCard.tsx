import React from "react";
import { features } from "../constants/Features";

export default function InfoCard() {
  return (
    <div className="flex-1 space-y-6">
      <p className="text-sm uppercase text-primary font-medium">
        Why FieldGuide
      </p>
      <h3 className="text-2xl font-semibold">Smarter Audits, Happier Teams</h3>
      <p className=" mb-8">
        From planning to delivery, our platform simplifies every step of the
        audit process.
      </p>

      <div className="grid grid-cols-1 gap-3">
        {features.map((feature, index) => (
          <div key={index}>
            <p className="font-semibold text-lg">{feature.title}</p>
            <p className="text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
