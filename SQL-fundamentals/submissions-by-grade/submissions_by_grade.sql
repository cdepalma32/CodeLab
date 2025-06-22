-- This query counts the total assignment submissions by grade level
-- using a LEFT JOIN to include students with no submissions

SELECT 
    s.grade_level, 
    COUNT(a.assignment_id) AS total_submissions     -- Only counts non-null submissions
    FROM students s
    LEFT JOIN assignments a
    ON s.student_id = a.student_id
    GROUP BY s.grade_level
    ORDER BY total_submissions DESC;   -- Grade levels with the most submissions first (descending order)

