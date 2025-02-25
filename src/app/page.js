import LatestInsights from "./components/Articles";
import ChooseUs from "./components/Choose";
import CtaSection from "./components/CtaSection";
import ExpertSection from "./components/ExpertSection";
import Hero from "./components/Hero";
import KeyFeature from "./components/KeyFeature";
import LogoSection from "./components/LogoSection";
import Table from "./components/Table";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <div className="w-full">
        <Hero />
        <LogoSection />
        <div className="bg-white">
          <Table />
        </div>
        <div className="bg-[#F4F6F8]">
          <ChooseUs />
        </div>
        <KeyFeature />
        <ExpertSection />
        <div>
          <LatestInsights />
        </div>
        <div className="bg-white">
          <CtaSection />
          <Footer />
        </div>
      </div>
    </>
  );
}
