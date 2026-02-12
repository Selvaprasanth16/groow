import SectionWrapper from "../components/SectionWrapper";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/siteData";

const Projects = () => {
  return (
    <main className="pt-16">
      <SectionWrapper>
        <h1 className="text-center font-heading text-4xl font-bold md:text-5xl">
          Our <span className="gradient-text">Projects</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Explore the digital products we've built — from full-stack web applications to cloud infrastructure solutions.
        </p>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
};

export default Projects;
