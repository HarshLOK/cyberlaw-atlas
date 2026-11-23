import { CircleDashed, CircleDot, CircleOff, CircleCheck, CircleSlash, FileClock } from "lucide-react";
import { STATUS_BY_ID } from "@/data/statuses";
import type { LawStatus } from "@/data/types";
import { cn } from "@/lib/utils";

const STYLES: Record<LawStatus, string> = {
  proposed: "border-status-proposed/40 bg-status-proposed/10 text-status-proposed",
  enacted: "border-status-enacted/40 bg-status-enacted/10 text-status-enacted",
  not_commenced: "border-status-not-commenced/40 bg-status-not-commenced/10 text-status-not-commenced",
  in_force: "border-status-in-force/40 bg-status-in-force/10 text-status-in-force",
  partially_in_force: "border-status-partial/40 bg-status-partial/10 text-status-partial",
  repealed: "border-status-repealed/40 bg-status-repealed/10 text-status-repealed",
};

export const STATUS_DOT: Record<LawStatus, string> = {
  proposed: "bg-status-proposed",
  enacted: "bg-status-enacted",
  not_commenced: "bg-status-not-commenced",
  in_force: "bg-status-in-force",
  partially_in_force: "bg-status-partial",
  repealed: "bg-status-repealed",
};

const ICONS = {
  proposed: FileClock,
  enacted: CircleDot,
  not_commenced: CircleDashed,
  in_force: CircleCheck,
  partially_in_force: CircleSlash,
  repealed: CircleOff,
} satisfies Record<LawStatus, unknown>;

export function StatusBadge({ status, className }: { status: LawStatus; className?: string }) {
  const Icon = ICONS[status];
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium",
        STYLES[status],
        className,
      )}
    >
      <Icon className="size-3.5" aria-hidden="true" />
      {STATUS_BY_ID[status].label}
    </span>
  );
}
