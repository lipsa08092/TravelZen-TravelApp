import React from "react";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTelegramPlane,
} from "react-icons/fa";

const FooterGradient = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-950 to-gray-800 text-white py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <MdOutlineTravelExplore className="text-4xl" />
              <h1 className="text-3xl font-bold">
                <span className="text-orange-600">Tra</span>vel
                <span className="text-green-600">Zen</span>
              </h1>
            </div>
            <p className="opacity-90 mt-3 text-sm leading-relaxed">
              Discover magical places and create unforgettable journeys.
            </p>
            <div className="relative flex mt-2">
              <input
                type="text"
                placeholder="Search here"
                className="w-full p-3 pl-5 pr-12 rounded-full text-lg outline-none bg-gray-200"
              />

              <IoMdSearch className="text-2xl text-gray-600 absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer" />
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Links</h3>
            <ul className="space-y-2 text-sm opacity-90 flex flex-col">
              <Link to="/" className="hover:text-orange-300">
                Home
              </Link>
              <Link to="/about" className="hover:text-orange-300">
                About
              </Link>
              <Link to="/gallery" className="hover:text-orange-300">
                Gallery
              </Link>
              <Link to="/destination" className="hover:text-orange-300">
                Destination
              </Link>
              <Link to="/contact" className="hover:text-orange-300">
                Contact
              </Link>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="cursor-pointer hover:text-orange-300">
                Help Center
              </li>
              <li className="cursor-pointer hover:text-orange-300">Terms</li>
              <li className="cursor-pointer hover:text-orange-300">Privacy</li>
              <li className="cursor-pointer hover:text-orange-300">FAQ</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Contact</h3>

            <p className="flex items-center gap-2 text-sm">
              <FaMapMarkerAlt className="text-orange-500" />
              Bhubaneswar, Odisha, India
            </p>

            <p className="flex items-center gap-2 opacity-90 mt-3 text-sm">
              <FaPhoneAlt /> +91 98765 43210
            </p>

            <p className="flex items-center gap-2 opacity-90 mt-3 text-sm">
              <FaEnvelope className="text-green-600" />
              support@travelzen.com
            </p>

            <div className="flex gap-4 text-lg mt-4">
              <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
              <FaInstagram className="hover:text-pink-700 cursor-pointer" />
              <FaTwitter className="hover:text-sky-600 cursor-pointer" />
              <FaTelegramPlane className="hover:text-sky-500 text-xl cursor-pointer" />
            </div>
          </div>
        </div>

        <p className="text-center text-white mt-12 opacity-80 text-sm">
          © {new Date().getFullYear()}
          <span className="text-orange-600 font-bold">Tra</span>vel
          <span className="text-green-400 font-bold">Zen</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterGradient;
