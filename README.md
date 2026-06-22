# Octave CRM AI

Octave CRM AI is a branded CRM workspace for Octave Consultancy and Technology Services. It combines customer records, workflows, email/calendar sync, and AI-assisted CRM operations in a self-hostable application.

This repository is based on an Nx monorepo and keeps the original package names where they are part of the build graph, while the user-facing product, assets, metadata, and deploy surface are branded for Octave CRM AI.

## Quick Deploy

1. Copy the example environment file:

```bash
cp .env.example .env
```

2. Edit `.env` and set strong values for `ENCRYPTION_KEY` and `APP_SECRET`.

For the Dokploy server at `38.247.188.228`, use:

```bash
SERVER_URL=http://38.247.188.228:3000
APP_PORT=3000
```

3. Build and start the stack:

```bash
docker compose up -d --build
```

4. Open `http://38.247.188.228:3000`.

The root `docker-compose.yml` builds the local Octave CRM AI image from this repository, then starts the app server, worker, PostgreSQL, and Redis.

## Useful Commands

Install dependencies:

```bash
node .yarn/releases/yarn-4.13.0.cjs install --immutable
```

Run focused tests from a package directory:

```bash
node ..\..\node_modules\jest\bin\jest.js --config jest.config.mjs --runInBand
```

Build the deployment image manually:

```bash
docker build --target twenty -f packages/twenty-docker/twenty/Dockerfile -t octave-crm-ai:latest .
```

## Repository

GitHub: https://github.com/DivineFlame/Octave-CRM-AI
