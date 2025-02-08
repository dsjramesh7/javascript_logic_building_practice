// 21
// for (let i = 1; i <= 50; i++) {
//   console.log(i);
// }

// 22
// let sum = 0;
// let i = 1;
// while (i <= 10) {
//   sum += i;
//   i++;
// }
// console.log(sum);

// 23
// const language = "JavaScript";
// for (let letter of language) {
//   console.log(letter);
// }

// 24
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

//25
// let j = 5;
// do {
//   console.log(j);
//   j--;
// } while (j > 0);

// 26
// let num = 10;
// let factorial = 1;
// for (let i = num; i > 0; i--) {
//   // console.log(i);
//   factorial = factorial * i;
// }
// console.log(factorial);

// 27
// let hold = 1;
// for (let i = 1; i <= 3; i++) {
//   let str = "";
//   for (let j = 1; j <= 3; j++) {
//     // console.log(j);
//     str = str + `${hold} `;
//     hold++;
//   }
//   console.log(str);
// }

// 28
// const arr = [1, 2, 3, 4, 5, 56, 123, 12312, 434, 69];
// for (let i = 0; i < Math.floor((arr.length - 1) / 2); i++) {
//   let temp = arr[arr.length - 1 - i]; //temp = 5
//   arr[arr.length - 1 - i] = arr[i]; // arr[len] = 1
//   arr[i] = temp; // arr = 5
// }
// console.log(arr);

// 29
// let i = 1;
// while (i <= 100) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
//   i++;
// }

// 30
let person = {
  userName: "garuda",
  rollNo: 23,
  isExist: true,
};

for (let key in person) {
  console.log(person[key]);
}
