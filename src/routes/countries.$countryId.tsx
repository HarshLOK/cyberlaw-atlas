import { ArrowLeft } from "lucide-react";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { AppShell } from "@/components/atlas/AppShell";
import { CountryFlag } from "@/components/atlas/CountryFlag";
import { PageHeader } from "@/components/atlas/PageHeader";
import { ProvisionCard } from "@/components/atlas/ProvisionCard";
import { VerifiedDataNotice } from "@/components/atlas/VerifiedDataNotice";
import { getCountry, listLaws, listProvisions } from "@/lib/data/repository";
import { CATEGORIES } from "@/data/categories";

export const Route = createFileRoute("/countries/$countryId")({
  loader: async ({ params }) => {
    const country = await getCountry(params.countryId);
    if (!country) throw notFound();
    return {
      country,
      laws: await listLaws({ countryId: country.id }),
      provisions: await listProvisions({ countryId: country.id }),
    };
  },
  component: CountryPage,
});

function CountryPage() {
  const { country, laws, provisions } = Route.useLoaderData();
  const relatedCategoryIds = [...new Set(provisions.map((item) => item.categoryId))];
  return (
    <AppShell>
      <Link
        to="/countries"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> All countries
      </Link>
      <nav aria-label="Breadcrumb" className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/countries" className="hover:text-foreground">Countries</Link>
        <span>/</span>
        <span className="text-foreground">{country.name}</span>
      </nav>
      <div className="mt-6 grid gap-6 lg:grid-cols-[220px_1fr]">
        <CountryFlag
          country={country}
          className="aspect-[16/10] w-full rounded-2xl border border-border object-cover"
        />
        <PageHeader
          eyebrow={`${country.region} · ${country.legalSystem}`}
          title={country.name}
          description={country.overview}
          actions={
            <a
              href={country.portal.url}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-lg border border-border px-3 py-2 text-sm text-primary-glow hover:bg-accent"
            >
              {country.portal.label}
            </a>
          }
        />
      </div>
      <div className="mt-8">
        <VerifiedDataNotice />
      </div>
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Country legislation</h2>
        <div className="mt-5 grid gap-3 lg:grid-cols-2">
          {laws.map((law) => (
            <article key={law.id} className="surface-card p-5">
              <h3 className="font-semibold">{law.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{law.description}</p>
              <dl className="mt-3 grid gap-1 text-xs text-muted-foreground">
                <div><dt className="inline font-medium text-foreground">Enacted:</dt> <dd className="inline">{law.enactmentDate}</dd></div>
                {law.commencementDate && <div><dt className="inline font-medium text-foreground">Commenced:</dt> <dd className="inline">{law.commencementDate}</dd></div>}
                <div><dt className="inline font-medium text-foreground">Last checked:</dt> <dd className="inline">{law.lastVerified}</dd></div>
              </dl>
              <div className="mt-3 flex flex-wrap gap-2">
                {law.sources.map((source) => (
                  <a key={source.url} href={source.url} target="_blank" rel="noreferrer noopener" className="text-sm text-primary-glow hover:underline">
                    {source.label}
                  </a>
                ))}
              </div>
              <Link
                to="/laws/$lawId"
                params={{ lawId: law.id }}
                className="mt-4 inline-flex min-h-9 items-center rounded-lg border border-border px-3 py-2 text-sm font-medium text-primary-glow hover:bg-accent"
              >
                View law details
              </Link>
            </article>
          ))}
        </div>
      </section>
      {relatedCategoryIds.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Related cybercrime categories</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {relatedCategoryIds.map((categoryId) => {
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
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Mapped provisions</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Relevant entries across the CyberLaw Atlas categories.
        </p>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {provisions.map((provision) => (
            <ProvisionCard key={provision.id} provision={provision} />
          ))}
        </div>
      </section>
    </AppShell>
  );
}
