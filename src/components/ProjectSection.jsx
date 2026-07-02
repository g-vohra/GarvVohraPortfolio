import { useState } from "react";

const projects = [
  {
    title: "Nutrition Education Platform",
    description:
      "Built a nutrition education website, integrating external APIs such as Google AI and Mapbox to automatically give healthy restaurant suggestions. Received a High Distinction (80) for this post graduate unit for web application development.",
    tags: [
      "Vue.js",
      "HTML/CSS/Bootstrap",
      "Node.js",
      "Google Cloud",
      "Firebase",
    ],
    github: "https://github.com/g-vohra/FIT5032-A1",
  },
  {
    title: "Portfolio Website",
    description:
      "Created my own Software Engineering portfolio website with an AI chat assistant, using React and Tailwind CSS and API function, showcasing my skills, projects, and experience in a visually appealing and user-friendly manner.",
    tags: ["React", "Tailwind", "JavaScript", "UI/UX"],
    github: "https://github.com/g-vohra/GarvVohraPortfolio",
  },
  {
    title: "AI with Python Harvard University",
    description:
      "Completed Harvard’s AI with Python course, building projects using machine learning concepts, search algorithms, and game AI.",
    tags: ["Python", "AI", "Pygame", "Machine Learning", "Natural Language Processing", "Algorithms", "Data Structures"],
    certificate: " https://tinyurl.com/garv-cs50 ",
  },
];

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="w-full py-20 px-6 md:px-12 bg-background text-foreground"
    >
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold text-glow">
          My Projects
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          A collection of work showcasing AI, web development, and automation.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="group gradient-border card-hover bg-card p-6 rounded-xl animate-fade-in"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-muted-foreground mb-4">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full border border-border bg-background/40"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Button */}
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-button inline-block text-sm"
              >
                GitHub
              </a>
            ) : (
              <a
                href={project.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-button inline-block text-sm"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}