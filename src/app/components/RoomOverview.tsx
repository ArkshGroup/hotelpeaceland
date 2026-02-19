"use client";

import { Star } from "lucide-react";

interface RoomOverview{
    title:string,
    
}
 function RoomOverview({title}:RoomOverview) {
  return (
    <section className="bg-gray-50 section-pad">
      <div className="container-main">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">

        {/* Content Wrapper */}
        <div className="p-6 md:p-10">

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
            {title}
          </h1>

          {/* Short Description */}
          <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
            Comfortable, air-conditioned <strong>Standard Double Room (10 m²)</strong> 
            with a quiet street view. Perfect for couples or solo travellers who 
            want a cosy space with modern amenities — 1 extra-large double bed.
          </p>

          {/* Room Basic Info */}
          <div className="mt-6 space-y-3 text-sm md:text-base text-gray-700">

            <div>
              <span className="font-semibold">Room size</span>
              <p>10 m²</p>
            </div>

            <div>
              <span className="font-semibold">Bed</span>
              <p>1 extra-large double bed</p>
            </div>

            <div>
              <span className="font-semibold">View</span>
              <p>Quiet street view</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold">Rating</span>
              <Star size={16} className="text-yellow-500 fill-yellow-500" />
              <p>Comfy beds, 8.3 – Based on 73 reviews</p>
            </div>

          </div>

          {/* Divider */}
          <hr className="my-8" />

          {/* Overview */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
              Overview
            </h2>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Featuring free toiletries, this double room includes a private 
              bathroom with shower, bidet and slippers. The air-conditioned room 
              comes with a flat-screen TV (cable & satellite channels), a seating 
              area, wardrobe and an electric kettle. Upper floors accessible by 
              stairs only.
            </p>
          </div>

          {/* Two Column Section */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Bathroom */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                In your private bathroom
              </h3>

              <ul className="space-y-2 text-gray-600 text-sm md:text-base list-disc pl-5">
                <li>Free toiletries</li>
                <li>Bidet</li>
                <li>Toilet</li>
                <li>Bath or shower</li>
                <li>Towels</li>
                <li>Slippers</li>
                <li>Towels/sheets (extra fee)</li>
                <li>Toilet paper</li>
              </ul>
            </div>

            {/* Facilities */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Room facilities & features
              </h3>

              <ul className="space-y-2 text-gray-600 text-sm md:text-base list-disc pl-5">
                <li>Air conditioning (single-room)</li>
                <li>Flat-screen TV with cable & satellite channels</li>
                <li>Pay-per-view channels</li>
                <li>Free WiFi</li>
                <li>Seating area & desk</li>
                <li>Electric kettle</li>
                <li>Wardrobe or closet</li>
                <li>Upper floors accessible by stairs only</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
      </div>
    </section>
  );
}
export default RoomOverview;
