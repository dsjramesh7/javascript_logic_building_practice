// Create a program to:
// Accept two numbers and an operator (+, -, *, /) as inputs.
// Perform the operation and display the result.

const operation101 = (num1, num2, op) => {
  let result;

  if (op === "+") {
    result = num1 + num2;
    console.log(`${num1} ${op} ${num2} = ${result}`);
  } else if (op === "-") {
    result = num1 - num2;
    console.log(`${num1} ${op} ${num2} = ${result}`);
  } else if (op === "/") {
    result = num2 !== 0 ? num1 / num2 : "Division by zero is not allowed";
    console.log(`${num1} ${op} ${num2} = ${result}`);
  } else if (op === "*") {
    result = num1 * num2;
    console.log(`${num1} ${op} ${num2} = ${result}`);
  } else {
    console.log(`Invalid operator: ${op}`);
  }
};

operation101(12, 34, "+");
operation101(12, 34, "-");
operation101(12, 0, "/");
operation101(12, 34, "*");
operation101(12, 34, "@");
