const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** Formats "YYYY", "YYYY-MM" or "YYYY-MM-DD" without inventing precision. */
export function formatMilestoneDate(date: string): string {
  const [y, m, d] = date.split("-");
  if (!m) return y ?? date;
  const month = MONTHS[Number(m) - 1] ?? m;
  return d ? `${Number(d)} ${month} ${y}` : `${month} ${y}`;
}
