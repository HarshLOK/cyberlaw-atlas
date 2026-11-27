import { Search } from "lucide-react";
import { Outlet, createFileRoute, useRouterState } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AppShell } from "@/components/atlas/AppShell";
import { CountryCard } from "@/components/atlas/CountryCard";
import { PageHeader } from "@/components/atlas/PageHeader";
import { COUNTRIES } from "@/data/countries";
import { getDatasetStats } from "@/lib/data/repository";

export const Route = createFileRoute("/countries")({
  loader: getDatasetStats,
  component: CountriesPage,
});

function CountriesPage() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  if (pathname !== "/countries" && pathname.startsWith("/countries/")) {
    return <Outlet />;
  }
  const stats = Route.useLoaderData();
  const [search, setSearch] = useState("");
  const filtered = useMemo(
    () =>
      COUNTRIES.filter((country) =>
        `${country.name} ${country.region}`.toLowerCase().includes(search.toLowerCase()),
      ),
    [search],
  );
  return (
    <AppShell>
      <PageHeader
        eyebrow="Country explorer"
        title="Jurisdictions at a glance"
        description="Compare the legal landscape across the countries currently indexed in CyberLaw Atlas."
      />
      <div className="relative mt-8 max-w-xl">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search countries or regions"
          className="h-11 w-full rounded-xl border border-input bg-surface pl-10 pr-4 text-sm text-foreground outline-none focus:border-primary"
        />
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((country) => (
          <CountryCard
            key={country.id}
            country={country}
            lawCount={stats.lawsByCountry[country.id]}
          />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-10 text-center text-muted-foreground">No countries match your search.</p>
      )}
    </AppShell>
  );
}
