import React from "react";
import { MdLocationOn } from "react-icons/md";

const BookingSummary = () => {
  const booking = JSON.parse(localStorage.getItem("travelBooking"));

  return (
    <div
      className="w-full h-[135vh] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.24), rgba(0,0,0,0.45)), url('http://www.hdwallpaperspulse.com/wp-content/uploads/2017/08/07/awesome-mountain-image-hd.jpg')",
      }}
    >
      <div className="bg-black/40 backdrop-blur-sm shadow-2xl rounded-2xl p-8 sm:p-10 max-w-xl w-full flex flex-col items-center">
        
        <h1 className="font-serif text-4xl font-bold mb-6 text-gray-100 text-center">
          Your Final Booking
        </h1>

        <img
          src={booking.img}
          alt="destination"
          className="h-60 w-full object-cover rounded-xl shadow-md mb-6"
        />

        <h2 className="items-center flex text-white text-xl font-semibold gap-1 mb-4">
          <MdLocationOn className="text-red-600 text-2xl" />
          {booking.name}
        </h2>

        <h3 className="mt-2 text-2xl font-semibold text-gray-200">
          Selected Options
        </h3>

        <ul className="mt-4 text-lg space-y-2 w-full">
          {Object.entries(booking.selectedOptions)
            .filter(([_, value]) => value)
            .map(([i]) => (
              <li
                key={i}
                className="capitalize text-gray-800 bg-gray-100 px-4 py-2 rounded-lg"
              >
                {i}
              </li>
            ))}
        </ul>

        <button className="mt-8 w-full bg-green-600 hover:bg-green-700 transition text-white font-semibold px-6 py-3 rounded-full text-lg shadow-md">
          Confirm Booking
        </button>

      </div>
    </div>
  );
};

export default BookingSummary;
