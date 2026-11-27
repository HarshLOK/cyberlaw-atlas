import { ArrowLeft } from "lucide-react";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { AppShell } from "@/components/atlas/AppShell";
import { PageHeader } from "@/components/atlas/PageHeader";
import { ProvisionCard } from "@/components/atlas/ProvisionCard";
import { getCategory, listProvisions } from "@/lib/data/repository";

export const Route = createFileRoute("/cybercrimes/$categoryId")({
  loader: async ({ params }) => {
    const category = await getCategory(params.categoryId);
    if (!category) throw notFound();
    return { category, provisions: await listProvisions({ categoryId: category.id }) };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category, provisions } = Route.useLoaderData();
  return (
    <AppShell>
      <Link
        to="/cybercrimes"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> Cybercrime library
      </Link>
      <nav aria-label="Breadcrumb" className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/cybercrimes" className="hover:text-foreground">Cybercrime library</Link>
        <span>/</span>
        <span className="text-foreground">{category.name}</span>
      </nav>
      <PageHeader
        className="mt-6"
        eyebrow={category.aiRelated ? "AI-related category" : "Cybercrime category"}
        title={category.name}
        description={category.description}
      />
      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {provisions.map((provision) => (
          <ProvisionCard key={provision.id} provision={provision} />
        ))}
      </div>
      {provisions.length === 0 && (
        <p className="mt-8 text-muted-foreground">No mapped provisions are currently available.</p>
      )}
    </AppShell>
  );
}
