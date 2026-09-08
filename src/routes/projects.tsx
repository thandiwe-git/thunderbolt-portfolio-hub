import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

const TITLE = "Projects — Thandiwe Angela Setshange, Electrical Technician";
const DESCRIPTION =
  "Electrical projects by Thandiwe Angela Setshange: lighting retrofits, backup power installations, motor control panels, distribution board upgrades and maintenance programmes.";

export const Route = createFileRoute("/projects")({
  component: Projects,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

const projects = [
  {
    title: "Warehouse LED lighting retrofit",
    scope: "Commercial",
    summary:
      "Swapped ageing high-bay fittings for LED across a distribution warehouse, rewired lighting circuits and split the floor into switchable zones.",
    points: [
      "Load survey and cable check before installation",
      "Zoned switching so unused aisles stay off",
      "Around 60% reduction in lighting load",
    ],
  },
  {
    title: "Home backup power system",
    scope: "Residential",
    summary:
      "Inverter and battery installation with a dedicated essentials board, sized around the household's real consumption rather than a guess.",
    points: [
      "Load profile measured before sizing",
      "Separate essentials board and safe changeover",
      "Correct DC protection and labelling",
    ],
  },
  {
    title: "Conveyor motor control panel",
    scope: "Industrial",
    summary:
      "Built, wired and commissioned a control panel for conveyor motors, including direct-on-line starters, overloads and safety interlocks.",
    points: [
      "Ferruled and numbered terminations throughout",
      "Interlocks tested before handover",
      "Full test record supplied to the client",
    ],
  },
  {
    title: "Distribution board upgrade",
    scope: "Residential",
    summary:
      "Replaced an overloaded, unlabelled board with a properly arranged unit, adding earth leakage protection and separating circuits.",
    points: [
      "Circuits identified and labelled",
      "Earth leakage protection added",
      "Insulation and continuity testing on completion",
    ],
  },
  {
    title: "Office fault-finding call-out",
    scope: "Commercial",
    summary:
      "Traced an intermittent trip that had been misdiagnosed twice back to moisture ingress in an outdoor junction box.",
    points: [
      "Systematic circuit isolation to locate the fault",
      "Weatherproof enclosure fitted and re-tested",
      "No repeat trips since the repair",
    ],
  },
  {
    title: "Preventative maintenance programme",
    scope: "Industrial",
    summary:
      "Set up a quarterly inspection routine covering panels, terminations and motor connections for a small manufacturing site.",
    points: [
      "Thermal and torque checks on key connections",
      "Written findings after every visit",
      "Fewer unplanned production stoppages",
    ],
  },
];

function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <section className="border-b border-border/60 bg-card/20">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Projects</h1>
            <p className="mt-5 max-w-2xl text-muted-foreground">
              A cross-section of installation, panel building, backup power and maintenance work.
            </p>
          </div>
        </section>

        <section aria-label="Project list">
          <ul className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-2">
            {projects.map((p) => (
              <li
                key={p.title}
                className="rounded-xl border border-border/60 bg-card/60 p-7 transition-colors hover:border-primary/60"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {p.scope}
                </span>
                <h2 className="mt-3 text-xl font-semibold">{p.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{p.summary}</p>
                <ul className="mt-5 space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      {pt}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-border/60 bg-card/20">
          <div className="mx-auto max-w-3xl px-5 py-16 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Something similar in mind?
            </h2>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
