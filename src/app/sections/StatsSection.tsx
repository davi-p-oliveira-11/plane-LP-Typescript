import Image from "next/image";
import ball from "../../../public/images/assets/ball-2.svg";

export default function BigCardSection() {
  return (
    <section className="px-4 py-16 flex justify-center bg-black">
      <div className="relative w-full max-w-6xl rounded-2xl bg-[#111827] text-white p-10 overflow-hidden min-h-[500px]">
        <div className="text-center mb-10 relative z-10">
          <h3 className="text-3xl font-semibold mb-4">Ready to launch?</h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Boost your ideas with our top-notch solutions and blazing-fast
            delivery.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-[#111827] px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
              Get Started
            </button>
            <button className="border border-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-[#111827] transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="absolute inset-0 h-1/2 w-full "></div>
        <div className="z-10 mt-10 grid grid-cols-4 divide-x divide-white/20 text-center pt-40">
          {[
            { number: "10K+", label: "Users" },
            { number: "500+", label: "Projects" },
            { number: "120", label: "Reviews" },
            { number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div key={index} className="px-4">
              <h3 className="text-2xl font-bold">{stat.number}</h3>
              <p className="text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
