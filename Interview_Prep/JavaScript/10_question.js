// Higher order function :
// A higher-order function is a function that does one of the following:
// Takes another function as an argument.
// Returns another function as its result.

function result(a, b, operator) {
  console.log("higher order function");
  return operator(a, b);
}

function add(a, b) {
  console.log("the function which is passed to higher order function");
  return a + b;
}

const ans = result(12, 34, add);
console.log(ans);
