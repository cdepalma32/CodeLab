-- Reset the tables if they exist
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS assignments;

-- Create students table
CREATE TABLE students (
    student_id INTEGER PRIMARY KEY, 
    student_name TEXT,
    grade_level TEXT
    );

-- create assignments table
CREATE TABLE assignments (
    assignment_id INTEGER PRIMARY KEY,
    student_id INTEGER,
    score INTEGER
    );

-- Insert students
INSERT INTO students (student_id, student_name, grade_level) VALUES
(1, 'Lena', 'Freshman'),
(2, 'Sam', 'Freshman'),
(3, 'Joey', 'Sophomore'), 
(4, 'Rachel', 'Sophomore');

-- Insert assignments
INSERT INTO assignments (assignment_id, student_id, score) VALUES
(1, 1, 90), 
(2, 2, 85),
(3, 2, 76), 
(4, 4, 99);

