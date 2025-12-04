
import { useState, useEffect } from "react";

const useBooking = (username) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (username) {
      const userData = JSON.parse(localStorage.getItem(username)) || {};
      setBookings(userData.booking || []);
    } else {
      setBookings([]);
    }
    const refresh = () => {
      if (!username) return;
      const updatedData = JSON.parse(localStorage.getItem(username)) || {};
      setBookings(updatedData.booking || []);
    };
    window.addEventListener("bookingChange", refresh);
    return () => window.removeEventListener("bookingChange", refresh);
  }, [username]);

  const addBooking = (item) => {
    if (!username) {
      window.dispatchEvent(new Event("showLoginPopup"));
      return;
    }
    const updated = [...bookings, item];
    setBookings(updated);
    
    const userData = JSON.parse(localStorage.getItem(username)) || {};
    localStorage.setItem(
      username,
      JSON.stringify({ ...userData, booking: updated })
    );
    window.dispatchEvent(new Event("bookingChange"));
  };

  const removeBooking = (index) => {
    const updated = bookings.filter((current, i) => i !== index);
    setBookings(updated);
    const userData = JSON.parse(localStorage.getItem(username)) || {};
    localStorage.setItem(
      username,
      JSON.stringify({ ...userData, booking: updated })
    );
    window.dispatchEvent(new Event("bookingChange"));
  };

  return { bookings, addBooking, removeBooking };
};

export default useBooking;
