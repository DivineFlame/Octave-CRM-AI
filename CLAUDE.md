# Octave CRM AI Development Notes

Octave CRM AI is an Nx monorepo CRM application branded for Octave Consultancy and Technology Services.

The original workspace package names are intentionally retained where they are part of the build graph, imports, Docker targets, or generated metadata. User-facing product copy, app metadata, email templates, image assets, and deployment files should use Octave CRM AI.

## Common Commands

Install dependencies:

```bash
node .yarn/releases/yarn-4.13.0.cjs install --immutable
```

Run the deployment stack:

```bash
docker compose up -d --build
```

Run focused package tests from the package directory:

```bash
node ..\..\node_modules\jest\bin\jest.js --config jest.config.mjs --runInBand
```
