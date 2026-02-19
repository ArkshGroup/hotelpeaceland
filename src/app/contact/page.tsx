import ContactSection from "../components/AdvanceContact";
import HelperIcon from "../components/HelperIcon";
import HeroSection from "../components/HeroSection";

export default function Contact() {
  return (
    <>
      <HeroSection title="Contact Us" list1="Home" list2="Contact" />
      <HelperIcon />
      <ContactSection />
    </>
  );
}
