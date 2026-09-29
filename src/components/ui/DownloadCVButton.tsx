import { Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { personal } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function DownloadCVButton({
  variant = "secondary",
  className,
}: {
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  return (
    <Button
      href={personal.cvPath}
      download={personal.cvFileName}
      variant={variant}
      className={cn(className)}
    >
      <Download aria-hidden="true" className="h-4 w-4" />
      Download CV
    </Button>
  );
}
