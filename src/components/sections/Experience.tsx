import { experience, leadershipMetrics } from "@/data/portfolio";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { StatCard } from "@/components/ui/StatCard";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-28 border-t border-border py-20 sm:py-28 lg:py-36"
    >
      <Container>
        <AnimatedSection>
          <SectionLabel>02. Experience</SectionLabel>
          <SectionHeading id="experience-heading" className="mt-4 max-w-2xl">
            Leadership, responsibility &amp; growth.
          </SectionHeading>
        </AnimatedSection>

        <ol className="mt-14 flex flex-col gap-12 md:gap-14">
          {experience.map((entry, index) => (
            <AnimatedSection
              as="li"
              key={entry.id}
              delay={index * 60}
              className="flex flex-col gap-3 border-l-2 border-border pl-6 md:grid md:grid-cols-[160px_1fr] md:gap-10 md:border-l-0 md:pl-0"
            >
              <div className="md:border-r-2 md:border-border md:pr-8 md:text-right">
                <p className="font-mono text-sm font-medium text-accent">{entry.marker}</p>
                {entry.period ? (
                  <p className="mt-1 text-xs text-text-muted">{entry.period}</p>
                ) : null}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-text">{entry.role}</h3>
                <p className="mt-1 text-sm text-text-muted">{entry.organization}</p>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-text-body">
                  {entry.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </ol>

        <AnimatedSection
          delay={120}
          className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-10 lg:grid-cols-4"
        >
          {leadershipMetrics.map((metric, index) => (
            <StatCard key={metric.label} metric={metric} delay={index * 120} />
          ))}
        </AnimatedSection>
        <p className="mt-6 text-xs text-text-muted">
          The 5K+ figure refers to the wider Jamhuriya University student community, not JUTSA
          membership itself.
        </p>
      </Container>
    </section>
  );
}
