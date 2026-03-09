import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { MarketOpportunity } from "./components/MarketOpportunity";
import { TheProblem } from "./components/TheProblem";
import { PlatformStrength } from "./components/PlatformStrength";
import { ProductPortfolio } from "./components/ProductPortfolio";
import { YieldEconomics } from "./components/YieldEconomics";
import { ApplicationsGallery } from "./components/ApplicationsGallery";
import { ImpactVision } from "./components/ImpactVision";
import { BusinessModel } from "./components/BusinessModel";
import { Team } from "./components/Team";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans text-slate-900 antialiased overflow-x-hidden selection:bg-[#A5D9D9]/30 selection:text-slate-900">
      <Navbar />
      <Hero />
      <MarketOpportunity />
      <TheProblem />
      <PlatformStrength />
      <ProductPortfolio />
      <YieldEconomics />
      <ApplicationsGallery />
      <ImpactVision />
      <BusinessModel />
      <Team />
      <Footer />
    </div>
  );
}
