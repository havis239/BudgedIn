# BudgedIn Architecture

## 1. System Overview

BudgedIn is designed as a two-app monorepo:

- `frontend/`: Next.js 15 App Router PWA
- `backend/`: Express.js REST API with Prisma ORM
- Supabase provides authentication, PostgreSQL, and storage

The architecture favors feature-based boundaries, server-authoritative persistence, and a mobile-first UX.

## 2. Core Architectural Principles

- Keep user-facing state in the frontend cache and persisted server state in the API
- Validate all inbound API payloads with Zod before business logic
- Use service and repository boundaries in the backend to keep rules testable
- Use Supabase JWTs for identity, but the backend remains the source of business logic
- Design the frontend as an installable PWA with offline-safe shell behavior
- Prefer explicit feature modules over cross-cutting dumping grounds

## 3. Frontend Architecture

### App Layer

- Next.js App Router for route composition and layout control
- Route groups for authenticated and public flows
- Server components where static rendering helps performance
- Client components only for interactive and stateful surfaces

### Feature Modules

- `features/auth`
- `features/dashboard`
- `features/transactions`
- `features/budgets`
- `features/goals`
- `features/notifications`
- `features/profile`
- `features/reports`

### State and Data Flow

- TanStack Query for server state
- Zustand for lightweight UI/session state
- React Hook Form + Zod for forms and validation
- Recharts for analytics visualizations
- Sonner for notifications

### PWA Strategy

- Web manifest for install metadata
- Service worker for offline shell and cache-first static assets
- Network-aware data fetching with graceful fallback states
- Background sync queue for deferred mutations where supported

## 4. Backend Architecture

### Layering

- Routes define transport boundaries
- Controllers map HTTP to application use cases
- Services implement business rules
- Repositories encapsulate persistence
- Validators define request schemas
- Middleware enforces auth, rate limits, and error handling

### Modules

- Auth
- Transactions
- Budgets
- Savings Goals
- Notifications
- Reports
- Profile

### Security Controls

- Helmet for secure HTTP headers
- CORS allowlist
- Rate limiting per route class
- Input sanitization
- Zod validation on all write endpoints
- JWT verification against Supabase-issued access tokens

## 5. API Design

### REST Conventions

- `/api/v1/auth`
- `/api/v1/transactions`
- `/api/v1/budgets`
- `/api/v1/goals`
- `/api/v1/notifications`
- `/api/v1/reports`
- `/api/v1/profile`

### Design Rules

- Resource-oriented endpoints
- Paginated list endpoints
- Filtering and sorting via query parameters
- Consistent error envelope
- Idempotent update semantics where practical

## 6. Deployment Topology

- Frontend deployed on Vercel
- Backend deployed on Railway
- Supabase hosts Postgres, Auth, and Storage
- GitHub Actions validates build, lint, and tests before deployment

## 7. Observability and Reliability

- Centralized error middleware with structured logs
- Request correlation IDs
- Health endpoints for uptime checks
- Database indexes for query hot paths
- Future-ready audit logging for financial records

## 8. Non-Functional Targets

- Lighthouse score target 95+
- Mobile-first responsive design
- Predictable API response times under normal student workloads
- Clear separation between UI composition and business state
