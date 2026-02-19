import React from "react";
import {
  Calendar,
  Users,
  ChevronDown,
  Phone,
  MessageCircle,
  ArrowUp,
} from "lucide-react";
import Image from "next/image";

const BookingComponent = () => {
  return (
    <div className="w-full font-sans text-slate-700">
      {/* Upper Booking Bar */}
      <div className="bg-white border-b border-gray-200 px-4 py-6 shadow-sm">
        <div className="container-main flex flex-wrap items-center justify-between gap-6">
          {/* Section: Title */}
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-blue-900 tracking-tight uppercase">
              Book Online
            </h2>
            <p className="text-xs text-gray-500 italic">
              Guaranteed accommodation
            </p>
          </div>

          {/* Section: Form Fields */}
          <div className="flex flex-wrap items-end gap-4 flex-grow">
            {/* Check-in */}
            <div className="flex-1 min-w-[150px] border-b border-gray-400 pb-1">
              <label className="block text-xs font-semibold text-gray-500">
                Check-in
              </label>
              <div className="flex justify-between items-center mt-1">
                <span className="text-sm">17/02/2026</span>
                <Calendar size={16} className="text-blue-600" />
              </div>
            </div>

            {/* Check-out */}
            <div className="flex-1 min-w-[150px] border-b border-gray-400 pb-1">
              <label className="block text-xs font-semibold text-gray-500">
                Check-out
              </label>
              <div className="flex justify-between items-center mt-1">
                <span className="text-sm">18/02/2026</span>
                <Calendar size={16} className="text-blue-600" />
              </div>
            </div>

            {/* Guests */}
            <div className="flex-1 min-w-[180px] border-b border-gray-400 pb-1">
              <label className="block text-xs font-semibold text-gray-500">
                Guests
              </label>
              <div className="flex justify-between items-center mt-1">
                <span className="text-sm">2 adults, 0 children</span>
                <Users size={16} className="text-blue-600" />
              </div>
            </div>
          </div>

          {/* Section: Actions */}
          <div className="flex items-center gap-3">
            <button className="text-sm text-blue-700 font-medium px-4 py-2 bg-blue-50 rounded hover:bg-blue-100 transition">
              I have a promo code
            </button>
            <button className="bg-blue-800 text-white px-8 py-2 rounded font-semibold hover:bg-blue-900 transition shadow-md">
              Find Room
            </button>
          </div>
        </div>
      </div>

      {/* Secondary Currency/Language Bar */}
      <div className="bg-gray-100 py-3 px-4 mt-10">
        <div className="container-main flex justify-end items-center gap-2">
          {/* Flag/Language */}
          <div className="flex items-center gap-1 bg-white border border-gray-200 px-2 py-1 rounded cursor-pointer">
            <Image
              src="/flag.png"
              alt="UK Flag"
              width={20}
              height={12}
              className="object-cover"
            />

            <ChevronDown size={14} className="text-gray-400" />
          </div>
          {/* Currency */}
          <div className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded border border-blue-100 cursor-pointer">
            NPR
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookingComponent;
