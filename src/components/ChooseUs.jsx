"user strict";

import React from "react";

const ChooseUs = () => {
  return (
    <section className="bg-gray-50 py-16 px-8 md:px-16 flex flex-col md:flex-row items-center">
      {/* Left Content */}
      <div className="md:w-1/2">
        <h2 className="relative inline-block text-center text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-10">
          {/* CUSTOMER FEEDBACK - Middle Bottom of "Testimonial" */}
          <span
            className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-3 text-[#684DF4] 
                   text-base sm:text-lg md:text-xl tracking-wide font-semibold whitespace-nowrap"
          >
            WHY CHOOSE US
          </span>

          {/* Main Heading */}
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-gray-700 to-gray-200 uppercase">
            Choose us
          </span>
        </h2>

        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          More Than <span className="text-[#684DF4]">15+ Years</span> Experience
        </h2>
        <h2 className="text-4xl font-bold text-gray-900">
          We Provide <span className="text-[#684DF4]">IT Services</span>
        </h2>
        <p className="text-gray-600 mt-4">
          Choose Mindsync Consulting for expert IT solutions, comprehensive
          services, authorized partnerships, quality assurance, client-centric
          approach, innovative design, and tailored solutions. Trust us for
          reliable, high-performance projects.
        </p>

        {/* Stats */}
        <div className="flex gap-8 mt-6">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full border-4 border-[#684DF4] flex items-center justify-center text-2xl font-bold text-black">
              90%
            </div>
            <h4 className="text-xl font-semibold mt-2">Business Grow</h4>
            <p className="text-gray-500 text-sm">
              Expert IT solutions driving business growth.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 rounded-full border-4 border-[#684DF4] flex items-center justify-center text-2xl font-bold text-black">
              95%
            </div>
            <h4 className="text-xl font-semibold mt-2">Quality Products</h4>
            <p className="text-gray-500 text-sm">
              Delivering top-quality, reliable IT solutions.
            </p>
          </div>
        </div>

        <button className="mt-6 bg-[#684DF4] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#141D38] transition-all">
          LEARN MORE →
        </button>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center relative mt-10 md:mt-0">
        <img
          src="/images/whychooseus.png"
          alt="Team Meeting"
          className="rounded-lg shadow-lg"
        />
        <div className="absolute top-2 right-16 flex items-center justify-center">
          <div className="w-35 h-35 rounded-full bg-[#E2E8FA] flex items-center justify-center">
            <div className="w-30 h-30 bg-[#684DF4] text-white rounded-full flex flex-col items-center justify-center shadow-lg">
              <span className="text-xl font-bold">10+</span>
              <span className="text-xs">Active Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
