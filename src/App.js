import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";

import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Destination from "./Pages/Destination";
import DestinationDetails from "./Screens/DestinationDetails";
import BookingSummary from "./Screens/BookingSummary";
import Login from "./Pages/LogIn";

const App = () => {
  //Backend connect test
  useEffect(() => {
    fetch("http://localhost:5000/hello")
      .then((res) => res.json())
      .then((data) => console.log("Backend Response:", data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/destination/:id" element={<DestinationDetails />} />
        <Route path="/booking-summary" element={<BookingSummary />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
