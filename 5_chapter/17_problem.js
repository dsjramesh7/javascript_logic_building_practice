const numbers = [2, 4, 6];

// forEach loop
numbers.forEach((ele) => {
  // console.log(ele);
  console.log(ele * 2);
});
console.log(numbers); // doesn't change original array

//map method
numbers.map((ele) => {
  console.log(`element is: ${ele}`); //creates a new array
});

//filter method
console.log(numbers.filter((item) => item > 2));

//reduce
let sum = numbers.reduce((pc, acc) => pc + acc);
console.log(sum);
