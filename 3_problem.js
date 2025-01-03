function evenOdd(num) {
  console.log(num);
  if (typeof num !== "number" || !Number.isInteger(num)) {
    console.log("Please provide a valid integer.");
    return;
  }

  if (num % 2 === 0) {
    console.log(`${num} is an even number`);
  } else {
    console.log(`${num} is an odd number`);
  }
}

evenOdd(0);
evenOdd(-2);
evenOdd(-3);
evenOdd(1.5);
evenOdd("hello");
