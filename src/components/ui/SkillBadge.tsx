import type { IconType } from "react-icons";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFastapi,
  SiGooglegemini,
  SiFlutter,
  SiDart,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { BrainCircuit, Database } from "lucide-react";
import type { SkillIconKey, SkillItem } from "@/data/portfolio";

const iconMap: Record<SkillIconKey, IconType | typeof BrainCircuit> = {
  react: SiReact,
  javascript: SiJavascript,
  html5: SiHtml5,
  css3: FaCss3Alt,
  tailwind: SiTailwindcss,
  bootstrap: SiBootstrap,
  nodejs: SiNodedotjs,
  express: SiExpress,
  python: SiPython,
  fastapi: SiFastapi,
  // RAG and ChromaDB have no widely recognized brand mark yet, so a
  // neutral, meaningful icon is used instead of an inaccurate logo.
  rag: BrainCircuit,
  gemini: SiGooglegemini,
  chromadb: Database,
  flutter: SiFlutter,
  dart: SiDart,
  mongodb: SiMongodb,
  mysql: SiMysql,
  git: SiGit,
  github: SiGithub,
  vscode: VscVscode,
};

export function SkillBadge({ item }: { item: SkillItem }) {
  const Icon = iconMap[item.icon];

  return (
    <li className="group flex items-center gap-2.5 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-text-body transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:text-text hover:shadow-[0_10px_24px_-16px_rgb(var(--shadow-color)/0.5)]">
      <Icon
        aria-hidden="true"
        className="h-4 w-4 shrink-0 text-text-muted transition-all duration-200 group-hover:scale-110 group-hover:text-accent"
      />
      <span className="font-medium">{item.name}</span>
    </li>
  );
}
