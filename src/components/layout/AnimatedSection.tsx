"use client";

import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

type AnimatedSectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  as?: ElementType;
  /** Stagger delay in milliseconds, kept small and purposeful. */
  delay?: number;
};

/**
 * Lightweight scroll-reveal wrapper: fades and translates content up by a
 * small amount once it enters the viewport. No animation library is used —
 * just IntersectionObserver + CSS transitions — and motion is skipped
 * entirely when the user prefers reduced motion (handled globally in CSS).
 */
export function AnimatedSection({
  children,
  as: Tag = "div",
  delay = 0,
  className,
  style,
  ...props
}: AnimatedSectionProps) {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <Tag
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
        className
      )}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms", ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
}
