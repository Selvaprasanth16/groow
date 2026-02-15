import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, Globe, Server, Palette, Cloud, Settings, CheckCircle } from "lucide-react";
import { useEffect } from "react";
import SectionWrapper from "../components/SectionWrapper";
import StatCounter from "../components/StatCounter";
import TeamCard from "../components/TeamCard";
import ProjectCard from "../components/ProjectCard";
import ContactSection from "../components/ContactSection";
import { teamMembers, projects, services } from "../data/siteData";

const iconMap = {
  globe: <Globe size={28} />,
  server: <Server size={28} />,
  palette: <Palette size={28} />,
  cloud: <Cloud size={28} />,
  settings: <Settings size={28} />,
};

const whyUs = [
  "Clean Code Standards",
  "Scalable Architecture",
  "On-time Delivery",
  "Real Industry Experience",
  "Strong Technical Foundation",
];

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const sectionId = location.state?.scrollTo;
    if (!sectionId) return;

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    navigate("/", { replace: true, state: null });
  }, [location.state, navigate]);

  return (
    <main className="pt-16">
      {/* HERO */}
      <section id="home" className="relative overflow-hidden py-24 md:py-36 scroll-mt-20" style={{ background: 'var(--gradient-hero)' }}>
        <div className="hero-glow bg-primary left-1/4 top-0" />
        <div className="hero-glow bg-primary right-1/4 bottom-0" />
        <div className="container relative z-10 text-center">
          <h1 className="animate-fade-up font-heading text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            We Build Scalable &<br />
            <span className="gradient-text">High-Performance</span> Digital Products
          </h1>
          <p className="animate-fade-up-delay-1 mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            From Idea to Deployment — We Deliver Complete Full Stack Solutions
          </p>
          <div className="animate-fade-up-delay-2 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" })}
              className="gradient-bg inline-flex items-center gap-2 rounded-lg px-7 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              View Our Work <ArrowRight size={16} />
            </button>
            <button
              type="button"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })}
              className="inline-flex items-center gap-2 rounded-lg border border-border px-7 py-3 font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Start a Project
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <SectionWrapper className="border-y border-border/50 bg-muted/20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <StatCounter end={10} suffix="+" label="Projects Completed" />
          <StatCounter end={2} suffix="+" label="Years Experience" />
          <StatCounter end={3} suffix="" label="Core Developers" />
          <StatCounter end={20} suffix="K+" label="Social Reach" />
        </div>
      </SectionWrapper>

      {/* ABOUT */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            About <span className="gradient-text">Groow More</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            We are a passionate team of full-stack developers who specialize in building
            production-ready digital products. Our approach combines clean architecture,
            scalable deployment practices, and client-focused development to deliver
            solutions that truly grow businesses. Every line of code we write is
            purposeful, maintainable, and built for the long term.
          </p>
        </div>
      </SectionWrapper>

      {/* SERVICES */}
      <SectionWrapper className="bg-muted/20">
        <h2 className="text-center font-heading text-3xl font-bold md:text-4xl">
          Our <span className="gradient-text">Services</span>
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="gradient-border glow-card rounded-xl bg-card p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {iconMap[service.icon]}
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* TEAM PREVIEW */}
      <SectionWrapper id="team" className="scroll-mt-20">
        <h2 className="text-center font-heading text-3xl font-bold md:text-4xl">
          Meet the <span className="gradient-text">Team</span>
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamCard
              key={member.id}
              id={member.id}
              name={member.name}
              role={member.role}
              shortBio={member.shortBio}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* PROJECTS */}
      <SectionWrapper id="projects" className="bg-muted/20 scroll-mt-20">
        <h2 className="text-center font-heading text-3xl font-bold md:text-4xl">
          Project <span className="gradient-text">Showcase</span>
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View All Projects <ArrowRight size={14} />
          </Link>
        </div>
      </SectionWrapper>

      {/* WHY CHOOSE US */}
      <SectionWrapper>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Why Choose <span className="gradient-text">Us</span>
          </h2>
          <div className="mt-10 space-y-4 text-left">
            {whyUs.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg bg-card p-4">
                <CheckCircle size={20} className="shrink-0 text-primary" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* FINAL CTA */}
      <SectionWrapper id="contact" className="bg-muted/20 scroll-mt-20">
        <ContactSection />
      </SectionWrapper>
    </main>
  );
};

export default Home;
