const studentmarks = {
  physics: 95,
  maths: 93,
  chemistry: 69,
};
const keys = Object.keys(studentmarks);
// console.log(keys);
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  console.log(`marks in ${key}: ${studentmarks[key]}`);
}

for (let subject in studentmarks) {
  console.log(`${subject} i got ${studentmarks[subject]}`);
}
