# Deployment Guide

## Frontend on Vercel

1. Import the repository into Vercel.
2. Set the project root to `frontend`.
3. Configure environment variables from `.env.example`.
4. Build command: `npm run build`.
5. Output is handled by Next.js automatically.

## Backend on Railway

1. Create a Railway service from the repository.
2. Set the project root to `backend`.
3. Configure the backend environment variables.
4. Build command: `npm run build`.
5. Start command: `npm start`.

## Database on Supabase

1. Create the PostgreSQL database in Supabase.
2. Apply Prisma migrations.
3. Enable RLS policies for all owned tables.
4. Store the service role key only in the backend environment.

## CI/CD Flow

- Pull request opens -> lint and tests run in GitHub Actions
- Merge to main -> deploy frontend to Vercel and backend to Railway
- Database migration is applied as part of the release process

## Operational Checks

- Verify `/api/v1/health` after deployment
- Confirm the frontend loads manifest, service worker, and authentication flows
- Check error logging and rate limiting in the backend logs
