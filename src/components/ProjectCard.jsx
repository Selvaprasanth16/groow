import { ArrowRight } from "lucide-react";

const ProjectCard = ({ title, description, techStack, category }) => {
  return (
    <div className="gradient-border glow-card group rounded-xl bg-card p-6">
      <div className="mb-4 flex items-start justify-between">
        <h3 className="font-heading text-lg font-bold text-foreground flex-1">{title}</h3>
        <span className="shrink-0 ml-2 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
          {category}
        </span>
      </div>

      <p className="text-sm text-muted-foreground">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span key={tech} className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground">
            {tech}
          </span>
        ))}
      </div>

      <button className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all group-hover:gap-2.5">
        View Details <ArrowRight size={14} />
      </button>
    </div>
  );
};

export default ProjectCard;
