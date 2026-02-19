import { Heart, Globe, Flower2, Star } from "lucide-react";

function CommitmentSection() {
  const features = [
    {
      id: 1,
      icon: Heart,
      title: "Compassionate Hospitality",
      description:
        "We treat every guest with genuine care, understanding that your comfort and well-being are our highest priorities.",
    },
    {
      id: 2,
      icon: Flower2,
      title: "Spiritual Serenity",
      description:
        "Experience tranquility inspired by Lumbini's sacred environment, designed to rejuvenate your mind, body, and spirit.",
    },
    {
      id: 3,
      icon: Globe,
      title: "Cultural Connection",
      description:
        "We bridge traditional Nepalese hospitality with modern comfort, offering an authentic and enriching experience.",
    },
  ];

  return (
    <section className="relative section-pad-lg bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      
      {/* Background Soft Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-40"></div>

      <div className="container-main relative z-10">

        {/* Title Section */}
        <div className="text-center mb-16">
          <p className="text-blue-600 uppercase tracking-widest text-sm font-semibold">
            Our Commitment
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-blue-900 mt-4">
            A Sanctuary of Peace and Comfort
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
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg p-10 text-center transition-all hover:-translate-y-2 duration-300"
              >
                <div className="w-24 h-24 mx-auto bg-[#2556A5] rounded-full flex items-center justify-center text-white shadow-md">
                  <Icon size={40} />
                </div>

                <h3 className="text-xl font-semibold text-blue-900 mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default CommitmentSection;