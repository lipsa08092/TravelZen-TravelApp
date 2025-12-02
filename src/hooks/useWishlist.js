import { useState, useEffect } from "react";

export default function useWishlist(username) {
  const [wishlist, setWishlist] = useState([]);

   useEffect(() => {
    if (username) {
      const userData = JSON.parse(localStorage.getItem(username)) || {};
      setWishlist(userData.wishlist || []);
    } else {
      setWishlist([]);
    }

    const refresh = () => {
      if (!username) return;
      const updatedData = JSON.parse(localStorage.getItem(username)) || {};
      setWishlist(updatedData.wishlist || []);
    };

    window.addEventListener("wishlistChange", refresh);
    return () => window.removeEventListener("wishlistChange", refresh);
  }, [username]);

  const toggleWishlist = (item) => {
    if (!username) {
      window.dispatchEvent(new Event("showLoginPopup"));
      return;
    }

    const exists = wishlist.some((w) => w.id === item.id);
    const updated = exists
      ? wishlist.filter((w) => w.id !== item.id)
      : [...wishlist, item];

    setWishlist(updated);

    const userData = JSON.parse(localStorage.getItem(username)) || {};
    localStorage.setItem(
      username,
      JSON.stringify({ ...userData, wishlist: updated })
    );

    window.dispatchEvent(new Event("wishlistChange"));
  };

  return { wishlist, toggleWishlist };
}