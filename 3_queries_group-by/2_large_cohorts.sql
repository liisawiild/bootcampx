SELECT cohorts.name AS cohort_name, COUNT(students.id) AS student_count
FROM cohorts 
JOIN students ON cohort_id = cohorts.id
GROUP BY cohorts.name
HAVING COUNT(students.id) >= 18
ORDER BY COUNT(students.id) ASC
;
