# BudgedIn Database Design

## 1. Data Model Overview

BudgedIn uses Supabase PostgreSQL with Prisma as the ORM layer. The model centers on a profile-owned financial ledger with budgets, savings goals, and notifications.

## 2. Entities

### profiles

- `id` primary key, references Supabase auth user id
- `email`
- `full_name`
- `avatar_url`
- `created_at`
- `updated_at`

### transactions

- `id`
- `user_id` foreign key to profiles
- `title`
- `description`
- `amount`
- `type` income or expense
- `category`
- `transaction_date`
- `created_at`
- `updated_at`

### budgets

- `id`
- `user_id`
- `month`
- `year`
- `total_budget`
- `created_at`
- `updated_at`

### budget_categories

- `id`
- `budget_id`
- `category`
- `allocated_amount`
- `created_at`

### savings_goals

- `id`
- `user_id`
- `goal_name`
- `description`
- `target_amount`
- `current_amount`
- `target_date`
- `status`
- `icon`
- `created_at`
- `updated_at`

### savings_transactions

- `id`
- `goal_id`
- `amount`
- `notes`
- `created_at`

### notifications

- `id`
- `user_id`
- `title`
- `message`
- `type`
- `is_read`
- `created_at`

## 3. Relationships

- One profile has many transactions
- One profile has many budgets
- One budget has many budget categories
- One profile has many savings goals
- One savings goal has many savings transactions
- One profile has many notifications

## 4. Indexing Strategy

- Index transactions by `user_id`, `transaction_date`, and `type`
- Index budgets by `user_id`, `month`, and `year`
- Index savings goals by `user_id` and `status`
- Index notifications by `user_id`, `is_read`, and `created_at`
- Add unique constraints where the business requires one budget per user per month/year

## 5. Row Level Security Strategy

- Enable RLS on all user-owned tables
- Policies allow read and write only for the authenticated owner row
- Profiles are scoped to the authenticated user id
- Service role is reserved for backend jobs and administrative actions

## 6. Derived Metrics

- Current balance = total income - total expenses
- Budget used = allocated or actual spend against budget categories
- Budget status = safe, warning, critical, or over budget
- Financial health score = weighted score from savings rate, budget discipline, and overspending behavior

## 7. Prisma Mapping Notes

- Use decimal values for currency fields
- Use enums for transaction type, goal status, notification type, and budget status where practical
- Keep timestamps in UTC
- Use explicit relations and cascading behavior carefully to avoid orphaned records
