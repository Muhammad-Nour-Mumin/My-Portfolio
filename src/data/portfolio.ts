/**
 * Centralized portfolio content.
 *
 * This file is the single source of truth for every piece of editable text,
 * link, and structured content used across the site. Components should read
 * from here rather than hardcoding copy, so the whole portfolio can be kept
 * up to date by editing this file only.
 */

export type NavItem = {
  number: string;
  label: string;
  href: string;
};

export type SocialKey = "github" | "facebook" | "whatsapp" | "email";

export type SocialLink = {
  key: SocialKey;
  label: string;
  href: string;
  external: boolean;
};

export type SkillIconKey =
  | "react"
  | "javascript"
  | "html5"
  | "css3"
  | "tailwind"
  | "bootstrap"
  | "nodejs"
  | "express"
  | "python"
  | "fastapi"
  | "rag"
  | "gemini"
  | "chromadb"
  | "flutter"
  | "dart"
  | "mongodb"
  | "mysql"
  | "git"
  | "github"
  | "vscode";

export type SkillItem = {
  name: string;
  icon: SkillIconKey;
};

export type SkillCategory = {
  category: string;
  items: SkillItem[];
};

export type ExperienceEntry = {
  id: string;
  marker: string; // e.g. "JUTSA 10" or "Team Caawiye"
  role: string;
  organization: string;
  /** Leave empty until real dates are available — do not invent dates. */
  period: string;
  description: string;
};

export type LeadershipMetric = {
  value: string;
  label: string;
};

export type ProjectLinks = {
  github?: string;
  demo?: string;
};

export type ProjectMockupVariant = "dashboard" | "assistant" | "analytics" | "mobile";

export type Project = {
  id: string;
  number: string;
  name: string;
  description: string;
  purpose: string;
  stack: string[];
  links: ProjectLinks;
  mockup: ProjectMockupVariant;
};

export const personal = {
  name: "Mohamed Nur Mumin",
  firstName: "Mohamed",
  initials: "MN",
  brandMark: "MOHAMED.",
  role: "Full-Stack Web Developer",
  location: "Mogadishu, Somalia",
  email: "maxamednuurmuminmumin@gmail.com",
  cvPath: "/Mohamed-Nur-Mumin-CV.pdf",
  cvFileName: "Mohamed-Nur-Mumin-CV.pdf",
  whatsapp: "252618833500",
  /**
   * Combine every certificate into a single PDF and drop it at
   * `public/Mohamed-Nur-Mumin-Certificates.pdf` (replacing the placeholder
   * that ships by default). Anyone can then view it by clicking
   * "View Certificates" — it opens in a new tab, no download required. Set
   * to `null` to hide the button entirely.
   */
  certificatesPath: "/Mohamed-Nur-Mumin-Certificates.pdf" as string | null,
  certificatesFileName: "Mohamed-Nur-Mumin-Certificates.pdf",
  /**
   * Drop a professional portrait at `public/portrait.jpg` (recommended
   * ~960x1200px) and set this to "/portrait.jpg" to display it. Until then,
   * a coded monogram placeholder is shown instead.
   */
  portraitSrc: "/mohamed-portrait.jpg" as string | null,
  portraitAlt: "Portrait of Mohamed Nur Mumin",
  positioning:
    "Full-Stack Web Developer and Computer Science graduate building modern digital products, backend systems, mobile applications and AI-powered solutions.",
  education: {
    degree: "Bachelor of Computer Science",
    institution: "Jamhuriya University",
  },
} as const;

export const socialLinks: SocialLink[] = [
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/Muhammad-Nour-Mumin",
    external: true,
  },
  {
    key: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/share/1Bj6EhuMc5/",
    external: true,
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    href: `https://wa.me/${personal.whatsapp}`,
    external: true,
  },
  {
    key: "email",
    label: "Email",
    href: `mailto:${personal.email}`,
    external: false,
  },
];

/**
 * Section hrefs are root-relative (e.g. "/#about") rather than bare hash
 * fragments (e.g. "#about"). A bare "#about" resolves against whatever the
 * *current* URL path happens to be, so clicking it from a non-home route
 * (or a stale tab) would produce something like "/dashboard#about" and
 * 404. Rooting the href at "/" guarantees it always resolves to the
 * homepage section regardless of the current route.
 */
export const navigation: NavItem[] = [
  { number: "01", label: "About", href: "/#about" },
  { number: "02", label: "Experience", href: "/#experience" },
  { number: "03", label: "Work", href: "/#work" },
  { number: "04", label: "Skills", href: "/#skills" },
  { number: "05", label: "Contact", href: "/#contact" },
];

export const hero = {
  greeting: `Hello, I'm ${personal.firstName}.`,
  heading: personal.role,
  supporting:
    "Computer Science graduate based in Mogadishu, building modern web applications, backend systems, mobile experiences and AI-powered solutions.",
  primaryCta: { label: "View My Work", href: "/#work" },
  secondaryCta: { label: "Download CV", href: personal.cvPath },
};

