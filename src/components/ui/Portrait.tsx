import Image from "next/image";
import { personal } from "@/data/portfolio";

/**
 * Hero portrait treatment: a clean rounded frame with a subtle border, a
 * soft accent glow, and a minimal grid detail — an original alternative to
 * irregular "blob" portrait shapes.
 *
 * If `personal.portraitSrc` is set (see src/data/portfolio.ts), the real
 * photo is rendered. Otherwise a tasteful monogram placeholder is shown so
 * the layout never breaks on a missing asset.
 */
export function Portrait() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px]">
      {/* Soft accent glow, kept subtle per the "no excessive effects" rule.
          A slow, gentle float keeps the hero feeling alive without being
          distracting; disabled automatically for reduced-motion users via
          the global prefers-reduced-motion rule. */}
      <div
        aria-hidden="true"
        className="animate-float absolute -inset-6 -z-10 rounded-[2rem] bg-accent/20 blur-3xl opacity-40 dark:opacity-30"
      />

      <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-[0_30px_60px_-30px_rgb(var(--shadow-color)/0.35)]">
        {personal.portraitSrc ? (
          <Image
            src={personal.portraitSrc}
            alt={personal.portraitAlt}
            fill
            priority
            quality={95}
            sizes="(min-width: 1024px) 420px, 80vw"
            className="object-cover"
          />
        ) : (
          <div className="relative flex h-full w-full items-center justify-center bg-surface">
            {/* Minimal grid detail */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.35] dark:opacity-[0.25]"
              style={{
                backgroundImage:
                  "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <span
              aria-hidden="true"
              className="relative font-semibold text-accent select-none text-[clamp(4rem,10vw,6rem)] tracking-tight"
            >
              {personal.initials}
            </span>
            <span className="sr-only">{personal.portraitAlt}</span>
          </div>
        )}

        {/* Corner line detail */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-5 top-5 h-8 w-8 border-l-2 border-t-2 border-accent/70"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-5 right-5 h-8 w-8 border-b-2 border-r-2 border-accent/70"
        />
      </div>
    </div>
  );
}
