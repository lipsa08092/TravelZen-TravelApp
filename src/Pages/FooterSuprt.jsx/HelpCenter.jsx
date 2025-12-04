import React, { useState } from "react";
import { FaBook } from "react-icons/fa";

const categories = [
  {
    title: "Create Account",
    description: "How to set up your TravelZen account",
  },
  { title: "Wishlist", description: "Manage your favorite destinations" },
  { title: "Booking", description: "How to book your trips easily" },
  { title: "Gallery", description: "Browse photos and travel inspiration" },
  { title: "Destinations", description: "Explore top destinations" },
  { title: "About TravelZen", description: "Learn more about us" },
  { title: "Contact Us", description: "Reach out to our support team" },
];

export default function HelpCenter() {
  const [search, setSearch] = useState("");

  const filteredCategories = categories.filter(
    (cat) =>
      cat.title.toLowerCase().includes(search.toLowerCase()) ||
      cat.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
   <div className="min-h-screen bg-gray-50 font-[Inter]">
  <div
    className="w-full h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center px-4 relative"
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

  <div className="w-full flex justify-center px-6 -mt-14">
    <div className="bg-white p-7 rounded-2xl shadow-xl hover:shadow-2xl transition w-full max-w-lg">
      <p className="text-xs text-indigo-600 font-semibold uppercase mb-2">
        Featured Article
      </p>

      <h2 className="text-2xl font-bold text-gray-900">
        How to Plan Your First Trip with TravelZen
      </h2>
    </div>
  </div>

  <div className="max-w-5xl mx-auto mt-20 px-6">
    <h3 className="text-3xl font-bold mb-2 text-gray-800">Getting Started</h3>
    <p className="text-gray-500 mb-8 text-sm">
      Start exploring TravelZen features and learn how everything works.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 px-8 mb-10">
    {filteredCategories.map((cat, idx) => (
      <div
        key={idx}
        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform border cursor-pointer group"
      >
        <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl mb-4 group-hover:bg-indigo-600 group-hover:text-white transition">
          <FaBook />
        </div>

        <h4 className="font-semibold text-gray-800 mb-2 text-lg">
          {cat.title}
        </h4>

        <p className="text-gray-500 text-sm">
          {cat.description}
        </p>
      </div>
    ))}
  </div>

</div>

  );
}
