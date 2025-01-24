function evenOdd(num) {
  if (typeof num !== "number") {
    console.log("Please enter a valid input. It should be a number.");
    return;
  }

  if (num % 2 === 0) {
    console.log(`${num} is an even number.`);
  } else {
    console.log(`${num} is an odd number.`);
  }
}

evenOdd(-12);
evenOdd(7);
evenOdd(0);
evenOdd("12");
