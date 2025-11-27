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
      "https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFsaSUyQyUyMGluZG9uZXNpYXxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1669317566483-d3327adeda10?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFsaSUyQyUyMGluZG9uZXNpYXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1701605305526-7bc0c634543f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFsaSUyQyUyMGluZG9uZXNpYXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1655289112205-d3b56c6b61f8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhbGklMkMlMjBpbmRvbmVzaWF8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1678303396234-4180231353df?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJhbGklMkMlMjBpbmRvbmVzaWF8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1657788781951-d6beac09d66c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJhbGklMkMlMjBpbmRvbmVzaWF8ZW58MHx8MHx8fDA%3D",
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
      "https://plus.unsplash.com/premium_photo-1661963643348-e95c6387ee8a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FudG9yaW5pJTIwZ3JlZWNlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FudG9yaW5pJTIwZ3JlZWNlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1560703650-ef3e0f254ae0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2FudG9yaW5pJTIwZ3JlZWNlfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1508855173839-a6d69c12573a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNhbnRvcmluaSUyMGdyZWVjZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661962663771-e096c9ffccbb?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNhbnRvcmluaXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1517926967795-31943e805dae?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHNhbnRvcmluaXxlbnwwfHwwfHx8MA%3D%3D",
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
      "https://images.unsplash.com/photo-1719343112563-f121bae8daf0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3dpc3MlMjBBbHBzJTIwJTJDJTIwc3dpdHplcmxhbmR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1548623234-94b1dcd906a2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3dpc3MlMjBBbHBzJTIwJTJDJTIwc3dpdHplcmxhbmR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1719343111824-dd4a0ee56934?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3dpc3MlMjBBbHBzJTIwJTJDJTIwc3dpdHplcmxhbmR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1692842447780-5371d41c1068?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN3aXNzJTIwQWxwcyUyMCUyQyUyMHN3aXR6ZXJsYW5kfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3dpc3MlMjBBbHBzJTJDJTIwc3dpdHplcmxhbmR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1609554189997-a4932370a926?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFN3aXNzJTIwQWxwcyUyQyUyMHN3aXR6ZXJsYW5kfGVufDB8fDB8fHww",
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
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a3lvdG8lMkMlMjBqYXBhbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a3lvdG8lMkMlMjBqYXBhbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1713552422839-6931b177d2da?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGt5b3RvJTJDJTIwamFwYW58ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1652613129552-b0d3cae86cfe?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGt5b3RvJTJDJTIwamFwYW58ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1723983555279-8de1f6e633e3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a3lvdG98ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1673285285994-6bfff235db97?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8a3lvdG98ZW58MHx8MHx8fDA%3D",
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
      "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbGRpdmVzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1595184979141-090792f6b578?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbGRpdmVzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1578922746465-3a80a228f223?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1576158831003-d41033ec31fd?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbGRpdmVzfGVufDB8fDB8fHww",
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
      "https://plus.unsplash.com/premium_photo-1697729914552-368899dc4757?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHViYWl8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1661943659036-aa040d92ee64?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHViYWl8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1628859017536-c2f1d69f3c84?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHViYWl8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1546412414-8035e1776c9a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGR1YmFpfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1543579596-2c11997c7706?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1YmFpfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1489516408517-0c0a15662682?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGR1YmFpfGVufDB8fDB8fHww",
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
      "https://plus.unsplash.com/premium_photo-1719430571386-b32cec341373?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1718893372476-777ff4036339?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1664303991463-36449a65d3d6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661962726504-fa8f464a1bb8?q=80&w=844&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1623009070764-45002990256e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFyaXMlMkMlMjBmcmFuY2V8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1666283181610-b95ee7e55465?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGFyaXMlMkMlMjBmcmFuY2V8ZW58MHx8MHx8fDA%3D",
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
      "https://images.unsplash.com/photo-1630618359030-87764450427d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJhbmZmJTJDJTIwQ2FuYWRhfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1749955945621-ff1cbc94154c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEJhbmZmJTJDJTIwQ2FuYWRhfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1630618358458-173465a50927?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QmFuZmYlMkMlMjBDYW5hZGF8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1605553922458-4d3cb3c55bd9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmFuZmYlMkMlMjBDYW5hZGF8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1562375121-ea1bc3e8fc10?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuZmYlMjBjYW5hZGF8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1708575888205-20da84f6af45?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJhbmZmJTIwY2FuYWRhfGVufDB8fDB8fHww",
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
  const basePrice = place.price ? Number(place.price.replace("$", "")) : 1000;

  const extraPrices = {
    guide: 500,
    hotel: 300,
    car: 150,
    food: 80,
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
    const finalBooking = {
      id: place.id,
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
          ${calculateTotal()}
        </p>
      </div>

      <div className=" mt-8 w-full flex justify-center">
        <button
          onClick={handleBooking}
          className="bg-orange-500 hover:bg-orange-600 transition text-white px-10 py-4 rounded-full text-xl shadow-xl"
        >
          Continue to Final Booking
        </button>
      </div>
    </div>
  );
};

export default DestinationDetails;
