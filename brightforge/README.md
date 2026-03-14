# BrightForge Website

A production-ready Next.js website for BrightForge, a web design agency serving local businesses.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Backend**: Next.js API Routes (contact form)
- **Hosting**: Vercel (recommended)

## Pages

- `/` — Home (hero, features, process, pricing teaser, CTA)
- `/services` — Services detail page
- `/portfolio` — Portfolio / example sites
- `/pricing` — Pricing + FAQ + comparison table
- `/contact` — Contact form (with API backend)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

1. Push this project to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select your repo
4. Click **Deploy** — it just works

## Setting Up the Contact Form

By default the form logs submissions to the console. To send real emails, configure one of these in your Vercel environment variables:

### Option A: Gmail / SMTP

Add to Vercel env vars:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@gmail.com
SMTP_PASS=your-app-password  # Use an App Password, not your main password
CONTACT_EMAIL=contact@yourdomain.com
```

Then uncomment **Option A** in `app/api/contact/route.ts`.

### Option B: Resend (Recommended)

1. Sign up at [resend.com](https://resend.com) (free tier: 3,000 emails/month)
2. Get your API key
3. Run `npm install resend`
4. Add to Vercel env vars:
```
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=contact@yourdomain.com
```
5. Uncomment **Option B** in `app/api/contact/route.ts`

## Customization

- **Branding**: Update colors in `tailwind.config.ts`
- **Content**: Edit page files in `app/` directory
- **Contact email**: Set `CONTACT_EMAIL` env var
- **Domain**: Add your domain in Vercel → Project Settings → Domains
- **Logo**: Replace the SVG in `components/Navbar.tsx`

## Project Structure

```
brightforge/
├── app/
│   ├── api/contact/route.ts   # Contact form backend
│   ├── contact/page.tsx       # Contact page
│   ├── portfolio/page.tsx     # Portfolio page
│   ├── pricing/page.tsx       # Pricing page
│   ├── services/page.tsx      # Services page
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Home page
│   └── globals.css            # Global styles
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── next.config.js
├── tailwind.config.ts
└── vercel.json
```
