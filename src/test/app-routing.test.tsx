import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("matches all main navigation routes", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    for (const path of ["/", "/countries", "/cybercrimes", "/compare", "/status", "/research"]) {
      const matches = router.matchRoutes(path);
      expect(matches.at(-1)?.routeId, path).not.toBe(rootRouteId);
    }
  });

  it("matches every country, law, and cybercrime detail route", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    for (const path of [
      "/countries/india",
      "/countries/usa",
      "/countries/uk",
      "/countries/australia",
      "/countries/singapore",
      "/cybercrimes/hacking",
      "/cybercrimes/identity-theft",
      "/cybercrimes/online-fraud",
      "/cybercrimes/ransomware",
      "/cybercrimes/cyberstalking",
      "/cybercrimes/data-breaches",
      "/cybercrimes/ai-deepfakes",
      "/cybercrimes/ai-impersonation",
      "/laws/in-it-act-2000",
      "/laws/us-cfaa",
      "/laws/uk-cma-1990",
      "/laws/au-privacy-1988",
      "/laws/sg-cma-1993",
    ]) {
      const matches = router.matchRoutes(path);
      expect(matches.at(-1)?.routeId, path).not.toBe(rootRouteId);
    }
  });
});
