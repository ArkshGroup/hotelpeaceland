"use client";

import Image from "next/image";
import React from "react";

interface Attraction {
    image:string,
  title: string;
  distance: string;
  description: string;
  mapUrl: string;
}

const NearByAttraction = () => {
  const attractions: Attraction[] = [
    {
       image:'/temple1.jpeg', 
      title: "Maya Devi Temple",
      distance: "1.3 km",
      description:
        "An ancient Buddhist sanctuary marking the birthplace of Siddhartha Gautama (the Buddha), this revered site stands at the spiritual heart of Lumbini.",
      mapUrl:
        "https://www.google.com/maps?q=27.4682,83.2760&output=embed",
    },
    {
        image:'/temple2.jpeg', 
      title: "World Peace Pagoda",
      distance: "3.6 km",
      description:
        "Also known as the Nipponzan Peace Pagoda, this stunning white stupa was built by Japanese monks and consecrated in 2001.",
      mapUrl:
        "https://www.google.com/maps?q=27.4988,83.1966&output=embed",
    },
    {
        image:'/temple3.jpeg', 
      title: "World Peace Pagoda",
      distance: "3.6 km",
      description:
        "Also known as the Nipponzan Peace Pagoda, this stunning white stupa was built by Japanese monks and consecrated in 2001.",
      mapUrl:
        "https://www.google.com/maps?q=27.4988,83.1966&output=embed",
    },

  ];

  return (
    <section className="bg-gray-100 section-pad">
      <div className="container-main grid md:grid-cols-2 gap-8 lg:gap-10">
        {attractions.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="w-full relative h-60">
                <Image src={item.image} alt={item.title} fill className="object-cover" /> 
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800">
                {item.title} ({item.distance})
              </h2>

              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {item.description}
              </p>

              <button className="mt-5 bg-indigo-600 text-white px-5 py-2 rounded-full text-sm hover:bg-indigo-700 transition">
                View Location
              </button>
            </div>

            {/* Divider */}
            <div className="border-t"></div>

            {/* Map Section */}
            <div className="p-4">
              <h3 className="text-sm font-semibold mb-3 text-gray-700">
                {item.title} ({item.distance})
              </h3>

              <div className="rounded-xl overflow-hidden">
                <iframe
                  src={item.mapUrl}
                  width="100%"
                  height="300"
                  loading="lazy"
                  className="border-0"
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NearByAttraction;
