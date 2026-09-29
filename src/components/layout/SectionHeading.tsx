import { cn } from "@/lib/utils";

export function SectionHeading({
  children,
  className,
  id,
}: {
  children: string;
  className?: string;
  id?: string;
}) {
  return (
    <h2
      id={id}
      className={cn(
        "text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-[1.15] text-text text-balance",
        className
      )}
    >
      {children}
    </h2>
  );
}
