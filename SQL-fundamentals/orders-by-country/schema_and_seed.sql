-- Reset the tables if they exist
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS users;

-- Create users table
CREATE TABLE users (
  user_id INTEGER PRIMARY KEY,
  name TEXT,
  country TEXT
);

-- Create orders table
CREATE TABLE orders (
  order_id INTEGER PRIMARY KEY,
  user_id INTEGER,
  total INTEGER
);

-- Insert users
INSERT INTO users (user_id, name, country) VALUES
(1, 'Alice', 'USA'),
(2, 'Bob', 'USA'),
(3, 'Charlie', 'Canada'),
(4, 'Diana', 'Canada'),
(5, 'Eve', 'Mexico');

-- Insert orders
INSERT INTO orders (order_id, user_id, total) VALUES
(1, 1, 100),
(2, 1, 150),
(3, 2, 200),
(4, 3, 300);


