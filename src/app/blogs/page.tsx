import BlogSection from "../components/BlogSection";
import HelperIcon from "../components/HelperIcon";
import HeroSection from "../components/HeroSection";

export default function BlogsPage() {
  return (
    <div>
      <HeroSection title="Blog" list1="Home" list2="Blog" />
      <BlogSection />
      <HelperIcon />
    </div>
  );
}
