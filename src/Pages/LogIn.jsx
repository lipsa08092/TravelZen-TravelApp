import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Login = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

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
          className="absolute top-3 right-3 text-white text-2xl hover:text-black"
        >
          <IoCloseSharp />
        </button>

        <h2 className="text-white text-3xl font-semibold text-center mb-6">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        {/* Form */}
        <div className="mb-5">
          <label className="text-white font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="mt-2 w-full p-3 bg-transparent border text-white border-white/30 rounded-md"
          />
        </div>

        {!isLogin && (
          <div className="mb-5">
            <label className="text-white font-medium">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              className="mt-2 w-full p-3 bg-transparent border text-white border-white/30 rounded-md"
            />
          </div>
        )}

        <div className="mb-6">
          <label className="text-white font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="mt-2 w-full p-3 bg-transparent border text-white border-white/30 rounded-md"
          />
        </div>

        <button className="w-full bg-orange-600 py-3 rounded-md text-white font-semibold">
          {isLogin ? "Login" : "Sign Up"}
        </button>

        <p className="text-center mt-6 text-gray-200">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-yellow-300 font-semibold cursor-pointer ml-2"
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
