import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Graduate Software Engineer
            </h3>

            <p className="text-muted-foreground">
              I'm a Software Engineering graduate from Monash University with
              hands-on industry experience developing full-stack applications,
              REST APIs, and AI-powered solutions. I enjoy building scalable,
              user-focused software that solves real-world problems.
            </p>

            <p className="text-muted-foreground">
              Through internships at Bendigo Kangan Institute and NuMosaic
              Group, I've worked with technologies including React, Node.js,
              Python, C#, SQL Server, Azure DevOps, and Microsoft Azure AI.
              I'm passionate about continuous learning and excited to contribute
              to innovative engineering teams.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full-Stack Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building responsive web applications using React, Node.js,
                    Python, C#, SQL, and modern development frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    AI & Cloud Technologies
                  </h4>
                  <p className="text-muted-foreground">
                    Developing AI-powered solutions with Microsoft Azure AI,
                    Google Cloud, and REST APIs to automate workflows and
                    improve business processes.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Agile Software Engineering
                  </h4>
                  <p className="text-muted-foreground">
                    Experienced collaborating in Agile teams using Git,
                    Azure DevOps, CI/CD pipelines, and software testing to
                    deliver high-quality applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};