/**
 * Domain types for CyberLaw Atlas. Records are stored in bundled JSON/TypeScript
 * data files and redeployed with the frontend.
 */

export type LawStatus =
  | "proposed"
  | "enacted"
  | "not_commenced"
  | "in_force"
  | "partially_in_force"
  | "repealed";

/** "verified" = source metadata has been checked; "pending" = official details still need confirmation. */
export type VerificationState = "verified" | "pending";

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
  description: string;
  status: LawStatus;
  /** Plain-language note on commencement or status nuances. */
  statusNote?: string;
  enactmentDate: string;
  commencementDate?: string;
  amendments: string[];
  lastVerified: string;
  verificationNotes: string;
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
