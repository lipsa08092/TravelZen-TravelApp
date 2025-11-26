import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdLocationOn } from "react-icons/md";

const destinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    link: "https://www.tripadvisor.in/Tourism-g294226-Bali-Vacations.html",
    desc: "Known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs.",
    img: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=870&auto=format&fit=crop",
  },
  {
    id: 2,
    link: "https://www.tripadvisor.com/Tourism-g189433-Santorini_Cyclades_South_Aegean-Vacations.html",
    name: "Santorini, Greece",
    desc: "Famous for stunning sunsets, white-washed houses, and crystal-blue waters.",
    img: "https://plus.unsplash.com/premium_photo-1697729900945-598459160f7b?q=80&w=735&auto=format&fit=crop",
  },
  {
    id: 3,
    link: "https://www.tripadvisor.in/Attractions-g188077-Activities-Swiss_Alps.html",
    name: "Swiss Alps, Switzerland",
    desc: "A dreamland of snowy peaks, cozy villages, and serene landscapes.",
    img: "https://images.unsplash.com/photo-1593186344142-ef775a6e596f?q=80&w=876&auto=format&fit=crop",
  },
  {
    id: 4,
    link: "https://www.japan.travel/en/destinations/kansai/kyoto/",
    name: "Kyoto, Japan",
    desc: "Historic temples, cherry blossoms, peaceful gardens, and rich culture.",
    img: "https://images.unsplash.com/photo-1706133286046-c0c8f907c4f8?q=80&w=774&auto=format&fit=crop",
  },
  {
    id: 5,
    link: "https://www.tripadvisor.in/Tourism-g293953-Maldives-Vacations.html",
    name: "Maldives",
    desc: "Crystal clear waters, luxurious resorts, and relaxing tropical vibes.",
    img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=774&auto=format&fit=crop",
  },
  {
    id: 6,
    link: "https://www.tripadvisor.in/Tourism-g295424-Dubai_Emirate_of_Dubai-Vacations.html",
    name: "Dubai, UAE",
    desc: "A futuristic city with skyscrapers, luxury shopping, and desert adventures.",
    img: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=774&auto=format&fit=crop",
  },
  {
    id: 7,
    link: "https://www.tripadvisor.in/Tourism-g187147-Paris_Ile_de_France-Vacations.html",
    name: "Paris, France",
    desc: "The city of love known for the Eiffel Tower, cafes, fashion, and art museums.",
    img: "https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: 8,
    link: "https://thebanffblog.com/itinerary-for-banff/",
    name: "Banff, Canada",
    desc: "Breathtaking turquoise lakes, alpine forests, and pure nature views.",
    img: "https://images.unsplash.com/photo-1722524270207-3d2c92b5f5e9?q=80&w=774&auto=format&fit=crop",
  },
];

const DestinationPage = () => {
  const slides = [...destinations, ...destinations];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full min-h-screen bg-gray-200">
      <div
        className="w-full h-[80vh] bg-cover bg-center relative flex items-center justify-center text-white"
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
                className="min-w-[320px] bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-52 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <MdLocationOn className="text-red-500" /> {item.name}
                  </h3>
                  <p className="text-gray-600 mt-2">{item.desc}</p>
                  <a
                    href={item.link}
                    className="mt-4 flex items-center gap-2 text-blue-600 font-medium underline"
                  >
                    Explore
                  </a>
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