export const about = {
  eyebrow: "01. About",
  heading: "Building technology with purpose.",
  paragraphs: [
    `I'm ${personal.name}, a Computer Science graduate and Full-Stack Web Developer based in Mogadishu, Somalia.`,
    "My interests span frontend and backend development, mobile applications, data-driven systems and AI-powered software. I enjoy taking ideas from concept to functional products while continuously expanding my technical knowledge.",
    "Beyond development, I have held multiple leadership roles at Jamhuriya University, giving me experience in communication, coordination, teamwork and organizational leadership.",
  ],
  facts: [
    {
      label: "Education",
      value: `${personal.education.degree}\n${personal.education.institution}`,
    },
    { label: "Location", value: personal.location },
    {
      label: "Focus",
      value: "Full-Stack Development\nMobile Apps\nMachine Learning & Data Science",
    },
  ],
};

export const experience: ExperienceEntry[] = [
  {
    id: "gargaar-hospital",
    marker: "GarGaar Hospital",
    role: "Software Developer",
    organization: "GarGaar Specialist Hospital",
    period: "2025-2026",
    description:
      "Architected and developed a custom software system for GarGaar Specialist Hospital, streamlining patient records, scheduling and internal workflows to improve day-to-day operational efficiency.",
  },
  {
    id: "jutsa-10",
    marker: "JUTSA 10",
    role: "President",
    organization: "Jamhuriya University Technology Students Association",
    period: "2024-2025",
    description:
      "Directed the Jamhuriya University Technology Students Association, setting strategic priorities and leading cross-functional teams to deliver student-focused technology initiatives and strengthen the wider technology student community.",
  },
  {
    id: "jamhuriya-admission-internship",
    marker: "Admission Office",
    role: "Intern",
    organization: "Jamhuriya University Admission Office",
    period: "Sep - Dec 2025",
    description:
      "Supported the university's Admission Office for three months, assisting with applicant processing, record management and front-line student communication to help ensure a smooth admissions experience.",
  },
  {
    id: "caawiye",
    marker: "Team Caawiye",
    role: "Chairman",
    organization: "Caawiye Office",
    period: "2023-2024",
    description:
      "Chaired the Caawiye Office's technical support team, overseeing IT support and software solution delivery, resolving technical issues, and coordinating a team dedicated to reliable, timely assistance.",
  },
];

export const leadershipMetrics: LeadershipMetric[] = [
  { value: "5", label: "Leadership & professional roles" },
  { value: "2+", label: "Years of experience" },
  { value: "5K+", label: "University student community" },
  { value: "10+", label: "Certificates earned" },
];

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "JavaScript", icon: "javascript" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Bootstrap", icon: "bootstrap" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "Python", icon: "python" },
      { name: "FastAPI", icon: "fastapi" },
    ],
  },
  {
    category: "AI & Machine Learning",
    items: [
      { name: "Python", icon: "python" },
      { name: "RAG", icon: "rag" },
      { name: "Gemini API", icon: "gemini" },
      { name: "ChromaDB", icon: "chromadb" },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "Flutter", icon: "flutter" },
      { name: "Dart", icon: "dart" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
    ],
  },
  {
    category: "Development Tools",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "vscode" },
    ],
  },
];

/**
 * Sample projects — replace name, description, stack, and links with real
 * project data. Nothing else in the codebase needs to change.
 */
export const projects: Project[] = [
  {
    id: "business-platform",
    number: "01",
    name: "Business Management Platform",
    description:
      "A full-stack operational dashboard designed to help businesses organize users, records, workflows and reporting from one centralized interface.",
    purpose:
      "Built to explore how a single dashboard can bring scattered business operations — users, records and reporting — into one consistent workflow.",
    stack: ["React", "Next.js", "Node.js", "MongoDB"],
    links: {},
    mockup: "dashboard",
  },
  {
    id: "ai-knowledge-assistant",
    number: "02",
    name: "AI Knowledge Assistant",
    description:
      "An AI-powered knowledge assistant using retrieval-augmented generation to search contextual data and provide relevant responses.",
    purpose:
      "Built to test retrieval-augmented generation for grounding AI responses in real, contextual data rather than general knowledge alone.",
    stack: ["Python", "RAG", "Gemini API", "ChromaDB", "FastAPI"],
    links: {},
    mockup: "assistant",
  },
  {
    id: "data-analytics-dashboard",
    number: "03",
    name: "Data Analytics Dashboard",
    description:
      "An interactive analytics platform that turns structured data into understandable metrics, visualizations and insights.",
    purpose:
      "Built to practice turning raw structured data into clear, actionable visual metrics for non-technical users.",
    stack: ["Python", "JavaScript", "Data Visualization", "API Integration"],
    links: {},
    mockup: "analytics",
  },
  {
    id: "mobile-service-app",
    number: "04",
    name: "Mobile Service Application",
    description:
      "A cross-platform mobile application designed around simple workflows, responsive interactions and practical user needs.",
    purpose:
      "Built to explore cross-platform mobile development with a focus on simple, practical workflows over feature bloat.",
    stack: ["Flutter", "Dart", "API Integration"],
    links: {},
    mockup: "mobile",
  },
];

export const contact = {
  eyebrow: "05. Contact",
  heading: "Let's build something meaningful.",
  supporting:
    "Whether it's a project, opportunity, collaboration or a conversation about technology, feel free to reach out.",
};

export const siteMeta = {
  title: "Mohamed Nur Mumin | Full-Stack Web Developer",
  description:
    "Professional portfolio of Mohamed Nur Mumin, a Full-Stack Web Developer and Computer Science graduate based in Mogadishu, Somalia.",
  // TODO: replace with the real production domain once deployed.
  url: "https://mohamednurmumin.com",
};
