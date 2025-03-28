"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Anjali",
    position: "Head of Marketing, Digital Ventures",
    feedback:
      "We had outstanding UI/UX design work done on our website by Mindsync Consulting. They created a design that was both aesthetically pleasing and user-friendly.",
    rating: 4,
  },
  {
    name: "Vikram Keshav",
    position: "Product Manager, E-Shop Solutions",
    feedback:
      "Mindsync Consulting was the best choice for designing our e-commerce software. Our sales have increased as a result of the improved user experience.",
    rating: 5,
  },
  {
    name: "Rahul Sharma",
    position: "CEO, Tech Innovations",
    feedback:
      "The Mindsync team is exceptional! Their work on our platform's UI/UX exceeded expectations. We highly recommend their services.",
    rating: 5,
  },
  {
    name: "Neha Verma",
    position: "Founder, Startup Hub",
    feedback:
      "Mindsync helped us revamp our website, and the results were beyond expectations. The UI is sleek, and our users love the experience!",
    rating: 4,
  },
  {
    name: "Rohan Malhotra",
    position: "CTO, Fintech Solutions",
    feedback:
      "Their expertise in UI/UX and software development is remarkable. Our product is now faster and more engaging thanks to Mindsync's inputs.",
    rating: 5,
  },
  {
    name: "Sanya Kapoor",
    position: "Marketing Manager, Digital Solutions",
    feedback:
      "The entire team was super professional. They understood our requirements and delivered exactly what we needed!",
    rating: 4,
  },
  {
    name: "Amit Joshi",
    position: "COO, E-Commerce Express",
    feedback:
      "Their creative and technical expertise helped us boost our conversion rates. The design is intuitive and visually appealing.",
    rating: 5,
  },
  {
    name: "Meera Sethi",
    position: "Lead Designer, Creative Agency",
    feedback:
      "It was a pleasure working with Mindsync! Their attention to detail and user-centric designs made a huge difference to our platform.",
    rating: 5,
  },
];

export default function Testimonial() {
  return (
    <section className="bg-[#F9FAFB] py-20 sm:py-28 px-4 sm:px-0">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="relative inline-block text-center text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-10">
          {/* CUSTOMER FEEDBACK - Middle Bottom of "Testimonial" */}
          <span
            className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-3 text-[#684DF4] 
                   text-base sm:text-lg md:text-xl tracking-wide font-semibold whitespace-nowrap"
          >
            CUSTOMER FEEDBACK
          </span>

          {/* Main Heading */}
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-gray-700 to-gray-200 uppercase">
            Testimonial
          </span>
        </h2>

        <h2 className="text-3xl sm:text-5xl font-bold text-[#684DF4] mb-10">
          About Us?
        </h2>

        {/* Swiper Component */}
        <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay]}
          breakpoints={{
            320: { slidesPerView: 1 }, // Mobile
            768: { slidesPerView: 1.2, spaceBetween: 20 }, // Tablets
            1024: { slidesPerView: 2 }, // Larger screens
          }}
          className="pb-10"
        >
          {testimonials.map((testi, index) => (
            <SwiperSlide key={index}>
              <div
  className="bg-white shadow-lg p-6 sm:p-8 rounded-xl mx-auto 
  h-auto flex flex-col justify-between w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl"
>

                <p className="text-gray-600 flex-grow text-sm sm:text-base">
                  {testi.feedback}
                </p>

                <hr className="my-3 sm:my-4" />

                <h3 className="font-bold text-lg sm:text-xl text-left">
                  {testi.name}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm text-left">
                  {testi.position}
                </p>

                <div className="flex justify-end mt-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-xs sm:text-sm ${
                        i < testi.rating ? "text-[#684DF4]" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
