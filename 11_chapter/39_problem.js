// Build a basic tip calculator function that takes a bill amount and tip percentage as input and returns the total.

const tipCal = (billAmount, tipPercentage) => {
  if (typeof billAmount !== "number" || typeof tipPercentage !== "number") {
    return `Invalid input. Please enter numbers for both bill amount and tip percentage.`;
  }

  const tipAmount = (billAmount * tipPercentage) / 100;
  const totalAmount = billAmount + tipAmount;

  return totalAmount;
};

console.log(tipCal(1200, 3).toFixed(2)); // 1236.00
console.log(tipCal(800, 15).toFixed(2)); // 920.00
console.log(tipCal("hello", 5)); // Invalid input. Please enter numbers for both bill amount and tip percentage.
