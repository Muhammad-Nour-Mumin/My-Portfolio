import { Mail } from "lucide-react";
import { SiGithub, SiFacebook, SiWhatsapp } from "react-icons/si";
import type { IconType } from "react-icons";
import type { SocialLink as SocialLinkType } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const iconMap: Record<SocialLinkType["key"], IconType> = {
  github: SiGithub,
  facebook: SiFacebook,
  whatsapp: SiWhatsapp,
  email: Mail as unknown as IconType,
};

export function SocialLink({
  link,
  className,
}: {
  link: SocialLinkType;
  className?: string;
}) {
  const Icon = iconMap[link.key];

  return (
    <a
      href={link.href}
      aria-label={link.label}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-body transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent",
        className
      )}
    >
      <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
    </a>
  );
}
