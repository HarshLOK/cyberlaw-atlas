import { ArrowRight, Gavel, Info, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ProvisionWithLaw } from "@/lib/data/repository";
import { cn } from "@/lib/utils";
import { SourceLinks } from "./SourceLinks";
import { StatusBadge } from "./StatusBadge";
import { VerifiedDataNotice } from "./VerifiedDataNotice";

/** One legal provision: law, sections, summary, punishment, status and official sources. */
export function ProvisionCard({
  provision,
  className,
}: {
  provision: ProvisionWithLaw;
  className?: string;
}) {
  const { law } = provision;
  return (
    <article className={cn("surface-card flex min-w-0 flex-col gap-4 p-5", className)}>
      <div className="flex flex-wrap items-center gap-2">
        <StatusBadge status={law.status} />
        {law.verification === "pending" && <VerifiedDataNotice compact />}
      </div>
      <div className="min-w-0">
        <h3 className="break-words text-base font-semibold text-foreground sm:text-lg">
          {law.title}
        </h3>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {provision.sections.map((s) => (
            <span
              key={s}
              className="rounded-md border border-border bg-muted px-2 py-0.5 font-mono text-xs text-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">{provision.summary}</p>
      {law.description && (
        <p className="text-xs leading-relaxed text-muted-foreground">{law.description}</p>
      )}

      <div className="rounded-lg border border-border bg-background/40 p-3">
        <p className="label-mono mb-1.5 flex items-center gap-1.5 text-muted-foreground">
          <Gavel className="size-3.5" aria-hidden="true" /> Punishment
        </p>
        {provision.punishment ? (
          <p className="text-sm text-foreground">{provision.punishment}</p>
        ) : (
          <p className="text-sm italic text-muted-foreground">
            Not yet verified — consult the official source.
          </p>
        )}
      </div>

      {law.statusNote && (
        <p className="flex gap-2 text-xs text-muted-foreground">
          <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
          <span className="min-w-0">{law.statusNote}</span>
        </p>
      )}

      <div className="mt-auto border-t border-border pt-3">
        <p className="label-mono mb-2 text-muted-foreground">Official sources</p>
        <SourceLinks sources={law.sources} />
        <Link
          to="/laws/$lawId"
          params={{ lawId: law.id }}
          className="mt-3 inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm font-medium text-primary-glow hover:bg-accent"
        >
          View law details <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
        <p className="mt-3 flex items-start gap-1.5 text-xs text-muted-foreground">
          <ShieldCheck className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
          <span>
            {law.verification === "verified" ? "Verified record" : "Pending verification"} ·
            Last checked {law.lastVerified}
          </span>
        </p>
      </div>
    </article>
  );
}
