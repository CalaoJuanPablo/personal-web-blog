# Personal Web Blog

A personal blog built with Next.js and Directus CMS.

## Tech Stack

- **Frontend**: Next.js 16 (App Router)
- **CMS**: Directus (headless)
- **Package Manager**: pnpm
- **Container**: Docker

## Prerequisites

- Node.js 20+
- Docker & Docker Compose
- pnpm

## Quick Start

```bash
# Install dependencies
pnpm install

# Setup environment variables
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env
# Edit .env files with required values
```

### Run Development Servers

```bash
# Start Directus CMS (runs in background)
pnpm dev:backend

# Start Next.js dev server
pnpm dev:frontend
```

Access the apps:
- Frontend: http://localhost:3000
- Directus Admin: http://localhost:8055

## Environment Variables

### Frontend

Copy `frontend/.env.example` to `frontend/.env`:

```
DIRECTUS_URL=           # Directus API URL
DIRECTUS_TOKEN=         # Directus static token
DRAFT_MODE_SECRET=      # Secret for preview mode
```

### Backend

Copy `backend/.env.example` to `backend/.env`:

```
KEY=                    # Directus key
SECRET=                 # Directus secret
DB_CLIENT=              # Database client (sqlite3)
DB_FILENAME=            # Database filename
COMPOSE_PROJECT_NAME=   # Docker compose project name
CONTENT_SECURITY_POLICY_DIRECTIVES__FRAME_SRC=  # CSP frame-src directive
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Show development instructions |
| `pnpm dev:backend` | Start Directus via Docker |
| `pnpm dev:frontend` | Start Next.js dev server |
| `pnpm types:generate` | Generate Directus SDK types |

## Project Structure

```
├── backend/            # Directus CMS (Docker)
│   ├── .env           # Environment variables
│   └── docker-compose.yml
├── frontend/          # Next.js application
│   ├── src/
│   │   ├── app/       # App Router pages
│   │   ├── lib/       # Directus client & utilities
│   │   └── types/     # TypeScript types
│   └── .env.example
└── package.json       # Root workspace config
```