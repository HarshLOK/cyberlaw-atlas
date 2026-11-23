import type { LawStatus } from "./types";

export interface StatusInfo {
  id: LawStatus;
  label: string;
  description: string;
}

export const LAW_STATUSES: StatusInfo[] = [
  {
    id: "proposed",
    label: "Proposed",
    description:
      "A bill, draft rule or policy proposal that has been published or introduced but has not been passed into law.",
  },
  {
    id: "enacted",
    label: "Enacted",
    description:
      "Passed by the legislature and formally made law, but some or all duties depend on further steps such as designations or rules.",
  },
  {
    id: "not_commenced",
    label: "Not commenced",
    description:
      "Enacted, but the operative provisions have not yet come into effect, usually awaiting a commencement date or implementing regulation.",
  },
  {
    id: "in_force",
    label: "In force",
    description: "Enacted and currently legally effective.",
  },
  {
    id: "partially_in_force",
    label: "Partially in force",
    description:
      "Some provisions have commenced while others are still waiting for a commencement date (phased implementation).",
  },
  {
    id: "repealed",
    label: "Repealed",
    description:
      "Formally revoked. It may still apply to conduct that occurred before the repeal took effect.",
  },
];

export const STATUS_BY_ID = Object.fromEntries(LAW_STATUSES.map((s) => [s.id, s])) as Record<
  LawStatus,
  StatusInfo
>;
