import { ExternalLink } from "lucide-react";
import type { SourceLink } from "@/data/types";
import { cn } from "@/lib/utils";

export function SourceLinks({ sources, className }: { sources: SourceLink[]; className?: string }) {
  return (
    <ul className={cn("flex flex-col gap-1.5", className)}>
      {sources.map((s) => (
        <li key={s.url + s.label} className="min-w-0">
          <a
            href={s.url}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex max-w-full items-center gap-1.5 text-sm text-primary-glow hover:text-foreground"
          >
            <ExternalLink className="size-3.5 shrink-0" aria-hidden="true" />
            <span className="truncate underline-offset-4 group-hover:underline">{s.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
