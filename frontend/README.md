This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It integrates with Directus CMS as the content backend.

## Prerequisites

- Node.js 20+
- pnpm

## Setup

1. Install dependencies:

```bash
pnpm install
```

2. Copy environment variables:

```bash
cp .env.example .env
```

3. Edit `.env` with your Directus configuration:

```
DIRECTUS_URL=       # Directus API URL (e.g., http://localhost:8055)
DIRECTUS_TOKEN=     # Directus static token
DRAFT_MODE_SECRET=  # Secret for preview mode
```

4. Generate SSL certificates for local HTTPS:

```bash
pnpm run generate-cert
```

This creates self-signed certificates in `.certs/` directory using [devcert](https://github.com/getcertifire/devcert).

## Getting Started

Run the development server:

```bash
pnpm dev
```

Open [https://localhost:3000](https://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start Next.js dev server with HTTPS |
| `pnpm build` | Create production build |
| `pnpm start` | Start production server |
| `pnpm run generate-cert` | Generate SSL certificates for localhost |
| `pnpm run types:generate` | Generate Directus SDK types |
| `pnpm lint` | Run ESLint |

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
