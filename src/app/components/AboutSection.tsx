"use client";

import Image from "next/image";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-20">
      <div className="container-main">

        {/* ===== Single Main Box ===== */}
        <div className="bg-white/80 backdrop-blur-md p-12 rounded-3xl shadow-xl">

          {/* Heading Inside Box */}
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <p className="text-[#2556A5] font-semibold tracking-widest uppercase">
              Discover Our Story
            </p>
             <div className="w-89 h-1 bg-[#2556A5] mx-auto mt-3 rounded-full"></div>
            <h2 className="text-5xl font-bold text-[#2556A5] leading-tight mt-4">
              Your Peaceful Home in Lumbini
            </h2>

            <div className="w-20 h-1 bg-[#2556A5] rounded-full mx-auto mt-6"></div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT IMAGE */}
            <div>
              <Image
                src="/room2.jpg"
                alt="Hotel Peaceland Room"
                width={700}
                height={500}
                className="rounded-3xl object-cover w-full h-[420px]"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                Hotel Peaceland is a calm and comfortable place to stay in the heart of Lumbini. 
                We welcome guests from all around the world with warm hospitality and friendly service. 
                Our rooms are clean, spacious, and designed to help you relax after a day of travel or sightseeing. 
                Whether you are here to visit the sacred birthplace of Lord Buddha or just to enjoy a peaceful holiday, 
                Hotel Peaceland offers everything you need. With delicious food, helpful staff, and a quiet atmosphere, 
                we make sure your stay is easy, restful, and truly enjoyable.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-6 mb-10">
                <a href="/about" className="flex items-center gap-3 bg-linear-to-b from-[#2556A5] to-[#4981db] text-white px-8 py-3 rounded-full shadow-lg hover:bg-[#2556A7] transition">
                  Explore More <FaArrowRight />
                </a>

                <a href="/booknow" className="flex items-center gap-3 bg-[#2556A5] text-white px-8 py-3 rounded-full shadow-lg hover:bg-[#3274de] transition">
                  Book Now <FaCalendarAlt />
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-[#2556A5]">50000+</h3>
                  <p className="text-gray-500 text-sm mt-2 tracking-wide">
                    HAPPY GUESTS
                  </p>
                </div>

                <div className="text-center">
                  <h3 className="text-3xl font-bold text-[#2556A5]">15</h3>
                  <p className="text-gray-500 text-sm mt-2 tracking-wide">
                    YEARS EXPERIENCE
                  </p>
                </div>

                <div className="text-center">
                  <h3 className="text-3xl font-bold text-[#2556A5]">20</h3>
                  <p className="text-gray-500 text-sm mt-2 tracking-wide">
                    PREMIUM ROOMS
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}