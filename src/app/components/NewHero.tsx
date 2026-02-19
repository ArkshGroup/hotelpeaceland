"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";

 function NewHero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/lumbini.jpg')" }} // change image
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/80 to-[#1e3a8a]/70"></div>

      {/* Glass Card */}
      <div className="relative z-10 max-w-4xl w-[90%] md:w-full backdrop-blur-xl bg-white/ border border-white/20 rounded-3xl p-8 md:p-14 text-center shadow-2xl">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#2556A5] text-white px-5 py-2 rounded-full text-sm font-semibold mb-6">
          ⭐ PREMIUM EXPERIENCE
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Experience Luxury & Comfort
        </h1>

        {/* Description */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 mb-8">
          <p className="text-[#ffffff] text-sm md:text-lg leading-relaxed">
            Indulge in a perfect blend of elegance and relaxation. Our premium
            accommodations offer stunning views, exceptional service, and
            unforgettable experiences tailored<br/> just for you.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          
          {/* View Rooms */}
          <Link
            href="/rooms"
            className="px-8 py-3 rounded-full border-2 border-white text-white font-semibold flex items-center gap-2 hover:bg-white hover:text-blue-700 transition-all duration-300"
          >
            VIEW ROOMS <FaArrowRight size={14} />
          </Link>

          {/* Book Now */}
          <Link
            href="/contact"
            className="px-10 py-3 rounded-full bg-gradient-to-r from-[#2556A4] to-[#2556A5] text-white font-semibold flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            BOOK NOW <FiCalendar size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
  export default NewHero;