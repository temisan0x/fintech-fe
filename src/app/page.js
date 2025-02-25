import ChooseUs from "./components/Choose";
import Hero from "./components/Hero";
import LogoSection from "./components/LogoSection";
import Table from "./components/Table";

export default function Home() {
  return (
    <>
      <div className="w-full">
        <Hero />
        <LogoSection />
        <div className="bg-white">
          <Table />
        </div>
        <ChooseUs />
      </div>
    </>
  );
}


/** variable? - a location where values are stored */
/**is array an object? */