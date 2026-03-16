import type { ContactInput } from "./validation";

interface SendResult {
  ok: boolean;
  error?: string;
}

/** Attempt to send via Resend */
async function sendViaResend(to: string, from: string, data: ContactInput): Promise<SendResult> {
  try {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from,
      to,
      subject: `[FFI Diagnostic] ${data.name} — ${data.company}`,
      text: formatPlainText(data),
    });
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Resend error" };
  }
}

/** Attempt to send via Nodemailer SMTP */
async function sendViaSMTP(to: string, from: string, data: ContactInput): Promise<SendResult> {
  try {
    const nodemailer = await import("nodemailer");
    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
    await transport.sendMail({
      from,
      to,
      subject: `[FFI Diagnostic] ${data.name} — ${data.company}`,
      text: formatPlainText(data),
    });
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "SMTP error" };
  }
}

function formatPlainText(data: ContactInput): string {
  return [
    `Name: ${data.name}`,
    `Company: ${data.company}`,
    `Email: ${data.email}`,
    data.message ? `\nWhat's breaking:\n${data.message}` : "",
    `\n---\nSubmitted at ${new Date().toISOString()}`,
  ].filter(Boolean).join("\n");
}

/** Main send function: tries Resend first, then SMTP, then fails gracefully */
export async function sendContactEmail(data: ContactInput): Promise<SendResult> {
  const to = process.env.CONTACT_TO_EMAIL || "umila.alejandro@gmail.com";
  const from = process.env.EMAIL_FROM || "noreply@fivefoldindustries.com";

  if (process.env.RESEND_API_KEY) {
    return sendViaResend(to, from, data);
  }

  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return sendViaSMTP(to, from, data);
  }

  console.error("[email] No email provider configured. Set RESEND_API_KEY or SMTP_HOST/SMTP_USER/SMTP_PASS.");
  return { ok: false, error: "Email service not configured. Please contact us directly." };
}
