import { personal, socialLinks } from "@/data/portfolio";
import { Container } from "@/components/layout/Container";
import { SocialLink } from "@/components/ui/SocialLink";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-semibold text-text">{personal.name}</p>
          <p className="text-sm text-text-muted">{personal.role}</p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <SocialLink key={link.key} link={link} className="h-9 w-9" />
          ))}
        </div>

        <p className="text-xs text-text-muted">
          © {year} {personal.name}. Built with Next.js.
        </p>
      </Container>
    </footer>
  );
}
