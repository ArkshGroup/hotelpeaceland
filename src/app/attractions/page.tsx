import HeroSection from "../components/HeroSection";
import HelperIcon from "../components/HelperIcon";
import NearByAttraction from "../components/NearbyAttraction";

export default function AttractionsPage() {
  return (
    <div>
      <HeroSection
        title="Nearby Attractions"
        list1="Home"
        list2="Nearby Attractions"
      />
      <NearByAttraction />
      <HelperIcon />
    </div>
  );
}
