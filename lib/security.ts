import { NextRequest } from "next/server";

const MIN_SUBMIT_MS = 3000;

/** Verify form was not submitted suspiciously fast */
export function checkSubmitTiming(timestamp: string): boolean {
  const t = parseInt(timestamp, 10);
  if (isNaN(t)) return false;
  return Date.now() - t >= MIN_SUBMIT_MS;
}

/** Verify the request origin matches the host */
export function checkOrigin(req: NextRequest): boolean {
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  if (!origin || !host) return false;
  try {
    const originHost = new URL(origin).host;
    return originHost === host;
  } catch {
    return false;
  }
}

/** Verify content-type is JSON */
export function checkContentType(req: NextRequest): boolean {
  const ct = req.headers.get("content-type") || "";
  return ct.includes("application/json");
}

/**
 * Best-effort in-memory rate limiter.
 * NOTE: On serverless (Vercel), each invocation may use a different instance,
 * so this only limits bursts within the same warm container. For production
 * at scale, use Vercel KV, Upstash Redis, or Vercel WAF.
 */
const hits = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

export function rateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  entry.count++;
  return entry.count <= MAX_PER_WINDOW;
}
