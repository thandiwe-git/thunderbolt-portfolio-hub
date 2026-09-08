import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  message: z
    .string()
    .trim()
    .min(10, "Please write at least a few words")
    .max(2000, "Message is too long"),
  // Spam protection: hidden field that humans never fill in.
  company: z.string().max(0).optional().or(z.literal("")),
  // Spam protection: milliseconds the form was on screen before submitting.
  elapsedMs: z.number().int().nonnegative().optional(),
});

export type ContactInput = z.input<typeof contactSchema>;

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.company) {
      return { ok: true as const };
    }
    if (typeof data.elapsedMs === "number" && data.elapsedMs < 2000) {
      return { ok: false as const, error: "That was a little too fast — please try again." };
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const since = new Date(Date.now() - 10 * 60 * 1000).toISOString();
    const { count } = await supabaseAdmin
      .from("contact_submissions")
      .select("id", { count: "exact", head: true })
      .eq("email", data.email)
      .gte("created_at", since);

    if ((count ?? 0) >= 3) {
      return {
        ok: false as const,
        error: "You've already sent a few messages. Please wait a little before sending another.",
      };
    }

    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      message: data.message,
    });

    if (error) {
      console.error("contact insert failed", error);
      return { ok: false as const, error: "Something went wrong. Please try again." };
    }

    return { ok: true as const };
  });
