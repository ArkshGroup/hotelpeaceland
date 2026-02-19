import HelperIcon from "../../components/HelperIcon";
import HeroSection from "../../components/HeroSection";
import RoomAmenities from "../../components/RoomAmenities";
import RoomDetails from "../../components/RoomDetails";
import RoomOverview from "../../components/RoomOverview";
import RoomsSection from "../../components/RoomSection";

export default function StandardTwinPage() {
  return (
    <div>
      <HeroSection
        title="Standard Twin Room"
        list1="Home"
        list2="Rooms"
        list3="Standard Twin Room"
      />
      <HelperIcon />
      <RoomDetails images={["/standardTwin.jpg", "/standardTwin2.jpg", "/standardTwin3.jpg"]} />
      <RoomOverview title="Standard Twin Room" />
      <RoomsSection />
      <RoomAmenities />
    </div>
  );
}
