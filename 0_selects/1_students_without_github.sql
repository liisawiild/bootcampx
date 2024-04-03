-- We need a list of all of the students that haven't added their...
-- ...Github username to their account yet, so that we can tell them to add it.
-- Your task is to get all students without a Github username.
-- Select their id, name, email, and cohort_id.
-- Order them by cohort_id.

SELECT id, name, email, cohort_id 
FROM students 
WHERE github IS NULL 
ORDER BY cohort_id;