import React from "react";
import useWishlist from "../hooks/useWishlist";
import { FaHeart } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { PiMaskSadThin } from "react-icons/pi";

const WishlistPage = () => {
  const userName = localStorage.getItem("username");
  const { wishlist, toggleWishlist } = useWishlist(userName);

  if (!userName) {
    return <h2 className="text-center mt-20 text-xl">Please Login First</h2>;
    
  }

  return (
    <div className="px-6 min-h-screen mt-24">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 font-serif">Your Wishlist</h1>

      {wishlist.length === 0 && (
        <p className="text-gray-600 text-lg text-center">No items added yet.</p>
        
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-xl rounded-2xl p-4 relative hover:shadow-2xl hover:scale-105 transition duration-300"
          >
            <button
              onClick={() => toggleWishlist(item)}
              className="absolute top-5 right-6 text-red-600 text-2xl hover:scale-110 transition"
            >
              <FaHeart />
            </button>

            <img
              src={item.img}
              alt={item.name}
              className="h-52 w-full object-cover rounded-xl shadow-md"
            />
            <h3 className="text-xl font-semibold flex items-center justify-center gap-2 mt-4 text-center">
              <MdLocationOn className="text-red-500 text-2xl" />
              <span className="font-serif text-gray-800">{item.name}</span>
            </h3>
            <p className="text-gray-600 text-center mt-2">{item.desc}</p>
            <p className="text-sky-700 font-bold text-3xl font-serif mt-3 text-center">
              {item.price}
            </p>
            <a
              href={item.link}
              className="block mx-auto mt-4 w-max text-blue-600 underline font-semibold hover:text-blue-800"
            >
              Explore
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
