// pure function
// A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed.
// Pure functions return consistent results for identical inputs.
// They do not modify external states or depend on mutable data.
// Often used with immutable data structures to ensure reliability.
// Their independence from external states makes them highly reusable.
const sum = (a, b) => {
  console.log(a + b);
};

// impure function
// A function that has side effects or does not always return the same output when given the same input
let total = 0;
function added(value) {
  console.log(total + value);
}

added("hello"); // 0hello
added(1); // number ayega
