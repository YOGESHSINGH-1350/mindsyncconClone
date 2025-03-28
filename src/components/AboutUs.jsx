"use client";

import { PhoneCall } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-white px-4 md:px-10 lg:px-24">
      {/* Experience Badge (Responsive) */}
      <div className="absolute top-0 sm:-top-10 md:-top-16 left-1/2 transform -translate-x-1/2 text-center">
        {/* Outer White Circle */}
        <div className="relative w-24 h-24 sm:w-36 sm:h-36 md:w-45 md:h-45 flex items-center justify-center rounded-full bg-white shadow-lg">
          {/* Inner Purple Circle */}
          <div
            className="w-16 h-16 sm:w-28 sm:h-28 md:w-40 md:h-40 flex items-center justify-center rounded-full 
                          bg-[#684DF4]  text-[#141D38] sm:text-white text-3xl sm:text-5xl md:text-6xl font-bold"
          >
            <span className="mb-3 sm:mb-2 text-lg sm:text-6xl">15</span>
          </div>

          {/* Years Experience Text */}
          <p
            className="absolute -mb-8 sm:-mb-14 md:-mb-20 text-xs sm:text-xs md:text-lg  
              text-[#141D38] sm:text-white"
          >
            Years Experience
          </p>
        </div>
      </div>

      {/* Content Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center w-full max-w-6xl mx-auto">
        {/* Left Side - Image */}
        <div className="flex justify-center pt-24 sm:pt-0">
          <img
            src="/images/mindsync-logo.png"
            alt="Company Image"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-lg shadow-lg bg-[#141D38]"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="text-center md:text-left">
          <h2 className="relative inline-block text-center text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-10">
            <span
              className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-3 text-[#684DF4] 
                   text-base sm:text-lg md:text-xl tracking-wide font-semibold whitespace-nowrap"
            >
              mindsynccon
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-gray-700 to-gray-200 uppercase">
              About us
            </span>
          </h2>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            We Are Increasing Business Success With{" "}
            <span className="text-[#684DF4]">IT Solution</span>
          </h2>
          <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base">
            Mindsync Consulting Pvt Ltd excels in Mobile Apps, UI/UX Design, Web
            Apps, Admin Dashboards, and SQA. Combining technical expertise and
            creative design to deliver tailored, high-quality software solutions
            for diverse business needs.
          </p>

          {/* Certification & Team Section */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-4 sm:mt-6 font-bold items-center md:items-start">
            <div>
              <h4 className="font-semibold text-black">Certified Company</h4>
              <p className="text-gray-600 text-xs sm:text-sm">
                Best Provide Skills Services
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-black">Expert Team</h4>
              <p className="text-gray-600 text-xs sm:text-sm">
                100% Expert Team
              </p>
            </div>
          </div>

          {/* Button & Call Section */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center md:justify-start">
            <button className="bg-[#684DF4] text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg shadow-md hover:bg-[#141D38] transition text-sm sm:text-base">
              <a href="/contactus"> DISCOVER MORE → </a>
              
            </button>
            <div className="relative flex items-center gap-2">
              {/* Call Icon with Ripple Effect */}
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#684DF4] hover:bg-[#141D38] text-white rounded-full shadow-md">
                <div className="absolute inset-0 ripplea"></div>
                <PhoneCall />
              </div>
              <div>
                <p className="text-gray-700 text-xs sm:text-sm">Call Us On:</p>
                <p className="text-sm sm:text-lg font-semibold text-gray-900">
                  +91-1143572646
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
