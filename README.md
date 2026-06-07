# BudgedIn

Smart Financial Management for Students.

BudgedIn is a Progressive Web Application for university students to track income, expenses, budgets, savings goals, alerts, and financial health across mobile and desktop.

## Repository Layout

- `frontend/` - Next.js 15 App Router PWA
- `backend/` - Express.js API with Prisma
- `prisma/` - shared database schema
- `docs/` - architecture, database, API, roadmap, Supabase, and deployment notes
- `infra/` - Docker, GitHub Actions, and deployment support files

## Architecture Docs

- [Architecture](docs/architecture.md)
- [Database Design](docs/database-design.md)
- [API Design](docs/api-design.md)
- [Supabase Setup](docs/supabase-setup.md)
- [Deployment Guide](docs/deployment.md)
- [Implementation Roadmap](docs/roadmap.md)

## Product Scope

The first production release focuses on:

- Supabase Auth-based sign in, sign up, password reset, and session persistence
- Dashboard with financial summaries, charts, and recent activity
- Transaction, budget, savings goal, notification, report, and profile management
- PWA installability, offline shell, and background sync-ready architecture
- REST API with validation, rate limiting, sanitization, and audit-friendly service boundaries

## Workspace Commands

- `npm run dev:frontend`
- `npm run dev:backend`
- `npm run build`
- `npm run lint`
- `npm run test`

## Next Step

The repo now has the architecture, data model, frontend shell, backend shell, and deployment scaffolding in place. The next implementation pass can wire the remaining API modules to Prisma and Supabase Auth using the shared structure already created.
