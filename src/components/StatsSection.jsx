import Image from "next/image";

const stats = [
  { value: "28+", label: "Finished Projects", image: "/images/Finish.png" },
  { value: "25+", label: "Happy Clients", image: "/images/Happycli.png" },
  { value: "16+", label: "Skilled Experts", image: "/images/Skillex.webp" },
];

export default function StatsSection() {
  return (
    <div className="bg-[#684DF4] py-20 mb-10">
      <div className="container mx-auto flex justify-center gap-12">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute -top-4 left-1 w-5 h-5 bg-white rounded-full shadow-lg animate-bounce"></div>
              <div className="relative w-28 h-28 flex items-center justify-center">
                <div className="absolute w-32 h-32 bg-white rounded-full shadow-lg"></div>
                {/* Dynamically changing image */}
                <Image src={stat.image} alt={stat.label} width={50} height={50} className="relative z-10 object-cover w-full h-full" />
              </div>
            </div>
            <h2 className="text-white text-3xl font-bold mt-3">{stat.value}</h2>
            <p className="text-white text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
