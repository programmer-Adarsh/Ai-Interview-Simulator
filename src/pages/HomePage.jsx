import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";

function HomePage() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}

export default HomePage;