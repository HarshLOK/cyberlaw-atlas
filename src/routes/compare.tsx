import { ArrowRightLeft, ExternalLink } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AppShell } from "@/components/atlas/AppShell";
import { PageHeader } from "@/components/atlas/PageHeader";
import { VerifiedDataNotice } from "@/components/atlas/VerifiedDataNotice";
import { StatusBadge } from "@/components/atlas/StatusBadge";
import { CATEGORIES } from "@/data/categories";
import { COUNTRIES } from "@/data/countries";
import { listProvisions } from "@/lib/data/repository";

export const Route = createFileRoute("/compare")({
  loader: async () => ({ provisions: await listProvisions() }),
  component: ComparePage,
});

function ComparePage() {
  const { provisions } = Route.useLoaderData();
  const [left, setLeft] = useState("india");
  const [right, setRight] = useState("usa");
  const [category, setCategory] = useState("hacking");
  const matches = useMemo(
    () => ({
      left: provisions.filter((item) => item.countryId === left && item.categoryId === category),
      right: provisions.filter((item) => item.countryId === right && item.categoryId === category),
    }),
    [category, left, provisions, right],
  );
  const countryName = (id: string) => COUNTRIES.find((country) => country.id === id)?.name ?? id;
  return (
    <AppShell>
      <PageHeader
        eyebrow="Law comparison"
        title="Compare two legal approaches"
        description="Select a category and two jurisdictions to see mapped provisions, status and official sources side by side."
      />
      <VerifiedDataNotice className="mt-8" />
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        Scope note: each card identifies a specific statute or provision. Comparable names may differ
        in legal definition, mental element, penalty and territorial scope; confirm the official text.
      </p>
      <div className="mt-8 grid min-w-0 gap-3 rounded-2xl border border-border bg-surface/70 p-3 sm:grid-cols-[1fr_auto_1fr_1fr] sm:items-end sm:p-4">
        <label className="grid min-w-0 gap-2 text-sm text-muted-foreground">
          First country
          <select
            value={left}
            onChange={(event) => setLeft(event.target.value)}
            className="h-11 w-full min-w-0 rounded-lg border border-input bg-background px-3 text-foreground"
          >
            {COUNTRIES.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
        </label>
        <ArrowRightLeft className="hidden size-5 text-primary-glow sm:block" aria-hidden="true" />
        <label className="grid min-w-0 gap-2 text-sm text-muted-foreground">
          Second country
          <select
            value={right}
            onChange={(event) => setRight(event.target.value)}
            className="h-11 w-full min-w-0 rounded-lg border border-input bg-background px-3 text-foreground"
          >
            {COUNTRIES.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
        </label>
        <label className="grid min-w-0 gap-2 text-sm text-muted-foreground">
          Category
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="h-11 w-full min-w-0 rounded-lg border border-input bg-background px-3 text-foreground"
          >
            {CATEGORIES.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {[
          { name: countryName(left), items: matches.left },
          { name: countryName(right), items: matches.right },
        ].map((column) => (
          <section key={column.name} className="min-w-0">
            <h2 className="mb-4 text-xl font-semibold">{column.name}</h2>
            <div className="grid gap-4">
              {column.items.map((item) => (
                <article key={item.id} className="surface-card flex flex-col gap-4 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <StatusBadge status={item.law.status} />
                    <span className="font-mono text-xs text-muted-foreground">{item.law.year}</span>
                  </div>
                  <div>
                    <h3 className="break-words font-semibold">{item.law.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {item.sections.map((section) => (
                        <span
                          key={section}
                          className="rounded border border-border bg-muted px-2 py-0.5 font-mono text-xs"
                        >
                          {section}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
                  <a
                    href={item.law.sources[0]?.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-sm text-primary-glow hover:underline"
                  >
                    Official source <ExternalLink className="size-3.5" />
                  </a>
                  <Link
                    to="/laws/$lawId"
                    params={{ lawId: item.law.id }}
                    className="mt-1 inline-flex text-sm font-medium text-primary-glow hover:underline"
                  >
                    View law details
                  </Link>
                </article>
              ))}
            </div>
            {column.items.length === 0 && (
              <p className="rounded-xl border border-dashed border-border p-6 text-sm text-muted-foreground">
                No mapped provision for this selection yet.
              </p>
            )}
          </section>
        ))}
      </div>
    </AppShell>
  );
}
