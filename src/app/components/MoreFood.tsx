import React from "react";
import {menuData} from "@/data/Menu"
// You can also import this from a separate file


 function AllFoodMenu() {
  return (
    <div className="min-h-screen bg-gray-50 section-pad">
      <div className="container-main">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Complete Menu
        </h1>

      {Object.entries(menuData).map(([category, items]) => (
        <div key={category} className="mb-12 lg:mb-16">
          <h2 className="text-2xl font-semibold capitalize mb-6 border-b pb-2">
            {category.replace(/([A-Z])/g, " $1")}
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={item.image.startsWith("http") ? `${item.image}?auto=format&fit=crop&w=600&q=80` : `/${item.image.replace(/^\//, "")}?auto=format&fit=crop&w=600&q=80`}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-3">
                    {item.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="font-bold text-green-600">
                      NPR {item.price}
                    </span>

                    <button className="bg-black text-white px-3 py-1.5 rounded-lg text-sm hover:bg-gray-800">
                      Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default AllFoodMenu;