import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const LoginModal = () => {
 

  return (
    <div className="relative h-[700px] flex justify-center items-center px-4 ">
      <div
        className="
        bg-black/40 w-[320px] sm:w-[350px] md:w-[500px] lg:w-[600px] lg:h-[450px] backdrop-blur-xl border border-white/20 shadow-2xl rounded-xl p-6 sm:p-8 absolute top-5"
      >
        <button
      
          className="absolute top-3 right-3 text-white text-2xl hover:text-red-400"
        >
          <IoCloseSharp />
        </button>

        <h2 className="text-white text-2xl sm:text-3xl font-semibold text-center mb-6">
          Login
        </h2>

        <div className="mb-5">
          <label className="text-white font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="mt-2 w-full p-3 bg-white/0 border text-white border-white/30 rounded-md outline-none focus:ring-1 focus:ring-orange-300"
          />
        </div>

        <div className="mb-6">
          <label className="text-white font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="mt-2 w-full p-3 bg-white/0 text-white border border-white/30 rounded-md outline-none focus:ring-1 focus:ring-orange-300"
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
