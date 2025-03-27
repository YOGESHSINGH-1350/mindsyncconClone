"use client";


import { PhoneCall } from "lucide-react"; // Call icon ke liye

export default function AboutUs() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-white px-6 lg:px-24">
      {/* Experience Badge */}
      <div className="absolute -top-16   transform -translate-x-1/2 text-center">
        <div className="relative w-45 h-45 flex items-center justify-center rounded-full bg-white shadow-lg">
          <div className="w-40 h-40 flex items-center justify-center rounded-full bg-[#684DF4] text-white text-6xl font-bold">
            <span>15</span>
          </div>
          <p className="absolute -mb-20 text-lg text-white">Years Experience</p>
        </div>
      </div>

      {/* Content Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full max-w-7xl mx-auto">
        
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img 
            src="/images/mindsync-logo.png" 
            alt="Company Image" 
            className="w-full max-w-lg rounded-lg shadow-lg bg-[#141D38] "
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="text-left">
          <h2 className="text-6xl font-bold text-gray-900 relative inline-block mb-5">
            <span className="absolute top-9 left-30 transform -translate-x-1/2 text-[#684DF4] text-xl tracking-wide font-semibold">
              About us
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-gray-800 to-gray-200 uppercase">
              About US
            </span>
          </h2>
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            We Are Increasing Business Success With <span className="text-[#684DF4]">IT Solution</span>
          </h2>
          <p className="text-gray-600 mt-4">
            Mindsync Consulting Pvt Ltd excels in Mobile Apps, UI/UX Design, Web Apps, Admin Dashboards, and SQA. Combining technical expertise and creative design to deliver tailored, high-quality software solutions for diverse business needs.
          </p>

          {/* Certification & Team Section */}
          <div className="flex gap-8 mt-6 font-bold">
            <div>
              <h4 className="font-semibold text-black">Certified Company</h4>
              <p className="text-gray-600 text-sm">Best Provide Skills Services</p>
            </div>
            <div>
              <h4 className="font-semibold text-black">Expert Team</h4>
              <p className="text-gray-600 text-sm">100% Expert Team</p>
            </div>
          </div>

          {/* Button & Call Section */}
          <div className="mt-6 flex gap-6 items-center">
            <button className="bg-[#684DF4] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#141D38] transition">
              DISCOVER MORE →
            </button>
            <div className="relative flex items-center gap-2">
              {/* Call Icon with Ripple Effect */}
              <div className="relative w-12 h-12 flex items-center justify-center bg-[#684DF4] hover:bg-[#141D38] text-white rounded-full shadow-md">
                <div className="absolute inset-0 ripplea  "></div>
                <PhoneCall size={26} strokeWidth={2} />
              </div>
              <div>
                <p className="text-gray-700 text-sm">Call Us On:</p>
                <p className="text-lg font-semibold text-gray-900">+91-1143572646</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
