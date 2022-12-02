const students = [
  {
    name: "Uguumur",
    score: 99,
  },
  {
    name: "Tugsoo",
    score: 99,
  },
];

// for (let i = 0; i < 2; i++) {
//   students[i].school = "Nest IT School";
//   students[i].message = "I <3 Javascript";
// }
const newStudent = students.map((row) => {
  return {
    ...row,
    school: "nest",
  };
});

console.log(newStudent);
