import React from "react";

const places = [
  { id:1,
    name: "Waterfalls",
    img: "https://1.bp.blogspot.com/-OfVhuKEJfuI/X3rDiVg4ArI/AAAAAAAAAM4/FvogEkNhXhA5NUI2vHT989hf3xdO-QO9wCLcBGAsYHQ/s2048/pexels-manuela-adler-949194.jpg",
    link: "https://traveltriangle.com/blog/most-beautiful-waterfalls-in-india/",
  },
  { id:2,
    name: "Manali",
    img: "https://1.bp.blogspot.com/-GJ7E8GkwWsU/X3rDd4buXZI/AAAAAAAAAM0/igzSjG3nFakri-a0ICCI3CvEq4DMJFMHACLcBGAsYHQ/s2048/pexels-mithul-varshan-3276841.jpg",
    link: "https://www.holidify.com/places/manali/",
  },
  { id:3,
    name: "Hawa Mahal",
    img: "https://1.bp.blogspot.com/-p6XH6pM3Fkw/X3rDj_WqMZI/AAAAAAAAANA/PIgiMi7JYM0VU0FW_UkaX6sllLDmDhKzgCLcBGAsYHQ/s2048/pexels-mrudula-thakur-784879.jpg",
    link: "https://www.hawa-mahal.com/",
  },
  { id:4,
    name: "Taj Mahal",
    img: "https://video.newsserve.net/v/20231113/1699858603-Taj-Mahal_hires.jpg",
    link: "https://www.tajmahal.gov.in/",
  },
  { id:5,
    name: "Goa Beach",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    link: "https://www.holidify.com/places/goa/",
  },
  { id:6,
    name: "Kerala Backwaters",
    img: "https://tse3.mm.bing.net/th/id/OIP.VEsQqc9x09LVd1b__c144AHaEs?pid=Api&P=0&h=180",
    link: "https://www.keralatourism.org/",
  },
  { id:5,
    name: "Golden Temple",
    img: "https://assets.cntraveller.in/photos/60c07fa11393a40ce8d810b0/master/pass/D8R9MT.jpg",
    link: "https://www.goldentempleamritsar.org/",
  },
  { id:6,
    name: "Darjeeling",
    img: "https://thesimpletravel.com/wp-content/uploads/2021/09/Darjeeling.jpg",
    link: "https://www.holidify.com/places/darjeeling/",
  },
  { id:7,
    name: "Rajasthan Desert",
    img: "https://media.istockphoto.com/id/942152116/photo/thar-desert-jaisalmer-rajasthan-india-at-sunset-with-moody-sky.jpg?s=612x612&w=0&k=20&c=hnT7Zh-zAAyWCjzrxjyE9aOj4aXGgSOb81Wm671wwcM=",
    link: "https://www.holidify.com/state/rajasthan/",
  },
];

const GallerySection = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-blue-100 via-blue-200 to-blue-200">
      <h2 className="text-center text-5xl font-bold text-gray-800 mb-12 mx-auto">
        Most Visited Places
        <span className="block h-1 w-24 bg-orange-500 mx-auto mt-2 rounded"></span>
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4">
        {places.map((item) => (
          <div
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
              w-[600px] h-[600px] left-40 top-40 -translate-x-[130%] -translate-y-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-700 ease-out"
            ></div>

            <h4
              className="absolute text-white text-4xl font-bold  left-1/2 top-1/2
              transform translate-x-[1000px] group-hover:-translate-x-10 group-hover:-translate-y-5 transition-all duration-700 ease-linear"
            >
              Visit
            </h4>
            <div className="absolute bottom-0 p-4 w-full text-center text-white text-xl font-bold ">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
