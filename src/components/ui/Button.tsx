import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.97]";

const variants: Record<Variant, string> = {
  primary:
    "bg-text text-background hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-12px_rgb(var(--shadow-color)/0.4)] active:translate-y-0",
  secondary:
    "border border-border-strong text-text bg-transparent hover:border-accent hover:text-accent active:translate-y-0",
  ghost: "text-text-body hover:text-text",
};

type CommonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

type AnchorButtonProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; as?: "a" };

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonProps = AnchorButtonProps | NativeButtonProps;

/** Polymorphic CTA: renders an anchor when `href` is provided, a button otherwise. */
export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if ("href" in props && props.href) {
    const { href, ...rest } = props;

    // Internal, in-app hash links (e.g. "/#work") use next/link so they
    // navigate home first (from any route) and then smoothly scroll to the
    // target section, instead of a bare "#work" which would resolve
    // against whatever path is currently active. External links, mailto
    // links, and file downloads still use a plain anchor.
    const isInternalSectionLink = href.startsWith("/") && !rest.download && rest.target !== "_blank";

    if (isInternalSectionLink) {
      return (
        <Link href={href} className={classes} {...rest}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
