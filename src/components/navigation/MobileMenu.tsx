"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { navigation, personal } from "@/data/portfolio";
import { ThemeToggle } from "@/components/navigation/ThemeToggle";
import { DownloadCVButton } from "@/components/ui/DownloadCVButton";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { cn } from "@/lib/utils";

export function MobileMenu({
  open,
  onClose,
  activeId,
}: {
  open: boolean;
  onClose: () => void;
  activeId: string;
}) {
  useLockBodyScroll(open);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 md:hidden",
        open ? "pointer-events-auto" : "pointer-events-none"
      )}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-text/20 backdrop-blur-[2px] transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0"
        )}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={cn(
          "absolute right-0 top-0 flex h-full w-full max-w-xs flex-col bg-surface p-6 shadow-xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between">
          <span className="text-base font-semibold tracking-tight text-text">
            {personal.brandMark}
          </span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-body hover:border-accent hover:text-accent"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>

        <nav aria-label="Mobile" className="mt-10 flex flex-col gap-1">
          {navigation.map((item, index) => {
            const id = item.href.split("#")[1];
            const isActive = id === activeId;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                style={{
                  transitionDelay: open ? `${100 + index * 50}ms` : "0ms",
                }}
                className={cn(
                  "flex items-baseline gap-3 rounded-lg px-3 py-3 text-lg font-medium transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0",
                  isActive ? "text-accent" : "text-text hover:text-accent"
                )}
              >
                <span className="font-mono text-sm text-text-muted">{item.number}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto flex flex-col gap-4 border-t border-border pt-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-text-muted">Theme</span>
            <ThemeToggle />
          </div>
          <DownloadCVButton variant="primary" className="w-full" />
        </div>
      </div>
    </div>
  );
}
