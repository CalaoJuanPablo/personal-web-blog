# Backend - Directus CMS

This folder contains the Directus CMS configuration for the blog.

## Setup

1. Copy environment variables:

```bash
cp .env.example .env
```

2. Edit `.env` with required values:

```
KEY=                    # Generate a random key
SECRET=                 # Generate a random secret
DB_CLIENT=sqlite3
DB_FILENAME=data/database
COMPOSE_PROJECT_NAME=directus
CONTENT_SECURITY_POLICY_DIRECTIVES__FRAME_SRC=http://localhost:3000
```

3. Start the container:

```bash
docker compose up -d
```

## Access

- **URL**: http://localhost:8055
- **Credentials**: Set during first-time setup (email/password)

## Data Storage

- Database: `./data/`
- Uploads: `./uploads/`

Both directories are gitignored to keep data separate from code.