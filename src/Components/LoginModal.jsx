import { div } from "framer-motion/client";
import React, { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";

const LoginModal = ({ close }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);
  return (
    <div className="relative flex h-[700px] justify-center items-center px-4">
      <div className="absolute top-5 bg-black/40 w-[500px]  md:w-[600px] md:h-[450px] backdrop-blur-xl  border border-white/20 shadow-2xl rounded-xl p-8">
        <button
          onClick={close}
          className="absolute top-3 right-3 text-white text-2xl hover:text-red-400"
        >
          <IoCloseSharp />
        </button>

        <h2 className="text-white text-3xl font-semibold text-center mb-6">
          Login
        </h2>

        <div className="mb-5">
          <label className="text-white font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="mt-2 w-full p-3 bg-white/70 text-gray-900 border border-white/30 rounded-md outline-none focus:ring-2 focus:ring-orange-300"
          />
        </div>

        <div className="mb-6">
          <label className="text-white font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="mt-2 w-full p-3 bg-white/70 text-gray-900 border border-white/30 rounded-md outline-none focus:ring-2 focus:ring-orange-300"
          />
        </div>

        <button className="w-full bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-md font-medium transition">
          Login
        </button>

        <p className="text-center mt-6 text-gray-200">
          Don't have an account?
          <span className="text-yellow-300 font-semibold cursor-pointer">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
