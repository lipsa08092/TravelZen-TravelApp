import React from "react";
import {Link} from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center text-center px-4"
      style={{
        backgroundImage:
          " linear-gradient(rgba(0,0,0,0.24), rgba(0,0,0,0.45)),  url('https://img.freepik.com/free-vector/realistic-travel-background-with-elements_52683-77784.jpg?w=2000&t=st=1692779870~exp=1692780470~hmac=ca86d685f2158b9f0ce30c53dbbca58abe748ee654d9a7038f468eb182921522')",
      }}
    >
      <div className="container w-full  overflow-hidden top-9 left-3 md:left-8  absolute p-8">
        <div className="track text-white bg-black/30 backdrop-blur-md p-3 text-2xl font-serif font-bold whitespace-nowrap">
          <span className="px-10">
            Incredible India | Culture | Heritage | Nature | Travel | Explore |
            Adventure | Incredible India | Culture | Heritage | Nature | Travel | Explore |
            Adventure | Incredible India | Culture | Heritage | Nature | Travel | Explore |
            Adventure | Incredible India | Culture | Heritage | Nature | Travel | Explore |
            Adventure | Incredible India | Culture | Heritage | Nature | Travel | Explore |
            Adventure | Incredible India | Culture | Heritage | Nature | Travel | Explore |
            Adventure | Incredible India | Culture | Heritage | Nature | Travel | Explore |
            Adventure | Incredible India | Culture | Heritage | Nature | Travel | Explore |
            Adventure | Incredible India | Culture | Heritage | Nature | Travel | Explore |
            Adventure
          </span>
        </div>
      </div>

      <div className="mt-10 ">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-50">
          Welcome to <span className="text-orange-400 font-serif ">IN</span>D
          <span className="text-green-600 font-serif">IA</span>
        </h2>

        <h1 className="text-5xl text-gray-100 font-serif md:text-6xl font-extrabold mb-6">
          Explore the Beauty of India
        </h1>

        <p className="text-lg text-white md:text-xl mb-8 opacity-90 font-bold">
          Experience culture, heritage, nature & unforgettable destinations.
        </p>

        <div className="flex justify-center gap-4">
          <Link to="about" className="px-6 py-3 bg-white text-black rounded-md font-medium hover:bg-orange-500 hover:text-white transition">
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
