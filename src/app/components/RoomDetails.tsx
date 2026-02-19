"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Check, Phone, Mail } from "lucide-react";

type RoomDetailsProps={
    images:string[]
}
 function RoomDetails({images}:RoomDetailsProps) {


  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="container-main section-pad">
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* LEFT SECTION */}
        <div className="lg:col-span-2">
          
          {/* Main Image */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src={images[current]}
              alt="Room"
              className="w-full h-[420px] object-cover"
            />

            {/* Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 mt-4">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumb"
                onClick={() => setCurrent(index)}
                className={`w-28 h-20 object-cover rounded-lg cursor-pointer border-0 ${
                  current === index ? "border-blue-600" : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-6">

          {/* Booking Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-0">
          <div className="bg-[#4A6CF7] max-w-full flex justify-between p-2 ">
            <h2 className="text-lg font-semibold text-[#ffffff] mb-2">Book This Room</h2>
            <p className="text-sm font-bold text-[#ffffff] mb-4">
              ₨2,000 <span className="text-sm font-normal">/ night</span>
            </p>
          </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <Check className="text-green-500" size={18} />
                Free cancellation
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" size={18} />
                No booking fees
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-green-500" size={18} />
                Best price guarantee
              </li>
            </ul>

            <button className="w-full bg-[#4A6CF7] text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">
              Book Now →
            </button>
          </div>

          {/* Help Card */}
          <div className="bg-gray-50 rounded-xl shadow p-6 border-0">
            <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
            <p className="text-sm text-gray-500 mb-4">
              Our customer service team is here to help you 24/7
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="text-blue-600" size={18} />
                <span>+977-071580210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" size={18} />
                <span>info@hotelpeaceland.com</span>
              </div>
            </div>

            <button className="mt-5 w-full border border-[#4A6CF7] text-[#4A6CF7] py-2 rounded-lg hover:bg-blue-50 transition">
              Contact Us →
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default RoomDetails;