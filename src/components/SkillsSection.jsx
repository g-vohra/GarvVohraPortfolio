import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Languages
  { name: "Python", category: "languages" },
  { name: "Java", category: "languages" },
  { name: "JavaScript", category: "languages" },
  { name: "C#", category: "languages" },
  { name: "SQL", category: "languages" },

  // Frontend
  { name: "React", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Bootstrap", category: "frontend" },
  { name: "Vue.js", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "ASP.NET MVC", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "Firebase", category: "backend" },
  { name: "Microsoft Azure AI", category: "backend" },

  // Tools
  { name: "GitHub", category: "tools" },
  { name: "Azure DevOps", category: "tools" },
  { name: "TeamCity", category: "tools" },
  { name: "Oracle Database", category: "tools" },
  { name: "SQL Server Management Studio", category: "tools" },
  { name: "Source Tree", category: "tools" },
];

const categories = [
  "all",
  "languages",
  "frontend",
  "backend",
  "tools",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) =>
      activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Technical <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card border border-border rounded-xl p-5 text-center card-hover"
            >
              <p className="font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};