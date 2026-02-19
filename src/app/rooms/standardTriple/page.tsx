import HelperIcon from "../../components/HelperIcon";
import HeroSection from "../../components/HeroSection";
import RoomAmenities from "../../components/RoomAmenities";
import RoomOverview from "../../components/RoomOverview";
import RoomDetails from "../../components/RoomDetails";
import RoomsSection from "../../components/RoomSection";

export default function StandardTriplePage() {
  return (
    <div>
      <HeroSection
        title="Standard Triple Room"
        list1="Home"
        list2="Rooms"
        list3="Standard Triple Room"
      />
      <HelperIcon />
      <RoomDetails
        images={[
          "/standardTriple.jpg",
          "/standardTriple2.jpg",
          "/standardTriple3.jpg",
          "/standardTriple8.jpg",
        ]}
      />
      <RoomOverview title="Standard Triple Room" />
      <RoomsSection />
      <RoomAmenities />
    </div>
  );
}
