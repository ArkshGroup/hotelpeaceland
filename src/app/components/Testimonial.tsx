"use client"
import { FaQuoteRight } from "react-icons/fa6";
import React, { useState } from 'react';
import { Quote, Star, MessageCircle, Phone, ChevronUp } from 'lucide-react';
function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "Photographer",
      initial: "C",
      rating: 5,
      text: "From the elegant architecture to the scenic views around the property, Hotel Peaceland is a dream for any creative. Every corner is picture-perfect, and the staff made my stay truly unforgettable."
    },
    {
      name: "Rina Khatri",
      role: "Yoga Instructor",
      initial: "R",
      rating: 5,
      text: "The spa and wellness center at Hotel Peaceland exceeded my expectations. After a day of sightseeing, the massage therapy session was just what I needed. I left feeling refreshed and recharged."
    }
  ];

  return (
    <section className="section-pad bg-white">
      <div className="container-main text-center">
        <div className="space-y-6">
        <h2 className="text-sm md:text-lg mb-8 font-semibold text-[#4A6CF7]">What Our Guests Say</h2>
        <h1 className="text-5xl font-bold text-[#1A2B5F] ">Our Testimonials</h1>

      <div className="flex justify-center items-center gap-4">
        <span className="w-15 h-px text-blue-100"></span>
        <div><FaQuoteRight/></div>
        <span className="w-15 h-px text-blue-100"></span>
      </div>

        <p className="text-center text-[#5F6B7A]">Discover what our valued guests have to say about their experiences with us. Their testimonials reflect <br/> our 
          commitment to exceptional service and hospitality.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100  rounded-2xl p-8 shadow-xl hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full bg-[#2556A5] flex items-center justify-center text-white text-2xl font-bold shrink-0">
                  {item.initial}
                </div>
                
                {/* Name & Title */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                  <span className="inline-block px-3 py-1 mt-1 text-sm font-medium text-[#2556A5] bg-blue-50 rounded-full">
                    {item.role}
                  </span>
                  <div className="flex mt-2 text-[#FFC107]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Body Text */}
              <div className="relative">
                <span className="absolute -top-2 -left-2 text-blue-100">
                   <Quote size={32} fill="currentColor" />
                </span>
                <p className="relative z-10 text-gray-600 italic leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mb-12">
          <button 
            onClick={() => setActiveIndex(0)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${activeIndex === 0 ? 'bg-blue-600' : 'bg-gray-300'}`}
          />
          <button 
            onClick={() => setActiveIndex(1)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${activeIndex === 1 ? 'bg-blue-400' : 'bg-gray-300'}`}
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
