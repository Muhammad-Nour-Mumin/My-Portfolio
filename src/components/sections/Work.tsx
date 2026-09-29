import { projects } from "@/data/portfolio";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { ProjectRow } from "@/components/ui/ProjectRow";

export function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-28 border-t border-border py-20 sm:py-28 lg:py-36"
    >
      <Container>
        <AnimatedSection>
          <SectionLabel>03. Work</SectionLabel>
          <SectionHeading id="work-heading" className="mt-4 max-w-2xl">
            Selected projects &amp; experiments.
          </SectionHeading>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-text-muted">
            A set of sample projects illustrating how I approach full-stack, AI and mobile work.
            Replace these with real projects in{" "}
            <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-sm">
              src/data/portfolio.ts
            </code>
            .
          </p>
        </AnimatedSection>

        <div className="mt-16 flex flex-col gap-24 sm:gap-28 lg:gap-32">
          {projects.map((project, index) => (
            <ProjectRow key={project.id} project={project} reversed={index % 2 === 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}
