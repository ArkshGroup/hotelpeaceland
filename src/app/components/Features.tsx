// components/FeaturedAmenities.jsx
import {
  ConciergeBell,
  Car,
  Bus,
  Utensils
} from "lucide-react";
import { FaGem } from "react-icons/fa";
const amenities = [
  {
    icon: ConciergeBell,
    title: "24/7 Room Service",
    desc: "Enjoy the convenience of round-the-clock room service with a diverse menu catering to all tastes and preferences.",
  },
  {
    icon: Car,
    title: "Valet Parking",
    desc: "Arrive with ease and let our professional valets handle your parking needs with our secure parking facilities.",
  },
  {
    icon: Bus,
    title: "Airport Shuttle",
    desc: "Enjoy hassle-free transportation to and from the airport with our convenient shuttle service.",
  },
  {
    icon: Utensils,
    title: "Fine Dining",
    desc: "Experience exquisite culinary delights prepared by our award-winning chefs using the finest local ingredients.",
  },
];

export default function FeaturedAmenities() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white section-pad-lg">
      <div className="container-main text-center">

        {/* Heading */}
        <p className="text-[#4A6CF7] tracking-widest text-sm font-semibold">
          LUXURY FACILITIES
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
          Our Featured Amenities
        </h2>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <span className="h-px w-16 bg-blue-200" />
          <div className="bg-[#2556A5] text-white p-3 rounded-full">
            <FaGem/>
          </div>
          <span className="h-px w-16 bg-blue-200" />
        </div>

        <p className="text-slate-500 max-w-2xl mx-auto mt-6">
          Experience the finest amenities designed for your comfort and enjoyment.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {amenities.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-lg px-6 py-10  transition-all hover:-translate-y-2 "
            >
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 p-6 rounded-full">
                  <item.icon className="w-8 h-8 text-[#4A6CF7]" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {item.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
