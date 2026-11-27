import { ArrowLeft } from "lucide-react";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { AppShell } from "@/components/atlas/AppShell";
import { PageHeader } from "@/components/atlas/PageHeader";
import { SourceLinks } from "@/components/atlas/SourceLinks";
import { StatusBadge } from "@/components/atlas/StatusBadge";
import { VerifiedDataNotice } from "@/components/atlas/VerifiedDataNotice";
import { COUNTRY_BY_ID } from "@/data/countries";
import { CATEGORIES } from "@/data/categories";
import { getLaw, listProvisions } from "@/lib/data/repository";

export const Route = createFileRoute("/laws/$lawId")({
  loader: async ({ params }) => {
    const law = await getLaw(params.lawId);
    if (!law) throw notFound();
    const provisions = (await listProvisions({ countryId: law.countryId }))
      .filter((provision) => provision.lawId === law.id);
    return { law, provisions };
  },
  component: LawDetailPage,
});

function LawDetailPage() {
  const { law, provisions } = Route.useLoaderData();
  const country = COUNTRY_BY_ID[law.countryId];
  const provisionCategories = [...new Set(provisions.map((item) => item.categoryId))];

  return (
    <AppShell>
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <Link to="/countries" className="hover:text-foreground">Countries</Link>
        <span>/</span>
        <Link to="/countries/$countryId" params={{ countryId: law.countryId }} className="hover:text-foreground">
          {country.name}
        </Link>
        <span>/</span>
        <span className="text-foreground">Law details</span>
      </nav>
      <Link
        to="/countries/$countryId"
        params={{ countryId: law.countryId }}
        className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> Back to {country.name}
      </Link>
      <div className="mt-6">
        <PageHeader
          eyebrow={`${country.name} · ${law.year}`}
          title={law.title}
          description={law.description}
          actions={<StatusBadge status={law.status} />}
        />
      </div>
      <VerifiedDataNotice className="mt-8" />

      <section className="mt-8 grid gap-4 lg:grid-cols-2">
        <article className="surface-card p-5">
          <h2 className="text-lg font-semibold">Key dates</h2>
          <dl className="mt-4 grid gap-3 text-sm">
            <div className="flex justify-between gap-4 border-b border-border pb-3">
              <dt className="text-muted-foreground">Enactment date</dt>
              <dd className="text-right font-medium text-foreground">{law.enactmentDate}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-border pb-3">
              <dt className="text-muted-foreground">Commencement</dt>
              <dd className="text-right font-medium text-foreground">{law.commencementDate ?? "See status note"}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Last checked</dt>
              <dd className="text-right font-medium text-foreground">{law.lastVerified}</dd>
            </div>
          </dl>
        </article>
        <article className="surface-card p-5">
          <h2 className="text-lg font-semibold">Status and amendments</h2>
          {law.statusNote && <p className="mt-3 text-sm text-muted-foreground">{law.statusNote}</p>}
          {law.amendments.length > 0 ? (
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {law.amendments.map((amendment) => <li key={amendment}>{amendment}</li>)}
            </ul>
          ) : (
            <p className="mt-3 text-sm text-muted-foreground">No verified amendment summary is listed.</p>
          )}
        </article>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Legal provisions in this atlas</h2>
        {provisions.length > 0 ? (
          <div className="mt-4 grid gap-3 lg:grid-cols-2">
            {provisions.map((provision) => (
              <article key={provision.id} className="surface-card p-5">
                <div className="flex flex-wrap gap-1.5">
                  {provision.sections.map((section) => (
                    <span key={section} className="rounded border border-border bg-muted px-2 py-0.5 font-mono text-xs">
                      {section}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{provision.summary}</p>
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-sm text-muted-foreground">No provision mapping is currently listed for this law.</p>
        )}
      </section>

      {provisionCategories.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Related cybercrime categories</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {provisionCategories.map((categoryId) => {
              const category = CATEGORIES.find((item) => item.id === categoryId);
              return category ? (
                <Link
                  key={category.id}
                  to="/cybercrimes/$categoryId"
                  params={{ categoryId: category.id }}
                  className="rounded-lg border border-border px-3 py-2 text-sm text-primary-glow hover:bg-accent"
                >
                  {category.name}
                </Link>
              ) : null;
            })}
          </div>
        </section>
      )}

      <section className="surface-card mt-8 p-5">
        <h2 className="text-lg font-semibold">Official source</h2>
        <div className="mt-3">
          <SourceLinks sources={law.sources} />
        </div>
        <p className="mt-4 text-xs text-muted-foreground">{law.verificationNotes}</p>
      </section>
    </AppShell>
  );
}
