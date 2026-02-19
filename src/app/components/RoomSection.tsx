// components/RoomsSection.jsx

"use client";

import Image from "next/image";
import { FaBed, FaUserFriends, FaRulerCombined } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import HelperIcon from "./HelperIcon";

 function RoomsSection() {
  const rooms = [
    {
      image: "/room.jpg",
      title: "Standard Double Room",
      bed: "Big Bed",
      adults: "2 Adults",
      size: "25 m²",
      price: "20.00",
    },
    {
      image: "/room2.jpg",
      title: "Standard Twin Room",
      bed: "Single Bed",
      adults: "2 Adults",
      size: "25 m²",
      price: "20.00",
    },
    {
      image: "/room3.jpg",
      title: "Standard Triple Room",
      bed: "Single Bed & Big Bed",
      adults: "3 Adults",
      size: "25 m²",
      price: "30.00",
    },
  ];

  return (
    <section className="bg-gray-50 section-pad">
      <div className="container-main">
        <div className="flex flex-col justify-center items-center space-y-6 text-center">
          <h2 className="font-semibold text-[#4A6CF7]">EXCLUSIVE OFFERS</h2>
          <h1 className="font-bold text-[#1A2B5F] text-5xl">Our Luxury Rooms</h1>

        <div className="flex items-center justify-center gap-x-6">
          <span className="w-14 h-px bg-blue-200"/>
          <div><FaStar/></div>
          <span className="w-14 h-px bg-blue-200"></span>
        </div>

          <p className="text-[#5F6B7A] text-center ">
            Experience extraordinary comfort in our thoughtfully designed accommodations. Perfect for both<br/>
             business and leisure travelers seeking luxury and relaxation.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-10">

          {rooms.map((room, index) => ( 
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              {/* Image */}
              <div className="relative group">
                <Image
                  src={room.image}
                  alt={room.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-700 transition">
                    View Details
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h2 className="text-2xl font-bold text-[#1E2A5A]">
                  {room.title}
                </h2>

                {/* Underline */}
                <div className="w-12 h-1 bg-blue-500 mt-2 mb-4 rounded-full"></div>

                {/* Features */}
                <div className="flex items-center gap-6 text-gray-600 text-sm mb-5">
                  <div className="flex items-center gap-2">
                    <FaBed className="text-blue-500" />
                    <span>{room.bed}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaUserFriends className="text-blue-500" />
                    <span>{room.adults}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaRulerCombined className="text-blue-500" />
                    <span>{room.size}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-3xl font-bold text-blue-600">
                    ${room.price}
                  </span>
                  <span className="text-gray-500 ml-2">/night</span>
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-full font-semibold shadow-md hover:scale-105 transition">
                    Book Now
                  </button>

                  <button className="flex-1 border-2 border-blue-600 text-blue-600 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
                    More Info
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
      <HelperIcon/>
    </section>
  );
}


export default RoomsSection;