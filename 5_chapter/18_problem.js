// create an array of numbers and take input from the user to add numbers to this array
let numbers = [];
let addMore = true;

while (addMore) {
  let input = prompt("Enter a number to add in an array: ");
  if (input.toLowerCase() === "stop") {
    addMore = false;
  } else {
    let n = parseInt(input);
    if (!isNaN(n)) {
      numbers.push(n);
    } else {
      console.log("please enter a valid number");
    }
  }
}

console.log("final array: ", numbers);
