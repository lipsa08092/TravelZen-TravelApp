import React, { useState} from "react";
import { MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useBooking from "../hooks/useBooking";

const BookingSummary = () => {
  const [showPopup, setShowPopup] = useState(false);
  const UserName = localStorage.getItem("username");
  const { addBooking } = useBooking(UserName);
    const booking = JSON.parse(localStorage.getItem("travelBooking"));
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="w-full min-h-[145vh] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-10"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.54), rgba(0,0,0,0.45)), url('https://images.pexels.com/photos/673020/pexels-photo-673020.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')",
      }}
    >
      <div className="bg-black/40 backdrop-blur-md shadow-2xl rounded-2xl p-8 sm:p-10 max-w-xl w-full flex flex-col items-center ">
        <h1 className="font-serif text-4xl font-bold mb-6 text-gray-100 text-center">
          Your Final Booking
        </h1>

        <img
          src={booking.img}
          alt="destination"
          className="h-60 w-full object-cover rounded-xl shadow-md mb-6"
        />

        <h2 className="flex items-center text-white text-xl font-semibold gap-2 mb-4">
          <MdLocationOn className="text-red-600 text-2xl" />
          {booking.name}
        </h2>

        <div className="mt-6 w-full">
          <h3 className="text-3xl font-bold text-white tracking-wide mb-4">
            Selected Options
          </h3>

          {Object.keys(booking.selectedOptions)
            .filter((key) => booking.selectedOptions[key])
            .map((key) => (
              <div
                key={key}
                className="flex items-center gap-3 px-4 py-3 text-white"
              >
                <div className="w-3 h-3 rounded-full bg-white"></div>
                <span className="capitalize text-lg font-medium">{key}</span>
              </div>
            ))}
        </div>

        <button
          onClick={() => 
            setShowPopup(true)
          }
          className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full text-lg shadow-md"
        >
          Confirm Booking
        </button>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-50">
          <div className="bg-white/10 backdrop-blur-xl shadow-2xl p-8 rounded-2xl max-w-sm w-full text-center border border-white/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Booking Successful!
            </h2>
            <p className="text-gray-200 mb-6">
              Your trip has been successfully booked.
            </p>
            <button
              onClick={() => {
                addBooking(booking);
                setShowPopup(false);
                navigate("/destination");
                handleClick();
              }}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg font-semibold w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingSummary;
