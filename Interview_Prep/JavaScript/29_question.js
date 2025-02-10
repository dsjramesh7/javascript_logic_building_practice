// factorial
function factorial(num) {
  let fact = 1;
  if (num === 0) {
    return 1;
  }
  for (let i = num; i > 0; i--) {
    fact *= i;
  }
  return fact;
}
console.log(factorial(5));
console.log(factorial(15));
