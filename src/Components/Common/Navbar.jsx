import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineTravelExplore } from "react-icons/md";
import Login from "../../Pages/LogIn";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const [showLogin, setShowLogin] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const handleClick = (item) => {
    setActive(item);
    setIsOpen(false);
    window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  };

  const openLogin = () => {
    setShowLogin(true);
    setShowNavbar(false);
    setIsOpen(false);
  };

  const closeLogin = () => {
    setShowLogin(false);
    setShowNavbar(true);
  };

  return (
    <div>
      {showNavbar && (
        <header className="w-full fixed top-0 left-0 z-30 bg-black/30  shadow-md">
          <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4 text-white">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <MdOutlineTravelExplore className="text-4xl" />
              <h1 className="text-2xl font-bold">
                <span className="text-orange-600">Tra</span>vel
                <span className="text-green-600">Zen</span>
              </h1>
            </div>

            {/* Desktop Menu */}

            <div className="hidden md:flex gap-8 text-md font-semibold items-center">
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

              <button
                onClick={openLogin}
                className="px-5 py-2  rounded-full bg-orange-500 shadow-lg hover:bg-orange-600 transition-all"
              >
                Login
              </button>
            </div>

            {/* Mobile Menu  */}
            <button
              className="md:hidden text-white text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </nav>

          {isOpen && (
            <div className="md:hidden flex flex-col bg-black/30 backdrop-blur-sm text-white px-6 py-4 space-y-4 items-center text-center ">
              <Link
                to="/"
                onClick={() => handleClick("Home")}
                className={`relative hover:text-orange-500 pb-1 transition-all ${
                  active === "Home" ? "text-orange-600 font-bold" : ""
                }`}
              >
                Home
              </Link>

              <Link
                to="/gallery"
                onClick={() => handleClick("Gallery")}
                className={`relative hover:text-orange-500 pb-1 transition-all ${
                  active === "Gallery" ? "text-orange-600 font-bold" : ""
                }`}
              >
                Gallery
              </Link>

              <Link
                to="/about"
                onClick={() => handleClick("About")}
                className={`relative hover:text-orange-500 pb-1 transition-all ${
                  active === "About" ? "text-orange-600 font-bold" : ""
                }`}
              >
                About
              </Link>

              <Link
                to="/destination"
                onClick={() => handleClick("Destination")}
                className={`relative hover:text-orange-500 pb-1 transition-all ${
                  active === "Destination" ? "text-orange-600 font-bold" : ""
                }`}
              >
                Destination
              </Link>

              <Link
                to="/contact"
                onClick={() => handleClick("Contact")}
                className={`relative hover:text-orange-500 pb-1 transition-all ${
                  active === "Contact" ? "text-orange-600 font-bold" : ""
                }`}
              >
                Contact
              </Link>

              <button
                onClick={openLogin}
                className="text-center py-2 px-8 bg-gradient-to-r from-orange-600 to-green-800 rounded-lg font-semibold hover:bg-orange-600"
              >
                Login
              </button>
            </div>
          )}
        </header>
      )}

      {showLogin && <Login onClose={closeLogin} />}
    </div>
  );
};

export default Navbar;
