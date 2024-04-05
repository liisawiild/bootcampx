SELECT assignments.day AS day, COUNT(assignments.id) AS num_assignments, SUM(assignments.duration) AS duration
FROM assignments
GROUP BY day
ORDER BY day;