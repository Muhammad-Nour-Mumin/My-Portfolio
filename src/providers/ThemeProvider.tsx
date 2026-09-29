"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

/**
 * Wraps next-themes so the site:
 * - respects the OS `prefers-color-scheme` on first visit,
 * - allows manual override via the theme toggle,
 * - persists the manual choice in localStorage,
 * - avoids a flash of incorrect theme on load (next-themes injects a
 *   blocking script into <head> before hydration).
 */
export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
