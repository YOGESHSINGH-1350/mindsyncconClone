import React from "react";

const ConsultationSection = () => {
  return (
    <section className="flex items-center justify-center px-6 py-16 bg-white md:px-12 lg:px-24">
      <div className="bg-gray-100 text-center rounded-lg shadow-lg p-8 md:p-12 lg:p-16 w-full max-w-5xl relative">
        {/* Background Text */}
        <h2 className="relative inline-block text-center text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-10">
  
  {/* CUSTOMER FEEDBACK - Middle Bottom of "Testimonial" */}
  <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-3 text-[#684DF4] 
                   text-base sm:text-lg md:text-xl tracking-wide font-semibold whitespace-nowrap">
    CONSULTATION
  </span>

  {/* Main Heading */}
  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-gray-700 to-gray-200 uppercase">
   let's CONSULTATION
  </span>

</h2>


      

        {/* Content */}
        <div className="relative z-10 text-center">          
          <h3 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
            Let’s Talk About Business Solutions <span className="text-indigo-600">With Us</span>
          </h3>
          <button className="mt-6 px-6 py-3 bg-indigo-600 text-white font-medium text-lg rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 flex items-center mx-auto">
            CONTACT US →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;