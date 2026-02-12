import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface TeamCardProps {
  id: string;
  name: string;
  role: string;
  shortBio: string;
  large?: boolean;
  skills?: string[];
  experience?: string;
  instagramFollowers?: string;
}

const TeamCard = ({ id, name, role, shortBio, large, skills, experience, instagramFollowers }: TeamCardProps) => {
  return (
    <div className="gradient-border glow-card group rounded-xl bg-card p-6 md:p-8">
      <div className={`mx-auto mb-5 flex items-center justify-center rounded-full gradient-bg ${large ? "h-28 w-28" : "h-20 w-20"}`}>
        <span className="font-heading text-2xl font-bold text-primary-foreground">
          {name.split(" ")[0][0]}{name.split(" ").length > 1 ? name.split(" ")[1]?.[0] ?? "" : ""}
        </span>
      </div>

      <h3 className="font-heading text-lg font-bold text-foreground">{name}</h3>
      <p className="mt-1 text-sm font-medium text-primary">{role}</p>

      {experience && (
        <span className="mt-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {experience}
        </span>
      )}

      {instagramFollowers && (
        <span className="mt-2 ml-2 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
          📸 {instagramFollowers} Followers
        </span>
      )}

      <p className="mt-3 text-sm text-muted-foreground">{shortBio}</p>

      {skills && large && (
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.slice(0, 6).map((skill) => (
            <span key={skill} className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground">
              {skill}
            </span>
          ))}
        </div>
      )}

      <Link
        to={`/team/${id}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all group-hover:gap-2.5"
      >
        View Profile <ArrowRight size={14} />
      </Link>
    </div>
  );
};

export default TeamCard;
