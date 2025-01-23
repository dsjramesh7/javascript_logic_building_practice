// Prints numbers from 1 to 50.
const range = (
  startNumber,
  endNumber,
  label1 = "fizz",
  label2 = "buzz",
  divisor1 = 3,
  divisor2 = 5
) => {
  if (startNumber > endNumber) {
    console.log("Start number should be less than the end number.");
    return;
  }

  if (startNumber === endNumber) {
    console.log(`Start number and end number are the same: ${startNumber}`);
    return;
  }

  const result = (message, value) => {
    console.log(`${message} = ${value}`);
  };
  for (let i = startNumber; i <= endNumber; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result(`you are ${label1} and ${label2} number`, i);
    } else if (i % divisor1 === 0) {
      result(`${label1} number`, i);
    } else if (i % divisor2 === 0) {
      result(`${label2} number`, i);
    } else {
      result(`Neither ${label1} nor ${label2} number`, i);
    }
    // console.log(i);
  }
};

// range(1, 50);
// range(2112, 50);
// range(56, 96);

range(1, 100, "lucky", "happy", 3, 7);
range(1, 100);
