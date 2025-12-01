import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  MdLocationOn,
  MdHotel,
  MdDirectionsCar,
  MdFastfood,
} from "react-icons/md";
import { FaUserTie } from "react-icons/fa";

const destinations = [
  {
    id: 1,
    name: "Manali",
    link: "https://www.tripadvisor.in/Tourism-g294226-Bali-Vacations.html",
    desc: "Known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs.",
    img: "https://1.bp.blogspot.com/-GJ7E8GkwWsU/X3rDd4buXZI/AAAAAAAAAM0/igzSjG3nFakri-a0ICCI3CvEq4DMJFMHACLcBGAsYHQ/s2048/pexels-mithul-varshan-3276841.jpg",
    price: "₹65000",
    gallery: [
      "https://tse1.mm.bing.net/th/id/OIP.t0EbRi_t3k8qy3LB67-2QgHaE8?pid=Api&P=0&h=180",
      "https://tse2.mm.bing.net/th/id/OIP.AAjUeuhJYzTNkUw06HocGAHaEx?pid=Api&P=0&h=180",
      "https://tse2.mm.bing.net/th/id/OIP.rCf-jpbGVKADWpo0h5npVgHaE8?pid=Api&P=0&h=180",
      "https://tse4.mm.bing.net/th/id/OIP.oMUUl8u__Yao9ZM6zXBGlwHaEK?pid=Api&P=0&h=180",
      "https://tse2.mm.bing.net/th/id/OIP.ubra_0l5Ken0TzPSFeUDfAHaEK?pid=Api&P=0&h=180",
      "https://tse1.mm.bing.net/th/id/OIP.eTXmKqZyHkk7c8F8MC4ycAHaE8?pid=Api&P=0&h=180",
    ],
  },
  {
    id: 2,
    link: "https://www.tripadvisor.com/Tourism-g189433-Santorini_Cyclades_South_Aegean-Vacations.html",
    name: "Hawa Mahal",
    desc: "Famous for stunning sunsets, white-washed houses, and crystal-blue waters.",
    img: "https://1.bp.blogspot.com/-p6XH6pM3Fkw/X3rDj_WqMZI/AAAAAAAAANA/PIgiMi7JYM0VU0FW_UkaX6sllLDmDhKzgCLcBGAsYHQ/s2048/pexels-mrudula-thakur-784879.jpg",
    price: "₹40000",
    gallery: [
      "https://tse3.mm.bing.net/th/id/OIP._uvuyaX7_VoOCHO3fQynPQHaE_?pid=Api&P=0&h=180",
      "https://tse4.mm.bing.net/th/id/OIP.t8uat969Ab3ZQAyFncSe1wHaE7?pid=Api&P=0&h=180",
      "https://tse4.mm.bing.net/th/id/OIP.YIPZZSrcc5Xj25NnB0j4ZgHaE3?pid=Api&P=0&h=180",
      "https://tse3.mm.bing.net/th/id/OIP.ILB_XkQWe5rzGgHneBZwfgHaFW?pid=Api&P=0&h=180",
      "https://tse3.mm.bing.net/th/id/OIP.UPFMd6_DPkGcB06x4hFtKQHaE8?pid=Api&P=0&h=180",
      "https://tse1.mm.bing.net/th/id/OIP.-nPwKs10EjexMokSZcUkrAHaEK?pid=Api&P=0&h=180",
    ],
  },
  {
    id: 3,
    link: "https://www.tripadvisor.in/Attractions-g188077-Activities-Swiss_Alps.html",
    name: "Taj Mahal",
    desc: "A dreamland of snowy peaks, cozy villages, and serene landscapes.",
    price: "₹35000",
    img: "https://video.newsserve.net/v/20231113/1699858603-Taj-Mahal_hires.jpg",
    gallery: [
      "https://tse2.mm.bing.net/th/id/OIP.09aeslk4jmOUZbt-UZl96gHaEm?pid=Api&P=0&h=180",
      "https://tse4.mm.bing.net/th/id/OIP.Hl9AVZ6HMgproKyNFf1WugHaE8?pid=Api&P=0&h=180",
      "https://tse2.mm.bing.net/th/id/OIP.oHeSTUF5Kzl6ft7A1aPPwQHaE7?pid=Api&P=0&h=180",
      "https://tse2.mm.bing.net/th/id/OIP.3MLkAC-iURdWBgZ3TTtPcQHaE8?pid=Api&P=0&h=180",
      "https://tse1.mm.bing.net/th/id/OIP.4IeMZh6X9Vozagx5Bkc-OwHaE5?pid=Api&P=0&h=180",
      "https://tse2.mm.bing.net/th/id/OIP.3-t5Jbv-oXmzFGRdIg2ogwHaFj?pid=Api&P=0&h=180",
    ],
  },
  {
    id: 4,
    link: "https://www.japan.travel/en/destinations/kansai/kyoto/",
    name: "Goa Beach",
    desc: "Historic temples, cherry blossoms, peaceful gardens, and rich culture.",
    price: "₹56000",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    gallery: [
      "https://tse3.mm.bing.net/th/id/OIP.rGcq7JHuXTpM6SNcQXlF3QHaEK?pid=Api&P=0&h=180",
      "https://tse2.mm.bing.net/th/id/OIP.Bn1mRx0jFZ0E5jXJdtRVqAHaE7?pid=Api&P=0&h=180",
      "https://tse2.mm.bing.net/th/id/OIP.v6tjpkl8mssyysmMWwu0zgHaEX?pid=Api&P=0&h=180",
      "https://tse3.mm.bing.net/th/id/OIP.CnqLBO_eXpDTzfHb0Dj7BwHaE7?pid=Api&P=0&h=180",
      "https://tse1.mm.bing.net/th/id/OIP.SrJybnBjaulqG62_I41FBwHaE8?pid=Api&P=0&h=180",
      "https://tse2.mm.bing.net/th/id/OIP.hxMgOLqN2patUfyfBuZ9jQHaE7?pid=Api&P=0&h=180",
    ],
  },
  {
    id: 5,
    link: "https://www.tripadvisor.in/Tourism-g293953-Maldives-Vacations.html",
    name: "Kerala Backwaters",
    price: "₹66000",
    desc: "Crystal clear waters, luxurious resorts, and relaxing tropical vibes.",
    img: "https://tse3.mm.bing.net/th/id/OIP.VEsQqc9x09LVd1b__c144AHaEs?pid=Api&P=0&h=180",
    gallery: [
      "https://tse1.mm.bing.net/th/id/OIP.oxby2DhxG69D3RWsl5QHMAHaEK?pid=Api&P=0&h=180",
      "https://tse3.mm.bing.net/th/id/OIP.KVJuxRRZxjd-bA8E5vQnxgHaE8?pid=Api&P=0&h=180",
      "https://tse1.mm.bing.net/th/id/OIP.FqzesQ9tQcJIlI6D-RkuHgHaE7?pid=Api&P=0&h=180",
      "https://tse2.mm.bing.net/th/id/OIP.ZfhKkml-MIOfrB73hv2btwHaEK?pid=Api&P=0&h=180",
      "https://tse3.mm.bing.net/th/id/OIP.aY2bWZrLy8hna1aiaIunowHaEc?pid=Api&P=0&h=180",
      "https://tse3.mm.bing.net/th/id/OIP.gZpuP0gwRNtRyyvBpguohgHaFI?pid=Api&P=0&h=180",
    ],
  },
  {
    id: 6,
    link: "https://www.tripadvisor.in/Tourism-g295424-Dubai_Emirate_of_Dubai-Vacations.html",
    name: "Golden Temple",
    price: "₹60000",
    desc: "A futuristic city with skyscrapers, luxury shopping, and desert adventures.",
    img: "https://assets.cntraveller.in/photos/60c07fa11393a40ce8d810b0/master/pass/D8R9MT.jpg",
    gallery: [
      "https://tse1.mm.bing.net/th/id/OIP.M1UfaN-T5oCS2quqHQzSoQHaE8?pid=Api&P=0&h=180",
      "https://tse4.mm.bing.net/th/id/OIP.PgNcX2YBB2A_Qn0waxH1VQHaE7?pid=Api&P=0&h=180",
      "https://tse4.mm.bing.net/th/id/OIP.NoJ1kRDOZ4w-yCn8SaOMgAHaFj?pid=Api&P=0&h=180",
      "https://tse3.mm.bing.net/th/id/OIP.TKYkQn65haJnpL37bhr5IwHaEK?pid=Api&P=0&h=180",
      "https://tse2.mm.bing.net/th/id/OIP.AN2i7eRrHs27dhWf1Pb6AAHaGW?pid=Api&P=0&h=180",
      "https://tse4.mm.bing.net/th/id/OIP.SDIr1PQvUkHlDTwsuMQsyAHaE5?pid=Api&P=0&h=180",
    ],
  },
  {
    id: 7,
    link: "https://www.tripadvisor.in/Tourism-g187147-Paris_Ile_de_France-Vacations.html",
    name: "Darjeeling",
    price: "₹40000",
    desc: "The city of love known for the Eiffel Tower, cafes, fashion, and art museums.",
    img: "https://thesimpletravel.com/wp-content/uploads/2021/09/Darjeeling.jpg",
    gallery: [
      "https://tse3.mm.bing.net/th/id/OIP.srumT7keHGBVp3K2Fmgn4gHaEn?pid=Api&P=0&h=180",
      "https://tse2.mm.bing.net/th/id/OIP.PObM3nvMR6aVnSK1mXYTgAHaEo?pid=Api&P=0&h=180",
      "https://tse4.mm.bing.net/th/id/OIP.gGSYdeFWBe7T-F1ml-TiEwHaE8?pid=Api&P=0&h=180",
      "https://tse1.mm.bing.net/th/id/OIP.OQtFBhLlHQt6gVp_TC_RQAHaD4?pid=Api&P=0&h=180",
      "https://tse1.mm.bing.net/th/id/OIP.RqrK49usJPddavgZfsn7UAHaEK?pid=Api&P=0&h=180",
      "https://tse4.mm.bing.net/th/id/OIP.gGSYdeFWBe7T-F1ml-TiEwHaE8?pid=Api&P=0&h=180",
    ],
  },
  {
    id: 8,
    link: "https://thebanffblog.com/itinerary-for-banff/",
    name: "Rajasthan Desert",
    price: "₹55000",
    desc: "Breathtaking turquoise lakes, alpine forests, and pure nature views.",
    img: "https://media.istockphoto.com/id/942152116/photo/thar-desert-jaisalmer-rajasthan-india-at-sunset-with-moody-sky.jpg?s=612x612&w=0&k=20&c=hnT7Zh-zAAyWCjzrxjyE9aOj4aXGgSOb81Wm671wwcM=",
    gallery: [
      "https://tse2.mm.bing.net/th/id/OIP.CA--mxIc6ah88arIVe81gQHaEK?pid=Api&P=0&h=180",
      "https://tse3.mm.bing.net/th/id/OIP.FkugzxfJZ74oRi7Hoj_p6gHaEP?pid=Api&P=0&h=180",
      "https://tse3.mm.bing.net/th/id/OIP.GV40ETevhuXjh-QIYNZ5WAHaEK?pid=Api&P=0&h=180",
      "https://tse4.mm.bing.net/th/id/OIP.DAr9m5i78-qBPR7IyUlNgQHaEK?pid=Api&P=0&h=180",
      "https://tse2.mm.bing.net/th/id/OIP.IRE2HthibK5oPcXEmxpUGgHaEK?pid=Api&P=0&h=180",
      "https://tse4.mm.bing.net/th/id/OIP.wDp4pLXDernZWTyjYVflEwHaE8?pid=Api&P=0&h=180",
    ],
  },
];

const DestinationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const place = destinations.find((item) => item.id === Number(id));

  const [options, setOptions] = useState({
    guide: false,
    hotel: false,
    car: false,
    food: false,
  });
  const basePrice = place.price ? Number(place.price.replace("₹", "")) : 2000;
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const extraPrices = {
    guide: 5000,
    hotel: 3000,
    car: 2500,
    food: 2000,
  };
  const calculateTotal = () => {
    let total = basePrice;
    if (options.guide) total += extraPrices.guide;
    if (options.hotel) total += extraPrices.hotel;
    if (options.car) total += extraPrices.car;
    if (options.food) total += extraPrices.food;
    return total;
  };

  const handleBooking = () => {
    const loggedUser = localStorage.getItem("username") || "GuestUser";
    const finalBooking = {
  id: place.id,
  userName: loggedUser,
  name: place.name,     
  img: place.img,
  selectedOptions: options,
  basePrice,
  totalPrice: calculateTotal(),
};

    localStorage.setItem("travelBooking", JSON.stringify(finalBooking));
    navigate("/booking-summary");
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-400 to-purple-100 pb-20">
      <div className="w-full h-[80vh] overflow-hidden shadow-lg relative">
        <img
          src={place.img}
          className="w-full h-full object-cover "
          alt={place.name}
        />
        <div className="absolute bg-black/30 inset-0"></div>
        <h1 className="absolute inset-0 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-50 flex justify-center">
          <span className="items-center flex">
            <MdLocationOn className="text-red-600 text-5xl mt-1" />
            {place.name}
          </span>
        </h1>
      </div>

      <div className="px-6 mt-10">
        <h1 className="text-2xl font-semibold text-gray-800 ">Details</h1>

        <p className="mt-4 text-gray-700 text-lg max-w-3xl px-3 rounded-xl">
          {place.desc}
          This destination offers a unique blend of culture, natural beauty, and
          unforgettable travel experiences. Explore stunning attractions, try
          delicious local foods, and enjoy activities that make this location a
          dream vacation spot for travelers across the world.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {place.gallery.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-lg hover:scale-[1.02] transition transform"
            >
              <img src={img} className="w-full h-56 object-cover" alt="" />
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Select Your Requirements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="flex items-center gap-4 p-5 shadow-md cursor-pointer hover:shadow-xl transition">
            <input
              type="checkbox"
              checked={options.guide}
              onChange={(e) =>
                setOptions({ ...options, guide: e.target.checked })
              }
            />
            <FaUserTie className="text-2xl text-blue-600" />
            <span className="text-lg font-medium">Need Tour Guide?</span>
          </label>

          <label className="flex items-center gap-4 p-5  shadow-md cursor-pointer hover:shadow-xl transition">
            <input
              type="checkbox"
              checked={options.hotel}
              onChange={(e) =>
                setOptions({ ...options, hotel: e.target.checked })
              }
            />
            <MdHotel className="text-3xl text-purple-600" />
            <span className="text-lg font-medium">Need Hotel?</span>
          </label>

          <label className="flex items-center gap-4 p-5  shadow-md cursor-pointer hover:shadow-xl transition">
            <input
              type="checkbox"
              checked={options.car}
              onChange={(e) =>
                setOptions({ ...options, car: e.target.checked })
              }
            />
            <MdDirectionsCar className="text-3xl text-orange-600" />
            <span className="text-lg font-medium">Need Car?</span>
          </label>

          <label className="flex items-center gap-4 p-5   shadow-md cursor-pointer hover:shadow-xl transition">
            <input
              type="checkbox"
              checked={options.food}
              onChange={(e) =>
                setOptions({ ...options, food: e.target.checked })
              }
            />
            <MdFastfood className="text-3xl text-green-600" />
            <span className="text-lg font-medium">Include Food?</span>
          </label>
        </div>
      </div>
      <div className="mt-10 p-5  rounded-xl  text-center">
        <h2 className="text-3xl font-bold text-gray-800">Total Price</h2>
        <p className="text-4xl font-extrabold text-green-600 mt-2">
          ₹{calculateTotal()}
        </p>
      </div>

      <div className=" mt-8 w-full flex justify-center">
        <button
          onClick={() => {
            handleClick();
            handleBooking();
          }}
          className="bg-orange-500 hover:bg-orange-600 transition text-white px-10 py-4 rounded-full text-xl shadow-xl"
        >
          Continue to Final Booking
        </button>
      </div>
    </div>
  );
};

export default DestinationDetails;
