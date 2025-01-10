// js program to find whether the number is divisible by 2 and 3

function divisibleNumber(num) {
  if (typeof num !== "number" || num < 0 || !Number.isFinite(num)) {
    return `${num} is an invalid input`;
  }
  if (num % 2 === 0 && num % 3 === 0) {
    return `${num} is divisible by both 2 and 3`;
  } else {
    return `${num} is not divisible by 2 or 3`;
  }
}

const result = divisibleNumber(12.4324);
console.log(result);
