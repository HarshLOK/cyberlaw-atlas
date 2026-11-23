import { Link } from "@tanstack/react-router";
import { ArrowRight, Bot } from "lucide-react";
import type { CrimeCategory } from "@/data/types";
import { cn } from "@/lib/utils";
import { CATEGORY_ICONS } from "./category-icons";

export function CategoryCard({ category, compact = false }: { category: CrimeCategory; compact?: boolean }) {
  const Icon = CATEGORY_ICONS[category.id];
  return (
    <Link
      to="/cybercrimes/$categoryId"
      params={{ categoryId: category.id }}
      className={cn(
        "surface-card card-interactive group flex flex-col gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        compact ? "p-4" : "p-5",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={cn(
            "grid size-11 shrink-0 place-items-center rounded-xl border",
            category.aiRelated
              ? "border-violet/40 bg-violet/15 text-violet"
              : "border-primary/40 bg-primary/15 text-primary-glow",
          )}
        >
          <Icon className="size-5" aria-hidden="true" />
        </span>
        {category.aiRelated && (
          <span className="inline-flex items-center gap-1 rounded-full border border-violet/40 bg-violet/10 px-2 py-0.5 text-[11px] font-medium text-violet">
            <Bot className="size-3" aria-hidden="true" /> AI
          </span>
        )}
      </div>
      <div className="min-w-0">
        <h3 className="font-semibold text-foreground">{category.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{category.shortDescription}</p>
      </div>
      {!compact && (
        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary-glow">
          View laws <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      )}
    </Link>
  );
}
