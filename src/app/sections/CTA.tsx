export default function BigCardSection() {
  return (
    <section className="px-4 py-8 flex justify-center bg-black">
      <div className="relative w-full max-w-6xl rounded-2xl text-white p-6 overflow-hidden min-h-[400px] bg-[#111827]">
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
      </div>
    </section>
  );
}
