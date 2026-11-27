import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { AppShell } from "@/components/atlas/AppShell";
import { PageHeader } from "@/components/atlas/PageHeader";
import { VerifiedDataNotice } from "@/components/atlas/VerifiedDataNotice";
import { StatusBadge } from "@/components/atlas/StatusBadge";
import { LAW_STATUSES } from "@/data/statuses";
import { COUNTRIES } from "@/data/countries";
import { listLaws } from "@/lib/data/repository";

export const Route = createFileRoute("/status")({
  loader: () => listLaws(),
  component: StatusPage,
});

function StatusPage() {
  const laws = Route.useLoaderData();
  return (
    <AppShell>
      <PageHeader
        eyebrow="Law status tracker"
        title="See what is in force"
        description="Track the lifecycle of the legislation in the current dataset. Pending or staged commencement is not the same as full implementation."
      />
      <VerifiedDataNotice className="mt-8" />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {LAW_STATUSES.map((status) => {
          const items = laws.filter((law) => law.status === status.id);
          return (
            <section key={status.id} className="surface-card flex min-h-48 flex-col p-5">
              <div className="flex items-center justify-between gap-3">
                <StatusBadge status={status.id} />
                <span className="font-display text-2xl font-semibold">{items.length}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{status.description}</p>
              <div className="mt-4 grid gap-2">
                {items.slice(0, 4).map((law) => (
                  <Link
                    key={law.id}
                    to="/laws/$lawId"
                    params={{ lawId: law.id }}
                    className="border-t border-border pt-2 text-sm hover:text-primary-glow"
                  >
                    <p className="font-medium text-foreground">{law.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {COUNTRIES.find((country) => country.id === law.countryId)?.name}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </AppShell>
  );
}
