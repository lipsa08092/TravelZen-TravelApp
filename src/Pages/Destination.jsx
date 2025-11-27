import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdLocationOn } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";


const destinations = [
  {
    id: 1,
    name: "Manali",
    link: "https://www.tripadvisor.in/Tourism-g294226-Bali-Vacations.html",
    desc: "Known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs.",
    img: "https://1.bp.blogspot.com/-GJ7E8GkwWsU/X3rDd4buXZI/AAAAAAAAAM0/igzSjG3nFakri-a0ICCI3CvEq4DMJFMHACLcBGAsYHQ/s2048/pexels-mithul-varshan-3276841.jpg",
    price: "₹65000",
  },
  {
    id: 2,
    link: "https://www.tripadvisor.com/Tourism-g189433-Santorini_Cyclades_South_Aegean-Vacations.html",
    name: "Hawa Mahal",
    desc: "Famous for stunning sunsets, white-washed houses, and crystal-blue waters.",
    img: "https://1.bp.blogspot.com/-p6XH6pM3Fkw/X3rDj_WqMZI/AAAAAAAAANA/PIgiMi7JYM0VU0FW_UkaX6sllLDmDhKzgCLcBGAsYHQ/s2048/pexels-mrudula-thakur-784879.jpg",
    price: "₹40000",
  },
  {
    id: 3,
    link: "https://www.tripadvisor.in/Attractions-g188077-Activities-Swiss_Alps.html",
    name: "Taj Mahal",
    desc: "A dreamland of snowy peaks, cozy villages, and serene landscapes.",
    price: "₹35000",
    img: "https://video.newsserve.net/v/20231113/1699858603-Taj-Mahal_hires.jpg",
  },
  {
    id: 4,
    link: "https://www.japan.travel/en/destinations/kansai/kyoto/",
    name: "Goa Beach",
    desc: "Historic temples, cherry blossoms, peaceful gardens, and rich culture.",
    price: "₹56000",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: 5,
    link: "https://www.tripadvisor.in/Tourism-g293953-Maldives-Vacations.html",
    name: "Kerala Backwaters",
    price: "₹66000",
    desc: "Crystal clear waters, luxurious resorts, and relaxing tropical vibes.",
    img: "https://tse3.mm.bing.net/th/id/OIP.VEsQqc9x09LVd1b__c144AHaEs?pid=Api&P=0&h=180",
  },
  {
    id: 6,
    link: "https://www.tripadvisor.in/Tourism-g295424-Dubai_Emirate_of_Dubai-Vacations.html",
    name: "Golden Temple",
    price: "₹60000",
    desc: "A futuristic city with skyscrapers, luxury shopping, and desert adventures.",
    img: "https://assets.cntraveller.in/photos/60c07fa11393a40ce8d810b0/master/pass/D8R9MT.jpg",
  },
  {
    id: 7,
    link: "https://www.tripadvisor.in/Tourism-g187147-Paris_Ile_de_France-Vacations.html",
    name: "Darjeeling",
    price: "₹40000",
    desc: "The city of love known for the Eiffel Tower, cafes, fashion, and art museums.",
    img: "https://thesimpletravel.com/wp-content/uploads/2021/09/Darjeeling.jpg",
  },
  {
    id: 8,
    link: "https://thebanffblog.com/itinerary-for-banff/",
    name: "Rajasthan Desert",
    price: "₹55000",
    desc: "Breathtaking turquoise lakes, alpine forests, and pure nature views.",
    img: "https://media.istockphoto.com/id/942152116/photo/thar-desert-jaisalmer-rajasthan-india-at-sunset-with-moody-sky.jpg?s=612x612&w=0&k=20&c=hnT7Zh-zAAyWCjzrxjyE9aOj4aXGgSOb81Wm671wwcM=",
  },
];

const DestinationPage = () => {
  const slides = [...destinations, ...destinations];
  const [isHovered, setIsHovered] = useState(false);
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full min-h-screen bg-gray-200">
      <div
        className="w-full h-[90vh] bg-cover bg-center relative flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative text-5xl font-serif font-bold text-center text-gray-300">
          Explore Beautiful Destinations
        </h1>
      </div>

      <div className="w-full px-6 py-10">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Top Picks For You
        </h2>

        <div className="overflow-hidden w-full">
          <motion.div
            className="flex gap-6"
            animate={isHovered ? { x: 0 } : { x: ["0%", "-100%"] }}
            transition={{
              duration: 50,
              repeat: Infinity,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {slides.map((item, id) => (
              <div
                key={id}
                className="min-w-[320px] bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer relative"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-52 w-full object-cover"
                />
                <IoIosHeartEmpty className="absolute top-4 right-4 text-3xl bg-white text-black rounded-full p-1 drop-shadow-lg" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <MdLocationOn className="text-red-500" /> {item.name}
                  </h3>
                  <p className="text-gray-600 mt-2">{item.desc}</p>
                  <p className=" text-blue-400 font-bold text-3xl mt-2">
                    {item.price}
                  </p>

                  <div className="flex justify-between">
                    <a
                      href={item.link}
                      className="mt-4 flex items-center gap-2 text-blue-600 font-medium underline"
                    >
                      Explore
                    </a>
                    <Link
                      to={`/destination/${item.id}`}
                      onClick={handleClick}
                      className="mt-4 text-semibold text-white bg-orange-500 px-4 py-1 rounded-full hover:scale-95"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="w-full px-6 py-10 bg-gray-200">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Our Top Travel Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* SERVICE 1 */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/139/139899.png
"
              alt="Hotel Booking"
              className="w-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-center">Hotel Booking</h3>
            <p className="text-gray-600 text-center mt-2">
              Book affordable and luxurious hotels across the globe instantly.
            </p>
          </div>

          {/* SERVICE 2 */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2200/2200326.png
"
              alt="Flight Booking"
              className="w-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-center">
              Flight Booking
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Find the best flight deals with fast and secure booking.
            </p>
          </div>

          {/* SERVICE 3 */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1484/1484612.png"
              alt="Tour Guide"
              className="w-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-center">Tour Guide</h3>
            <p className="text-gray-600 text-center mt-2">
              Get professional local guides for the best travel experience.
            </p>
          </div>

          {/* SERVICE 4 */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2534/2534576.png"
              alt="Travel Insurance"
              className="w-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-center">
              Travel Insurance
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Secure your trips with reliable and affordable travel insurance.
            </p>
          </div>

          {/* SERVICE 5 */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1881/1881676.png"
              alt="Car Rentals"
              className="w-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-center">Car Rentals</h3>
            <p className="text-gray-600 text-center mt-2">
              Rent trusted cars at the best prices to explore freely.
            </p>
          </div>

          {/* SERVICE 6 */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
              alt="Customized Packages"
              className="w-20 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-center">
              Custom Packages
            </h3>
            <p className="text-gray-600 text-center mt-2">
              Build your own trip plan with custom travel packages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;
