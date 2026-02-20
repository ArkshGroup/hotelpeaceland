"use client";
import {blogs} from "@/data/Blog"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogSection() {


  const blogsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <section className="bg-gray-100 section-pad">
      <div className="container-main">
        
        {/* Heading */}
        <div className="flex flex-col justify-center items-center gap-y-4 text-center">
          <h1 className="text-[#2556A5] font-medium">LATEST UPDATES</h1>
          <p className="text-3xl font-bold text-[#333333]">
            Our Latest News & Articles
          </p>
          <p className="text-gray-500">
            Stay updated with our latest news, events, and stories from our hotel.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {currentBlogs.map((blog, index) => (
            <Link
              href={`/blogs/${index}`}
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={600}
                  height={400}
                  className="w-full h-72 object-cover transition duration-500 hover:scale-105"
                />

                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-xl text-center shadow-lg">
                  <p className="text-xl font-bold leading-none">
                    {blog.day}
                  </p>
                  <p className="text-xs tracking-wide">
                    {blog.month}
                  </p>
                </div>
              </div>

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

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 mt-12">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-10 h-10 rounded-lg border transition ${
                currentPage === index + 1
                  ? "bg-[#2556A5] text-white border-[#2556A5]"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
