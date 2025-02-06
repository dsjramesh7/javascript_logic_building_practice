const number = [12, 1, 45, 23];

// map method
const multiplyBy2 = number.map((n, i) => {
  return n * 2;
});
console.log(multiplyBy2);

//filter method
const filtered = number.filter((n, i) => n > 23);
console.log(filtered);
