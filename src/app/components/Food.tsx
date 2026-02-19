import Image from "next/image";


const foodItems = [
  {
    id: 1,
    title: "Avocado Toast Deluxe",
    description:
      "Fresh smashed avocado on toasted sourdough, topped with cherry tomatoes and chili flakes.",
    price: 350,
    image:
      "food1.avif",
  },
  {
    id: 2,
    title: "Mediterranean Chicken Bowl",
    description:
      "Grilled herb chicken with seasoned rice, hummus, cucumber, olives & yogurt dressing.",
    price: 520,
    image:
      "food4.jpeg",
  },
  {
    id: 3,
    title: "Creamy Alfredo Pasta",
    description:
      "Classic white sauce pasta with sautéed mushrooms and parmesan cheese.",
    price: 480,
    image:
      "buffSukuti.jpeg",
  },
  {
    id: 4,
    title: "Crispy Chicken Burger",
    description:
      "Golden crispy chicken patty with lettuce, cheese & house sauce. Served with fries.",
    price: 450,
    image:
      "chickentikka.jpeg",
  },
  {
    id: 5,
    title: "Iced Caramel Latte",
    description:
      "Cold brewed espresso with milk and caramel syrup over ice.",
    price: 280,
    image:
      "chickenBBQ.jpeg",
  },
  {
    "id": 6,
    "title": "Margherita Pizza",
    "description": "Classic Italian pizza topped with fresh mozzarella, basil leaves and rich tomato sauce.",
    "price": 550,
    "image": "chipschilly.jpeg"
  },
  {
    "id": 7,
    "title": "Spicy Korean Noodles",
    "description": "Hot and flavorful noodles tossed with vegetables and spicy gochujang sauce.",
    "price": 420,
    "image": "frenchfries.jpeg"
  },
  {
    "id": 8,
    "title": "Grilled Paneer Wrap",
    "description": "Soft tortilla filled with grilled paneer, fresh veggies and creamy mint sauce.",
    "price": 380,
    "image": "vegmomo.jpeg"
  },
  {
    "id": 9,
    "title": "Chocolate Brownie",
    "description": "Rich and fudgy chocolate brownie served warm with chocolate drizzle.",
    "price": 250,
    "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c"
  },
  {
    "id": 10,
    "title": "Caesar Salad",
    "description": "Crisp romaine lettuce tossed with Caesar dressing, croutons and parmesan cheese.",
    "price": 360,
    "image": "https://images.unsplash.com/photo-1550304943-4f24f54ddde9"
  },
  {
    "id": 11,
    "title": "BBQ Chicken Pizza",
    "description": "Smoky BBQ chicken chunks with onions and mozzarella on a crispy crust.",
    "price": 620,
    "image": "https://images.unsplash.com/photo-1594007654729-407eedc4be65"
  },
  {
    "id": 12,
    "title": "Strawberry Milkshake",
    "description": "Fresh strawberry blended with milk and ice cream for a creamy sweet treat.",
    "price": 300,
    "image": "https://images.unsplash.com/photo-1577805947697-89e18249d767"
  },
  {
    "id": 13,
    "title": "Veg Fried Rice",
    "description": "Wok-tossed rice with mixed vegetables, soy sauce and spring onions.",
    "price": 390,
    "image": "aloo.jpeg"
  },
  {
    "id": 14,
    "title": "Chicken Momos",
    "description": "Steamed dumplings stuffed with juicy chicken filling served with spicy chutney.",
    "price": 320,
    "image": "momo.jpeg"
  },
  {
    "id": 15,
    "title": "Blueberry Cheesecake",
    "description": "Creamy cheesecake topped with fresh blueberry compote and biscuit crust.",
    "price": 410,
    "image": "pizza.avif"
  }

];

 function FoodMenu() {
  return (
    <div className="min-h-screen bg-gray-50 section-pad">
      <div className="container-main">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Menu
        </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {foodItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={item.image.startsWith("http") ? `${item.image}?auto=format&fit=crop&w=600&q=80` : `/${item.image.replace(/^\//, "")}?auto=format&fit=crop&w=600&q=80`}
              alt={item.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                {item.description}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-green-600">
                  NPR {item.price}
                </span>
                <button className="bg-black text-white px-4 py-2 rounded-xl text-sm hover:bg-gray-800 transition">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
export default FoodMenu;