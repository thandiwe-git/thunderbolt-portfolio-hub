import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useRef, useState } from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { submitContact } from "@/lib/contact.functions";

const TITLE = "Contact — Thandiwe Angela Setshange, Electrical Technician";
const DESCRIPTION =
  "Get in touch with electrical technician Thandiwe Angela Setshange for installations, fault finding, panel building, solar and maintenance quotes.";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const formSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  message: z
    .string()
    .trim()
    .min(10, "Please write at least a few words")
    .max(2000, "Message is too long"),
});

type Errors = Partial<Record<"name" | "email" | "message", string>>;

function Contact() {
  const send = useServerFn(submitContact);
  const mountedAt = useRef(Date.now());
  const [values, setValues] = useState({ name: "", email: "", message: "", company: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = formSchema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSending(true);
    try {
      const result = await send({
        data: {
          ...parsed.data,
          company: values.company,
          elapsedMs: Date.now() - mountedAt.current,
        },
      });
      if (result.ok) {
        setSent(true);
        setValues({ name: "", email: "", message: "", company: "" });
      } else {
        toast.error(result.error);
      }
    } catch {
      toast.error("Message could not be sent. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <section className="border-b border-border/60 bg-card/20">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Contact</h1>
            <p className="mt-5 max-w-2xl text-muted-foreground">
              Tell me what needs doing — the site, the problem and when you need it. I&apos;ll reply
              with next steps.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">
              Direct
            </h2>
            <a
              href="mailto:angelasetshange2@gmail.com"
              className="mt-4 inline-flex items-center gap-2 text-lg transition-colors hover:text-primary"
            >
              <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
              angelasetshange2@gmail.com
            </a>
            <p className="mt-6 text-sm text-muted-foreground">
              Messages sent through this form are delivered straight to that inbox.
            </p>
          </div>

          <div className="rounded-xl border border-border/60 bg-card/60 p-7">
            {sent ? (
              <div className="flex flex-col items-start gap-3 py-6">
                <CheckCircle2 className="h-8 w-8 text-primary" aria-hidden="true" />
                <h2 className="text-xl font-semibold">Message received</h2>
                <p className="text-sm text-muted-foreground">
                  Thank you — I&apos;ll get back to you as soon as I can.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-2 text-sm font-medium text-primary hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    maxLength={100}
                    value={values.name}
                    onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                    aria-invalid={Boolean(errors.name)}
                    className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                  />
                  {errors.name ? (
                    <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={255}
                    value={values.email}
                    onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                    aria-invalid={Boolean(errors.email)}
                    className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                  />
                  {errors.email ? (
                    <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    maxLength={2000}
                    value={values.message}
                    onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                    aria-invalid={Boolean(errors.message)}
                    className="mt-2 w-full resize-y rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                  />
                  {errors.message ? (
                    <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
                  ) : null}
                </div>

                {/* Spam trap - hidden from people, tempting to bots */}
                <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    value={values.company}
                    onChange={(e) => setValues((v) => ({ ...v, company: e.target.value }))}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  {sending ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
