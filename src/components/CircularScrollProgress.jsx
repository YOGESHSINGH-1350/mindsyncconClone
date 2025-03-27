"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function CircularScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  // Convert smoothProgress to strokeDashoffset
  const strokeOffset = useTransform(smoothProgress, [0, 1], [251.2, 0]);

  return (
    <>
     

      {/* Circular Scroll Progress Indicator */}
      <div style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "60px",
        height: "60px",
        zIndex: 1000,
      }} >
        <svg width="60" height="60" viewBox="0 0 100 100">
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
