import HelperIcon from "../components/HelperIcon";
import HeroSection from "../components/HeroSection";
import AllFoodMenu from "../components/MoreFood";

export default function ArkshPage() {
  return (
    <div>
      <HelperIcon />
      <HeroSection
        title="Arksh Rooftop & Restaurant"
        list1="Home"
        list2="Resturants"
        list3="Arksh Rooftop & Restaurant"
      />
      <AllFoodMenu />
    </div>
  );
}
