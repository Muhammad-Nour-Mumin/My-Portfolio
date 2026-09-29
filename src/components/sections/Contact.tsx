import { Mail, MapPin } from "lucide-react";
import { SiGithub, SiFacebook, SiWhatsapp } from "react-icons/si";
import { contact, personal, socialLinks } from "@/data/portfolio";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { Button } from "@/components/ui/Button";

const github = socialLinks.find((link) => link.key === "github")!;
const facebook = socialLinks.find((link) => link.key === "facebook")!;
const whatsapp = socialLinks.find((link) => link.key === "whatsapp")!;

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-28 border-t border-border py-20 sm:py-28 lg:py-36"
    >
      <Container className="max-w-3xl text-center">
        <AnimatedSection>
          <SectionLabel>{contact.eyebrow}</SectionLabel>
          <SectionHeading id="contact-heading" className="mt-4">
            {contact.heading}
          </SectionHeading>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-text-body">
            {contact.supporting}
          </p>
        </AnimatedSection>

        <AnimatedSection
          delay={100}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button href={`mailto:${personal.email}`} variant="primary">
            <Mail aria-hidden="true" className="h-4 w-4" />
            Email Me
          </Button>
          <Button
            href={whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            <SiWhatsapp aria-hidden="true" className="h-4 w-4" />
            WhatsApp
          </Button>
          <Button href={github.href} target="_blank" rel="noopener noreferrer" variant="secondary">
            <SiGithub aria-hidden="true" className="h-4 w-4" />
            GitHub
          </Button>
          <Button
            href={facebook.href}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            <SiFacebook aria-hidden="true" className="h-4 w-4" />
            Facebook
          </Button>
        </AnimatedSection>

        <AnimatedSection
          delay={160}
          className="mt-12 flex flex-col items-center justify-center gap-3 text-sm text-text-muted sm:flex-row sm:gap-8"
        >
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-accent"
          >
            <Mail aria-hidden="true" className="h-4 w-4" />
            {personal.email}
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin aria-hidden="true" className="h-4 w-4" />
            {personal.location}
          </span>
        </AnimatedSection>
      </Container>
    </section>
  );
}
