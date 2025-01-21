// spread operator
const number1 = [12, 13, 145];
console.log(number1);
const number2 = [1, 2, ...number1];
console.log(number2);

//rest operator
function display(num1, num2, ...remainingNumber) {
  console.log(num1);
  console.log(num2);
  console.log(remainingNumber);
}
display(12, 124, 11, 34, 15, 7, 4, 1);
