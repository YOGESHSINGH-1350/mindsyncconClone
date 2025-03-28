"use client";
import { useEffect } from "react";
import { gsap } from "gsap";

const steps = [
  {
    id: "01",
    title: "Select a project",
    desc: "Selecting projects for optimal software development success and innovation.",
  },
  {
    id: "02",
    title: "Project analysis",
    desc: "Project analysis reveals key insights for software development success.",
  },
  {
    id: "03",
    title: "Plan Execute",
    desc: "Plan, develop, test, iterate, deploy: success in software development.",
  },
  {
    id: "04",
    title: "Deliver result",
    desc: "Delivering quality software solutions with precision and excellence.",
  },
];

const ProcessSteps = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".step", {
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 1.2,
        ease: "power3.out",
      });
      gsap.from(".process-line", {
        strokeDasharray: 500,
        strokeDashoffset: 500,
        duration: 2,
        ease: "power3.out",
      });
      gsap.from(".ripple", {
        scale: 0,
        opacity: 0,
        duration: 1.5,
        repeat: -1,
        ease: "power2.out",
      });
    });

    return () => ctx.revert(); // Cleanup animation on unmount
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center bg-gray-100 py-16">
      <h2 className="relative inline-block text-center text-5xl sm:text-6xl md:text-6xl font-bold text-gray-900 mb-10">
        {/* CUSTOMER FEEDBACK - Middle Bottom of "Testimonial" */}
        <span
          className="absolute left-1/2 bottom-1 transform -translate-x-1/2 translate-y-3 text-[#684DF4] 
                   text-base sm:text-lg md:text-sm tracking-wide font-semibold whitespace-nowrap"
        >
          WORK PROCESS
        </span>

        {/* Main Heading */}
        <span className="block text-transparent bg-clip-text bg-gradient-to-b from-gray-700 to-gray-200 uppercase">
          progress
        </span>
      </h2>

      {/* SVG Progress Curve */}
      <svg
        className="absolute w-3/4 top-20"
        viewBox="0 0 800 200"
        fill="none"
        stroke="#6366F1"
        strokeWidth="3"
      >
        <path
          className="process-line"
          d="M0 150 Q200 250, 400 100 T800 50"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Steps */}
      <div className="flex flex-wrap justify-center md:justify-between w-3/4 max-w-3xl relative z-10 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative step flex flex-col items-center text-center"
          >
            {/* Step Info (Card) */}
            <div className="mt-4 bg-white p-5 rounded-lg shadow-lg w-48 relative">
              {/* Main Circle with Ripple Effect */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#684DF4] text-white flex items-center justify-center text-lg font-bold rounded-full shadow-lg">
                {step.id}

                {/* Ripple Effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 border-4 border-indigo-300 rounded-full opacity-50 ripple"></div>
                </div>
              </div>

              <h3 className="font-semibold mt-6">{step.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSteps;
