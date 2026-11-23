import type { LucideIcon } from "lucide-react";

export function StatCard({ icon: Icon, value, label }: { icon: LucideIcon; value: number | string; label: string }) {
  return (
    <div className="surface-card relative flex items-center gap-4 overflow-hidden p-4 sm:p-5">
      <span className="grid size-11 shrink-0 place-items-center rounded-full border border-primary/40 bg-primary/15 text-primary-glow">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="font-display text-2xl font-semibold text-foreground sm:text-3xl">{value}</p>
        <p className="truncate text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
