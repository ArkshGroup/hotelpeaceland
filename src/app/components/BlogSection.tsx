// components/BlogSection.jsx

import Image from "next/image";
import Link from "next/link";

export default function BlogSection() {
  const blogs = [
    {
      image: "/blog1.png",
      title: "Choosing the Right Hotels in Lumbini: What Travelers Often Overlook",
      description:
        "Choosing the Right Hotels in Lumbini: What Travelers Often Overlook Lumbini is not a hurry-up-and-get-out place. Being close to the sacred site enhances your experience...",
      day: "04",
      month: "FEB",
    },
    {
      image: "/blog2.png",
      title: "Why Staying Near Maya Devi Temple Makes Your Lumbini Trip More Meaningful",
      description:
        "Why Staying Near Maya Devi Temple Makes Your Lumbini Trip More Meaningful Lumbini is a destination many travelers visit for spiritual reflection...",
      day: "03",
      month: "FEB",
    },
    {
      image: "/blog3.jpg",
      title: "Complete Travel Guide to Lumbini: Where to Stay, Eat and Explore",
      description:
        "Complete Travel Guide to Lumbini: Where to Stay, Eat, and Explore. Lumbini is not just a destination; it is a spiritual journey...",
      day: "02",
      month: "FEB",
    },{
      image: "/blog4.webp",
      title: "Complete Travel Guide to Lumbini: Where to Stay, Eat and Explore",
      description:
        "Complete Travel Guide to Lumbini: Where to Stay, Eat, and Explore. Lumbini is not just a destination; it is a spiritual journey...",
      day: "02",
      month: "FEB",
    },{
      image: "/blog5.webp",
      title: "Complete Travel Guide to Lumbini: Where to Stay, Eat and Explore",
      description:
        "Complete Travel Guide to Lumbini: Where to Stay, Eat, and Explore. Lumbini is not just a destination; it is a spiritual journey...",
      day: "02",
      month: "FEB",
    },
    {
      image: "/blog6.webp",
      title: "Complete Travel Guide to Lumbini: Where to Stay, Eat and Explore",
      description:
        "Complete Travel Guide to Lumbini: Where to Stay, Eat, and Explore. Lumbini is not just a destination; it is a spiritual journey...",
      day: "02",
      month: "FEB",
    },
    {
      image: "/blog7.webp",
      title: "Complete Travel Guide to Lumbini: Where to Stay, Eat and Explore",
      description:
        "Complete Travel Guide to Lumbini: Where to Stay, Eat, and Explore. Lumbini is not just a destination; it is a spiritual journey...",
      day: "02",
      month: "FEB",
    },
    {
      image: "/blog8.webp",
      title: "Complete Travel Guide to Lumbini: Where to Stay, Eat and Explore",
      description:
        "Complete Travel Guide to Lumbini: Where to Stay, Eat, and Explore. Lumbini is not just a destination; it is a spiritual journey...",
      day: "02",
      month: "FEB",
    },
    {
      image: "/blog9.webp",
      title: "Complete Travel Guide to Lumbini: Where to Stay, Eat and Explore",
      description:
        "Complete Travel Guide to Lumbini: Where to Stay, Eat, and Explore. Lumbini is not just a destination; it is a spiritual journey...",
      day: "02",
      month: "FEB",
    },
  ];

  return (
    <section className="bg-gray-100 section-pad">
      <div className="container-main">
        <div className="flex flex-col justify-center items-center gap-y-4 text-center">
          <h1 className="text-[#2556A5] font-medium">LATEST UPDATES</h1>
        <p className="text-3xl font-bold text-[#333333]">Our Latest News & Articles</p>
        <p className="text-gray-500">Stay updated with our latest news, events,and stories from our hotel.</p>
        </div>
        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {blogs.map((blog, index) => (
            <Link href={`/blogs/${index}`}
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={600}
                  height={400}
                  className="w-full h-72 object-cover transition duration-500 hover:scale-105"
                />

                {/* Date Badge */}
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-xl text-center shadow-lg">
                  <p className="text-xl font-bold leading-none">
                    {blog.day}
                  </p>
                  <p className="text-xs tracking-wide">
                    {blog.month}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                  {blog.title}
                </h2>

                <p className="text-gray-600 text-sm line-clamp-3">
                  {blog.description}
                </p>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
