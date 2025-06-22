# 📦 SQL Practice: Orders by Country

This challenge explores real-world SQL using a basic two-table schema to count total orders per country, including users with no orders. Designed and solved using **VS Code + SQLite** — no GUI tools, just raw SQL.

---

## 🧩 Problem

> **Count the total number of orders placed by users in each country — include countries where users made zero orders.**

This involves a **LEFT JOIN**, since we want to preserve users even if they didn’t place an order.

---

## 🗂️ Tables

### `users`

| Column  | Type    |
| ------- | ------- |
| user_id | INTEGER |
| name    | TEXT    |
| country | TEXT    |

### `orders`

| Column   | Type    |
| -------- | ------- |
| order_id | INTEGER |
| user_id  | INTEGER |
| total    | INTEGER |

---

## Files

- `schema_and_seed.sql` – Creates the schema and inserts all test data
- `orders_by_country.sql` – Query to solve the challenge
- `database.sqlite` – Live SQLite DB (optional, may be `.gitignored`)
- `README.md` – You're reading it!

---

## Concepts Practiced

- `LEFT JOIN` to include countries with 0 orders
- `COUNT()` with grouped aggregate
- `GROUP BY` on a parent table column
- `ORDER BY` to sort highest → lowest

---

## Sample Output

| country | total_orders |
| ------- | ------------ |
| USA     | 3            |
| Canada  | 1            |
| Mexico  | 0            |

---

## How to Run This

1. **Open `database.sqlite` in VS Code** (using SQLite extension)
2. Run `schema_and_seed.sql`  
   _(This creates the `users` and `orders` tables and inserts data)_
3. Run `orders_by_country.sql` to see the results

---

## Reusability

This project is designed for repeatability:

- All schema/data is written in SQL (no GUI or exports)
- Easily swap users or countries to test other joins
- Ideal for interview prep, bootcamp review, or building a SQL portfolio

---

## Want More?

Try these:

- Find average order total per user
- Identify users with the highest individual order
- Count orders by country **per month** (requires added date fields)

---

### Built from scratch with VS Code + SQL
