"use client";

import { Wifi, Briefcase, Car, Utensils, Baby, Plane, Heart } from "lucide-react";

interface Amenity {
  title: string;
  description: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

const amenities: Amenity[] = [
  {
    title: "Spa & Wellness",
    description:
      "Indulge in our spa treatments designed to rejuvenate your mind, body, and soul with professional therapists.",
    icon: <Heart size={28} />,
  },
  {
    title: "Free Wi-Fi",
    description:
      "Stay connected with complimentary high-speed Wi-Fi available throughout the hotel premises.",
    icon: <Wifi size={28} />,
    highlight: true,
  },
  {
    title: "Conference Rooms",
    description:
      "Host successful business meetings and conferences in our fully-equipped meeting rooms with modern technology.",
    icon: <Briefcase size={28} />,
  },
  {
    title: "24/7 Room Service",
    description:
      "Enjoy the convenience of round-the-clock room service with a diverse menu catering to all tastes and preferences.",
    icon: <Utensils size={28} />,
  },
  {
    title: "Valet Parking",
    description:
      "Arrive with ease and let our professional valets handle your parking needs with our secure parking facilities.",
    icon: <Car size={28} />,
  },
  {
    title: "Kids Club",
    description:
      "Keep your little ones entertained with supervised activities and games at our dedicated kids club.",
    icon: <Baby size={28} />,
  },
  {
    title: "Airport Shuttle",
    description:
      "Enjoy hassle-free transportation to and from the airport with our convenient shuttle service.",
    icon: <Plane size={28} />,
  },
];

 function RoomAmenities() {
  return (
    <section className="section-pad-lg bg-gray-50">
      <div className="container-main">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Room Amenities
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 mt-4">
            Everything you need for a comfortable stay in Standard Double Room
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {amenities.map((item, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition duration-300 ${
                item.highlight ? "border-l-4 border-blue-600" : ""
              }`}
            >
              <div className="flex items-start gap-5">
                
                {/* Icon Box */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  {item.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoomAmenities;