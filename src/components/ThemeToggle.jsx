import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme === "dark" : true; 
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-md transition-colors duration-200",
        "bg-card border border-border hover:bg-accent focus:outline-hidden"
      )}
      aria-label="Toggle display theme"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-emerald-400" /> 
      ) : (
        <Moon className="h-5 w-5 text-blue-600" />    
      )}
    </button>
  );
};