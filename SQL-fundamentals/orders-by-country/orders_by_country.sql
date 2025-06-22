SELECT u.country, COUNT(o.order_id) AS total_orders
FROM users u
LEFT JOIN orders o ON u.user_id = o.user_id
GROUP BY u.country
ORDER BY total_orders DESC;
