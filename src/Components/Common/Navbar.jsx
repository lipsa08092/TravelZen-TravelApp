import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const handleClick = (item) => {
    setActive(item);
    setIsOpen(false);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-30 bg-black/40 backdrop-blur-sm shadow-md">
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4 text-white">
        <h1 className="text-2xl font-bold cursor-pointer tracking-wide drop-shadow-sm hover:scale-105 transition">
          <span className="text-orange-600">Tra</span>vel
          <span className="text-green-400">Ze</span>n
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg font-semibold items-center">
          <Link
            to="/"
            onClick={() => handleClick("Home")}
            className={`relative pb-1 transition ${
              active === "Home" ? "text-orange-400" : "hover:text-orange-400"
            }`}
          >
            Home
            <span
              className={`absolute left-0 top-6 h-[2px] bg-orange-400 transition-all duration-300 ${
                active === "Home" ? "w-full" : "w-0"
              }`}
            ></span>
          </Link>

          <Link
            to="/gallery"
            onClick={() => handleClick("Gallery")}
            className={`relative pb-1 transition ${
              active === "Gallery" ? "text-orange-400" : "hover:text-orange-400"
            }`}
          >
            Gallery
            <span
              className={`absolute left-0 top-6 h-[2px] bg-orange-400 transition-all duration-300 ${
                active === "Gallery" ? "w-full" : "w-0"
              }`}
            ></span>
          </Link>

          <Link
            to="/contact"
            onClick={() => handleClick("Contact")}
            className={`relative pb-1 transition ${
              active === "Contact" ? "text-orange-400" : "hover:text-orange-400"
            }`}
          >
            Contact
            <span
              className={`absolute left-0 top-6 h-[2px] bg-orange-400 transition-all duration-300 ${
                active === "Contact" ? "w-full" : "w-0"
              }`}
            ></span>
          </Link>

          <Link
            to="/about"
            onClick={() => handleClick("About")}
            className={`relative pb-2 transition ${
              active === "About" ? "text-orange-400" : "hover:text-orange-400"
            }`}
          >
            About
            <span
              className={`absolute left-0 top-6 h-[2px] bg-orange-400 transition-all duration-300 ${
                active === "About" ? "w-full" : "w-0"
              }`}
            ></span>
          </Link>

          <button className="ml-4 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-sm shadow-lg transition">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
      <div
        className={`md:hidden bg-black/70 backdrop-blur-xl text-white text-center absolute w-full transition-all duration-400 overflow-hidden ${
          isOpen ? "max-h-80 p-6" : "max-h-0 py-0"
        }`}
      >
        <ul className="space-y-4 text-lg font-medium">
          <Link
            to="/"
            onClick={() => handleClick("Home")}
            className={`block ${
              active === "Home" ? "text-orange-400" : "hover:text-orange-400"
            }`}
          >
            Home
          </Link>

          <Link
            to="/gallery"
            onClick={() => handleClick("Gallery")}
            className={`block ${
              active === "Gallery" ? "text-orange-400" : "hover:text-orange-400"
            }`}
          >
            Gallery
          </Link>

          <Link
            to="/contact"
            onClick={() => handleClick("Contact")}
            className={`block ${
              active === "Contact" ? "text-orange-400" : "hover:text-orange-400"
            }`}
          >
            Contact
          </Link>

          <Link
            to="/about"
            onClick={() => handleClick("About")}
            className={`block ${
              active === "About" ? "text-orange-400" : "hover:text-orange-400"
            }`}
          >
            About
          </Link>

          <button className="mt-3 bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg shadow-lg transition hover:scale-95">
            Sign In
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
