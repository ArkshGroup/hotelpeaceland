import React from "react";

// You can also import this from a separate file
const menuData = {
  breakfast: [
    {
      id: 1,
      title: "Pancake Stack",
      description: "Fluffy pancakes served with maple syrup and fresh fruits.",
      price: 350,
      image: "breakfast1.jpeg"
    },
    {
      id: 2,
      title: "Omelette & Toast",
      description: "Three-egg omelette served with buttered toast and sautéed vegetables.",
      price: 280,
      image: "breakfast2.jpg"
    },
    {
      id: 3,
      title: "Omelette & Toast",
      description: "Three-egg omelette served with buttered toast and sautéed vegetables.",
      price: 480,
      image: "breakfast3.jpeg"
    },
  ],

  snacks: [
    {
      id: 4,
      title: "French Fries",
      description: "Crispy golden fries served with ketchup and mayo dip.",
      price: 220,
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877"
    }
  ],

  dessert: [
    {
      id: 5,
      title: "Chocolate Lava Cake",
      description: "Warm chocolate cake with gooey molten center.",
      price: 300,
      image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51"
    }
  ],

  nepaliThali: [
    {
      id: 6,
      title: "Special Nepali Thali",
      description: "Rice, dal, chicken curry, vegetable curry, achar, salad and papad.",
      price: 650,
      image: "nepali1.jpeg"
    }, {
      id: 7,
      title: "Special Nepali Thali",
      description: "Rice, dal, chicken curry, vegetable curry, achar, salad and papad.",
      price: 650,
      image: "nepali2.jpeg"
    }, {
      id: 8,
      title: "Special Nepali Thali",
      description: "Rice, dal, chicken curry, vegetable curry, achar, salad and papad.",
      price: 650,
      image: "nepali3.jpeg"
    },
     {
      id: 9,
      title: "Special Nepali Thali",
      description: "Rice, dal, chicken curry, vegetable curry, achar, salad and papad.",
      price: 650,
      image: "nepali4.jpeg"
    }
  ],

  indianCuisine: [
    {
      id: 10,
      title: "Butter Chicken",
      description: "Creamy tomato curry with tender chicken pieces.",
      price: 580,
      image: "indian1.jpeg"
    },
    {
      id: 11,
      title: "Butter Chicken",
      description: "Creamy tomato curry with tender chicken pieces.",
      price: 580,
      image: "indian2.jpeg"
    },
    {
      id: 12,
      title: "Butter Chicken",
      description: "Creamy tomato curry with tender chicken pieces.",
      price: 580,
      image: "indian3.jpeg"
    },
    {
      id: 13,
      title: "Butter Chicken",
      description: "Creamy tomato curry with tender chicken pieces.",
      price: 580,
      image: "indian6.jpeg"
    },
    {
      id: 14,
      title: "Butter Chicken",
      description: "Creamy tomato curry with tender chicken pieces.",
      price: 580,
      image: "indian5.jpeg"
    },
    {
      id: 15,
      title: "Butter Chicken",
      description: "Creamy tomato curry with tender chicken pieces.",
      price: 580,
      image: "indian6.jpeg"
    },

  ],

  chineseCuisine: [
    {
      id: 16,
      title: "Veg Chow Mein",
      description: "Stir-fried noodles with fresh vegetables and soy sauce.",
      price: 390,
      image: "china.jpeg"
    },
     {
      id: 17,
      title: "Veg Chow Mein",
      description: "Stir-fried noodles with fresh vegetables and soy sauce.",
      price: 390,
      image: "china2.jpeg"
    }, {
      id: 18,
      title: "Veg Chow Mein",
      description: "Stir-fried noodles with fresh vegetables and soy sauce.",
      price: 390,
      image: "china3.jpeg"
    }, {
      id: 19,
      title: "Veg Chow Mein",
      description: "Stir-fried noodles with fresh vegetables and soy sauce.",
      price: 390,
      image: "china4.jpeg"
    }
  ],

  continentalCuisine: [
    {
      id: 20,
      title: "Grilled Chicken Steak",
      description: "Juicy grilled chicken steak served with mashed potatoes and veggies.",
      price: 720,
      image: "content1.jpeg"
    },
     {
      id: 21,
      title: "Grilled Chicken Steak",
      description: "Juicy grilled chicken steak served with mashed potatoes and veggies.",
      price: 720,
      image: "content2.jpeg"
    },
     {
      id: 22,
      title: "Grilled Chicken Steak",
      description: "Juicy grilled chicken steak served with mashed potatoes and veggies.",
      price: 720,
      image: "content3.jpeg"
    }, {
      id: 23,
      title: "Grilled Chicken Steak",
      description: "Juicy grilled chicken steak served with mashed potatoes and veggies.",
      price: 720,
      image: "content4.jpg"
    }
  ]
};

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