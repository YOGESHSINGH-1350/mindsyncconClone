// src/components/Header.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaRegEnvelope,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
  };

  const services = [
    { icon: "🚀", name: "Mobile App Development" },
    { icon: "💻", name: "Website Development" },
    { icon: "🖥️", name: "Software Development" },
    { icon: "🔗", name: "Blockchain Development" },
    { icon: "🛒", name: "E-Commerce Solutions" },
    { icon: "🎨", name: "UI/UX Design" }
  ];

  return (
    <header className={`sticky top-0 z-50 ${isScrolled ? 'shadow-md' : ''}`}>
      {/* Top Header */}
      <div className="bg-[#684DF4] text-white pr-20 pl-20 text-sm md:text-md py-4 md:py-4 px-4 flex flex-col md:flex-row justify-between items-center relative">
        {/* Contact Info - Hidden on medium and small screens */}
        <div className="hidden md:flex md:w-auto md:flex-row md:gap-4 items-center">
          <span className="flex items-center gap-1 whitespace-nowrap">
            <LuPhone size={14} /> <a href="tel:+911143572646">+91-1143572646</a>
          </span>
          <span className="flex items-center gap-1">
            | <IoLocationOutline size={14} />
            <a href="https://maps.app.goo.gl/bfvsUER2LkiAWYXX7">
              210-211, 2nd Floor, A-115 Vakil Chamber, Shakarpur, Delhi 110092
            </a>
          </span>
          <span className="flex items-center gap-1 whitespace-nowrap">
            | <FaRegEnvelope size={14} />
            <a href="mailto:sales@mindsynccon.com">sales@mindsynccon.com</a>
          </span>
        </div>
        
        {/* Social Icons - Always visible but centered on medium/small screens */}
        <div className="flex gap-3 items-center mx-auto md:mx-0 md:self-auto">
          <a
            href="https://www.linkedin.com/company/mindsync-consulting-pvt-ltd"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={16} className="hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://www.facebook.com/people/Mindsync-Consulting/61561371143355/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF size={16} className="hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://x.com/mindsyncc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter size={16} className="hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Contact Info - Only visible on small screens when expanded */}
        <div className={`w-full md:hidden mt-2 ${menuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-1 text-xs">
            <span className="flex items-center gap-1">
              <LuPhone size={12} /> <a href="tel:+911143572646">+91-1143572646</a>
            </span>
            <span className="flex items-center gap-1">
              <IoLocationOutline size={12} />
              <a href="https://maps.app.goo.gl/bfvsUER2LkiAWYXX7" className="truncate">
                Shakarpur, Delhi 110092
              </a>
            </span>
            <span className="flex items-center gap-1">
              <FaRegEnvelope size={12} />
              <a href="mailto:sales@mindsynccon.com">sales@mindsynccon.com</a>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`bg-[#EEF1F9] py-2 md:py-3 px-4 flex justify-between items-center transition-all ${isScrolled ? 'py-1' : ''}`}>
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 ml-0">
          <Image
            src="/images/mindsync-logo.png"
            alt="MINDSYNC Logo"
            width={200}
            height={60}
            className="h-12 md:h-16 w-auto filter bg-[#141D38] rounded-full shadow-lg"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 lg:gap-6 text-black font-medium items-center relative z-10">
          <Link href="/" className="nav-item hover:text-[#684DF4] transition-colors">
            Home
          </Link>
          
          <div className="relative group">
            <button
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              className="nav-item hover:text-[#684DF4] transition-colors flex items-center gap-1"
            >
              Services <IoIosArrowDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <div 
              className={`absolute top-full left-0 bg-white shadow-lg rounded-lg w-64 py-2 z-20 ${isOpen ? 'block' : 'hidden'} group-hover:block`}
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <ul>
                {services.map((service, index) => (
                  <li key={index} className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 text-sm">
                    <span>{service.icon}</span> {service.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <Link href="/aboutus" className="nav-item hover:text-[#684DF4] transition-colors">
            About Us
          </Link>
          <Link href="/contact-us" className="nav-item hover:text-[#684DF4] transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* Appointment Button (Desktop) */}
        <Link
          href="/contact-us"
          className="hidden md:flex items-center gap-1 bg-[#684DF4] text-white px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-[#141D38] transition-colors whitespace-nowrap"
        >
          Make Appointment<FaLongArrowAltRight className="ml-1" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#684DF4] text-2xl p-2 rounded focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Sidebar Header */}
        <div className="bg-[#DDE2F9] text-[#684DF4] font-bold text-center text-xl py-4 px-2">
          mindsynccon.com
        </div>

        {/* Close Button */}
        <button
          className="absolute top-3 right-4 text-[#684DF4] text-xl"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <FaTimes />
        </button>

        {/* Sidebar Menu Items */}
        <nav className="mt-4 flex flex-col space-y-2 px-4 text-black">
          <Link 
            href="/" 
            className="flex items-center gap-2 py-3 px-4 hover:bg-gray-100 rounded transition-colors"
            onClick={toggleMenu}
          >
            <IoIosArrowForward className="text-[#684DF4]" /> Home
          </Link>

          {/* Services with Dropdown */}
          <div className="border-b border-gray-100">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex justify-between items-center w-full py-3 px-4 hover:bg-gray-100 rounded transition-colors"
            >
              <span className="flex items-center gap-2">
                <IoIosArrowForward className="text-[#684DF4]" /> Services
              </span>
              <span className={`text-[#684DF4] transition-transform ${isServicesOpen ? 'rotate-45' : ''}`}>+</span>
            </button>
            
            {isServicesOpen && (
              <div className="ml-6 mb-2 space-y-1">
                {services.map((service, index) => (
                  <Link 
                    key={index}
                    href="#"
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-50 rounded transition-colors"
                    onClick={toggleMenu}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link 
            href="/about-us" 
            className="flex items-center gap-2 py-3 px-4 hover:bg-gray-100 rounded transition-colors"
            onClick={toggleMenu}
          >
            <IoIosArrowForward className="text-[#684DF4]" /> About Us
          </Link>
          <Link 
            href="/contact-us" 
            className="flex items-center gap-2 py-3 px-4 hover:bg-gray-100 rounded transition-colors"
            onClick={toggleMenu}
          >
            <IoIosArrowForward className="text-[#684DF4]" /> Contact Us
          </Link>
          
          {/* Mobile Appointment Button */}
          <Link
            href="/contact-us"
            className="mt-4 flex items-center justify-center gap-1 bg-[#684DF4] text-white px-6 py-3 rounded-full hover:bg-[#141D38] transition-colors"
            onClick={toggleMenu}
          >
            Make Appointment<FaLongArrowAltRight className="ml-1" />
          </Link>
        </nav>
      </div>

      {/* Background Overlay when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
}