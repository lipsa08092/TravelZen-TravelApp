import React from "react";
import {Link} from "react-router-dom"

function DestinationSection() {
  return (
    <section
      className="w-full h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center px-4 relative"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/previews/027/572/363/non_2x/mountain-mountain-mountain-with-transparent-background-ai-generative-free-png.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      
      <div className="relative text-center text-white max-w-xl px-4">
        
        <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-200">
          Get Ready for
        </h3>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-extrabold mb-6 leading-tight">
          <span className="text-orange-500">New</span>
          <span className="text-green-500">Adventure</span>
        </h1>

        <p className="text-white text-base sm:text-lg md:text-xl mb-8 opacity-90">
          Explore breathtaking destinations, mountains, and thrilling journeys.
        </p>

        <Link to="/destination" className="px-10 py-3 bg-gradient-to-r from-orange-500 to-green-500 hover:scale-105 text-white font-semibold rounded-full shadow-lg transition-all duration-200">
          Let's Start
        </Link>
      </div>
    </section>
  );
}

export default DestinationSection;
