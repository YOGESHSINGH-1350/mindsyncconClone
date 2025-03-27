"use client";
import React, { useEffect, useState } from "react";


const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [outlinePosition, setOutlinePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      
      setTimeout(() => {
        setOutlinePosition({ x: e.clientX, y: e.clientY });
      }, 100); 
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div
        className="cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className="cursor-outline"
        style={{
          left: `${outlinePosition.x - 10}px`, 
          top: `${outlinePosition.y - 10}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;
