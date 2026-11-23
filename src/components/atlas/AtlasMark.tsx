import { cn } from "@/lib/utils";

/** CyberLaw Atlas brand mark: a shield containing a globe's meridians. */
export function AtlasMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={cn("size-9", className)}>
      <defs>
        <linearGradient id="atlas-mark-g" x1="4" y1="2" x2="36" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--color-cyan)" />
          <stop offset="0.5" stopColor="var(--color-primary)" />
          <stop offset="1" stopColor="var(--color-violet)" />
        </linearGradient>
      </defs>
      <path
        d="M20 2.5 34.5 8v11.2c0 8.6-6 15.4-14.5 18.3C11.5 34.6 5.5 27.8 5.5 19.2V8L20 2.5Z"
        fill="var(--color-surface)"
        stroke="url(#atlas-mark-g)"
        strokeWidth="2"
      />
      <circle cx="20" cy="19" r="8.5" stroke="url(#atlas-mark-g)" strokeWidth="1.6" />
      <ellipse cx="20" cy="19" rx="3.6" ry="8.5" stroke="url(#atlas-mark-g)" strokeWidth="1.4" />
      <path d="M11.5 19h17M13 14.5h14M13 23.5h14" stroke="url(#atlas-mark-g)" strokeWidth="1.2" />
    </svg>
  );
}
