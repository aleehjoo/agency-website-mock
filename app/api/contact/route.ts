import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { checkOrigin, checkContentType, checkSubmitTiming, rateLimit } from "@/lib/security";
import { sendContactEmail } from "@/lib/email";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    /* ── Security checks ─────────────────────── */
    if (!checkContentType(req)) {
      return NextResponse.json({ error: "Invalid content type" }, { status: 415 });
    }

    // Origin check (skip in dev for convenience)
    if (process.env.NODE_ENV === "production" && !checkOrigin(req)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // Rate limit by IP
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (!rateLimit(ip)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    /* ── Parse & validate ────────────────────── */
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const result = contactSchema.safeParse(body);
    if (!result.success) {
      const firstError = result.error.issues[0]?.message || "Validation failed";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const data = result.data;

    // Honeypot check (already validated by Zod max(0), but double-check)
    if (data._hp) {
      // Silently succeed to not tip off bots
      return NextResponse.json({ ok: true });
    }

    // Timing check
    if (!checkSubmitTiming(data._t ?? "0")) {
      return NextResponse.json({ error: "Please wait a moment before submitting." }, { status: 400 });
    }

    /* ── Send email ──────────────────────────── */
    const sendResult = await sendContactEmail(data);
    if (!sendResult.ok) {
      console.error("[contact] Email send failed:", sendResult.error);
      return NextResponse.json(
        { error: "We couldn\u2019t process your request. Please try again or reach out directly." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}
