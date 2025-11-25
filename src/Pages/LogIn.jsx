import { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Login = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] w-full h-full bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: "url('https://wallpapercave.com/wp/wp5561684.jpg')",
      }}
    >
      <div className="absolute inset-0 backdrop-blur-[5px] bg-black/40"></div>

      <div className="relative z-10 bg-white/10 p-6 sm:p-8 rounded-xl border border-white/20 shadow-2xl w-[320px] sm:w-[350px] md:w-[420px]">
        <button
          onClick={onClose}
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
            className="mt-2 w-full p-3 bg-transparent border text-white border-white/30 rounded-md"
          />
        </div>

        <div className="mb-6">
          <label className="text-white font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="mt-2 w-full p-3 bg-transparent border text-white border-white/30 rounded-md"
          />
        </div>

        <button className="w-full bg-orange-600 py-3 rounded-md text-white font-semibold">
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

export default Login;
