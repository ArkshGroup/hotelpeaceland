"use client"
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomType, setRoomType] = useState("");

  const handleCheckAvailability = () => {
    alert(
      `Checking availability for ${roomType} from ${checkIn} to ${checkOut}`
    );
  };

  return (
    <section className="relative h-screen">
      {/* Hero Image */}
      <Image
        src="/hotelpeaceland.jpg"
        alt="Peaceland Hotel"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-5xl font-bold mb-4">
          Welcome to Peaceland Hotel
        </h1>
        <p className="text-white text-lg mb-8">
          Experience luxury and comfort in Lumbini
        </p>
      </div>

      {/* Booking Form Overlay - aligned with hero image */}
      <div className="absolute bottom-10 right-10 w-1/4 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Book Your Room</h2>
        <div className="flex flex-col gap-3">
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="border p-2 rounded"
            placeholder="Check-in"
          />
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="border p-2 rounded"
            placeholder="Check-out"
          />
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="border-0 p-2 rounded"
          >
            <option value="">Select Room Type</option>
            <option value="Deluxe Room">Deluxe Room</option>
            <option value="Suite Room">Suite Room</option>
            <option value="Standard Room">Standard Room</option>
          </select>
          <button
            onClick={handleCheckAvailability}
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition mt-2"
          >
            Check Availability
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
