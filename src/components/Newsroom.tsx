import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import imgMoney from "../assets/img-money.webp"
import imgFire from "../assets/img-fire.webp"
import imgITC from "../assets/img-itc.webp"

// Example data — ideally fetched from DB or CMS
const newsItems = [
  {
    id: 1,
    title: "ITC Energy Storage Credit Extended Through 2033 — New FEOC Caps Introduced.",
    image: imgITC,
  },
  // {
  //   id: 2,
  //   title: "Powin Energy Files for Bankruptcy — Impact on Supply Chains.",
  //   image: imgMoney,
  // },
  {
    id: 3,
    title: "California Fire Marshall Updates BESS Safety Certification Guidelines.",
    image: imgFire,
  },
];

const NewsroomSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto rotate every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentNews = newsItems[currentIndex];

  return (
    <section id="newsroom" className="relative w-full h-64 md:h-80 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${currentNews.image})` }}
      >
        <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="bg-black/60 backdrop-blur-md px-6 py-4 rounded-lg shadow-lg max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl font-semibold text-white leading-snug">
            {currentNews.title}
          </p>
          <button className="mt-3 inline-flex items-center text-orange-400 hover:text-orange-300 font-medium">
            <span>Read More</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsroomSection;
