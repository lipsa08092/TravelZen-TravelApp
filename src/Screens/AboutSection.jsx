import React from "react";
import { FaPlane, FaMobileAlt, FaRegSmile } from "react-icons/fa";
import { Link} from "react-router-dom";

const AboutSection = () => {
const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="py-2 bg-gradient-to-b from-blue-200  via-blue-200 to-gray-300 pb-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mt-10">
          About <span className="text-green-600">Travel</span>
          <span className="text-orange-500">Zen</span>
        </h1>

        <p className="text-gray-600 mt-6 text-lg md:max-w-3xl mx-auto">
          TravelZen is your all-in-one travel companion built to make your
          journeys smoother, smarter, and unforgettable. Discover
          destinations,plan perfect trips, and experience the world with
          ease-right from your mobile.
        </p>
      </div>


      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-4 mb-20">
        {[
          {
            img: "https://plus.unsplash.com/premium_photo-1737392496459-f89329c1675c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Explore Worldwide",
            desc: "Discover breathtaking destinations with handpicked guides crafted for every kind of traveler.",
          },
          {
            img: "https://images.unsplash.com/photo-1502920514313-52581002a659",
            title: "Smart Travel Planning",
            desc: "Plan your perfect journey with optimized routes, top attractions, and smart suggestions tailored for you.",
          },
          {
            img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            title: "Easy Travel Experience",
            desc: "Enjoy seamless travel with essential information, cultural tips, and beautiful routes at your fingertips.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer transition-all duration-500 hover:shadow-2xl"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-80 object-cover group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-500"></div>

            <div className="absolute bottom-0 w-full p-6 bg-white/20 backdrop-blur-sm text-center rounded-t-2xl">
              <h3 className="text-xl font-semibold text-white drop-shadow-md">
                {item.title}
              </h3>
              <p className="text-gray-200 text-sm mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

        
        {/* Our Journey */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-600 mb-10">
          OUR <span className="text-green-600 ">JOURNEY</span>
        </h2>

        <div className="bg-gradient-to-b from-gray-300  via-blue-200 to-blue-100 shadow-xl rounded-2xl p-10 leading-relaxed text-gray-700 hover:scale-105 transition-all duration-200">
          <p className="mb-5">
            TravelZen began with a simple idea — traveling should be effortless
            and enjoyable. Whether you're a seasoned globetrotter or someone
            planning their very first adventure, we wanted to create a platform
            that takes care of the little details so you can focus on creating
            memories.
          </p>

          <p className="mb-5">
            Over the years, we've worked closely with travelers, explorers, and
            travel experts to truly understand what makes a journey meaningful.
            Every feature we build is carefully designed to help you travel
            smarter - from personalized recommendations to real-time route
            planning.
          </p>

          <p>
            Today, travelZen stands as one of the most trusted travel platforms,
            bringing together technology, passion, and global travel expertise
            under one roof.
          </p>
        </div>
      </div>

         {/* why travelers love us */} 
      <div className="max-w-7xl mx-auto mb-28 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-600 mb-16">
          <span className="text-blue-600">Why</span> Traveler's <span className="text-red-500">Love Us</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            
        {/* card 1 */}
          <div className="relative rounded-3xl overflow-hidden group shadow-xl hover:shadow-2xl transition duration-500 ">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200"
              className="h-64 w-full object-cover group-hover:scale-110 duration-700"
              alt="User-Friendly App"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center p-7 text-white">
              <div className="mb-4">
                <div className="bg-blue-600 p-3 rounded-full shadow-lg border border-white/20">
                  <FaMobileAlt size={36} className="text-white " />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-2 tracking-wide">
                User-Friendly App
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                A clean, modern interface built for smooth and intuitive travel
                planning.
              </p>
            </div>
          </div>
            
        {/* card 2 */}
          <div className="relative rounded-3xl overflow-hidden group shadow-xl hover:shadow-2xl transition duration-500 ">
            <img
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200"
              className="h-64 w-full object-cover group-hover:scale-110 duration-700"
              alt="Personalized Experiences"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center p-7 text-white">
              <div className="mb-4">
                <div className="bg-blue-600 p-3 rounded-full shadow-lg border border-white/20">
                  <FaRegSmile size={36} className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-2 tracking-wide">
                Personalized Experiences
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                AI-powered suggestions that tailor your trip to your personality
                and preferences.
              </p>
            </div>
          </div>
            
        {/* card 3 */}
          <div className="relative rounded-3xl overflow-hidden group shadow-xl hover:shadow-2xl transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=1200"
              className="h-64 w-full object-cover group-hover:scale-110 duration-700"
              alt="Affordable Travel"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center p-7 text-white">
              <div className="mb-4">
                <div className="bg-blue-600 p-3 rounded-full shadow-lg border border-white/20">
                  <FaPlane size={36} className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-2 tracking-wide">
                Affordable Travel
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                Budget-friendly travel deals without compromising comfort or
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>

       <div className="flex flex-col md:flex-row items-center md:items-center justify-center gap-10 md:gap-16 text-center md:text-left">
        <div className="w-72 sm:w-96 md:w-[450px] flex justify-center">
          <img
            src="https://png.pngtree.com/png-clipart/20231029/original/pngtree-blonde-girl-enjoying-a-trip-on-their-christmas-holidays-png-image_13456921.png"
            className="w-full h-auto object-contain drop-shadow-xl"
            alt=""
          />
        </div>
        <div className="max-w-lg text-center ">
          <h2 className="text-3xl sm:text-4xl  font-bold text-gray-800 mb-4">
            Ready to Explore the World?
          </h2>

          <p className="text-gray-600 mb-">
            Join millions of travelers discovering new destinations every day.
          </p>
        <div className="mt-8">
          <Link
            to="/destination"
            onClick={handleClick}
            className="px-8 py-3 bg-blue-600 hover:scale-95 hover:bg-blue-500 text-white font-semibold rounded-full shadow-md transition"
          >
            Start Your Journey
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
