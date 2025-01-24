setTimeout(() => {
  console.log("Timer");
}, 5000);

function x(y) {
  console.log("X function has been called");
  y(); // function call hua hai
}

function y() {
  console.log("Y function has been called");
}

x(y); // yaha pe y function defination has been passed here y is a callback function
