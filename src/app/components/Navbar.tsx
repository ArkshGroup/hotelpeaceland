"use client";

import { useState } from "react";
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa6";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [roomsOpen, setRoomsOpen] = useState(false);
  const [restaurantOpen, setRestaurantOpen] = useState(false);

  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Rooms",
      href: "/rooms",
      isGradientParent: true,
      dropdown: [
        { label: "Standard Double Room", href: "/rooms/standardDouble" },
        { label: "Standard Twin Room", href: "/rooms/standardTriple" },
        { label: "Standard Triple Room", href: "/rooms/standardTwin" },
      ],
    },
    { label: "Nearby Attractions", href: "/attractions" },
    {
      label: "Restaurants",
      href: "/kundan",
      isGradientParent: true,
      dropdown: [
        { label: "Arksh Rooftop bar & grill", href: "/arksh" },
        { label: "Kundan Restaurant", href: "/kundan" },
      ],
    },
    { label: "Blogs", href: "/blogs" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
    { label: "Book Now", href: "/booknow", special: true },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md">
      {/* Top Bar with Gradient */}
      <div className="bg-gradient-to-r from-[#2556A5] to-[#1a3d75] text-white text-xs">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-9 px-6">
          <div className="flex items-center gap-6">
            <span className="font-medium">970793473</span>
            <span className="hidden md:inline font-medium">
              info@hotelpeaceland.com
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:opacity-80 transition">
              <GrFacebookOption size={16} />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <FaInstagram size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-1">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/hotelLogo.jpg"
              alt="hotel logo"
              height={85}
              width={150}
              className="object-contain py-1"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-2 text-[10px] xl:text-sm font-bold text-[#333333]">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.label} className="relative group py-4">
                  {/* Parent Link with Border Gradient */}
                  <Link href={link.href}
                    className={`flex items-center gap-1 px-2 py-4 relative group cursor-pointer
                    ${isActive(link.href) ? "text-[#2556A5]" : "hover:text-[#2556A5]"}`}
                  >
                    {link.label}
                    <HiChevronDown
                      size={14}
                      className="group-hover:rotate-180 transition-transform duration-300"
                    />

                    {/* Same underline effect */}
                    <span
                      className={`absolute bottom-2 left-3 right-3 h-0.5 bg-[#2556A5] transition-all duration-300 
                              ${
                                isActive(link.href)
                                  ? "w-[calc(100%-24px)]"
                                  : "w-0 group-hover:w-[calc(100%-24px)]"
                              }`}
                    ></span>
                  </Link>

                  {/* Clean White Dropdown */}
                  <ul className="absolute top-[100%] left-0 bg-white min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50  shadow-xl rounded-b-md overflow-hidden">
                    {link.dropdown.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`block px-5 py-3 text-sm transition-colors  last:border-none
                            ${isActive(item.href) ? "bg-blue-50 text-[#2556A5]" : "text-gray-700 hover:bg-gray-50 hover:text-[#2556A5]"}`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`transition-all duration-300 block
                      ${
                        link.special
                          ? "ml-2 px-6 py-2 bg-gradient-to-r from-[#2556A5] to-[#1e4687] text-white rounded-full hover:shadow-lg active:scale-95"
                          : `px-3 py-4 hover:text-[#2556A5] relative group ${isActive(link.href) ? "text-[#2556A5]" : ""}`
                      }`}
                  >
                    {link.label}
                    {!link.special && !link.isGradientParent && (
                      <span
                        className={`absolute bottom-2 left-3 right-3 h-0.5 bg-[#2556A5] transition-all duration-300 ${isActive(link.href) ? "w-[calc(100%-24px)]" : "w-0 group-hover:w-[calc(100%-24px)]"}`}
                      ></span>
                    )}
                  </Link>
                </li>
              ),
            )}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[#2556A5]"
          >
            {mobileOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-4 font-bold shadow-2xl">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        link.label === "Rooms"
                          ? setRoomsOpen(!roomsOpen)
                          : setRestaurantOpen(!restaurantOpen)
                      }
                      className={`flex justify-between items-center w-full py-2.5 px-4 rounded-md
                        ${link.isGradientParent ? "border-2 border-gradient-from-to text-gray-800" : "text-gray-800"}`}
                    >
                      <span>{link.label}</span>
                      <HiChevronDown
                        className={
                          (link.label === "Rooms" ? roomsOpen : restaurantOpen)
                            ? "rotate-180"
                            : ""
                        }
                      />
                    </button>
                    {(link.label === "Rooms" ? roomsOpen : restaurantOpen) && (
                      <div className="ml-4 mt-2 flex flex-col gap-2 border-l-2 border-gray-100 pl-4">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className={`text-sm py-1 ${isActive(item.href) ? "text-[#2556A5]" : "text-gray-600"}`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-2 px-4 ${link.special ? "bg-gradient-to-r from-[#2556A5] to-[#1e4687] text-white text-center rounded-full mt-4" : isActive(link.href) ? "text-[#2556A5]" : "text-gray-800"}`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
