import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPopup = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-[100]">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-[300px] text-center">
        <h2 className="text-xl font-semibold mb-3">Login Required</h2>
        <p className="text-gray-700 mb-5">
          Please login to add your wishlist
        </p>

        <button
          onClick={() => {
            onClose();
            navigate("/login");
          }}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg w-full mb-3"
        >
          Go to Login
        </button>

        <button
          onClick={onClose}
          className="text-red-600 underline text-md font-semibold"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LoginPopup;
