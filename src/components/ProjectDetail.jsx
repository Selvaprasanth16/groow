import { X, Github, ExternalLink } from "lucide-react";

const ProjectDetail = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-background rounded-xl shadow-2xl border">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between p-6 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex-1">
            <div className="flex items-start gap-3">
              <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
              <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                {project.category}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Close modal"
          >
            <X size={20} className="text-muted-foreground" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About this project</h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="rounded-lg bg-muted px-3 py-1.5 text-sm font-medium text-muted-foreground border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Project Links</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors group"
              >
                <Github size={20} className="text-muted-foreground group-hover:text-foreground" />
                <div>
                  <p className="font-medium">View Source Code</p>
                  <p className="text-sm text-muted-foreground">GitHub Repository</p>
                </div>
                <ExternalLink size={16} className="ml-auto text-muted-foreground group-hover:text-foreground" />
              </a>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors group"
              >
                <ExternalLink size={20} className="text-muted-foreground group-hover:text-foreground" />
                <div>
                  <p className="font-medium">View Live Project</p>
                  <p className="text-sm text-muted-foreground">Deployed Application</p>
                </div>
                <ExternalLink size={16} className="ml-auto text-muted-foreground group-hover:text-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 p-6 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
