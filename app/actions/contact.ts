"use server";

import { Resend } from "resend";
import { site } from "@/lib/site";
import {
  contactSchema,
  type ContactFormData,
  type ContactActionResult,
} from "@/lib/schema";

export async function submitContactForm(
  data: ContactFormData
): Promise<ContactActionResult> {
  // Validate schema on server
  const parsed = contactSchema.safeParse(data);
  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return {
      success: false,
      message: "Please check the form for errors.",
      errors: fieldErrors as Record<string, string[]>,
    };
  }

  const { name, email, projectType, budget, message, website } = parsed.data;

  // Spam detection via honeypot
  if (website && website.length > 0) {
    // Silently ignore bots
    return {
      success: true,
      message: "Thank you for reaching out! Your inquiry has been sent.",
    };
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const destinationEmail = process.env.CONTACT_EMAIL || site.email;

  if (resendApiKey && destinationEmail) {
    try {
      const resend = new Resend(resendApiKey);
      const fromEmail = process.env.FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

      await resend.emails.send({
        from: fromEmail,
        to: destinationEmail,
        replyTo: email,
        subject: `New Inquiry from ${name} [${projectType}]`,
        text: `Name: ${name}\nEmail: ${email}\nProject Type: ${projectType}\nBudget Range: ${budget || "Not specified"}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6; color: #111;">
            <h2>New Inquiry for Akhil Krishna</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Project Type:</strong> ${projectType}</p>
            <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
            <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
            <p><strong>Message:</strong></p>
            <blockquote style="margin: 0; padding-left: 15px; border-left: 3px solid #b7f34a; color: #333;">
              ${message.replace(/\n/g, "<br />")}
            </blockquote>
          </div>
        `,
      });

      return {
        success: true,
        message: "Thank you! Your message has been sent successfully. Akhil will respond shortly.",
      };
    } catch (err: unknown) {
      console.error("Resend error:", err);
      return {
        success: false,
        message: "Failed to deliver email through Resend. Please reach out directly via LinkedIn or email.",
      };
    }
  }

  // Fallback mode when Resend is not configured yet
  console.info("Contact form received (Resend API key not set in environment):", {
    name,
    email,
    projectType,
    budget,
    timestamp: new Date().toISOString(),
  });

  return {
    success: true,
    message:
      "Inquiry received in demonstration mode! Set RESEND_API_KEY in .env.local to route directly to your inbox.",
  };
}
