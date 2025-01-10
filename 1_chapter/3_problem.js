// create a const object and then later change it to number will it work?
const obj = {
  word: "jhen",
  rollNo: 12,
};
console.log(obj);

obj.power = 89; // yes new key can be added
console.log(obj);

// obj = 123; // error:Assignment to constant variable.
// console.log(obj);
