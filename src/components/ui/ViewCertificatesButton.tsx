import { FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { personal } from "@/data/portfolio";
import { cn } from "@/lib/utils";

/**
 * Opens the combined certificates PDF in a new tab so anyone can view it
 * with a single click — no download required. Renders nothing if
 * `personal.certificatesPath` is not set.
 */
export function ViewCertificatesButton({
  variant = "secondary",
  className,
}: {
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  if (!personal.certificatesPath) return null;

  return (
    <Button
      href={personal.certificatesPath}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      className={cn(className)}
    >
      <FileText aria-hidden="true" className="h-4 w-4" />
      View Certificates
    </Button>
  );
}
