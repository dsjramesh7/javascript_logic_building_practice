// hoisting: a js default where the declaration of variable and function goes to the top of the code

//invoking
console.log(a);
// console.log(b);
// console.log(d);
sum(12, 124);
console.log(sum(12, 124));

// declaration
var a = 12;
// let b = 123;
// const d = 111;

function sum(a, b) {
  console.log("hello there");
  return a + b;
}
