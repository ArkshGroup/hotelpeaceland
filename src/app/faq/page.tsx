import Accordion from "../components/FAQAccordian";
import Image from "next/image";
import { AccordionItem } from "../components/FAQAccordian";

const faqs: AccordionItem[] = [
  {
    question: "Do you offer any wellness or recreational facilities?",
    answer:
      "Yes, our hotel includes wellness features such as a fitness center, spa services, and an infinity pool. Guided excursions can also be arranged upon request.",
  },
  {
    question: "Is the hotel suitable for families and solo travelers?",
    answer:
      "Absolutely. Our hotel provides comfortable accommodations for families, couples, and solo travelers.",
  },
  {
    question: "Does the hotel have dining facilities?",
    answer:
      "Yes, we have an in-house restaurant offering a variety of local and international cuisines.",
  },
  {
    question: "What amenities does the hotel offer?",
    answer:
      "We provide free Wi-Fi, air-conditioned rooms, room service, parking, laundry services, and 24/7 front desk support.",
  },
  {
    question: "Where is Hotel Peaceland located?",
    answer:
      "Hotel Peaceland is conveniently located in Lumbini, close to major tourist attractions.",
  },
  {
    question: "How far is the hotel from Lumbini Garden?",
    answer: "The hotel is approximately a 5-minute drive from Lumbini Garden.",
  },
];

export default function FAQPage() {
  return (
    <section className="container-main section-pad">
      <div className="text-center mb-10">
        <p className="text-gray-600 text-lg">
          Find answers to common questions about our accommodations, services, and policies.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <Image
            src="/room.jpg"
            alt="Hotel Room"
            width={600}
            height={400}
            className="w-full h-[320px] object-cover"
            priority
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-blue-700">Your Comfort Is Our Priority</h2>
            <p className="text-gray-600 mt-2">We are here to answer all your questions</p>
          </div>
        </div>

        <Accordion items={faqs} />
      </div>
    </section>
  );
}
