"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function CircularScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  // Convert smoothProgress to strokeDashoffset for animation
  const strokeOffset = useTransform(smoothProgress, [0, 1], [251.2, 0]);

  return (
    <>
      {/* Circular Scroll Progress Indicator */}
      <div
        style={{
          position: "fixed",
          bottom: "10px", // Adjusted for small screens to prevent overflow
          right: "10px",  // Adjusted for small screens
          width: "50px",  // Default size for small screens
          height: "50px",
          zIndex: 1000,
        }}
        className="sm:bottom-5 sm:right-5 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
      >
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          {/* Background Circle */}
          <circle cx="50" cy="50" r="40" stroke="#EEF1F9" strokeWidth="10" fill="none" />
          
          {/* Animated Progress Circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            stroke="#684DF4"
            strokeWidth="10"
            fill="none"
            strokeDasharray="251.2"
            strokeDashoffset={strokeOffset} 
            strokeLinecap="round"
          />
        </svg>
      </div>
    </>
  );
}
