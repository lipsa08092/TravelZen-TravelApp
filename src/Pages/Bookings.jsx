import React, { useEffect, useState } from "react";
import useBooking from "../hooks/useBooking";
import { MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const BookingPage = () => {
  const userName = localStorage.getItem("username");
  const [bookings, setBookings] = useState([]);
  const { removeBooking } = useBooking(userName);
  const navigate = useNavigate();

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  useEffect(() => {
    if (!userName) return;
    const userData = JSON.parse(localStorage.getItem(userName)) || {};
    setBookings(userData.booking || []);

    const refresh = () => {
      const updatedData = JSON.parse(localStorage.getItem(userName)) || {};
      setBookings(updatedData.booking || []);
    };

    window.addEventListener("bookingChange", refresh);
    return () => window.removeEventListener("bookingChange", refresh);
  }, [userName]);

  if (!userName) {
    return (
      <h2 className="text-center mt-24 text-2xl font-semibold text-gray-800">
        Please Login to view your bookings.
      </h2>
    );
  }
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="min-h-screen bg-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-gray-800 text-center">
          Your Bookings
        </h1>

        {bookings.length === 0 ? (
          <p className="text-gray-500 text-lg text-center">No bookings yet.</p>
        ) : (
          <div className="grid grid-cols-1  md:grid-cols-2  gap-6">
            {bookings.map((item, index) => (
              <div
                key={index}
                className="bg-white hover:scale-105 shadow-md rounded-xl border border-gray-200 p-4 flex flex-col sm:flex-row gap-4 hover:shadow-lg transition-all"
              >
                <div className=" w-36 h-36 rounded-lg overflow-hidden border">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className=" flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-1">
                      <MdLocationOn className="text-red-500 text-xl" />
                      {item.name}
                    </h3>
                    <div className="text-gray-600 text-sm mt-2">
                      <b className="text-gray-700">Category Options:</b>
                      <ul className="ml-2 list-disc">
                        {Object.entries(item.selectedOptions).filter(([_, value]) => value === true)
                          .map(([key]) => (
                            <li key={key}>
                              {key.charAt(0).toUpperCase() + key.slice(1)}
                            </li>
                          ))}
                      </ul>
                    </div>

                    <p className="text-sky-600 text-sm mt-2">
                      <b>Total Price: </b>₹{item.totalPrice}
                    </p>

                    <p className="text-gray-500 text-xs mt-1">
                      <b>Date:</b> {date} | <b>Persons:</b> {item.userName}
                    </p>
                  </div>

                  <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                      Booked
                    </span>

                    <div className="flex gap-2 mt-2 sm:mt-0">
                      <button
                        className="bg-red-500 text-white px-4 py-2 text-sm rounded-md hover:bg-red-600 transition"
                        onClick={() => removeBooking(index)}
                      >
                        Cancel Booking
                      </button>
                      <button
                        onClick={() => {
                          handleClick();
                          navigate(`/destination/${item.id}`);
                        }}
                        className="bg-blue-500 text-white px-4 py-2 text-sm rounded-md hover:bg-blue-600 transition"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
