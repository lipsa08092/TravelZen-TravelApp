import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const TestimonialSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          What people tell about us?
        </h2>

        <p className="text-gray-600 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
          Hear from travelers who trusted{" "}
          <span className="text-orange-500 font-bold">Tra</span>
          <span className="font-semibold">vel</span>
          <span className="text-green-600 font-bold">Zen</span> to make their
          journeys seamless, memorable, and stress-free.
        </p>
      </div>

      {/* Testimonial 1 */}
      <motion.div
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-72 h-72 bg-orange-300  rounded-full top-8 "></div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/024/344/087/large_2x/business-woman-isolated-illustration-ai-generative-free-png.png"
            alt="user"
            className="absolute w-72 h-80 object-cover rounded-full shadow-lg "
          />
        </motion.div>
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FaQuoteLeft className="text-orange-500 text-4xl mb-4 mx-auto md:mx-0" />
          <p className="text-gray-700 text-lg  italic">
            “My entire vacation was smooth and simple. TravelZen's trusted
            guides helped me explore without worries - pure travel joy!”
          </p>
          <p className="mt-5 font-semibold text-gray-900">- Lipsa , Odisha</p>
        </motion.div>
      </motion.div>

      {/* Testimonial 2 */}
      <motion.div className="max-w-5xl mx-auto  flex flex-col-reverse md:flex-row items-center gap-10
      " initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        >

        <motion.div className="md:w-1/2 text-center md:text-left" 
         initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FaQuoteLeft className="text-orange-500 text-4xl mb-4 mx-auto md:mx-0" />
          <p className="text-gray-700 text-lg  italic">
            "Thanks to TravelZen, I discovered hidden gems I never would have
            found on my own. Truly an amazing experience!"
          </p>
          <p className="mt-5 font-semibold text-gray-900">- Suman, Odisha</p>
        </motion.div>

        <motion.div className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}>
          <div className="relative w-72 h-72 bg-orange-300  rounded-full top-8 "></div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/036/297/761/non_2x/ai-generated-business-woman-showing-thumbs-up-on-a-transparent-background-free-png.png"
            alt="user"
            className="absolute w-72 h-80 object-cover rounded-full shadow-lg "
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialSection;
