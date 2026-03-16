# FFI (Five Fold Industries) &mdash; Landing Page

Production Next.js 15+ App Router migration of the FFI landing page, optimized for Vercel.

## ⚡️ Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Validation**: Zod (Server-side)
- **Email Delivery**: Resend & Nodemailer fallback
- **Fonts**: `next/font` (Inter & Instrument Serif)

## 🚀 Setup & Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment**:
   Copy the example environment file and customize it.
   ```bash
   cp .env.example .env.local
   ```
   *Make sure `CONTACT_TO_EMAIL` is set to `umila.alejandro@gmail.com`.*

3. **Start the development server**:
   ```bash
   npm run dev
   ```

## 🔒 Security & Performance Features

This application implements several code-level security measures:
- **Strict Content Security Policy (CSP)** and aggressive security headers configured in `next.config.ts`.
- **Server Components by Default**: Zero client-side JavaScript sent for static layout sections.
- **POST-Only Route Handlers**: The contact endpoint rejects non-POST traffic, validates Origin headers to prevent CSRF, enforcing JSON payload strictness.
- **Spam Mitigation**: In-memory rate limiting, minimum submission time checks, hidden honeypot fields, and strict Zod bounds on payload length and character composition.
- **No Client Secrets**: API keys are locked on the server in the Node.js runtime.

## 📧 Email Delivery (Resend / SMTP)

The form route (`app/api/contact/route.ts`) handles submissions securely on the server. Email delivery uses a dual-provider strategy outlined in `lib/email.ts`:

1. **Resend (Primary)**: If `RESEND_API_KEY` is detected in the environment, the app explicitly routes via Resend.
2. **SMTP (Fallback)**: If `RESEND_API_KEY` is missing but `SMTP_HOST` variables exist, the app gracefully falls back to Nodemailer.
3. **Graceful Failure**: If no variables exist, the API throws a protected server-side 500 without leaking stack traces.

## ☁️ Deployment (Vercel)

1. Connect the repository to Vercel.
2. Ensure the Framework Preset is detected as **Next.js**.
3. Under Environment Variables, add your production keys matching those in `.env.example`.
4. Deploy. The `/api/contact` route utilizes Edge/Node.js Serverless runtime automatically.
