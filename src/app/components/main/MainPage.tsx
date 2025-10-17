import HeroSection from "./HeroSection";
import FeaturesSection from "../SubSection/FeaturesSection";
import CategoriesSection from "../SubSection/CategoriesSection";
import CTASection from "../SubSection/CTASection";

export default function MainPage() {
  return (
    <div className="container-fluid">
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <CTASection />
    </div>
  );
}
