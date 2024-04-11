const { Pool } = require("pg");

const pool = new Pool({
  user: "development",
  password: "development",
  host: "localhost",
  database: "bootcampx",
});


const queryString = `
SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort_id
FROM teachers
JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
ORDER BY teacher
;
`;

const cohortName = process.argv[2];
const values = [cohortName];

pool.query(queryString, values)

.then((res) => {
  res.rows.forEach((teacherObj) => {
  console.log(`${teacherObj.cohort_id}: ${teacherObj.teacher}`);
  })
})
.catch((err) => console.error("query error", err.stack));