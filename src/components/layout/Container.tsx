import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  as?: ElementType;
};

/** Centered content container with the site's consistent max-width and gutters. */
export function Container({ children, as: Tag = "div", className, ...props }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[1200px] px-6 sm:px-8 lg:px-10", className)} {...props}>
      {children}
    </Tag>
  );
}
