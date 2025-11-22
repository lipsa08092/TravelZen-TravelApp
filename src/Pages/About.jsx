import React from "react";
import {
  FaGlobeAsia,
  FaPlane,
  FaMapMarkedAlt,
  FaMobileAlt,
  FaRegSmile,
} from "react-icons/fa";

const About = () => {
  return (
    <section className=" bg-gradient-to-b from-blue-200  via-blue-100 to-blue-50 pb-20 pt-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-10">
          About <span className="text-green-600">Travel</span>
          <span className="text-orange-500">Zen</span>
        </h1>

        <p className="text-gray-600 mt-6 text-lg md:max-w-3xl mx-auto">
          TravelZen is your all-in-one travel companion built to make your
          journeys smoother, smarter, and unforgettable. Discover destinations,
          plan perfect trips, and experience the world with ease- right from
          your mobile.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-4 mb-20">
        {[
          {
            icon: <FaGlobeAsia size={40} className="text-green-600" />,
            title: "Explore Worldwide",
            desc: "Find amazing destinations across the globe with curated guides and expert insights.",
          },
          {
            icon: <FaPlane size={40} className="text-orange-600" />,
            title: "Smart Travel Planning",
            desc: "Plan perfect trips with optimized routes, must-see places, and smart suggestions.",
          },
          {
            icon: <FaMapMarkedAlt size={40} className="text-blue-600" />,
            title: "Easy Navigation",
            desc: "Access accurate maps, travel routes, and important travel details anytime, anywhere.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-8 shadow-lg rounded-2xl text-center hover:shadow-2xl transition"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

        {/* Our Journey */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          OUR <span className="text-green-600">JOURNEY</span>
        </h2>

        <div className="bg-white shadow-xl rounded-2xl p-10 leading-relaxed text-gray-700">
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

        {/* why traveler's love us */}
      <div className="max-w-7xl mx-auto mb-28 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
          Why Travelers <span className="text-blue-600">Love Us</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

            {/*card-1*/}
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

            {/* card-2 */}
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

            {/*card-3*/}
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

      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Ready to Explore the World?
        </h2>
        <p className="text-gray-600 mb-8">
          Join millions of travelers discovering new destinations every day.
        </p>
        <button className="px-8 py-3 bg-blue-600 hover:scale-95 hover:bg-blue-500 text-white font-semibold rounded-full shadow-md transition">
          Start Your Journey
        </button>
      </div>
    </section>
  );
};

export default About;
