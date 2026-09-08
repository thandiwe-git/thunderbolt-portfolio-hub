import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Zap,
  ShieldCheck,
  Wrench,
  Sun,
  Gauge,
  CircuitBoard,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

import heroPanel from "@/assets/hero-panel.jpg";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

const TITLE = "Thandiwe Angela Setshange — Electrical Technician";
const DESCRIPTION =
  "Qualified electrical technician specialising in installations, fault finding, panel building, solar and preventative maintenance for residential, commercial and industrial sites.";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Thandiwe Angela Setshange",
          jobTitle: "Electrical Technician",
          email: "mailto:angelasetshange2@gmail.com",
          description: DESCRIPTION,
          knowsAbout: [
            "Electrical installations",
            "Fault finding",
            "Panel building",
            "Solar PV",
            "Preventative maintenance",
          ],
        }),
      },
    ],
  }),
});

const services = [
  {
    icon: Zap,
    title: "Electrical installations",
    body: "New circuits, distribution boards, lighting and power reticulation installed to SANS 10142-1 standards.",
  },
  {
    icon: Wrench,
    title: "Fault finding & repairs",
    body: "Methodical diagnosis of tripping breakers, earth leakage faults, motor failures and intermittent supply issues.",
  },
  {
    icon: CircuitBoard,
    title: "Panel building & wiring",
    body: "Control and distribution panels assembled, labelled and tested — from single motor starters to PLC-driven panels.",
  },
  {
    icon: Sun,
    title: "Solar & backup power",
    body: "Inverter, battery and PV installations sized for the load, with clean changeover and safe DC protection.",
  },
  {
    icon: Gauge,
    title: "Preventative maintenance",
    body: "Scheduled inspections, thermal checks and torque testing that stop small faults becoming shutdowns.",
  },
  {
    icon: ShieldCheck,
    title: "Testing & compliance",
    body: "Insulation, continuity and earth-loop testing with clear reports and remedial recommendations.",
  },
];

const skills = [
  "SANS 10142-1 wiring code",
  "Fault finding & diagnostics",
  "Distribution boards",
  "Motor control & starters",
  "PLC basics",
  "Solar PV & inverters",
  "Cable sizing",
  "Test instruments",
  "Technical drawings",
  "Health & safety",
];

const featured = [
  {
    title: "Warehouse lighting retrofit",
    summary:
      "Replaced high-bay fittings with LED across a distribution warehouse, rewired the lighting circuits and split them into zones.",
    result: "Roughly 60% lower lighting load and even light levels across the aisles.",
  },
  {
    title: "Residential backup power",
    summary:
      "Installed an inverter and battery system with an essentials board so the household keeps lights, plugs and internet during outages.",
    result: "Uninterrupted supply through load shedding with safe, isolated changeover.",
  },
  {
    title: "Motor control panel build",
    summary:
      "Built and wired a control panel for conveyor motors, including starters, overloads, interlocks and clearly labelled terminals.",
    result: "Commissioned with full test records and a maintenance-friendly layout.",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60">
          <img
            src={heroPanel}
            alt="Electrical control panel with cyan indicator lights and neatly wired breakers"
            width={1600}
            height={1008}
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
          <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
              <Zap className="h-3.5 w-3.5" aria-hidden="true" />
              Electrical Technician
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              Thandiwe Angela <span className="text-primary">Setshange</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Power that is safe, tested and properly documented. I install, fault-find and maintain
              electrical systems for homes, businesses and industrial sites — with the same care on
              a single plug point as on a full control panel.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Request a quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                View projects
              </Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" aria-labelledby="about-heading" className="border-b border-border/60">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 id="about-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
                About me
              </h2>
              <p className="mt-6 text-muted-foreground">
                I am a qualified electrical technician with hands-on experience across residential,
                commercial and light industrial work. My focus is on doing installations correctly
                the first time: right cable sizes, right protection, neat terminations and test
                results you can keep on file.
              </p>
              <p className="mt-4 text-muted-foreground">
                I enjoy the diagnostic side of the trade most — tracing an intermittent fault back
                to its cause instead of replacing parts and hoping. Clients get clear explanations
                in plain language, honest timelines and a site left clean at the end of the day.
              </p>
              <div className="mt-8 flex items-start gap-3 rounded-lg border border-border/60 bg-card/50 p-5">
                <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <p className="text-sm text-muted-foreground">
                  Trained in electrical engineering fundamentals, wiring regulations and practical
                  workshop skills, with ongoing learning in solar PV and control systems.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
                Core skills
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border/70 bg-card/60 px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          aria-labelledby="services-heading"
          className="border-b border-border/60 bg-card/20"
        >
          <div className="mx-auto max-w-6xl px-5 py-20">
            <h2 id="services-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
              What I do
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              From a tripping breaker at home to a full control panel on the floor.
            </p>
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: Icon, title, body }) => (
                <li
                  key={title}
                  className="group rounded-xl border border-border/60 bg-card/60 p-6 transition-colors hover:border-primary/60"
                >
                  <Icon
                    className="h-6 w-6 text-primary transition-transform group-hover:scale-110"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Featured work */}
        <section id="work" aria-labelledby="work-heading" className="border-b border-border/60">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 id="work-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
                Selected work
              </h2>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                All projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <ul className="mt-12 grid gap-6 md:grid-cols-3">
              {featured.map((p) => (
                <li key={p.title} className="rounded-xl border border-border/60 bg-card/60 p-6">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{p.summary}</p>
                  <p className="mt-4 border-l-2 border-primary/70 pl-3 text-sm text-primary/90">
                    {p.result}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section aria-labelledby="cta-heading" className="bg-card/20">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center">
            <h2 id="cta-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
              Have a job that needs doing properly?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Send the details and I&apos;ll come back to you with an honest assessment and a
              quote.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
