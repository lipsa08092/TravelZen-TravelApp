import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineTravelExplore } from "react-icons/md";
import LoginModal from "../LoginModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [loginModal, setLoginModal] = useState(false);

  const handleClick = (item) => {
    setActive(item);
    setIsOpen(false);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-30 bg-black/30 backdrop-blur-sm shadow-md">
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4 text-white">
        <div className="flex">
          <MdOutlineTravelExplore className="text-4xl text-white" />
          <h1 className="text-2xl font-bold cursor-pointer tracking-wide drop-shadow-sm hover:scale-105 transition">
            <span className="text-orange-600">Tra</span>vel
            <span className="text-green-600">Zen</span>
          </h1>
        </div>

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
            to="/about"
            onClick={() => handleClick("About")}
            className={`relative pb-1 transition ${
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

          <button
            onClick={() => setLoginModal(true)}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-95 transition-all"
          >
            Login
          </button>
        </div>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
      {loginModal && <LoginModal close={() => setLoginModal(false)} />}

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
            to="/about"
            onClick={() => handleClick("About")}
            className={`block ${
              active === "About" ? "text-orange-400" : "hover:text-orange-400"
            }`}
          >
            About
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

          <button
            onClick={() => setLoginModal(true)}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold shadow-lg shadow-orange-500/30 hover:scale-95 transition"
          >
            Login
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
