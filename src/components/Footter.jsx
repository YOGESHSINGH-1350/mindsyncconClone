import React from "react";
import Image from "next/image";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CalendarIcon } from "lucide-react";

const Footer = () => {
  const formatText = (text) => {
    return text
      .split(" ")
      .reduce((acc, word, index) => {
        if (index % 4 === 0) acc.push([]);
        acc[acc.length - 1].push(word);
        return acc;
      }, [])
      .map((line) => line.join(" "))
      .join("\n");
  };

  return (
    <>
    <footer className="bg-[#080E1C] text-white py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* News Subscription Section */}
        <div className="mb-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 w-full">
          {/* Logo Section  */}
          <div className="flex-shrink-0 w-40 md:w-48 lg:w-56">
            <Image
              src="/images/mindsync-logo.png"
              alt="MINDSYNC Logo"
              width={200}
              height={60}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Subscription Content  */}
          <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-4">
            <div className="mb-4 md:mb-0 md:max-w-md">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                News Subscription
              </h2>
              <p className="text-white text-sm mt-2">
                Get Latest Deals from Waker's Index & Subscribe Now
              </p>
            </div>

            {/* Email Input + Subscribe Button*/}
            <div className="flex flex-col sm:flex-row w-full max-w-md gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 border border-white rounded focus:outline-none focus:ring-1 focus:ring-blue-500 flex-grow text-white bg-transparent"
              />
              <button className="bg-[#684DF4] text-white px-6 py-2 rounded hover:bg-white hover:text-black transition-colors font-medium whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main Content*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* About Company - Adjusted text alignment */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">
              ABOUT COMPANY
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Mindgrave Consulting Pvt Ltd offers expert IT solutions, including
              mobile and web apps, UI/VR devices, and BIP systems. No career
              quality, reliability, and client satisfaction with comprehensive,
              tailored services for business growth.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#684DF4] transition-colors"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#684DF4] transition-colors"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#684DF4] transition-colors"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              {['Connect us', 'About Us', 'FAQ'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-white hover:text-[#684DF4] transition-colors flex items-center"
                  >
                    <MdOutlineKeyboardArrowRight className="text-lg mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              IT SERVICES
            </h3>
            <ul className="space-y-2">
              {[
                'Mobile App Development',
                'Website Development',
                'Software Development',
                'Blockchain Development',
                'E-commerce Solutions',
                'UI/VR Design'
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-sm text-white hover:text-[#684DF4] transition-colors flex items-center"
                  >
                    <MdOutlineKeyboardArrowRight className="text-lg mr-2" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts*/}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">
              RECENT POSTS
            </h3>
            <ul className="space-y-3">
              {[
                {
                  id: 1,
                  title: "How An HRPB Can Transform Your",
                  date: "Oct 22 2024",
                  image: "/images/RecentPost 1.png"
                },
                {
                  id: 2,
                  title: "Enhancing Your Mobile App Development With",
                  date: "Aug 18 2023",
                  image: "/images/RecentPost 2.png"
                }
              ].map((post) => (
                <li key={post.id}>
                  <a
                    href="#"
                    className="text-sm text-white hover:text-[#684DF4] transition-colors block"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0">
                        <Image
                          src={post.image}
                          alt="Recent Post"
                          width={50}
                          height={50}
                          className="rounded-lg object-cover w-12 h-12"
                        />
                      </div>
                      <div>
                        <p className="whitespace-pre-line">
                          {formatText(post.title)}
                        </p>
                        <span className="flex items-center text-white text-xs mt-1 gap-1">
                          <CalendarIcon size={14} className="text-[#684DF4]" />
                          {post.date}
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright and Bottom Links */}
        
      </div>
      
    </footer>
    <div className="bg-[#684DF4] py-6 text-sm">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <p className="text-white text-center md:text-left mb-3 md:mb-0">
        Copyright © 2024 Mindsync Consulting. All Rights Reserved.
      </p>
      <div className="flex items-center gap-4">
        <a href="#" className="text-white hover:underline transition-colors">
          Terms & Condition
        </a>
        <span className="text-white">|</span>
        <a href="#" className="text-white hover:underline transition-colors">
          Careers
        </a>
        <span className="text-white">|</span>
        <a href="#" className="text-white hover:underline transition-colors">
          Privacy Policy
        </a>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Footer;