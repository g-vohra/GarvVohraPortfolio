import { useEffect, useState } from "react";

export const TechBackground = () => {
  const [tokens, setTokens] = useState([]);
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    // Generate layout instantly on mount
    generateTokens();
    generateStreams();

    window.addEventListener("resize", generateTokens);
    return () => window.removeEventListener("resize", generateTokens);
  }, []);

  const generateTokens = () => {
    const numberOfTokens = Math.floor((window.innerWidth * window.innerHeight) / 18000);
    const techSymbols = ["< />", "{ }", "0", "1", "[]", "()", ";", "++"];

    const newTokens = Array.from({ length: numberOfTokens }, (_, i) => ({
      id: i,
      size: Math.random() * 6 + 11,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.25 + 0.1,
      duration: Math.random() * 4 + 4,
      delay: Math.random() * 2,
      symbol: techSymbols[Math.floor(Math.random() * techSymbols.length)],
    }));

    setTokens(newTokens);
  };

  const generateStreams = () => {
    const newStreams = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 40,
      delay: Math.random() * 10,
      duration: Math.random() * 2 + 1.5,
    }));

    setStreams(newStreams);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-dev-grid">
      <div className="absolute inset-0 bg-linear-to-b from-background/90 via-transparent to-background/90" />

      {/* Render Syntax Tokens */}
      {tokens.map((token) => (
        <div
          key={token.id}
          className="absolute font-mono text-primary animate-float-subtle select-none"
          style={{
            left: `${token.x}%`,
            top: `${token.y}%`,
            opacity: token.opacity,
            fontSize: `${token.size}px`,
            animationDuration: `${token.duration}s`,
            animationDelay: `${token.delay}s`,
          }}
        >
          {token.symbol}
        </div>
      ))}

      {/* Render Data Streams */}
      {streams.map((stream) => (
        <div
          key={stream.id}
          className="absolute bg-linear-to-r from-primary via-primary/40 to-transparent rounded-full"
          style={{
            width: `${stream.size * 70}px`,
            height: "1px",
            left: `${stream.x}%`,
            top: `${stream.y}%`,
            transform: "rotate(-10deg)",
            opacity: 0.3,
            animation: `fade-in-up ${stream.duration}s linear infinite`,
            animationDelay: `${stream.delay}s`,
          }}
        />
      ))}
    </div>
  );
};