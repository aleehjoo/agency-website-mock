import { z } from "zod";

const MAX_LEN = { name: 100, company: 120, email: 254, message: 2000 };

/** Strip HTML tags and script-like content */
function stripUnsafe(s: string): string {
  return s
    .replace(/<[^>]*>/g, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+\s*=/gi, "")
    .trim();
}

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(MAX_LEN.name).transform(stripUnsafe),
  company: z.string().min(1, "Company is required").max(MAX_LEN.company).transform(stripUnsafe),
  email: z.string().email("Invalid email").max(MAX_LEN.email).transform((s) => s.toLowerCase().trim()),
  message: z.string().max(MAX_LEN.message).transform(stripUnsafe).optional().default(""),
  _hp: z.string().max(0, "Invalid submission").optional().default(""),
  _t: z.string().optional().default("0"),
});

export type ContactInput = z.infer<typeof contactSchema>;
