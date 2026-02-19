import {
  Wifi,
  Utensils,
  Flower2,
  ParkingSquare,
  ConciergeBell,
  MapPin,
  Star,
} from "lucide-react";

function FacilitiesSection() {
  const facilities = [
    {
      id: 1,
      icon: Wifi,
      title: "High-Speed Wi-Fi",
      description:
        "Stay connected with complimentary high-speed internet throughout the hotel.",
    },
    {
      id: 2,
      icon: Utensils,
      title: "Rooftop Restaurant",
      description:
        "Enjoy panoramic views and delicious local and international cuisine.",
    },
    {
      id: 3,
      icon: Flower2,
      title: "Relaxation Area",
      description:
        "Unwind in our peaceful garden and meditation spaces.",
    },
    {
      id: 4,
      icon: ParkingSquare,
      title: "Secure Parking",
      description:
        "Complimentary on-site parking for our guests' convenience and peace of mind.",
    },
    {
      id: 5,
      icon: ConciergeBell,
      title: "24/7 Concierge",
      description:
        "Round-the-clock assistance to ensure a comfortable and hassle-free stay.",
    },
    {
      id: 6,
      icon: MapPin,
      title: "Tour Assistance",
      description:
        "Personalized guidance for exploring Lumbini's spiritual and cultural landmarks.",
    },
  ];

  return (
    <section className="relative section-pad-lg bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      
      {/* Soft Background Shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>

      <div className="container-main relative z-10">

        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-blue-600 uppercase tracking-widest text-sm font-semibold">
            Our Facilities
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-blue-900 mt-4">
            Comfort Meets Convenience
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="w-16 h-[2px] bg-blue-400"></div>
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg">
              <Star size={20} />
            </div>
            <div className="w-16 h-[2px] bg-blue-400"></div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md p-8 flex items-start gap-6 hover:shadow-xl transition duration-300"
              >
                <div className="w-20 h-20 flex-shrink-0 bg-[#2556A5] rounded-full flex items-center justify-center text-white shadow-md">
                  <Icon size={32} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-blue-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
export default FacilitiesSection;