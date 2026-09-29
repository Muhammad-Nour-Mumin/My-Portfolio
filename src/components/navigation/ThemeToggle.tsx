"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  // Avoid rendering a theme-dependent icon until mounted, preventing a
  // client/server markup mismatch during hydration.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Intentional one-time mount flag: avoids a server/client markup
    // mismatch for the theme-dependent icon (see next-themes docs).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-body transition-colors duration-200 hover:border-accent hover:text-accent",
        className
      )}
    >
      {mounted ? (
        isDark ? (
          <Sun aria-hidden="true" className="h-[18px] w-[18px]" />
        ) : (
          <Moon aria-hidden="true" className="h-[18px] w-[18px]" />
        )
      ) : (
        <span className="h-[18px] w-[18px]" />
      )}
    </button>
  );
}
