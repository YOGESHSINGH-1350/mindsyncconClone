import Image from "next/image";

const stats = [
  { value: "28+", label: "Finished Projects", image: "/images/Finish.png" },
  { value: "25+", label: "Happy Clients", image: "/images/Happycli.png" },
  { value: "16+", label: "Skilled Experts", image: "/images/Skillex.webp" },
];

export default function StatsSection() {
  return (
    <div className="bg-[#684DF4] py-14 sm:py-20 mb-6 sm:mb-10">
      <div className="container mx-auto flex flex-wrap justify-center gap-8 sm:gap-12 px-4 sm:px-0">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center w-36 sm:w-44">
            <div className="relative">
              <div className="absolute -top-2 sm:-top-4 left-1 w-3 h-3 sm:w-5 sm:h-5 bg-white rounded-full shadow-lg animate-bounce"></div>
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
                <div className="absolute w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-full shadow-lg"></div>
                {/* Dynamically changing image */}
                <Image
                  src={stat.image}
                  alt={stat.label}
                  width={40}
                  height={40}
                  className="relative z-10 object-contain w-10 h-10 sm:w-12 sm:h-12"
                />
              </div>
            </div>
            <h2 className="text-white text-2xl sm:text-3xl font-bold mt-2 sm:mt-3">
              {stat.value}
            </h2>
            <p className="text-white text-sm sm:text-lg text-center">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
