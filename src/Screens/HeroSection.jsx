import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-center px-4 relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.24), rgba(0,0,0,0.45)), url('https://img.freepik.com/free-vector/realistic-travel-background-with-elements_52683-77784.jpg?w=2000&t=st=1692779870~exp=1692780470~hmac=ca86d685f2158b9f0ce30c53dbbca58abe748ee654d9a7038f468eb182921522')",
      }}
    >
      <div className="absolute top-16 w-full overflow-hidden px-4">
        <div className="track text-white bg-black/30 backdrop-blur-md py-2 text-sm sm:text-lg md:text-xl font-serif font-bold whitespace-nowrap">
          <span className="px-10">
            Incredible India | Culture | Heritage | Nature | Travel | Explore |
            Adventure | Incredible India | Culture | Heritage | Nature | Travel | Explore |
            Adventure | Incredible India | Culture | Heritage | Nature | Travel | Explore |
            Adventure
          </span>
        </div>
      </div>

      <div className="mt-16 sm:mt-20 w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl px-4">
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-50">
          Welcome to <span className="text-orange-400 font-serif">IN</span>D
          <span className="text-green-600 font-serif">IA</span>
        </h2>

        <h1 className="text-4xl sm:text-5xl md:text-6xl text-gray-100 font-serif font-extrabold mb-6">
          Explore the Beauty of India
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white mb-8 opacity-90 font-semibold">
          Experience culture, heritage, nature & unforgettable destinations.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/about"
            className="px-6 py-3 bg-white text-black rounded-md font-medium hover:bg-orange-500 hover:text-white transition"
          >
            Learn More
          </Link>

          <button className="px-6 py-3 bg-orange-500 text-white rounded-md font-medium hover:bg-white hover:text-black transition">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
