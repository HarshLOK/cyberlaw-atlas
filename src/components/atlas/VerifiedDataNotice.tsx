import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function VerifiedDataNotice({ className, compact = false }: { className?: string; compact?: boolean }) {
  if (compact) {
    return (
      <span className={cn("inline-flex items-center gap-1 rounded-md border border-warning/30 bg-warning/10 px-2 py-0.5 text-[11px] font-medium text-warning", className)}>
        <ShieldCheck className="size-3" aria-hidden="true" />
        Pending verification
      </span>
    );
  }
  return (
    <div role="note" className={cn("flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm", className)}>
      <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary-glow" aria-hidden="true" />
      <p className="min-w-0 text-muted-foreground">
        <span className="font-semibold text-foreground">Verified official-source records.</span>{" "}
        Entries include the linked statute or official portal and a last-checked date.
        Records marked pending verification need further official confirmation. This is not legal advice.
      </p>
    </div>
  );
}
