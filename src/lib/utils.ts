import clsx, { type ClassValue } from "clsx";

/**
 * Small class-name combiner. We keep utility class strings deliberate and
 * non-conflicting throughout the codebase, so a lightweight `clsx` wrapper
 * is sufficient without pulling in a full class-merging library.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
