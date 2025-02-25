import AboutSection from "../components/About";
import Community from "../components/Community";
import FeaturedCard from "../components/FeaturedCard";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main className="mx-auto  w-full px-4 py-10 flex flex-col items-center">
      <AboutSection />
      <FeaturedCard
        imageUrl="https://www.blockfuselabs.com/assets/Frame-10-1-CCGELdeU.png"
        title="At Blockfuse Labs, we see education as a journey. Whether you're new to blockchain or an experienced developer, we offer resources, expert instructors, and tools for every stage of your growth."
        description="   From developers and innovators to thought leaders in the Web3 space, our
          graduates are transforming the future of technology."
      />
      <Community />
      <div className="w-full">
        <Footer />
      </div>
    </main>
  );
}
