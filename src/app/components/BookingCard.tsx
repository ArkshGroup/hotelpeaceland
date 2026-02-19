import React from 'react';
import {  User, ChevronDown, Plus } from 'lucide-react';

const BookingCard = () => {
  return (
    <div className="container-main section-pad">
      <div className="max-w-4xl mx-auto bg-white shadow-md border border-gray-100 rounded-xl overflow-hidden">
      {/* Card Header */}
      <div className="text-center py-6 border-b border-gray-100">
        <h2 className="text-2xl font-light text-gray-800">Details of your stay</h2>
      </div>

      <div className="p-8 space-y-8">
        {/* Date Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Check-in date</label>
            <div className="relative">
              <input 
                type="date" 
                defaultValue="17 February 2026"
                className="w-full border border-gray-300 rounded p-3 pr-10 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Check-out date</label>
            <div className="relative">
              <input 
                type="date" 
                defaultValue="18 February 2026"
                className="w-full border border-gray-300 rounded p-3 pr-10 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Guests Section */}
        <div className="space-y-4">
          <div>
            <h3 className="text-md font-medium text-gray-800">Stay in room</h3>
            <p className="text-xs text-gray-500">Guests aged 6 or above</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <User className="absolute left-3 top-3.5 text-gray-400 w-4 h-4" />
              <select className="w-full appearance-none border border-gray-300 rounded p-3 px-10 focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option>2 adults</option>
                
              </select>
              <ChevronDown className="absolute right-3 top-3.5 text-blue-800 w-4 h-4" />
            </div>

            <div className="relative">
              <Plus className="absolute left-3 top-3.5 text-gray-400 w-4 h-4" />
              <select className="w-full appearance-none border border-gray-300 rounded p-3 px-10 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-500">
                <option>Add a child</option>
                <option>children under 1 year</option>
              </select>
              <ChevronDown className="absolute right-3 top-3.5 text-blue-800 w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Extra Room Link */}
        <button className="flex items-center text-blue-800 font-medium text-sm hover:underline">
          Extra room <Plus className="ml-1 w-4 h-4" />
        </button>

        {/* Submit Button */}
        <button className="w-full bg-[#2B59A1] text-white font-medium py-4 rounded transition-colors hover:bg-blue-900">
          Check Availability
        </button>       
      </div>
      </div>
    </div>
  );
};

export default BookingCard;