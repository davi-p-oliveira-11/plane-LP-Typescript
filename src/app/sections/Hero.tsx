import React from "react";
import Button from "../components/Button";
import Image from "next/image";
import VideoPlayer from "../components/VideoPlayer";

export default function Hero() {
  return (
    <section className="w-full px-4 py-16 md:py-24 flex flex-col items-center text-center">
      <div className="bg-muted px-4 py-1.5 rounded-full text-sm font-medium mb-6">
        Empowering Audit Professionals
      </div>

      <h1 className="text-4xl md:text-5xl font-bold max-w-4xl mb-4">
        Project Management <br />
        tool from the future.
      </h1>

      <p className="text-muted-foreground max-w-xl mb-6 text-base md:text-lg">
        Meet Plane. An open source software development tool to manage Issues,
        sprints
        <br />
        and product roadmaps with peace of mind.
      </p>

      <Button />

      <Image
        src="/images/assets/hero-img.svg"
        alt="Hero illustration"
        width={800}
        height={300}
        className="mt-6"
      />
    </section>
  );
}
