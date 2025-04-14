import React from "react";

export default function InfoCard() {
  return (
    <div className="flex-1 space-y-6">
      <p className="text-sm uppercase text-primary font-medium">
        Why FieldGuide
      </p>
      <h3 className="text-2xl font-semibold">Smarter Audits, Happier Teams</h3>
      <p className="text-gray-600 mb-8">
        From planning to delivery, our platform simplifies every step of the
        audit process.
      </p>

      <div className="grid grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index}>
            <p className="font-semibold text-lg">{feature.title}</p>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>

<div className="flex-1">
<Image
  src="/images/assets/feature-illustration.svg"
  alt="Illustration"
  width={600}
  height={400}
  className="w-full h-auto rounded-lg shadow-md"
/>
</div>
  );
}
