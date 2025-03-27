"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { gsap } from "gsap";

const Home = () => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 18; // Thoda less movement
    const y = -(e.clientY - top - height / 2) / 18;

    gsap.to(card, {
      rotateX: y,
      rotateY: x,
      duration: 0.4,  // Fast but smooth
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5, // Thoda fast return
      ease: "power2.out",
    });
  };

  return (
    <section className="py-16 px-4 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Column - Text Content */}
          <div className="md:w-1/2">
            <span className="text-[#684DF4] font-semibold tracking-wider">
              BEST IT SERVICE
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Make The Easiest <br /> Solution For You
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Mindsync consulting experience unparalleled efficiency with our cutting-edge
              software solutions, designed to streamline your operations and drive business
              growth. Tailored for your unique needs.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#684DF4] text-white px-6 py-3 rounded-full hover:bg-[#141D38] transition-colors"
            >
              KNOW MORE <FaArrowRight />
            </Link>
          </div>

          {/* Right Column - Image with GSAP hover effect */}
          <div className="md:w-1/2 flex justify-center">
            <div
              ref={cardRef}
              className="rounded-lg overflow-hidden cursor-pointer transform perspective-1000"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transformStyle: "preserve-3d",
                transition: "transform 0.4s ease-out",
              }}
            >
              <Image
                src="/images/heroImg.png" // Ensure image is in public folder
                alt="IT Service Solutions"
                width={600}
                height={400}
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
