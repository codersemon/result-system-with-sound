/**
 *
 * @param {*} msg - msg to show
 * @param {*} type - alert type
 * @returns - dismissible alert
 */
const createAlert = (msg, type = "warning") => {
  return `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    ${msg}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
};

/**
 *
 * @param {*} input
 * @returns
 */
const isNumber = (input) => {
  const pattern = /^[0-9]{1,}$/;
  return pattern.test(input);
};

function getResult(marks) {
  let gpa;
  let grade;
  if (marks >= 0 && marks < 33) {
    gpa = 0.00;
    grade = "F";
  } else if (marks >= 33 && marks < 40) {
    gpa = 1.00;
    grade = "D";
  } else if (marks >= 40 && marks < 50) {
    gpa = 2.00;
    grade = "C";
  } else if (marks >= 50 && marks < 60) {
    gpa = 3.25;
    grade = "B";
  } else if (marks >= 60 && marks < 70) {
    gpa = 3.50;
    grade = "A-";
  } else if (marks >= 70 && marks < 80) {
    gpa = 4.00;
    grade = "A";
  } else if (marks >= 80 && marks <= 100) {
    gpa = 5.00;
    grade = "A+";
  }

  return {
    gpa,
    grade,
  };
}
