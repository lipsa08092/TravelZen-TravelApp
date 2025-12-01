import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  MdOutlineTravelExplore,
  MdFavorite,
  MdOutlineBook,
} from "react-icons/md";
import Login from "../../Pages/LogIn";
import { FaUser } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [showLogin, setShowLogin] = useState(false);
  const [userName, setUserName] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  const [wishlist, setWishlist] = useState([]);
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    const loggedIn = localStorage.getItem("username");
    if (loggedIn) setUserName(loggedIn);

    const savedData = JSON.parse(localStorage.getItem(loggedIn)) || {};
    setWishlist(savedData.wishlist || []);
    setBooking(savedData.booking|| []);
  }, []);

  useEffect(() => {
    const loggedIn = localStorage.getItem("username");
    if (loggedIn) setUserName(loggedIn);

    const loadData = () => {
      const savedData = JSON.parse(localStorage.getItem(loggedIn)) || {};
      setWishlist(savedData.wishlist || []);
      setBooking(savedData.booking || []);
    };
    loadData();
    window.addEventListener("wishlistChange", loadData);
    window.addEventListener("bookingChange", loadData);

    return () => {
      window.removeEventListener("wishlistChange", loadData);
      window.removeEventListener("bookingChange", loadData);
    };
  }, []);


  const handleClick = (item) => {
    setActive(item);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUserName(null);
    setShowProfile(false);
  };

  return (
    <div>
      {/* Navbar */}
      <header className="w-full fixed top-0 left-0 z-30 bg-gradient-to-r from-blue-900 to-blue-950 shadow-md">
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4 text-white">
          <div className="flex items-center gap-2">
            <MdOutlineTravelExplore className="text-4xl" />
            <h1 className="text-2xl font-bold">
              <span className="text-orange-600">Tra</span>vel{" "}
              <span className="text-green-600">Zen</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center text-md font-semibold">
            <Link
              to="/"
              onClick={() => handleClick("Home")}
              className={`relative hover:text-orange-500 pb-1 transition-all ${
                active === "Home" ? "text-orange-600 font-bold" : ""
              }`}
            >
              Home
              {active === "Home" && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-orange-500 rounded-full"></span>
              )}
            </Link>

            <Link
              to="/gallery"
              onClick={() => handleClick("Gallery")}
              className={`relative hover:text-orange-500 pb-1 transition-all ${
                active === "Gallery" ? "text-orange-600 font-bold" : ""
              }`}
            >
              Gallery
              {active === "Gallery" && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-orange-500 rounded-full"></span>
              )}
            </Link>

            <Link
              to="/about"
              onClick={() => handleClick("About")}
              className={`relative hover:text-orange-500 pb-1 transition-all ${
                active === "About" ? "text-orange-600 font-bold" : ""
              }`}
            >
              About
              {active === "About" && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-orange-500 rounded-full"></span>
              )}
            </Link>

            <Link
              to="/destination"
              onClick={() => handleClick("Destination")}
              className={`relative hover:text-orange-500 pb-1 transition-all ${
                active === "Destination" ? "text-orange-600 font-bold" : ""
              }`}
            >
              Destination
              {active === "Destination" && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-orange-500 rounded-full"></span>
              )}
            </Link>

            <Link
              to="/contact"
              onClick={() => handleClick("Contact")}
              className={`relative hover:text-orange-500 pb-1 transition-all ${
                active === "Contact" ? "text-orange-600 font-bold" : ""
              }`}
            >
              Contact
              {active === "Contact" && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-orange-500 rounded-full"></span>
              )}
            </Link>

            {/* User Section */}
            {userName ? (
              <div className="relative">
                <button
                  className=" flex  gap-2 px-5 py-2 bg-green-600 rounded-full font-semibold"
                  onClick={() => setShowProfile(!showProfile)}
                >
                  <FaUser className="mt-1" /> Hi, {userName}
                </button>

                {showProfile && (
                  <div className="absolute -right-14 mt-2 w-60 backdrop-blur-md bg-black/40 text-white rounded-lg shadow-lg p-4 flex flex-col gap-3 z-50">
                    <div className="flex items-center gap-2">
                      <MdFavorite className="text-red-600 text-xl" />
                      <span className="font-bold text-red-500">Wishlist</span>
                    </div>
                    <div className="flex gap-2 text-sm text-gray-100 ml-1">
                      {wishlist.length > 0 ? (
                        wishlist.map((item, idx) => (
                          <span
                            key={idx}
                            className="bg-white/20 px-2 py-1 rounded-md"
                            title={item}
                          >
                            {item}
                          </span>
                        ))
                      ) : (
                        <span>No items</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <MdOutlineBook className="text-blue-600 text-xl" />
                      <span className="font-bold text-blue-700">Bookings</span>
                    </div>
                    <div className="flex  gap-2 text-sm text-gray-100 ml-1">
                      {booking.length > 0 ? (
                        booking.map((item, idx) => (
                          <span
                            key={idx}
                            className="bg-white/20 px-2 py-1 rounded-md truncate"
                            title={item}
                          >
                            {item}
                          </span>
                        ))
                      ) : (
                        <span>No bookings</span>
                      )}
                    </div>

                    <div className="flex justify-center items-center">
                      <button
                        onClick={handleLogout}
                        className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 flex items-center justify-center gap-2"
                      >
                        <IoLogOutOutline className="text-lg" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className="px-5 py-2 bg-orange-500 rounded-full"
              >
                Login
              </button>
            )}
          </div>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden text-white p-4 item-center text-center">
            <div className="flex flex-col text-white font-bold text-lg px-6 py-2 space-y-4 items-center text-center">
              <Link
                to="/"
                onClick={() => handleClick("Home")}
                className={`hover:text-orange-500 ${
                  active === "Home" ? "text-orange-600" : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="/gallery"
                onClick={() => handleClick("Gallery")}
                className={`hover:text-orange-500 ${
                  active === "Gallery" ? "text-orange-600" : ""
                }`}
              >
                Gallery
              </Link>
              <Link
                to="/about"
                onClick={() => handleClick("About")}
                className={`hover:text-orange-500 ${
                  active === "About" ? "text-orange-600" : ""
                }`}
              >
                About
              </Link>
              <Link
                to="/destination"
                onClick={() => handleClick("Destination")}
                className={`hover:text-orange-500 ${
                  active === "Destination" ? "text-orange-600" : ""
                }`}
              >
                Destination
              </Link>
              <Link
                to="/contact"
                onClick={() => handleClick("Contact")}
                className={`hover:text-orange-500 ${
                  active === "Contact" ? "text-orange-600" : ""
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Mobile User Section */}
            {userName ? (
              <div className="relative mt-4 w-full flex flex-col items-center">
                <button
                  className="px-5 py-2 bg-green-600 rounded-full font-semibold"
                  onClick={() => setShowProfile(!showProfile)}
                >
                  Hi, {userName}
                </button>

                {showProfile && (
                  <div className="absolute top-12 backdrop-blur-md bg-black/70 text-white w-60 rounded-lg shadow-lg p-4 flex flex-col gap-3 z-50 transition duration-150">
                    <div className="flex items-center gap-2">
                      <MdFavorite className="text-red-500 text-x" />
                      <span className="font-semibold">Wishlist</span>
                    </div>

                    <div className="flex gap-2 text-sm text-gray-100 ml-1">
                      {wishlist.length > 0 ? (
                        wishlist.map((item, idx) => (
                          <span
                            key={idx}
                            className="bg-white/20 px-2 py-1 rounded-md truncate"
                            title={item}
                          >
                            {item}
                          </span>
                        ))
                      ) : (
                        <span>No Wishlists</span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      <MdOutlineBook className="text-blue-500 text-xl" />
                      <span className="font-semibold">Bookings</span>
                    </div>

                  <div className="flex gap-2 text-sm text-gray-100 ml-1">
                      {booking.length > 0 ? (
                        booking.map((item, idx) => (
                          <span
                            key={idx}
                            className="bg-white/20 px-2 py-1 rounded-md truncate"
                            title={item}
                          >
                            {item}
                          </span>
                        ))
                      ) : (
                        <span>No bookings</span>
                      )}
                    </div>
                    <div className="flex justify-center items-center">
                      <button
                        onClick={handleLogout}
                        className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 flex items-center justify-center gap-2"
                      >
                        <IoLogOutOutline className="text-lg font-semibold" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className="px-5 py-2 bg-gradient-to-r from-orange-500 to-green-600 rounded-full mt-4"
              >
                Login
              </button>
            )}
          </div>
        )}
      </header>

      {/* Login Popup */}
      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onLoginSuccess={(name) => setUserName(name)}
        />
      )}
    </div>
  );
};

export default Navbar;
