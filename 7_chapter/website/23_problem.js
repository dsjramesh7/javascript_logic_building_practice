// setTimeout and setInterval

const greetings = "Hello Namaste";
setTimeout(() => {
  console.log(greetings);
}, 5000);

console.log("time out");
clearTimeout(greetings);

setInterval(() => {
  console.log("i like to move it");
}, 1000);
