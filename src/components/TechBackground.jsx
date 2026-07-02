import { useEffect, useState } from "react";

export const TechBackground = () => {
  const [tokens, setTokens] = useState([]);
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    generateTokens();
    generateStreams();

    const handleResize = () => {
      generateTokens();
      generateStreams();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateTokens = () => {
    const numberOfTokens = Math.floor(
      (window.innerWidth * window.innerHeight) / 18000
    );

    const techSymbols = [
      "< />",
      "{ }",
      "0",
      "1",
      "[]",
      "()",
      ";",
      "++",
      "===",
      "=>",
      "</>",
      "&&",
    ];

    const newTokens = Array.from({ length: numberOfTokens }, (_, i) => ({
      id: i,
      symbol: techSymbols[Math.floor(Math.random() * techSymbols.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 12,
      opacity: Math.random() * 0.2 + 0.08,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 8,
      direction: Math.random() > 0.5 ? "normal" : "reverse",
    }));

    setTokens(newTokens);
  };

  const generateStreams = () => {
    const newStreams = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      width: Math.random() * 120 + 80,
      x: -20,
      y: Math.random() * 100,
      duration: Math.random() * 6 + 8,
      delay: Math.random() * 8,
      opacity: Math.random() * 0.2 + 0.1,
    }));

    setStreams(newStreams);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-dev-grid">
      <div className="absolute inset-0 bg-linear-to-b from-background/90 via-transparent to-background/90" />

      {/* Floating Tech Symbols */}
      {tokens.map((token) => (
        <div
          key={token.id}
          className="absolute font-mono text-primary select-none"
          style={{
            left: `${token.x}%`,
            top: `${token.y}%`,
            fontSize: `${token.size}px`,
            opacity: token.opacity,
            animation: `float ${token.duration}s ease-in-out ${token.delay}s infinite`,
            animationDirection: token.direction,
            willChange: "transform",
          }}
        >
          {token.symbol}
        </div>
      ))}

      {/* Moving Data Streams */}
      {streams.map((stream) => (
        <div
          key={stream.id}
          className="absolute bg-linear-to-r from-primary via-primary/40 to-transparent rounded-full"
          style={{
            width: `${stream.width}px`,
            height: "1px",
            top: `${stream.y}%`,
            left: "-15%",
            opacity: stream.opacity,
            transform: "rotate(-10deg)",
            animation: `streamMove ${stream.duration}s linear ${stream.delay}s infinite`,
            willChange: "transform",
          }}
        />
      ))}

      {/* Extra glowing dots */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-primary"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.25,
            animation: `pulse-subtle ${Math.random() * 4 + 3}s ease-in-out infinite`,
          }}
        />
      ))}

      <style>{`
        @keyframes streamMove {
          0% {
            transform: translateX(0) rotate(-10deg);
            opacity: 0;
          }

          10% {
            opacity: .3;
          }

          90% {
            opacity: .3;
          }

          100% {
            transform: translateX(130vw) rotate(-10deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};