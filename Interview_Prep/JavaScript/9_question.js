// function createGreeting(greeting) {
//   let count = 0;
//   return function (name) {
//     count++;
//     console.log(
//       `${greeting}, ${name}! This greeting has been used ${count} times.`
//     );
//   };
// }

// const casuelGreeter = createGreeting("hi");
// // const formalGreeter = createGreeting("hi Sir/maam");

// casuelGreeter("zico");
// // formalGreeter("garuda");
// // formalGreeter("abhimanyu");

function outer() {
  let count = 0; // Variable inside outer function

  function inner() {
    count++; // Inner function still has access to `count`
    console.log(count);
  }

  return inner; // Returning inner function
}

const counter = outer(); // outer() executes, but returns inner()
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3
