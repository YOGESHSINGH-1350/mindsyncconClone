"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="py-16 px-4 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Column - Image with Blob Shape */}
        <div className="relative md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            {/* Background abstract shapes */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#684DF4] rounded-full opacity-40 blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#684DF4] rounded-full opacity-40 blur-2xl" />

            {/* Blob Shape for Image */}
            <svg
              viewBox="0 0 600 600"
              className="absolute w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <clipPath id="blobClip">
                <path d="M424.5,323.5Q407,397,339,429Q271,461,198.5,431Q126,401,88.5,330.5Q51,260,95,197.5Q139,135,201.5,114Q264,93,328,108.5Q392,124,419.5,192Q447,260,424.5,323.5Z" />
              </clipPath>
              <image
                href="/images/team.jpg"
                width="600"
                height="600"
                clipPath="url(#blobClip)"
              />
            </svg>
          </div>
        </div>

        {/* Right Column - Text Content */}
        <div className="md:w-1/2">
          <h2 className="relative inline-block text-center text-5xl sm:text-6xl md:text-6xl font-bold text-gray-900 mb-10">
            {/* CUSTOMER FEEDBACK - Middle Bottom of "Testimonial" */}
            <span
              className="absolute left-1/2 bottom-1 transform -translate-x-1/2 translate-y-3 text-[#684DF4] 
                   text-base sm:text-lg md:text-sm tracking-wide font-semibold whitespace-nowrap"
            >
              ABOUT MINDSYNC CONSULTING
            </span>

            {/* Main Heading */}
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-gray-700 to-gray-200 uppercase">
              MINDSYNC CONSULTING
            </span>
          </h2>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            We Are Increasing Business Success With{" "}
            <span className="text-[#684DF4]">Technology</span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Mindsync Consulting empowers businesses to thrive by leveraging
            advanced technology solutions. We enhance productivity, streamline
            operations, and drive growth with tailored software, innovative
            mobile apps, and expert UI/UX design.
          </p>

          {/* Award Winning Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <div className="flex items-center gap-4">
              <Image
                src="/images/mindsync-logo.png"
                alt="Award Winning"
                width={80}
                height={80}
                className="rounded-lg bg-[#141D38]"
              />
              <div>
                <h4 className="text-lg font-semibold">
                  An Award-Winning Company.
                </h4>
                <p className="text-gray-500 text-sm">
                  Mindsync Consulting, award-winning firm, excels in software,
                  mobile apps, and UI/UX design, driving client success.
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <Link
            href="/about"
            className="inline-flex items-center gap-2 mt-6 bg-[#684DF4] text-white px-6 py-3 rounded-full hover:bg-[#141D38] transition-colors"
          >
            ABOUT MORE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
