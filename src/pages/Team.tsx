import TeamCard from "../components/TeamCard";
import SectionWrapper from "../components/SectionWrapper";
import { teamMembers } from "../data/siteData";

const Team = () => {
  return (
    <main className="pt-16">
      <SectionWrapper>
        <h1 className="text-center font-heading text-4xl font-bold md:text-5xl">
          Our <span className="gradient-text">Team</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          Meet the developers behind Groow More — passionate builders with real industry experience.
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamCard
              key={member.id}
              id={member.id}
              name={member.name}
              role={member.role}
              shortBio={member.shortBio}
              skills={member.skills}
              experience={member.experience}
              instagramFollowers={(member as any).instagramFollowers}
              large
            />
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
};

export default Team;
