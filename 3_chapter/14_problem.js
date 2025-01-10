// find mean of 5 numbers

function meanFinder(...numbers) {
  // const mean = (a + b + c + d + e) / 5;
  if (numbers.length === 0) {
    return "No numbers provided!";
  }
  if (!numbers.every((num) => typeof num === "number")) {
    return "All inputs must be numbers!";
  }
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const mean = sum / numbers.length;
  return mean;
}

const result = meanFinder(12, 34, 21, 11, 56, 23, 122);
console.log(Math.ceil(result));
