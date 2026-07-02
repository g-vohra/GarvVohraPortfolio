import { Navbar } from "@/components/Navbar";
import { TechBackground } from "@/components/TechBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <TechBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
      </main>

    </div>
  );
};