import React from "react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is TravelZen?",
      answer:
        "TravelZen is your all-in-one travel assistant for planning trips, exploring destinations, and managing bookings effortlessly.",
    },
    {
      question: "How do I create an account?",
      answer:
        "Simply go to the Signup page, enter your details, verify your email, and your TravelZen account will be ready.",
    },
    {
      question: "Can I cancel my bookings?",
      answer:
        "Yes, eligible bookings can be canceled from your Dashboard under the Bookings section.",
    },
    {
      question: "Is my payment secure?",
      answer:
        "TravelZen uses encrypted and certified payment gateways to ensure full safety of your transactions.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can reach us via the Contact page or email support@travelzen.com for quick help.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4 font-sans">
      <div className="bg- mx-auto p-1 md:p-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-10 mt-10">
          <span className="text-green-600">F</span>requently Asked <span className="text-orange-600">Q</span>uestions
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/40 rounded-2xl border border-gray-200  backdrop-blur-lg"
            >
              <button
                className="w-full flex  items-center p-6 justify-between "
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg md:text-xl font-semibold text-gray-800">
                  {faq.question}
                </span>
                <FaChevronDown 
                  className={` text-gray-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default FAQ;
