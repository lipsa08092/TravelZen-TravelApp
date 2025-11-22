import React from "react";

const HeroSection = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center text-center px-4"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url('https://1.bp.blogspot.com/-x0740S4FqBQ/X3mb_7iZNQI/AAAAAAAAALw/cX9c7KmeLgQWU7E24UJkcKkVus1XpD94QCLcBGAsYHQ/s1920/bg.jpg')",
      }}
    >
      <div className="container top-14 left-0 absolute p-8">
        <div className="track text-white text-2xl font-serif">
          <span className="px-10">
            Incredible India | Culture | Heritage | Nature | Travel | Explore |
            Adventure
          </span>
          <span className="px-10">
            Incredible India | Culture | Heritage | Nature | Travel | Explore |
            Adventure
          </span>
          <span className="px-10">
            Incredible India | Culture | Heritage | Nature | Travel | Explore |
            Adventure
          </span>
          <span className="px-10">
            Incredible India | Culture | Heritage | Nature | Travel | Explore |
            Adventure
          </span>
        </div>
      </div>

      <div className="text-white mt-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 ">
          Welcome to <span className="text-orange-400 font-serif ">IN</span>D
          <span className="text-green-600 font-serif">IA</span>
        </h2>

        <h1 className="text-5xl font-serif md:text-6xl font-extrabold mb-6">
          Explore the Beauty of India
        </h1>

        <p className="text-lg md:text-xl mb-8 opacity-90">
          Experience culture, heritage, nature & unforgettable destinations.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-white text-black rounded-md font-medium hover:bg-orange-500 hover:text-white transition">
            Learn More
          </button>

          <button className="px-6 py-3 bg-orange-500 text-white rounded-md font-medium hover:bg-white hover:text-black transition">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
