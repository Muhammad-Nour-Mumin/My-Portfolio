"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { navigation, personal } from "@/data/portfolio";
import { Container } from "@/components/layout/Container";
import { ThemeToggle } from "@/components/navigation/ThemeToggle";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { DownloadCVButton } from "@/components/ui/DownloadCVButton";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

// Hrefs are root-relative, e.g. "/#about" — the id is whatever follows "#".
const sectionIds = navigation.map((item) => item.href.split("#")[1]);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(sectionIds, sectionIds[0]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,padding] duration-300",
        scrolled
          ? "border-b border-border bg-background/95 py-3"
          : "border-b border-transparent bg-background/0 py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        <Link
          href="/#top"
          className="text-base font-semibold tracking-tight text-text transition-colors hover:text-accent"
        >
          {personal.brandMark}
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => {
              const id = item.href.split("#")[1];
              const isActive = id === activeId;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "group relative flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                      isActive ? "text-text" : "text-text-muted hover:text-text"
                    )}
                  >
                    <span
                      className={cn(
                        "font-mono text-xs transition-colors",
                        isActive ? "text-accent" : "text-text-muted/70 group-hover:text-accent"
                      )}
                    >
                      {item.number}
                    </span>
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-3.5 -bottom-0.5 h-px bg-accent transition-transform duration-200 origin-left",
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle className="hidden sm:inline-flex" />
          <DownloadCVButton variant="secondary" className="hidden lg:inline-flex" />
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-body hover:border-accent hover:text-accent md:hidden"
          >
            <Menu aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      </Container>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} activeId={activeId} />
    </header>
  );
}
