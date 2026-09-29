import type { ComponentType, ReactNode } from "react";
import type { ProjectMockupVariant } from "@/data/portfolio";
import { cn } from "@/lib/utils";

/**
 * Tasteful, clearly generic UI mockups used in place of real product
 * screenshots. Each variant loosely evokes the shape of the project it
 * represents (dashboard, chat assistant, analytics, mobile) without
 * pretending to be an actual screenshot.
 */

function BrowserChrome({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-[1.25rem] border border-border bg-surface">
      <div className="flex h-10 shrink-0 items-center gap-2 border-b border-border bg-surface-raised px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        <span className="ml-3 h-4 flex-1 max-w-[220px] rounded-full bg-background" />
      </div>
      <div className="relative flex-1 bg-background p-5 sm:p-6">{children}</div>
    </div>
  );
}

function Bar({ className }: { className?: string }) {
  return <div className={cn("rounded-md bg-border", className)} />;
}

function DashboardMockup() {
  return (
    <BrowserChrome>
      <div className="flex h-full gap-5">
        <div className="hidden w-[22%] flex-col gap-3 sm:flex">
          <Bar className="h-6 w-3/4 bg-accent/25" />
          <Bar className="h-3 w-full" />
          <Bar className="h-3 w-5/6" />
          <Bar className="h-3 w-4/6" />
          <Bar className="h-3 w-5/6" />
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="grid grid-cols-3 gap-3">
            <Bar className="h-14 bg-surface-raised border border-border" />
            <Bar className="h-14 bg-surface-raised border border-border" />
            <Bar className="h-14 bg-accent/15 border border-accent/30" />
          </div>
          <div className="flex flex-1 items-end gap-2 rounded-lg border border-border bg-surface-raised p-4">
            {[40, 65, 35, 80, 55, 70, 45].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm bg-accent/40"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

function AssistantMockup() {
  return (
    <BrowserChrome>
      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-2.5">
            <span className="h-7 w-7 shrink-0 rounded-full bg-accent/25" />
            <div className="flex max-w-[75%] flex-col gap-2 rounded-2xl rounded-tl-sm border border-border bg-surface-raised p-3">
              <Bar className="h-2.5 w-40" />
              <Bar className="h-2.5 w-28" />
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex max-w-[65%] flex-col gap-2 rounded-2xl rounded-tr-sm bg-accent/15 p-3">
              <Bar className="h-2.5 w-32 bg-accent/40" />
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="h-7 w-7 shrink-0 rounded-full bg-accent/25" />
            <div className="flex max-w-[80%] flex-col gap-2 rounded-2xl rounded-tl-sm border border-border bg-surface-raised p-3">
              <Bar className="h-2.5 w-44" />
              <Bar className="h-2.5 w-36" />
              <Bar className="h-2.5 w-24" />
            </div>
          </div>
        </div>
        <div className="mt-4 flex h-10 items-center rounded-full border border-border bg-surface-raised px-4">
          <Bar className="h-2.5 w-28" />
        </div>
      </div>
    </BrowserChrome>
  );
}

function AnalyticsMockup() {
  return (
    <BrowserChrome>
      <div className="grid h-full grid-cols-2 gap-3">
        <div className="flex flex-col justify-between rounded-lg border border-border bg-surface-raised p-3">
          <Bar className="h-2.5 w-16" />
          <p className="text-2xl font-semibold text-accent">72%</p>
        </div>
        <div className="flex items-center justify-center rounded-lg border border-border bg-surface-raised p-3">
          <div
            aria-hidden="true"
            className="h-16 w-16 rounded-full"
            style={{
              background:
                "conic-gradient(var(--color-accent) 0deg 230deg, var(--color-border) 230deg 360deg)",
            }}
          />
        </div>
        <div className="col-span-2 flex flex-1 items-end gap-1.5 rounded-lg border border-border bg-surface-raised p-3">
          {[30, 55, 40, 75, 50, 90, 60, 45].map((h, i) => (
            <div key={i} className="flex-1 rounded-t-sm bg-accent/35" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </BrowserChrome>
  );
}

function MobileMockup() {
  return (
    <div className="mx-auto flex h-full max-w-[240px] items-center justify-center">
      <div className="flex h-full w-full flex-col overflow-hidden rounded-[2rem] border-[6px] border-surface-raised bg-surface shadow-[0_20px_45px_-20px_rgb(var(--shadow-color)/0.4)] ring-1 ring-border">
        <div className="flex h-6 shrink-0 items-center justify-center bg-surface-raised">
          <span className="h-1.5 w-14 rounded-full bg-border-strong" />
        </div>
        <div className="flex flex-1 flex-col gap-3 bg-background p-4">
          <Bar className="h-5 w-2/3 bg-accent/25" />
          <Bar className="h-20 w-full border border-border bg-surface-raised" />
          <Bar className="h-16 w-full border border-border bg-surface-raised" />
          <Bar className="h-16 w-full border border-border bg-surface-raised" />
          <div className="mt-auto flex justify-between pt-2">
            <span className="h-6 w-6 rounded-md bg-accent/25" />
            <span className="h-6 w-6 rounded-md bg-border" />
            <span className="h-6 w-6 rounded-md bg-border" />
          </div>
        </div>
      </div>
    </div>
  );
}

const variants: Record<ProjectMockupVariant, ComponentType> = {
  dashboard: DashboardMockup,
  assistant: AssistantMockup,
  analytics: AnalyticsMockup,
  mobile: MobileMockup,
};

export function ProjectMockup({ variant }: { variant: ProjectMockupVariant }) {
  const Mockup = variants[variant];
  return (
    <div className="h-full w-full p-4 sm:p-5" aria-hidden="true">
      <Mockup />
    </div>
  );
}
