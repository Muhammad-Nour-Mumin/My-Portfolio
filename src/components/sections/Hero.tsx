import { hero, socialLinks } from "@/data/portfolio";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { DownloadCVButton } from "@/components/ui/DownloadCVButton";
import { SocialLink } from "@/components/ui/SocialLink";
import { Portrait } from "@/components/ui/Portrait";

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative flex min-h-[92svh] items-center pb-16 pt-32 sm:pt-36"
    >
      <Container className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <AnimatedSection>
            <p className="text-base font-medium text-accent">{hero.greeting}</p>
            <h1 className="mt-4 text-[clamp(2.25rem,5.5vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-text text-balance">
              {hero.heading}
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-body">
              {hero.supporting}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={hero.primaryCta.href} variant="primary">
                {hero.primaryCta.label}
              </Button>
              <DownloadCVButton variant="secondary" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="mt-10 flex items-center gap-3">
              {socialLinks.map((link) => (
                <SocialLink key={link.key} link={link} />
              ))}
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={150}>
          <Portrait />
        </AnimatedSection>
      </Container>
    </section>
  );
}
