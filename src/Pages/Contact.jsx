import React from "react";
import { useState, useEffect } from "react";
import useMessage from "../hooks/useMessage";
import LoginPopup from "../Components/LoginPopup";

const Contact = () => {
  const username = localStorage.getItem("username");
  const { messages, addMessage } = useMessage(username);

  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState("");

  useEffect(() => {
    const openPopup = (e) => {
      setPopupType(e.detail?.type || "message");
      setShowPopup(true);
    };

    window.addEventListener("showLoginPopup", openPopup);
    return () => window.removeEventListener("showLoginPopup", openPopup);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const newMessage = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
      date: new Date().toLocaleDateString(),
    };

    addMessage(newMessage);
    e.target.reset();
  };

  return (
    <div>
       {showPopup && (
      <LoginPopup
        type={popupType}
        onClose={() => setShowPopup(false)}
      />
    )}
    <section
      className="py-20 bg-gradient-to-br from-pink-200  to-indigo-100"
    >
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 drop-shadow-md">
          Contact Us
        </h2>
        <p className="mt-3 text-gray-700 text-lg">
          We'd love to hear from you! Please fill out the form below.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white/20 backdrop-blur-lg shadow-xl rounded-3xl p-10 border border-white/40">
        <form 
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none shadow-sm"
          />

          <input
            type="number"
            name= "phone"
            placeholder="Phone Number"
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none shadow-sm"
          />

          <input
            type="email"
            name= "email"
            placeholder="Email Address"
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none shadow-sm col-span-1 md:col-span-2"
          />

          <textarea
            rows="4"
            name= "message"
            placeholder="Your Message"
            className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none shadow-sm col-span-1 md:col-span-2"
          ></textarea>

          <button
            type="submit"
            className="col-span-1 md:col-span-2 w-full py-4 text-lg font-semibold bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
    </div>
  );
};

export default Contact;