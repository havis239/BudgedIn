# BudgedIn API Design

## Base URL

- Local development: `http://localhost:4000/api/v1`
- Production: Railway backend domain under `/api/v1`

## Shared Conventions

- JSON request and response bodies
- Pagination query params: `page`, `limit`
- Search query params: `q`
- Sorting query params: `sortBy`, `sortOrder`
- Authentication via `Authorization: Bearer <token>`
- Consistent response envelope for success and error paths

## Endpoints

### Auth

- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/logout`
- `POST /auth/forgot-password`
- `POST /auth/refresh`
- `GET /auth/me`

### Transactions

- `GET /transactions`
- `POST /transactions`
- `GET /transactions/:id`
- `PATCH /transactions/:id`
- `DELETE /transactions/:id`

### Budgets

- `GET /budgets`
- `POST /budgets`
- `GET /budgets/:id`
- `PATCH /budgets/:id`
- `DELETE /budgets/:id`
- `POST /budgets/:id/categories`

### Savings Goals

- `GET /goals`
- `POST /goals`
- `GET /goals/:id`
- `PATCH /goals/:id`
- `DELETE /goals/:id`
- `POST /goals/:id/contributions`

### Notifications

- `GET /notifications`
- `PATCH /notifications/:id/read`
- `PATCH /notifications/read-all`
- `DELETE /notifications/:id`

### Reports

- `GET /reports/monthly`
- `GET /reports/trends`
- `GET /reports/category-breakdown`
- `GET /reports/export/csv`
- `GET /reports/export/pdf`

### Profile

- `GET /profile`
- `PATCH /profile`
- `POST /profile/avatar`
- `POST /profile/change-password`

## Error Format

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": {}
}
```

## Success Format

```json
{
  "success": true,
  "data": {}
}
```
