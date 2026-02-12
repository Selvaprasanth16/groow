interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  category: string;
}

const ProjectCard = ({ title, description, techStack, category }: ProjectCardProps) => {
  return (
    <div className="gradient-border glow-card group rounded-xl bg-card p-6">
      <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-muted/50">
        <span className="font-heading text-3xl font-bold gradient-text opacity-40">
          {title.split(" ").map(w => w[0]).join("")}
        </span>
      </div>

      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
        {category}
      </span>

      <h3 className="mt-3 font-heading text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {techStack.map((tech) => (
          <span key={tech} className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
