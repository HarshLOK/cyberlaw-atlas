import { ArrowRight, BookOpen, Database, Globe2, Scale, ShieldCheck, Sparkles } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { CategoryCard } from "@/components/atlas/CategoryCard";
import { AppShell } from "@/components/atlas/AppShell";
import { CountryCard } from "@/components/atlas/CountryCard";
import { PageHeader, SectionHeading } from "@/components/atlas/PageHeader";
import { VerifiedDataNotice } from "@/components/atlas/VerifiedDataNotice";
import { StatCard } from "@/components/atlas/StatCard";
import { CATEGORIES } from "@/data/categories";
import { COUNTRIES } from "@/data/countries";
import { getDatasetStats, listRecentDevelopments } from "@/lib/data/repository";
import { formatMilestoneDate } from "@/lib/format";

export const Route = createFileRoute("/")({
  loader: async () => ({
    stats: await getDatasetStats(),
    recent: await listRecentDevelopments(4),
  }),
  component: HomePage,
});

function HomePage() {
  const { stats, recent } = Route.useLoaderData();
  return (
    <AppShell>
      <section className="relative overflow-hidden rounded-3xl border border-primary/20 bg-grid px-4 py-10 sm:px-10 sm:py-16 lg:px-16">
        <div className="relative max-w-3xl">
          <p className="label-mono mb-4 text-primary-glow">Global cyber law intelligence</p>
          <h1 className="break-words font-display text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Navigate the world&apos;s <span className="text-gradient">cyber laws.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A practical starting point for understanding cybercrime legislation, legal status and
            official sources across five jurisdictions.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/countries"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-5 text-sm font-medium text-primary-foreground shadow-glow sm:w-auto"
            >
              Explore countries <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/compare"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface/70 px-5 text-sm font-medium text-foreground hover:bg-accent sm:w-auto"
            >
              Compare laws <Scale className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="mt-6">
        <VerifiedDataNotice />
      </div>

      <section className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={Globe2} value={stats.countries} label="Countries indexed" />
        <StatCard icon={BookOpen} value={stats.categories} label="Crime categories" />
        <StatCard icon={Database} value={stats.laws} label="Laws catalogued" />
        <StatCard icon={ShieldCheck} value={stats.officialSources} label="Official sources" />
      </section>

      <section className="mt-14">
        <SectionHeading
          title="Explore by country"
          description="Start with the jurisdiction you need to understand."
          action={
            <Link to="/countries" className="text-sm text-primary-glow hover:underline">
              View all <ArrowRight className="ml-1 inline size-4" />
            </Link>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {COUNTRIES.map((country) => (
            <CountryCard
              key={country.id}
              country={country}
              lawCount={stats.lawsByCountry[country.id]}
            />
          ))}
        </div>
      </section>

      <section className="mt-14">
        <SectionHeading
          title="Cybercrime library"
          description="Plain-language explainers mapped to legislation."
          action={
            <Link to="/cybercrimes" className="text-sm text-primary-glow hover:underline">
              Browse library <ArrowRight className="ml-1 inline size-4" />
            </Link>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((category) => (
            <CategoryCard key={category.id} category={category} compact />
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <SectionHeading
            title="Recent legal developments"
            description="Milestones recorded in the current dataset."
          />
          <div className="grid gap-3">
            {recent.map((law) => (
              <Link
                key={law.id}
                to="/laws/$lawId"
                params={{ lawId: law.id }}
                className="surface-card flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-medium text-foreground">{law.title}</p>
                  <p className="text-sm text-muted-foreground">{law.milestone?.label}</p>
                </div>
                <span className="label-mono shrink-0 text-primary-glow">
                  {law.milestone && formatMilestoneDate(law.milestone.date)}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div className="surface-card flex flex-col justify-between gap-5 p-6">
          <div>
            <Sparkles className="size-7 text-violet" />
            <h2 className="mt-4 text-xl font-semibold">Need a focused answer?</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Use the research workspace to frame a question, keep source links visible and prepare
              for a future AI gateway integration.
            </p>
          </div>
          <Link to="/research" className="text-sm font-medium text-primary-glow hover:underline">
            Open research assistant <ArrowRight className="ml-1 inline size-4" />
          </Link>
        </div>
      </section>
    </AppShell>
  );
}
