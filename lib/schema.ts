import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name (at least 2 characters)"),
  email: z.string().trim().email("Please enter a valid email address"),
  projectType: z.enum([
    "seo",
    "web-dev",
    "automation",
    "full-growth-system",
    "consulting",
    "other",
  ]),
  budget: z.enum(["under-1k", "1k-3k", "3k-5k", "5k-plus", "not-sure"]).optional(),
  message: z.string().trim().min(15, "Please provide a little more detail (at least 15 characters)"),
  website: z.string().optional(), // Honeypot spam trap
});

export type ContactFormData = z.infer<typeof contactSchema>;

export type ContactActionResult = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};
