/**
 * Domain types for CyberLaw Atlas. Field names mirror the planned database
 * tables (see docs/supabase-schema.sql) so the sample data can be swapped for
 * live rows without touching the UI.
 */

export type LawStatus =
  | "proposed"
  | "enacted"
  | "not_commenced"
  | "in_force"
  | "partially_in_force"
  | "repealed";

/** "sample" = entered from public sources, not yet reviewed by a legal professional. */
export type VerificationState = "sample" | "verified";

export type CountryId = "india" | "usa" | "uk" | "australia" | "singapore";

export type CategoryId =
  | "hacking"
  | "identity-theft"
  | "online-fraud"
  | "ransomware"
  | "cyberstalking"
  | "data-breaches"
  | "ai-deepfakes"
  | "ai-impersonation";

export interface SourceLink {
  label: string;
  url: string;
}

export interface Country {
  id: CountryId;
  name: string;
  /** ISO 3166-1 alpha-2, lowercase — used for flag images. */
  isoCode: string;
  region: "Asia" | "Americas" | "Europe" | "Oceania";
  legalSystem: string;
  overview: string;
  /** Primary official legislation portal. */
  portal: SourceLink;
}

export interface CrimeCategory {
  id: CategoryId;
  name: string;
  shortDescription: string;
  description: string;
  aiRelated: boolean;
}

export interface Law {
  id: string;
  countryId: CountryId;
  title: string;
  year: number;
  status: LawStatus;
  /** Plain-language note on commencement or status nuances. */
  statusNote?: string;
  /** Most recent known milestone (enactment, commencement, introduction). */
  milestone?: { date: string; label: string };
  sources: SourceLink[];
  verification: VerificationState;
}

export interface Provision {
  id: string;
  countryId: CountryId;
  categoryId: CategoryId;
  lawId: string;
  /** Section / article references exactly as they appear in the legislation. */
  sections: string[];
  summary: string;
  /** null = punishment not yet verified; the UI shows a prompt to consult the source. */
  punishment: string | null;
}
