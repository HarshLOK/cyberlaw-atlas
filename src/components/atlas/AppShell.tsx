import { Menu, Search, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { AtlasMark } from "./AtlasMark";

const navigation = [
  { to: "/", label: "Overview" },
  { to: "/countries", label: "Countries" },
  { to: "/cybercrimes", label: "Cybercrimes" },
  { to: "/compare", label: "Compare" },
  { to: "/status", label: "Status tracker" },
  { to: "/research", label: "AI research" },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background bg-hero-glow">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-3 px-3 sm:gap-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="flex min-w-0 items-center gap-2 sm:gap-3"
            onClick={() => setMenuOpen(false)}
          >
            <AtlasMark />
            <span className="truncate font-display text-base font-semibold tracking-tight text-foreground sm:text-lg">
              CyberLaw <span className="text-gradient">Atlas</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "bg-accent text-foreground" }}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              to="/research"
              className="inline-flex h-9 items-center gap-2 rounded-lg border border-border px-3 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
            >
              <Search className="size-4" aria-hidden="true" />
              Research
            </Link>
          </div>

          <button
            type="button"
            className="grid size-11 shrink-0 place-items-center rounded-lg border border-border text-foreground lg:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {menuOpen && (
          <nav
            className="border-t border-border/70 px-4 py-3 lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  activeProps={{ className: "bg-accent text-foreground" }}
                  className="min-h-11 rounded-lg px-3 py-3 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main className="mx-auto max-w-7xl px-3 py-6 sm:px-6 sm:py-12 lg:px-8">{children}</main>

      <footer className="border-t border-border/70 px-3 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-xs leading-relaxed text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>CyberLaw Atlas · an open legal information index</p>
          <p>Always verify against the linked official source.</p>
        </div>
      </footer>
    </div>
  );
}
