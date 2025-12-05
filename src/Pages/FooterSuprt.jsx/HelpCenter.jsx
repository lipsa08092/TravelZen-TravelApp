import React, { useState } from "react";
import { FaBook } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function HelpCenter() {
  const [search, setSearch] = useState("");

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-100 font-serif ">
      <div
        className="w-full h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center px-4 relative z-20"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(0,0,0,0.63), rgba(0,0,0,0.4)), url('https://tse3.mm.bing.net/th/id/OIP.UsUTKat5JO96MavGSHv9KAHaEK?pid=Api&P=0&h=180')",
        }}
      >
        <div className="max-w-2xl">
          <h1 className="text-gray-100 text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            How can we help?
          </h1>

          <div className="relative max-w-xl mx-auto">
            <IoSearchOutline className="absolute top-5 text-lg left-5 text-gray-600" />
            <input
              type="text"
              placeholder="Search here..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-4 pl-12 rounded-xl text-gray-700 shadow-xl bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="relative -mt-10 z-20 w-[90%] md:w-[50%] text-center">
          <div className="bg-white p-7 rounded-2xl shadow-xl hover:shadow-2xl transition">
            <p className="text-xs text-indigo-600 font-semibold uppercase mb-2">
              Featured Article
            </p>

            <h2 className="text-xl font-bold text-gray-900">
              How to Plan Your First Trip with TravelZen
            </h2>
          </div>
        </div>
      </div>

      <div className=" text-center mx-auto mt-20 px-6 mb-14">
        <h3 className="text-5xl font-bold mb-2 text-gray-800">
          Getting Started
        </h3>
        <p className="text-gray-600 mb-8 text-md">
          Start exploring TravelZen features and learn how everything works.
        </p>
      </div>
      {/* create Account */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-7 px-8 mb-10 relative z-10">
        <Link
          to="/login"
          onClick={handleClick}
          className="bg-white hover:bg-blue-100 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform border group flex gap-6"
        >
          <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl mb-4 group-hover:bg-indigo-600 group-hover:text-white transition mt-1">
            <FaBook />
          </div>
          <div>
            <h2 className="font-semibold text-gray-800 mb-2 text-lg">
              Create Account
            </h2>
            <p className="text-gray-600 text-sm">
              How to set up your TravelZen account
            </p>
          </div>
        </Link>
        {/* wishlist */}
        <Link
          to="/destination"
          onClick={handleClick}
          className="bg-white hover:bg-blue-100 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform border cursor-pointer group flex gap-6"
        >
          <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl mb-4 group-hover:bg-indigo-600 group-hover:text-white transition mt-1">
            <FaBook />
          </div>
          <div>
            <h2 className="font-semibold text-gray-800 mb-2 text-lg">
              Wishlist
            </h2>
            <p className="text-gray-600 text-sm">
              Add your Favorites Destination
            </p>
          </div>
        </Link>
        {/* booking */}
        <Link
          to="/destination"
          onClick={handleClick}
          className="bg-white hover:bg-blue-100 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform border cursor-pointer group flex gap-6"
        >
          <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl mb-4 group-hover:bg-indigo-600 group-hover:text-white transition mt-1">
            <FaBook />
          </div>
          <div>
            <h2 className="font-semibold text-gray-800 mb-2 text-lg">
              Booking
            </h2>
            <p className="text-gray-600 text-sm">
              How to book your trip easily
            </p>
          </div>
        </Link>
        {/* gallery */}
        <Link
          to="/gallery"
          onClick={handleClick}
          className="bg-white hover:bg-blue-100 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform border cursor-pointer group flex gap-6"
        >
          <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl mb-4 group-hover:bg-indigo-600 group-hover:text-white transition mt-1">
            <FaBook />
          </div>
          <div>
            <h2 className="font-semibold text-gray-800 mb-2 text-lg">
              Gallery
            </h2>
            <p className="text-gray-600 text-sm">
              Browse photos and travel inspiration
            </p>
          </div>
        </Link>
        {/* destinations */}
        <Link
          to="/destination"
          onClick={handleClick}
          className="bg-white hover:bg-blue-100 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform border cursor-pointer group flex gap-6"
        >
          <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl mb-4 group-hover:bg-indigo-600 group-hover:text-white transition mt-1">
            <FaBook />
          </div>
          <div>
            <h2 className="font-semibold text-gray-800 mb-2 text-lg">
              Destinations
            </h2>
            <p className="text-gray-600 text-sm">Explore top destinations.</p>
          </div>
        </Link>
        {/* about */}
        <Link
          to="/about"
          onClick={handleClick}
          className="bg-white hover:bg-blue-100 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform border cursor-pointer group flex gap-6"
        >
          <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl mb-4 group-hover:bg-indigo-600 group-hover:text-white transition mt-1">
            <FaBook />
          </div>
          <div>
            <h2 className="font-semibold text-gray-800 mb-2 text-lg">
              About TravelZen
            </h2>
            <p className="text-gray-600 text-sm">Learn more about us</p>
          </div>
        </Link>
        {/* contact us */}
        <Link
          to="/contact"
          onClick={handleClick}
          className="bg-white hover:bg-blue-100 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform border cursor-pointer group flex gap-6"
        >
          <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl mb-4 group-hover:bg-indigo-600 group-hover:text-white transition mt-1">
            <FaBook />
          </div>
          <div>
            <h2 className="font-semibold text-gray-800 mb-2 text-lg">
              Contact Us
            </h2>
            <p className="text-gray-600 text-sm">
              Reach out to our support team
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
