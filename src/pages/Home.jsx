import { Navbar } from "@/components/Navbar";
import { TechBackground } from "@/components/TechBackground";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <Navbar />
      <TechBackground />
      {/* Rest of your home page elements / sections */}
    </div>
  );
};