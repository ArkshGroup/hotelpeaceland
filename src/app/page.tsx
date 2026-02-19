"use client";

import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Accordion, { AccordionItem } from "./components/FAQAccordian";
import FeaturedAmenities from "./components/Features";
import Rooms from "./components/RoomSection";
import HelperIcon from "./components/HelperIcon";
import BookingBar from "./components/BookingBar";
import { FaQuestion } from "react-icons/fa";
import NewHero from "./components/NewHero";
import { ContentCard } from "./components/ContentCard";

const faqItems: AccordionItem[] = [
  {
    question: "Do you offer any wellness or recreational facilities?",
    answer:
      "Yes, our hotel includes wellness facilities such as a fitness center, spa services, and an infinity pool.",
  },
  {
    question: "Is the hotel suitable for families and solo travelers?",
    answer:
      "Absolutely. Our accommodations are ideal for families, couples, and solo travelers.",
  },
  {
    question: "Does the hotel have dining facilities?",
    answer:
      "Yes, we have an in-house restaurant offering local and international cuisine.",
  },
  {
    question: "How far is the hotel from Lumbini Garden?",
    answer: "The hotel is approximately a 5-minute drive from Lumbini Garden.",
  },
  {
    question: "What amenities does the hotel offer?",
    answer:
      "Our rooms are equipped with modern comforts including a flat-screen TV with satellite channels, high-speed Wi-Fi, seating space, air conditioning, and more to ensure a relaxing and connected stay.",
  },
  {
    question: "Where is Hotel Peaceland located?",
    answer:
      "Hotel Peaceland is located in Lumbini, just 1.3 km from the Mayadevi Temple—the sacred birthplace of Lord Buddha. It's within walking distance of key attractions, making it a convenient choice for spiritual and leisure travelers.",
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <BookingBar />
      <Rooms />
      <Contact />
      <NewHero />
      <FeaturedAmenities />
      <div className="bg-gray-50 section-pad">
        <div className="container-main">
          <div className="flex flex-col justify-center items-center space-y-6 text-center">
            <h2 className="text-sm text-[#4A6CF7] font-semibold uppercase tracking-wider">QUESTIONS & ANSWERS</h2>
            <h1 className="text-4xl md:text-5xl text-[#1A2B5F] font-bold">Frequently Asked Questions</h1>
            <div className="flex justify-center items-center gap-4">
              <span className="h-px w-14 bg-blue-200" />
              <div className="bg-[#2556A5] p-2 rounded-full text-white">
                <FaQuestion />
              </div>
              <span className="h-px w-14 bg-blue-200" />
            </div>
            <p className="text-[#5F6B7A] max-w-2xl">
              Find answers to common questions about our accommodations, services, and policies.
            </p>
          </div>
          <div className="flex flex-col mt-12 lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <ContentCard
              title="Your comfort is our priority"
              subtitle="We're here to answer all your questions"
              imageSrc="/room9.jpg"
            />
          </div>
          <div className="lg:w-1/2">
            <Accordion items={faqItems} />
          </div>
          </div>
        </div>
      </div>
      <HelperIcon />
    </div>
  );
}
