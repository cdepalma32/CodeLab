# SQL Fundamentals: Assignment Submissions by Grade

This is a real-world SQL challenge I built and solved using VS Code, SQLite, and raw SQL queries — without GUI tools or tutorials.

### Problem

> Count the total number of assignment submissions per grade level, including grade levels where students submitted nothing.

### Setup

- Built entirely in VS Code
- Created `students` and `assignments` tables
- Inserted test data manually via `.sql` seed script

### Files

- `schema_and_seed.sql`: Creates and seeds tables
- `submissions_by_grade.sql`: Query using `LEFT JOIN` + `GROUP BY`
- `student_submissions.sqlite`: Live SQLite DB (optional)

### What I Practiced

- Writing and debugging multi-table SQL queries
- Using `LEFT JOIN` to include 0-count results
- Linking .sql files to SQLite in VS Code
- Organizing code and data for repeatability

### Result

| grade_level | total_submissions |
| ----------- | ----------------- |
| Freshman    | 3                 |
| Sophomore   | 1                 |

---

### Run It Yourself

```bash
# Run this after opening in VS Code with SQLite extension
# Step 1: Seed the database
Run `schema_and_seed.sql`

# Step 2: Run the query
Run `submissions_by_grade.sql`
```
