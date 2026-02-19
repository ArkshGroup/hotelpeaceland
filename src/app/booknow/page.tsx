"use client";

import BookingCard from "../components/BookingCard";
import BookingComponent from "../components/BookingComponent";
import HelperIcon from "../components/HelperIcon";
import HeroSection from "../components/HeroSection";

export default function BookingPage() {
  return (
    <div className="">
      <HeroSection title="Book Your Stay" list1="Home" list2="Booking" />
      <BookingComponent />
      <BookingCard />
      <HelperIcon />
    </div>
  );
}
