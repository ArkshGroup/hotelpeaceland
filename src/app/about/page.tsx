import Testimonials from "../components/Testimonial";
import Image from "next/image";
import FacilitiesSection from "../components/FacilitiesSection";
import HelperIcon from "../components/HelperIcon";
import HeroSection from "../components/HeroSection";
import CommitmentSection from "../components/CommitmentSection";
import Link from "next/link";

export default function About() {
  return (
    <>
      <HeroSection title="About Us" list1="Home" list2="About" />

      <section className="section-pad bg-white">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Welcome to Peaceland Hotel</h2>
            <p className="text-gray-700 mb-4">
              Nestled in the heart of Lumbini — the birthplace of Lord Buddha — Hotel Peaceland
              offers a perfect blend of spiritual serenity, modern comfort, and warm Nepalese
              hospitality.
            </p>
            <p className="text-gray-700 mb-4">
              Our hotel is just a short walk from the sacred Maya Devi Temple, making it an ideal
              retreat for pilgrims, travelers, and explorers alike. Experience tranquil gardens,
              comfortable accommodations, and authentic local cuisine that reflects the rich
              cultural heritage of this sacred land. Whether you are seeking spiritual
              enlightenment or simply a peaceful getaway, Hotel Peaceland provides the perfect
              sanctuary for your journey.
            </p>
            <Link
              href="/booknow"
              className="mt-4 inline-block bg-[#2556A5] rounded-3xl font-semibold text-xs text-white py-4 px-6 hover:bg-blue-700 transition"
            >
              BOOK YOUR STAY
            </Link>
          </div>
          <Image
            src="/room.jpg"
            alt="Hotel"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
          </div>
        </div>
      </section>

      <CommitmentSection />
      <Testimonials />
      <FacilitiesSection />
      <HelperIcon />
    </>
  );
}
