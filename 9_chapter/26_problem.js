function greet(name) {
  console.log(`Hello ${name}`);
}

function takeInput(callback) {
  const yourInput = prompt("Enter your Name: ");
  callback(yourInput);
}

takeInput(greet);
