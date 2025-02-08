// 31
// const subjects = ["phy", "chem", "math", "cs"];
// console.log(subjects);
// subjects.forEach((ele) => {
//   console.log(ele);
// });
// // for (let element of subjects) {
// //   console.log(element);
// // }

// 32
// const subjects = ["phy", "chem", "math", "cs"];
// console.log(subjects[1]);

//33
// const subjects = ["phy", "chem", "math", "cs"];
// subjects.unshift(12, 45);
// console.log(subjects);

// 34
// const subjects = ["phy", "chem", "math", "cs"];
// subjects.pop();
// console.log(subjects);

// 35
// const subjects = ["phy", "chem", "math", "cs"];
// const newSubjects = subjects.slice(0, 3);
// console.log(newSubjects);
// console.log(subjects);

// 36
// const subjects = ["phy", "chem", "math", "cs"];
// console.log(subjects.indexOf("math"));

// 37
// const subjects = ["phy", "chem", "math", "cs"];
// console.log(subjects.includes("phy"));
// console.log(subjects.includes("commerce"));

// 38
// const subject1 = ["phy", "chem", "math", "cs"];
// const subject2 = ["anything", "something"];
// const newSubjectCombine = subject1.concat(subject2);
// console.log(newSubjectCombine);

// 39
// const numbers = [5, 2, 1, 9];
// for (let i = 0; i < numbers.length - 1; i++) {
//   for (let j = 0; j < numbers.length - i - 1; j++) {
//     if (numbers[i] > numbers[i + 1]) {
//       let temp = numbers[i];
//       numbers[i] = numbers[i + 1];
//       numbers[i + 1] = temp;
//     }
//   }
// }
// console.log(numbers);

// 40
const arr1 = [12, 14, 23, 34];
// const newArr = [...arr1];
// console.log(newArr);
// or
const newArrrrr = [];
arr1.forEach((eachElement) => {
  newArr.push(eachElement);
});
console.log(newArrrrr);
