import { FlaskConical } from "lucide-react";
import { cn } from "@/lib/utils";

/** Visible label shown wherever sample (unverified) legal data is displayed. */
export function SampleDataNotice({ className, compact = false }: { className?: string; compact?: boolean }) {
  if (compact) {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1 rounded-md border border-warning/30 bg-warning/10 px-2 py-0.5 text-[11px] font-medium text-warning",
          className,
        )}
      >
        <FlaskConical className="size-3" aria-hidden="true" />
        Sample data
      </span>
    );
  }
  return (
    <div
      role="note"
      className={cn(
        "flex items-start gap-3 rounded-xl border border-warning/30 bg-warning/5 p-4 text-sm",
        className,
      )}
    >
      <FlaskConical className="mt-0.5 size-4 shrink-0 text-warning" aria-hidden="true" />
      <p className="min-w-0 text-muted-foreground">
        <span className="font-semibold text-warning">Sample data — pending legal review.</span>{" "}
        Entries are summarised from public official sources and may be incomplete or out of date.
        Always confirm against the linked official source. This is not legal advice.
      </p>
    </div>
  );
}
