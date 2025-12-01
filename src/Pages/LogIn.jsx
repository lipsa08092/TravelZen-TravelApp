import React, { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Login = ({ onClose, onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  const handleSubmit = () => {
    if (!username || !password) {
      alert("Enter username and password!");
      return;
    }

    localStorage.setItem("username", username);
    onLoginSuccess(username);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] w-full h-full flex justify-center items-center bg-black/50"
      style={{
        backgroundImage:
          "url('https://wallpapercave.com/wp/wp7287112.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 bg-black/70 p-6 sm:p-8 rounded-xl border border-white/20 shadow-2xl w-[320px] sm:w-[350px] md:w-[420px]">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-2xl hover:text-black"
        >
          <IoCloseSharp />
        </button>

        <h2 className="text-white text-3xl font-semibold text-center mb-6">
          Login
        </h2>

        <div className="mb-5">
          <label className="text-white font-medium">Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-2 w-full p-3 bg-transparent border text-white border-white/30 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label className="text-white font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full p-3 bg-transparent border text-white border-white/30 rounded-md"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-orange-600 py-3 rounded-md text-white font-semibold"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
