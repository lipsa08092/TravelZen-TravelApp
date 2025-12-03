import React, { useState} from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()

  const handleSubmit = () => {
    if (!username || !password) {
      alert("Enter username and password!");
      return;
    }

    localStorage.setItem("username", username);

    window.dispatchEvent(new Event("wishlistChange")); 
    navigate("/");
  };


return (
    <div className="min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://wallpapercave.com/wp/wp7287112.jpg')",
      }}
    >
      <div className="bg-black/70 p-8 rounded-xl border border-white/20 shadow-2xl w-[350px]">
        
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