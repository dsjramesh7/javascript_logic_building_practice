// Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function Expression
const add = function (a, b) {
  return a + b;
};

// Arrow Function
const multiply = (a, b) => a * b;

console.log(greet("yowai mo")); // function call
console.log(add(5, 10));
console.log(multiply(4, 3));

//area of circle
const areaOfCircle = (r) => {
  if (typeof r !== "number" || r <= 0) {
    return "Please provide a positive number for the radius.";
  }
  return Math.PI * r * r;
};
const result = areaOfCircle(12);
console.log(result.toFixed(2));

// logical operator to find whether the age of the person lies between 10 and 20
function personAge(age) {
  if (typeof age !== "number" || age < 0 || !Number.isFinite(age)) {
    console.log("Invalid input. Please enter a valid positive number for age.");
    return;
  }
  if (age >= 10 && age <= 20) {
    console.log(`The person who's age is ${age} lies between 10 and 20`);
  } else {
    console.log(
      `The person who's age is ${age} does not lie between 10 and 20`
    );
  }
}

personAge(23);
personAge(20);
personAge(10);
personAge(15);
personAge(-15);
personAge("hsadfh");
