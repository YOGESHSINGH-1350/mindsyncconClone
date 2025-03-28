"use client";
import React from "react";
import { FaCode, FaPalette, FaBlockchain, FaShoppingCart } from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";
import Link from "next/link";

const services = [
  {
    title: "Software Development",
    description:
      "Custom software for efficient, seamless, and innovative operations.",
    icon: <FaCode size={30} className="text-white" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Exceptional UI/UX design services, creating intuitive, user-friendly interfaces for optimal user experience.",
    icon: <FaPalette size={30} className="text-white" />,
  },
  {
    title: "Blockchain Development",
    description:
      "Blockchain optimizes decentralized energy trading and peer-to-peer energy sharing.",
    icon: <SiBlockchaindotcom size={30} className="text-white" />,
  },
  {
    title: "E-commerce Solutions",
    description:
      "We work with platforms like Shopify, WooCommerce, and custom-built solutions.",
    icon: <FaShoppingCart size={30} className="text-white" />,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 px-4 md:py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto text-left">
        {/* Title */}
        <h2 className="relative inline-block text-center text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-10">
  
  {/* CUSTOMER FEEDBACK - Middle Bottom of "Testimonial" */}
  <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-3 text-[#684DF4] 
                   text-base sm:text-lg md:text-xl tracking-wide font-semibold whitespace-nowrap">
    Latest Projects
  </span>

  {/* Main Heading */}
  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-gray-700 to-gray-200 uppercase">
    Services
  </span>

</h2>

        <p className="text-[#4F39F6] font-bold text-3xl ml-18 mt-3">
          Your Business
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transform transition duration-600 hover:scale-105 border border-gray-200"
            >
              {/* Icon */}
              <div className="relative inline-block">
                <div className="bg-[#684DF4] w-16 h-16 flex items-center justify-center rounded-full relative">
                  {service.icon}
                </div>
                <div className="absolute -top-2 -left-2 w-20 h-20 bg-[#684DF4] opacity-30 rounded-full blur-xl" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{service.description}</p>

              {/* Button */}
              <Link
                href="/services"
                className="inline-block mt-4 px-5 py-2 bg-[#684DF4] text-white rounded-full text-sm font-medium hover:bg-[#141D38] transition-colors"
              >
                READ MORE →
              </Link>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#684DF4] text-white px-6 py-3 rounded-full hover:bg-[#141D38] transition-colors"
          >
            VIEW ALL SERVICES →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
