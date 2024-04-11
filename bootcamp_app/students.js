const { Pool } = require("pg");

const pool = new Pool({
  user: "development",
  password: "development",
  host: "localhost",
  database: "bootcampx",
});

// const text = `
// SELECT students.id AS student_id, students.name AS student, cohorts.id AS cohort_id, cohorts.name AS cohort
// FROM students
// JOIN cohorts ON cohorts.id = cohort_id
// WHERE cohorts.name LIKE '${process.argv[2]}'
// LIMIT ${process.argv[3]};
// `

const text = `
SELECT students.id AS student_id, students.name AS student, cohorts.id AS cohort_id, cohorts.name AS cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`;

const cohortName = process.argv[2]
const limit = process.argv[3]
const values = [cohortName + '%', limit]


pool
.query(text, values)
.then((res) => {
  res.rows.forEach((user) => {
    console.log(
      `${user.student} has an id of ${user.student_id} and was in the ${user.cohort} cohort`
    );
  })
})
.catch((err) => console.error("query error", err.stack));