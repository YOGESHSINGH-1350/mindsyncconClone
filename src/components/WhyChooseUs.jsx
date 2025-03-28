import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
const features = [
  { label: "Big Data Analysis" },
  { label: "High Quality Security" },
  { label: "24/7 Online Support" },
  { label: "24/7 Expert Team" },
  { label: "Business Improvement" },
  { label: "Easy Solutions" },
];

export default function WhyChooseUs() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-20">
        {/* Left Content */}
        <div className="lg:w-1/2 text-[#141D38] ">
          <h2 className="relative inline-block text-left text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-10">
            {/* Main Heading */}
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-gray-700 to-gray-200 uppercase">
              Why Choose us
            </span>
          </h2>

          <h2 className="text-4xl font-bold">
            We Deal With The Aspects <br /> Professional{" "}
            <span className="text-[#684DF4]">IT Services</span>
          </h2>
          <p className="mt-4 text-lg text-gray-800">
            Providing comprehensive solutions in software development, IT
            consulting, system integration, and managed services to enhance
            business efficiency and growth.
          </p>

          {/* Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center border-dotted border-2 text-[#684DF4] rounded-full">
                  <FaCheck />
                </div>
                <p className="font-semibold">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
          <Image
            src="/images/mindsync-logo.png"
            alt="Why we Choose Us"
            width={500}
            height={500}
            className="hidden md:block w-[450px] h-auto object-cover rounded-lg shadow-lg bg-[#141D38]"
          />
        </div>
      </div>
    </div>
  );
}
