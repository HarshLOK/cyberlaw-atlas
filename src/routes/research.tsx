import { ArrowUpRight, Bot, Send, Sparkles } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/atlas/AppShell";
import { PageHeader } from "@/components/atlas/PageHeader";
import { VerifiedDataNotice } from "@/components/atlas/VerifiedDataNotice";

export const Route = createFileRoute("/research")({
  component: ResearchPage,
});

function ResearchPage() {
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState("");
  return (
    <AppShell>
      <PageHeader
        eyebrow="AI legal research"
        title="Ask better questions, keep sources close"
        description="A local-first research workspace with no external API or backend required."
      />
      <VerifiedDataNotice className="mt-8" />
      <div className="mx-auto mt-8 max-w-3xl">
        <div className="surface-card overflow-hidden">
          <div className="flex items-center gap-3 border-b border-border p-4 sm:p-5">
            <span className="grid size-10 place-items-center rounded-full bg-violet/15 text-violet">
              <Bot className="size-5" />
            </span>
            <div>
              <p className="font-semibold">Atlas research assistant</p>
              <p className="text-xs text-muted-foreground">
                Source-aware workflow · no legal advice
              </p>
            </div>
          </div>
          <div className="min-h-64 space-y-4 p-4 sm:p-5">
            <div className="max-w-xl break-words rounded-2xl rounded-tl-sm border border-border bg-muted p-4 text-sm leading-relaxed text-muted-foreground">
              <Sparkles className="mb-2 size-4 text-primary-glow" />
              Ask about a jurisdiction, cybercrime category or legal status. Connect an approved
              server-side AI provider later without exposing credentials in browser code.
            </div>
            {submitted && (
              <div className="ml-auto max-w-xl rounded-2xl rounded-tr-sm bg-primary/15 p-4 text-sm text-foreground">
                {submitted}
              </div>
            )}
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (question.trim()) {
                setSubmitted(question.trim());
                setQuestion("");
              }
            }}
            className="flex gap-2 border-t border-border p-3 sm:p-4"
          >
            <input
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="e.g. How does India address unauthorised access?"
              className="h-11 min-w-0 flex-1 rounded-xl border border-input bg-background px-3 text-sm text-foreground outline-none focus:border-primary sm:px-4"
            />
            <button
              type="submit"
              className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
              aria-label="Submit research question"
            >
              <Send className="size-4" />
            </button>
          </form>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface/60 p-4 text-sm text-muted-foreground">
            No external AI or API is used.
          </div>
          <Link to="/countries" className="rounded-xl border border-border bg-surface/60 p-4 text-sm text-muted-foreground hover:text-foreground">
            Browse source-linked country records <ArrowUpRight className="ml-1 inline size-3.5" />
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
