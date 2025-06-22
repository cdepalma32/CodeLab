# SQL Fundamentals Practice

Welcome to my SQL Fundamentals practice series — a growing collection of real-world, interview-style SQL problems built entirely from scratch using **VS Code**, the **SQLite extension**, and raw SQL queries.

---

## Why I Built This

Although I completed a full-stack coding bootcamp, we didn’t spend much time on SQL — and I realized during job interviews and project work that I needed to **strengthen my understanding of relational databases and query logic**.

This repo documents my journey as I actively **learn, practice, and refine** core SQL skills — from the ground up. I'm building clean, repeatable problem sets to:

- Fill in gaps from my earlier training
- Prepare for backend-heavy interviews
- Push myself to grow with intention

---

## Problem Library

| Problem                                        | Description                                                                               | Concepts Practiced                                |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------- |
| [Orders by Country](./orders-by-country)       | Count total orders per country, including users with 0 orders                             | `LEFT JOIN`, `COUNT`, `GROUP BY`, `ORDER BY`      |
| [Submissions by Grade](./submissions-by-grade) | Count total assignments submitted per grade level, including students with no submissions | `LEFT JOIN`, `COUNT`, `GROUP BY`, `NULL handling` |

---

## How to Run (in VS Code)

Each folder includes:

- `schema_and_seed.sql` — builds tables and inserts test data
- A `.sqlite` database file
- Challenge-specific query file
- A local `README.md` with problem and output details

To run:

1. Open the `.sqlite` file using the [SQLite extension](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)
2. Run `schema_and_seed.sql` to set up tables + data
3. Run the `.sql` query file for that problem

---

## What I’m Practicing

- Building real SQL schemas from scratch
- Using joins (`INNER`, `LEFT`) to link related tables
- Counting, grouping, sorting, and working with nulls
- Writing queries that answer real-world business questions
- Structuring code to reflect how developers actually work

---

## Upcoming Additions

- `SUM()`, `AVG()`, and `MAX()` challenges
- `RANK()` and window function exercises
- Multi-table joins and subqueries
- Filtering by date and nested logic
- Portfolio-ready use cases

---

## Contribute

Want to add your own SQL challenge or optimization tip?

1. Fork the repo
2. Add your `.sql` file in the appropriate folder
3. Create a Pull Request with a short description of your addition

I'll review and merge relevant contributions as this evolves.
