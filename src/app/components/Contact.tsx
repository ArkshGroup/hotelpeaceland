import Image from "next/image";

const Contact = () => {
  return (
    <section className="section-pad bg-gray-50">
      <div className="container-main flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
        {/* Left Side - Image */}
        <div className="relative w-full lg:w-1/2 h-80 lg:h-[450px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/hotelpeaceland.jpg" // Replace with your image
            alt="Hotel Peaceland"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side - Text & Buttons */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6">
          <h2 className="text-4xl font-bold text-gray-600">
            Experience Luxury & Comfort
          </h2>
          <p className="text-gray-600">
            Hotel Peaceland is a calm and comfortable place to stay in the heart
            of Lumbini. We welcome guests from all around the world with warm
            hospitality and friendly service. Our rooms are clean, spacious, and
            designed to help you relax after a day of travel or sightseeing.
            Whether you are here to visit the sacred birthplace of Lord Buddha
            or just to enjoy a peaceful holiday, Hotel Peaceland offers
            everything you need. With delicious food, helpful staff, and a quiet
            atmosphere, we make sure your stay is easy, restful, and truly
            enjoyable.
          </p>

          {/* Buttons */}
          <div className="flex gap-6 ">
             <button
              className="bg-[#2556A5] text-white py-3 px-8 rounded-3xl 
                   transition-all duration-300 
                   hover:-translate-y-2"
            >
              Explore More
            </button>
            <button
              className="bg-[#2556A5] text-white py-3 px-8 rounded-3xl
                   transition-all duration-300 
                   hover:-translate-y-2"
            >
              Book Now
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-x-15 gap-y-4 mt-6">
            <div className="flex flex-col items-center space-y-4">
              <span className="text-2xl font-bold text-[#2556A5]">500+</span>
              <span className="text-[#666666] font-semibold text-lg">Happy Guests</span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <span className="text-2xl font-bold text-[#2556A5]">10+</span>
              <span className="text-[#666666] font-semibold text-lg">Years Experience</span>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <span className="text-2xl font-bold text-[#2556A5]">50+</span>
              <span className="text-[#666666] font-semibold text-lg">Premium Rooms</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
