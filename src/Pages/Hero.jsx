import React from "react";

const Hero = () => {
  return (
    <section 
      className="h-screen bg-cover bg-center flex items-center justify-center text-center px-4"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url('https://1.bp.blogspot.com/-x0740S4FqBQ/X3mb_7iZNQI/AAAAAAAAALw/cX9c7KmeLgQWU7E24UJkcKkVus1XpD94QCLcBGAsYHQ/s1920/bg.jpg')"
      }}
    >
      <div className="text-white mt-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 ">
          Welcome to <span className="text-orange-400 ">IN</span>D<span className="text-green-700">IA</span>
        </h2>

        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
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

export default Hero;
