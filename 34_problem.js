// Find the factorial of a given number.

const factorial = (num) => {
  if (num < 0) {
    console.log("Factorial is not defined for negative numbers.");
    return;
  }

  if (num === 0) {
    console.log(`The factorial of 0 is 1.`);
    return;
  }
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  console.log(`The factorial of ${num} is ${result}`);
};

factorial(0);
factorial(5);
factorial(-3);
factorial(10);
