import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projects } from "../data/siteData";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === parseInt(projectId));

  if (!project) {
    return (
      <main className="pt-16">
        <div className="container px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Project Not Found</h1>
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-16">
      <div className="container px-4 py-6 sm:py-10">
        <div className="mx-auto w-full max-w-4xl">
          {/* Back Button */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 mb-5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          {/* Project Header */}
          <div className="mb-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <div className="min-w-0 flex-1">
                <h1 className="text-2xl sm:text-4xl font-bold text-foreground leading-tight break-words">
                  {project.title}
                </h1>
                <div className="mt-3">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs sm:text-sm font-medium text-primary">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies Section */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg bg-muted px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-muted-foreground border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Links */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Project Links</h2>
            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 rounded-xl border bg-card hover:bg-accent/50 transition-colors group"
              >
                <Github size={20} className="mt-0.5 text-muted-foreground group-hover:text-foreground" />
                <div className="min-w-0">
                  <p className="font-medium leading-none">View Source Code</p>
                  <p className="mt-1 text-sm text-muted-foreground">GitHub Repository</p>
                </div>
                <ExternalLink size={16} className="ml-auto mt-1 text-muted-foreground group-hover:text-foreground" />
              </a>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 rounded-xl border bg-card hover:bg-accent/50 transition-colors group"
              >
                <ExternalLink size={20} className="mt-0.5 text-muted-foreground group-hover:text-foreground" />
                <div className="min-w-0">
                  <p className="font-medium leading-none">View Live Project</p>
                  <p className="mt-1 text-sm text-muted-foreground">Deployed Application</p>
                </div>
                <ExternalLink size={16} className="ml-auto mt-1 text-muted-foreground group-hover:text-foreground" />
              </a>
            </div>
          </div>

          {/* Additional Project Details */}
          <div className="border-t pt-8 pb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Project Overview</h2>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                This project showcases our expertise in building modern web applications using cutting-edge technologies.
                The implementation demonstrates best practices in software development, including clean code architecture,
                responsive design, and optimized performance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Key features include scalable architecture, efficient data management, and seamless user experience across all devices.
              </p>

              <div className="pt-2 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <div className="p-4 rounded-xl border bg-card">
                  <h3 className="font-semibold">Scalable Architecture</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Built to handle growth and increased user demand</p>
                </div>
                <div className="p-4 rounded-xl border bg-card">
                  <h3 className="font-semibold">Modern Tech Stack</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Using the latest technologies and best practices</p>
                </div>
                <div className="p-4 rounded-xl border bg-card">
                  <h3 className="font-semibold">Responsive Design</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Optimized for all devices and screen sizes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
