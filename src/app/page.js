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
      </div>
    </>
  );
}
