"use client";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export function SectionLabel({ children, className }: { children: string; className?: string }) {
  const { ref, inView } = useInView<HTMLParagraphElement>();

  return (
    <p
      ref={ref}
      className={cn(
        "relative inline-flex flex-col font-mono text-sm font-medium tracking-wide text-accent",
        className
      )}
    >
      {children}
      <span
        aria-hidden="true"
        className={cn(
          "mt-1.5 h-px origin-left bg-accent/50 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          inView ? "scale-x-100" : "scale-x-0"
        )}
      />
    </p>
  );
}
