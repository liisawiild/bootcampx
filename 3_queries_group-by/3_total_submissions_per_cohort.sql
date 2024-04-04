SELECT cohorts.name AS cohort, COUNT(assignment_submissions.id) AS total_submissions
FROM cohorts
JOIN students ON cohorts.id = cohort_id
JOIN assignment_submissions ON student_id = students.id
GROUP BY cohorts.name
ORDER BY COUNT(assignment_submissions.id) DESC
;
