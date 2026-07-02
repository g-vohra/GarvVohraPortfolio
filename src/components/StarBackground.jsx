import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  
  // FIXED: Initialize identically to the toggle so there's no race condition on first load
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme === "dark" : true; // Defaults to true (dark mode)
  });

  useEffect(() => {
    // Set up MutationObserver to watch for manual toggle changes
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // If we are in dark mode, generate the layout instantly
    if (isDarkMode) {
      generateStars();
      generateMeteors();
    }

    const handleResize = () => {
      if (document.documentElement.classList.contains("dark")) {
        generateStars();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, [isDarkMode]);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 18000
    );

    const techSymbols = ["< />", "{ }", "0", "1", "[]", "()", ";", "++"];
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 6 + 11, 
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.25 + 0.1, 
        animationDuration: Math.random() * 4 + 4,
        symbol: techSymbols[Math.floor(Math.random() * techSymbols.length)],
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 5;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 40, 
        delay: Math.random() * 10,
        animationDuration: Math.random() * 2 + 1.5, 
      });
    }

    setMeteors(newMeteors);
  };

  // If light mode is active, return absolutely nothing (completely blank white canvas)
  if (!isDarkMode) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-dev-grid">
      <div className="absolute inset-0 bg-linear-to-b from-background/90 via-transparent to-background/90" />

      {/* Render Syntax Elements */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute font-mono text-primary animate-float-subtle select-none"
          style={{
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            fontSize: star.size + "px",
            animationDuration: star.animationDuration + "s",
            animationDelay: Math.random() * 2 + "s",
          }}
        >
          {star.symbol}
        </div>
      ))}

      {/* Render Data Streams */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="absolute bg-linear-to-r from-primary via-primary/40 to-transparent rounded-full"
          style={{
            width: meteor.size * 70 + "px",
            height: "1px", 
            left: meteor.x + "%",
            top: meteor.y + "%",
            transform: "rotate(-10deg)", 
            opacity: 0.3,
            animation: `fade-in-up ${meteor.animationDuration}s linear infinite`,
            animationDelay: meteor.delay + "s",
          }}
        />
      ))}
    </div>
  );
};