import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import type { Project } from "@/data/portfolio";
import { ProjectMockup } from "@/components/ui/ProjectMockup";
import { AnimatedSection } from "@/components/layout/AnimatedSection";
import { cn } from "@/lib/utils";

function ProjectLink({
  href,
  label,
  icon,
}: {
  href?: string;
  label: string;
  icon: ReactNode;
}) {
  if (!href) {
    return (
      <span
        aria-disabled="true"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-text-muted/60"
        title={`${label} link will be added when available`}
      >
        {icon}
        {label}
        <span className="text-xs">(soon)</span>
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-text transition-colors hover:text-accent"
    >
      {icon}
      {label}
      <ArrowUpRight
        aria-hidden="true"
        className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
      />
    </a>
  );
}

export function ProjectRow({ project, reversed }: { project: Project; reversed: boolean }) {
  return (
    <AnimatedSection
      as="article"
      className={cn(
        "flex flex-col gap-10 md:flex-row md:items-center md:gap-14 lg:gap-20",
        reversed && "md:flex-row-reverse"
      )}
    >
      {/* Visual side */}
      <div className="group relative w-full md:w-1/2">
        <div
          aria-hidden="true"
          className="absolute -inset-3 -z-10 hidden rounded-[1.75rem] border border-border bg-surface-raised/60 sm:block"
        />
        <div className="aspect-[16/11] w-full overflow-hidden rounded-2xl shadow-[0_25px_50px_-25px_rgb(var(--shadow-color)/0.35)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:scale-[1.015]">
          <ProjectMockup variant={project.mockup} />
        </div>
      </div>

      {/* Info side */}
      <div className="w-full md:w-1/2">
        <span className="font-mono text-sm text-accent">{project.number}</span>
        <h3 className="mt-2 text-2xl font-semibold text-text sm:text-[1.75rem]">
          {project.name}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-text-body">{project.description}</p>
        <p className="mt-3 text-sm leading-relaxed text-text-muted">{project.purpose}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border px-3 py-1 text-xs font-medium text-text-muted transition-colors duration-200 hover:border-accent/60 hover:text-accent"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-6">
          <ProjectLink
            href={project.links.github}
            label="GitHub"
            icon={<SiGithub aria-hidden="true" className="h-4 w-4" />}
          />
          <ProjectLink
            href={project.links.demo}
            label="Live Demo"
            icon={<ArrowUpRight aria-hidden="true" className="h-4 w-4" />}
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
