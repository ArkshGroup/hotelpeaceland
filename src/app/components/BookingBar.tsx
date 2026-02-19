"use client";
import  { useState } from 'react';
import { Calendar, BedDouble, Search } from 'lucide-react';

function BookingBar ()  {
  const [checkIn, setCheckIn] = useState('2026-02-17');
  const [checkOut, setCheckOut] = useState('2026-02-18');
  const [roomType, setRoomType] = useState('');

  const handleSearch = () => {
    console.log({ checkIn, checkOut, roomType });
    // Add your booking logic here
  };

  return (
    <div className="container-main -mt-10 relative z-10">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 w-full flex flex-wrap lg:flex-nowrap items-end gap-6 border border-gray-100">
        
        {/* Check In */}
        <div className="flex-1 min-w-[200px]">
          <label className="flex items-center gap-2 text-slate-600 font-bold mb-3 text-sm">
            <Calendar size={18} className="text-blue-700" />
            Check In
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700"
          />
        </div>

        {/* Check Out */}
        <div className="flex-1 min-w-[200px]">
          <label className="flex items-center gap-2 text-slate-600 font-bold mb-3 text-sm">
            <Calendar size={18} className="text-blue-700" />
            Check Out
          </label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700"
          />
        </div>

        {/* Room Type */}
        <div className="flex-1 min-w-[200px]">
          <label className="flex items-center gap-2 text-slate-600 font-bold mb-3 text-sm">
            <BedDouble size={18} className="text-blue-700" />
            Room Type
          </label>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700 appearance-none"
          >
            <option value="">Select Room Type</option>
            <option value="luxury">Luxury Room</option>
            <option value="deluxe">Deluxe Room</option>
            <option value="standard">Standard Room</option>
          </select>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-[#2B59A2] hover:bg-[#1e417a] text-white font-semibold px-8 py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all min-w-[200px]"
        >
          Check Availability
          <Search size={18} />
        </button>
      </div>
    </div>
  );
};

export default BookingBar;