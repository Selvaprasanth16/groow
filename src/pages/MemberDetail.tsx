import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Award, Calendar, Code, Mail } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import { teamMembers } from "../data/siteData";

const MemberDetail = () => {
  const { memberId } = useParams();
  const member = teamMembers.find((m) => m.id === memberId);

  if (!member) {
    return (
      <main className="pt-16">
        <SectionWrapper>
          <div className="text-center">
            <h1 className="font-heading text-3xl font-bold">Member not found</h1>
            <Link to="/team" className="mt-4 inline-block text-primary hover:underline">
              ← Back to Team
            </Link>
          </div>
        </SectionWrapper>
      </main>
    );
  }

  const m = member as any;

  return (
    <main className="pt-16">
      <SectionWrapper>
        <Link to="/team" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft size={16} /> Back to Team
        </Link>

        <div className="grid gap-10 lg:grid-cols-3">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="rounded-xl bg-card p-8 text-center">
              <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full gradient-bg">
                <span className="font-heading text-4xl font-bold text-primary-foreground">
                  {member.name.split(" ")[0][0]}{member.name.split(" ").length > 1 ? member.name.split(" ")[1][0] : ""}
                </span>
              </div>
              <h1 className="mt-5 font-heading text-2xl font-bold">{member.name}</h1>
              <p className="mt-1 text-primary font-medium">{member.role}</p>

              <span className="mt-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
                {member.experience}
              </span>

              {m.instagramFollowers && (
                <div className="mt-3">
                  <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent">
                    📸 {m.instagramFollowers} Followers
                  </span>
                </div>
              )}

              <Link
                to="/contact"
                className="gradient-bg mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                <Mail size={14} /> Get in Touch
              </Link>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Bio */}
            <div>
              <h2 className="font-heading text-xl font-bold flex items-center gap-2">
                <Code size={20} className="text-primary" /> About
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{member.bio}</p>
            </div>

            {/* Skills */}
            <div>
              <h2 className="font-heading text-xl font-bold">Tech Stack</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <span key={skill} className="rounded-lg bg-muted px-3 py-1.5 text-sm text-muted-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            {m.certifications && (
              <div>
                <h2 className="font-heading text-xl font-bold flex items-center gap-2">
                  <Award size={20} className="text-primary" /> Certifications
                </h2>
                <div className="mt-4 space-y-2">
                  {m.certifications.map((cert: string) => (
                    <div key={cert} className="rounded-lg bg-card border border-border p-4 text-sm text-foreground">
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Timeline */}
            <div>
              <h2 className="font-heading text-xl font-bold flex items-center gap-2">
                <Calendar size={20} className="text-primary" /> Experience Timeline
              </h2>
              <div className="mt-4 space-y-4">
                {member.timeline.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-3 w-3 rounded-full gradient-bg" />
                      {idx < member.timeline.length - 1 && (
                        <div className="w-px flex-1 bg-border" />
                      )}
                    </div>
                    <div className="pb-6">
                      <span className="text-xs font-semibold text-primary">{item.year}</span>
                      <p className="text-sm text-muted-foreground">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Contributions */}
            <div>
              <h2 className="font-heading text-xl font-bold">Project Contributions</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {member.projects.map((proj) => (
                  <div key={proj} className="rounded-lg bg-card border border-border p-4 text-sm text-foreground">
                    {proj}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
};

export default MemberDetail;
