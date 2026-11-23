/**
 * Data access layer. Every read goes through these async functions so the
 * bundled sample dataset can later be replaced by Lovable Cloud queries
 * (tables described in docs/supabase-schema.sql) without changing pages.
 */
import { CATEGORIES, CATEGORY_BY_ID } from "@/data/categories";
import { COUNTRIES, COUNTRY_BY_ID } from "@/data/countries";
import { LAWS, LAW_BY_ID } from "@/data/laws";
import { PROVISIONS } from "@/data/provisions";
import type { CategoryId, Country, CountryId, CrimeCategory, Law, LawStatus, Provision } from "@/data/types";

export interface ProvisionWithLaw extends Provision {
  law: Law;
}

const withLaw = (p: Provision): ProvisionWithLaw => {
  const law = LAW_BY_ID[p.lawId];
  if (!law) throw new Error(`Provision ${p.id} references unknown law ${p.lawId}`);
  return { ...p, law };
};

export const isCountryId = (v: string): v is CountryId => v in COUNTRY_BY_ID;
export const isCategoryId = (v: string): v is CategoryId => v in CATEGORY_BY_ID;

export async function listCountries(): Promise<Country[]> {
  return COUNTRIES;
}

export async function getCountry(id: string): Promise<Country | null> {
  return isCountryId(id) ? COUNTRY_BY_ID[id] : null;
}

export async function listCategories(): Promise<CrimeCategory[]> {
  return CATEGORIES;
}

export async function getCategory(id: string): Promise<CrimeCategory | null> {
  return isCategoryId(id) ? CATEGORY_BY_ID[id] : null;
}

export async function listLaws(filter?: { countryId?: CountryId; status?: LawStatus }): Promise<Law[]> {
  return LAWS.filter(
    (l) =>
      (!filter?.countryId || l.countryId === filter.countryId) &&
      (!filter?.status || l.status === filter.status),
  );
}

export async function listProvisions(filter?: {
  countryId?: CountryId;
  categoryId?: CategoryId;
}): Promise<ProvisionWithLaw[]> {
  return PROVISIONS.filter(
    (p) =>
      (!filter?.countryId || p.countryId === filter.countryId) &&
      (!filter?.categoryId || p.categoryId === filter.categoryId),
  ).map(withLaw);
}

/** Recent milestones, newest first. Dates are "YYYY", "YYYY-MM" or "YYYY-MM-DD". */
export async function listRecentDevelopments(limit = 6): Promise<Law[]> {
  return LAWS.filter((l) => l.milestone)
    .sort((a, b) => (b.milestone?.date ?? "").localeCompare(a.milestone?.date ?? ""))
    .slice(0, limit);
}

/** Counts derived only from the dataset in this app — never external statistics. */
export async function getDatasetStats() {
  const sourceUrls = new Set(LAWS.flatMap((l) => l.sources.map((s) => s.url)));
  const byStatus = LAWS.reduce<Record<LawStatus, number>>(
    (acc, l) => ({ ...acc, [l.status]: acc[l.status] + 1 }),
    { proposed: 0, enacted: 0, not_commenced: 0, in_force: 0, partially_in_force: 0, repealed: 0 },
  );
  return {
    countries: COUNTRIES.length,
    categories: CATEGORIES.length,
    laws: LAWS.length,
    provisions: PROVISIONS.length,
    officialSources: sourceUrls.size,
    byStatus,
    lawsByCountry: Object.fromEntries(
      COUNTRIES.map((c) => [c.id, LAWS.filter((l) => l.countryId === c.id).length]),
    ) as Record<CountryId, number>,
  };
}
