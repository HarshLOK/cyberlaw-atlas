import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Scale } from "lucide-react";
import type { Country } from "@/data/types";
import { CountryFlag } from "./CountryFlag";

export function CountryCard({ country, lawCount }: { country: Country; lawCount: number }) {
  return (
    <Link
      to="/countries/$countryId"
      params={{ countryId: country.id }}
      className="surface-card card-interactive group flex flex-col overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-muted">
        <CountryFlag country={country} className="size-full transition-transform duration-500 group-hover:scale-105" />
        <span className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-background/80 text-foreground backdrop-blur">
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold text-foreground">{country.name}</h3>
        <dl className="grid gap-1.5 text-sm">
          <div className="flex gap-2">
            <dt className="font-medium text-foreground">Region:</dt>
            <dd className="text-muted-foreground">{country.region}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-medium text-foreground">Legal system:</dt>
            <dd className="min-w-0 text-muted-foreground">{country.legalSystem}</dd>
          </div>
        </dl>
        <p className="mt-auto inline-flex items-center gap-2 pt-2 text-sm text-primary-glow">
          <Scale className="size-4" aria-hidden="true" />
          {lawCount} laws catalogued
        </p>
      </div>
    </Link>
  );
}
