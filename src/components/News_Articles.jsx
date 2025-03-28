"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowRightLong } from "react-icons/fa6";

const blogPosts = [
  {
    id: 1,
    title: "Unsatiable entreaties may collecting Power.",
    description:
      "Rapidiously repurpose leading edge growth strategies with just in time",
    image: "/images/hr.webp",
    author: "Mindsync",
  },
  {
    id: 2,
    title: "How an HRMS Can Transform Your Business Operations",
    description:
      "In today’s fast-paced business environment, managing human resources (HR) has",
    image: "/images/comp.webp",
    author: "Mindsync",
  },
  {
    id: 3,
    title: "Enhancing Your Mobile App Development with React and Next.js",
    description: "The Power of React in Mobile App Development.",
    image: "/images/hr.webp",
    author: "Mindsync",
  },
  {
    id: 4,
    title: "Unsatiable entreaties may collecting Power.",
    description:
      "Rapidiously repurpose leading edge growth strategies with just in time",
    image: "/images/comp.webp",
    author: "Mindsync",
  },
  {
    id: 5,
    title: "How an HRMS Can Transform Your Business Operations",
    description:
      "In today’s fast-paced business environment, managing human resources (HR) has",
    image: "/images/hr.webp",
    author: "Mindsync",
  },
  {
    id: 6,
    title: "Enhancing Your Mobile App Development with React and Next.js",
    description: "The Power of React in Mobile App Development.",
    image: "/images/comp.webp",
    author: "Mindsync",
  },
];

export default function News_Articles() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 md:px-5">
  <Swiper
    modules={[Autoplay]}
    spaceBetween={15} // Reduced spacing for small screens
    slidesPerView={1}
    grabCursor={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true, // Stop autoplay on hover
    }}
    breakpoints={{
      480: { slidesPerView: 1 }, // Small mobiles
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 }, // Tablets
      1024: { slidesPerView: 3 }, // Larger screens
    }}
  >
    {blogPosts.map((post) => (
      <SwiperSlide key={post.id}>
        <div
          className="bg-white rounded-lg shadow-lg overflow-hidden p-0 
          flex flex-col h-auto sm:h-[500px] w-full sm:w-[400px] md:w-[400px]"
        >
          <Image
            src={post.image}
            alt={post.title}
            width={700}
            height={600}
            className="w-full h-40 sm:h-60 object-cover rounded-md"
          />
          <div className="mt-4 flex flex-col flex-grow">
            <h3 className="text-lg sm:text-xl font-bold m-4">{post.title}</h3>
            <p className="text-gray-600 text-xs sm:text-sm m-4">{post.description}</p>

            {/* Flex container for alignment */}
            <div className="flex items-center justify-between m-3 mt-auto text-gray-500 text-xs sm:text-sm">
              {/* Author Info */}
              <span className="flex items-center">
                <Image
                  src="/images/user.png"
                  alt="Author"
                  width={18}
                  height={18}
                  className="mr-1"
                />
                By {post.author}
              </span>
              <a href="#" className="flex items-center underline hover:text-[#684DF4]">
                Read More <FaArrowRightLong className="ml-1 inline-block " />
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

  );
}
