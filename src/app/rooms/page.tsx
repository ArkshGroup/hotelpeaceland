import HeroSection from "../components/HeroSection";
import Rooms from "../components/RoomSection";

export default function RoomsPage() {
  return (
    <div>
      <HeroSection title="Our Rooms" list1="Home" list2="Our Rooms" />
      <Rooms />
    </div>
  );
}
