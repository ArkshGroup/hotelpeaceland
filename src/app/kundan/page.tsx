import HelperIcon from "../components/HelperIcon";
import HeroSection from "../components/HeroSection";
import FoodMenu from "../components/Food";

export default function KundanPage() {
  return (
    <div>
      <HelperIcon />
      <HeroSection
        title="Kundan Resturants"
        list1="Home"
        list2="Resturants"
        list3="kundan Restaurant"
      />
      <FoodMenu />
    </div>
  );
}
