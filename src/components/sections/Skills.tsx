import { skills } from "@/data/portfolio";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { SkillBadge } from "@/components/ui/SkillBadge";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-28 border-t border-border py-20 sm:py-28 lg:py-36"
    >
      <Container>
        <AnimatedSection>
          <SectionLabel>04. Skills</SectionLabel>
          <SectionHeading id="skills-heading" className="mt-4 max-w-2xl">
            Technology Stack
          </SectionHeading>
        </AnimatedSection>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <AnimatedSection key={group.category} delay={index * 60}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-text-muted">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <SkillBadge key={item.name} item={item} />
                ))}
              </ul>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
