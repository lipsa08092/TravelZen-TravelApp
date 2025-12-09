import { useState, useEffect } from "react";

const useMessage = (username) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (username) {
      const userData = JSON.parse(localStorage.getItem(username)) || {};
      setMessages(userData.message || []);
    } else {
      setMessages([]);
    }

    const refresh = () => {
      if (!username) return;
      const updated = JSON.parse(localStorage.getItem(username)) || {};
      setMessages(updated.message || []);
    };
    window.addEventListener("messageChange", refresh);
    return () => window.removeEventListener("messageChange", refresh);
  }, [username]);

  const addMessage = (data) => {
    if (!username) {
      window.dispatchEvent(
        new CustomEvent("showLoginPopup", { detail: { type: "message" } })
      );
      return;
    }

    const userData = JSON.parse(localStorage.getItem(username)) || {};
    const updatedList = [...(userData.message || []), data];

    localStorage.setItem(
      username,
      JSON.stringify({ ...userData, message: updatedList })
    );

    setMessages(updatedList);
    window.dispatchEvent(new Event("messageChange"));
  };

  return { messages, addMessage };
};

export default useMessage;
