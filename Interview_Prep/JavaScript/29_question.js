// factorial
function factorial(num) {
  let fact = num;
  for (let i = num - 1; i > 0; i--) {
    fact *= i;
  }
  return fact;
}
console.log(factorial(5));
console.log(factorial(15));
