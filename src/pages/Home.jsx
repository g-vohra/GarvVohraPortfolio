import { Navbar } from "@/components/Navbar";
import { TechBackground } from "@/components/TechBackground";
import { HeroSection } from "../components/HeroSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <TechBackground />
      <Navbar />
      <main>
        <HeroSection />
      </main>

    </div>
  );
};