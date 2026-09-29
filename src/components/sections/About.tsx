import { GraduationCap, MapPin, Target } from "lucide-react";
import { about, personal } from "@/data/portfolio";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { DownloadCVButton } from "@/components/ui/DownloadCVButton";
import { ViewCertificatesButton } from "@/components/ui/ViewCertificatesButton";

const factIcons = [GraduationCap, MapPin, Target];

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-28 py-20 sm:py-28 lg:py-36">
      <Container>
        <AnimatedSection>
          <SectionLabel>{about.eyebrow}</SectionLabel>
          <SectionHeading id="about-heading" className="mt-4 max-w-2xl">
            {about.heading}
          </SectionHeading>
        </AnimatedSection>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <AnimatedSection delay={80} className="flex flex-col gap-5">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed text-text-body">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap gap-3 pt-2">
              <DownloadCVButton variant="secondary" />
              <ViewCertificatesButton variant="ghost" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={160}>
            <dl className="flex flex-col divide-y divide-border rounded-2xl border border-border bg-surface">
              {about.facts.map((fact, index) => {
                const Icon = factIcons[index] ?? Target;
                return (
                  <div key={fact.label} className="flex gap-4 p-5">
                    <Icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wide text-text-muted">
                        {fact.label}
                      </dt>
                      <dd className="mt-1 whitespace-pre-line text-sm leading-relaxed text-text">
                        {fact.value}
                      </dd>
                    </div>
                  </div>
                );
              })}
            </dl>
            <p className="mt-4 text-xs text-text-muted">
              CV file: <span className="font-mono">{personal.cvFileName}</span>
              {personal.certificatesPath && (
                <>
                  {" · "}Certificates:{" "}
                  <span className="font-mono">{personal.certificatesFileName}</span>
                </>
              )}
            </p>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
