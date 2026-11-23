import { queryOptions } from "@tanstack/react-query";
import type { CategoryId, CountryId, LawStatus } from "@/data/types";
import * as repo from "./repository";

export const countriesQuery = () =>
  queryOptions({ queryKey: ["countries"], queryFn: repo.listCountries, staleTime: Infinity });

export const countryQuery = (id: string) =>
  queryOptions({ queryKey: ["country", id], queryFn: () => repo.getCountry(id), staleTime: Infinity });

export const categoriesQuery = () =>
  queryOptions({ queryKey: ["categories"], queryFn: repo.listCategories, staleTime: Infinity });

export const categoryQuery = (id: string) =>
  queryOptions({ queryKey: ["category", id], queryFn: () => repo.getCategory(id), staleTime: Infinity });

export const lawsQuery = (filter: { countryId?: CountryId; status?: LawStatus } = {}) =>
  queryOptions({ queryKey: ["laws", filter], queryFn: () => repo.listLaws(filter), staleTime: Infinity });

export const provisionsQuery = (filter: { countryId?: CountryId; categoryId?: CategoryId } = {}) =>
  queryOptions({
    queryKey: ["provisions", filter],
    queryFn: () => repo.listProvisions(filter),
    staleTime: Infinity,
  });

export const recentDevelopmentsQuery = () =>
  queryOptions({ queryKey: ["recent"], queryFn: () => repo.listRecentDevelopments(), staleTime: Infinity });

export const statsQuery = () =>
  queryOptions({ queryKey: ["stats"], queryFn: repo.getDatasetStats, staleTime: Infinity });
