import FeaturedAmenities from "../../components/Features";
import HelperIcon from "../../components/HelperIcon";
import HeroSection from "../../components/HeroSection";
import RoomAmenities from "../../components/RoomAmenities";
import RoomDetails from "../../components/RoomDetails";
import RoomOverview from "../../components/RoomOverview";
import RoomsSection from "../../components/RoomSection";

export default function StandardDoublePage() {
  return (
    <div>
      <HeroSection
        title="Standard Double Room"
        list1="Home"
        list2="Rooms"
        list3="Standard Double Room"
      />
      <HelperIcon />
      <RoomDetails
        images={[
          "/standard2.jpg",
          "/standard.jpg",
          "/standard4.jpg",
          "/standard10.jpg",
          "/standard11.jpg",
        ]}
      />
      <RoomOverview title="Standard Double Room" />
      <RoomsSection />
      <RoomAmenities />
    </div>
  );
}
