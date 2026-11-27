import { Outlet, createFileRoute, useRouterState } from "@tanstack/react-router";
import { AppShell } from "@/components/atlas/AppShell";
import { CategoryCard } from "@/components/atlas/CategoryCard";
import { PageHeader } from "@/components/atlas/PageHeader";
import { CATEGORIES } from "@/data/categories";

export const Route = createFileRoute("/cybercrimes")({
  component: CybercrimesPage,
});

function CybercrimesPage() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  if (pathname !== "/cybercrimes" && pathname.startsWith("/cybercrimes/")) {
    return <Outlet />;
  }
  return (
    <AppShell>
      <PageHeader
        eyebrow="Cybercrime library"
        title="Understand the offence"
        description="Plain-language definitions connected to provisions in the country dataset. These explainers are not legal advice."
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </AppShell>
  );
}
