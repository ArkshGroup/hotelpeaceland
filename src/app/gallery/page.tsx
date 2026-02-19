"use client";
import { useState } from "react";
import Image from "next/image";
import HelperIcon from "../components/HelperIcon";
import HeroSection from "../components/HeroSection";

const categories = [
  "Home",
  "Interior & Exterior",
  "Our Rooms",
  "Dining Hall",
  "Roof Top",
  "Meeting Hall",
];

const images = [
  { id: 1, src: "/room.jpg", category: "Home" },
  { id: 2, src: "/room2.jpg", category: "Home" },
  { id: 3, src: "/room3.jpg", category: "Home" },
  { id: 4, src: "/room17.jpg", category: "Home" },
  { id: 5, src: "/room5.jpg", category: "Home" },
  { id: 6, src: "/room6.jpg", category: "Home" },
  { id: 7, src: "/room7.jpg", category: "Home" },
  { id: 8, src: "/room8.jpg", category: "Home" },
  { id: 9, src: "/room9.jpg", category: "Home" },
  { id: 10, src: "/room10.jpg", category: "Home" },
  { id: 11, src: "/room11.jpg", category: "Home" },
  { id: 12, src: "/room12.jpg", category: "Home" },
  { id: 13, src: "/room13.jpg", category: "Home" },
  { id: 14, src: "/room14.jpg", category: "Home" },
  { id: 15, src: "/room19.png", category: "Home" },
  { id: 16, src: "/room5.jpg", category: "Interior & Exterior" },
  { id: 17, src: "/room6.jpg", category: "Interior & Exterior" },
  { id: 18, src: "/room36.png", category: "Dining Hall" },
  { id: 19, src: "/room32.jpg", category: "Dining Hall" },
  { id: 20, src: "/room33.jpg", category: "Dining Hall" },
  { id: 21, src: "/room34.png", category: "Dining Hall" },
  { id: 22, src: "/room35.jpg", category: "Dining Hall" },
  { id: 23, src: "/room30.png", category: "Roof Top" },
  { id: 24, src: "/room31.png", category: "Roof Top" },
  { id: 25, src: "/room21.jpeg", category: "Roof Top" },
  { id: 26, src: "/room22.jpeg", category: "Roof Top" },
  { id: 27, src: "/room23.png", category: "Roof Top" },
  { id: 28, src: "/room24.png", category: "Roof Top" },
  { id: 29, src: "/room25.png", category: "Roof Top" },
  { id: 30, src: "/room26.jpg", category: "Meeting Hall" },
  { id: 31, src: "/room27.jpg", category: "Meeting Hall" },
  { id: 32, src: "/room28.jpg", category: "Meeting Hall" },
  { id: 33, src: "/room29.jpg", category: "Meeting Hall" },
  { id: 34, src: "/room13.jpg", category: "Our Rooms" },
  { id: 35, src: "/room14.jpg", category: "Our Rooms" },
  { id: 36, src: "/room15.jpg", category: "Our Rooms" },
  { id: 37, src: "/room20.jpg", category: "Our Rooms" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSection title="Gallery" list1="Home" list2="Gallery" />
      <section className="section-pad">
        <div className="container-main text-center">
          <p className="text-[#3494E6] font-semibold uppercase tracking-widest text-sm">
            Photos & Memories
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-bold mt-4">
            Our Photo Gallery
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-gray-500">
            Explore our collection of stunning images showcasing our property, amenities and
            memorable moments.
          </p>
        </div>
      </section>

      <div className="container-main flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full border transition duration-300 ${
              activeCategory === category
                ? "border-[#3494E6] text-[#3494E6] font-semibold border-2 shadow-md"
                : "bg-white text-gray-500 font-semibold border-0 hover:bg-blue-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="container-main pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              className="relative overflow-hidden rounded-2xl shadow-lg group"
            >
              <Image
                src={img.src}
                alt=""
                width={500}
                height={350}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500" />
            </div>
          ))}
        </div>
      </div>
      <HelperIcon />
    </div>
  );
}
