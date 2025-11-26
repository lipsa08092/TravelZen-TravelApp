import React from "react";
import { Link } from "react-router-dom";

const places = [
  {
    id: 1,
    name: "Waterfalls",
    img: "https://1.bp.blogspot.com/-OfVhuKEJfuI/X3rDiVg4ArI/AAAAAAAAAM4/FvogEkNhXhA5NUI2vHT989hf3xdO-QO9wCLcBGAsYHQ/s2048/pexels-manuela-adler-949194.jpg",
    link: "https://traveltriangle.com/blog/most-beautiful-waterfalls-in-india/",
  },
  {
    id: 2,
    name: "Manali",
    img: "https://1.bp.blogspot.com/-GJ7E8GkwWsU/X3rDd4buXZI/AAAAAAAAAM0/igzSjG3nFakri-a0ICCI3CvEq4DMJFMHACLcBGAsYHQ/s2048/pexels-mithul-varshan-3276841.jpg",
    link: "https://www.holidify.com/places/manali/",
  },
  {
    id: 3,
    name: "Hawa Mahal",
    img: "https://1.bp.blogspot.com/-p6XH6pM3Fkw/X3rDj_WqMZI/AAAAAAAAANA/PIgiMi7JYM0VU0FW_UkaX6sllLDmDhKzgCLcBGAsYHQ/s2048/pexels-mrudula-thakur-784879.jpg",
    link: "https://www.hawa-mahal.com/",
  },
  {
    id: 4,
    name: "Taj Mahal",
    img: "https://video.newsserve.net/v/20231113/1699858603-Taj-Mahal_hires.jpg",
    link: "https://www.tajmahal.gov.in/",
  },
  {
    id: 5,
    name: "Goa Beach",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    link: "https://www.holidify.com/places/goa/",
  },
  {
    id: 6,
    name: "Kerala Backwaters",
    img: "https://tse3.mm.bing.net/th/id/OIP.VEsQqc9x09LVd1b__c144AHaEs?pid=Api&P=0&h=180",
    link: "https://www.keralatourism.org/",
  },
  {
    id: 7,
    name: "Golden Temple",
    img: "https://assets.cntraveller.in/photos/60c07fa11393a40ce8d810b0/master/pass/D8R9MT.jpg",
    link: "https://www.goldentempleamritsar.org/",
  },
  {
    id: 8,
    name: "Darjeeling",
    img: "https://thesimpletravel.com/wp-content/uploads/2021/09/Darjeeling.jpg",
    link: "https://www.holidify.com/places/darjeeling/",
  },
  {
    id: 9,
    name: "Rajasthan Desert",
    img: "https://media.istockphoto.com/id/942152116/photo/thar-desert-jaisalmer-rajasthan-india-at-sunset-with-moody-sky.jpg?s=612x612&w=0&k=20&c=hnT7Zh-zAAyWCjzrxjyE9aOj4aXGgSOb81Wm671wwcM=",
    link: "https://www.holidify.com/state/rajasthan/",
  },
];

const GallerySection = () => {

  const handleClick= ()=> {
    window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  }
  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-100">
        <h2 className="text-center text-5xl font-bold text-gray-800 mb-12 mx-auto">
          Most Visited Places
          <span className="block h-1 w-24 bg-orange-500 mx-auto mt-2 rounded"></span>
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4">
          {places.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="relative group h-72 rounded-xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.name}
                className="absolute w-full h-full object-cover transform group-hover:scale-125 transition-all duration-700"
              />

              <div
                className="absolute inset-0 rounded-full bg-black/30 
              w-[600px] h-[600px] top-40 left-40 -translate-x-[1000px] -translate-y-1/2
              group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 
              transition-all duration-700 ease-out"
              ></div>

              <h4
                className="absolute text-white text-4xl font-bold 
              left-1/2 top-1/2 transform translate-x-[800px]
              group-hover:-translate-x-10 group-hover:-translate-y-5 
              transition-all duration-700 ease-in-out"
              >
                Visit
              </h4>

              <div className="absolute bottom-0 p-4 w-full text-center text-white text-2xl font-bold">
                {item.name}
              </div>
            </a>
          ))}
        </div>
      </section>
      <section
        className="w-full h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center text-center px-4 relative "
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.24), rgba(0,0,0,0.45)), url('https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="max-w-6xl mx-auto text-center px-4 space-y-10">
          <h3 className="text-4xl font-bold text-white">
            Explore The World With <span className="text-orange-500">Tra</span>
            vel<span className="text-green-600">Zen</span>
          </h3>
          <p className="text-gray-200 mt-4 text-lg max-w-2xl mx-auto">
            Discover new places, experience different cultures, and create
            unforgettable memories. Your next adventure is just one click away.
          </p>
          <div>
            <Link
              to="/destination"
              onClick={handleClick}
              className="px-8 bg-orange-500 py-2 rounded-full text-white font-semibold text-lg"
            >
              Get's Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GallerySection;
