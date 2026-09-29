"use client";

import { useEffect, useRef, useState } from "react";
import type { LeadershipMetric } from "@/data/portfolio";
import { useInView } from "@/hooks/useInView";

/**
 * Splits a metric value like "5K+", "2+" or "10+" into an animatable
 * numeric part and its surrounding prefix/suffix (e.g. "" + 5 + "K+").
 * Values with no leading number (unlikely, but safe) are rendered as-is.
 */
function parseValue(value: string) {
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: "", target: null as number | null, suffix: value };
  const [, prefix, numberPart, suffix] = match;
  return { prefix, target: Number.parseFloat(numberPart), suffix };
}

const EASE_OUT_CUBIC = (t: number) => 1 - Math.pow(1 - t, 3);

export function StatCard({ metric, delay = 0 }: { metric: LeadershipMetric; delay?: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const { prefix, target, suffix } = parseValue(metric.value);
  const [display, setDisplay] = useState(target === null ? metric.value : "0");
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current || target === null) return;
    started.current = true;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      // Intentional: skip the count-up entirely for reduced-motion users and
      // jump straight to the final value instead of animating frame by frame.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplay(String(target));
      return;
    }

    const duration = 1200;
    let frame = 0;
    const startTime = performance.now() + delay;

    function tick(now: number) {
      const elapsed = now - startTime;
      if (elapsed < 0) {
        frame = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(elapsed / duration, 1);
      const eased = EASE_OUT_CUBIC(progress);
      const current = Math.round((target ?? 0) * eased);
      setDisplay(String(current));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, delay]);

  return (
    <div
      ref={ref}
      className="group border-l-2 border-border pl-5 transition-colors duration-300 hover:border-accent"
    >
      <p className="text-[clamp(1.75rem,3vw,2.25rem)] font-semibold leading-none tabular-nums text-text transition-transform duration-300 group-hover:-translate-y-0.5">
        {prefix}
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-text-muted">{metric.label}</p>
    </div>
  );
}
