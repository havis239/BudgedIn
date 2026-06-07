# Supabase Setup

## 1. Create Project

- Create a new Supabase project for BudgedIn
- Use the project name `budgedin` or a production-specific name
- Record the project URL, anon key, service role key, and database connection strings

## 2. Authentication

- Enable email/password authentication
- Configure password reset email templates
- Set redirect URLs for local development and production
- Use Supabase Auth JWTs as the identity source for the API

## 3. Database

- Run the Prisma migrations against the Supabase PostgreSQL database
- Enable Row Level Security on every user-owned table
- Add policies so each user can only read and mutate their own records

## 4. Storage

- Create a storage bucket for profile avatars
- Restrict writes to authenticated users
- Serve public avatars only when explicitly allowed by product rules

## 5. Required Environment Variables

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `SUPABASE_JWT_SECRET`
- `DATABASE_URL`
- `DIRECT_URL`

## 6. Local Development

- Use the Supabase project in development mode or a local Supabase stack
- Point the frontend and backend environment variables to the same project
- Keep the database schema synchronized with Prisma migrations
