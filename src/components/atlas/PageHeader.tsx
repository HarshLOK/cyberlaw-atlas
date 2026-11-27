import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("relative animate-fade-up", className)}>
      {eyebrow && <p className="label-mono mb-3 text-primary-glow">{eyebrow}</p>}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="min-w-0 max-w-3xl">
          <h1 className="break-words text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">{description}</p>
          )}
        </div>
        {actions && <div className="flex shrink-0 flex-wrap gap-2">{actions}</div>}
      </div>
    </header>
  );
}

export function SectionHeading({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-5 flex flex-col items-start gap-3 sm:grid sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:gap-4">
      <div className="min-w-0">
        <h2 className="text-xl font-semibold text-foreground sm:text-2xl">{title}</h2>
        {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
      </div>
      {action}
    </div>
  );
}
