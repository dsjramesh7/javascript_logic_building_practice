// arrays: The Array object is used to store multiple values in a single variable.

let numbers = [1, 2, 3, 4, 5];

// to access tha value
console.log(`At 2nd index the value is ${numbers[2]}`);

// to find the length
console.log(numbers.length);

// to change the value at particular index
numbers[2] = 69;
console.log(
  `At 2nd index the value is ${numbers[2]} which i changed just now before it was 3`
);

//type of array => is object
console.log(typeof numbers);

// array to string
console.log(numbers.toString());

// array to joining
console.log(numbers.join("--"));

//pop: updates the original array it removes the last element
console.log(numbers.pop());
console.log(numbers);

//push: updates the original array it adds the value at the last index
console.log(numbers.push(5646));
console.log(numbers);

//shift: updates the original array it removes the first element
console.log(numbers.shift());
console.log(numbers);

//unshift: updates the original array it add the first element
console.log(numbers.unshift("first"));
console.log(numbers);

let b = [23, 321, 51];
let c = [123, 21111, 555];
let allarraytogether = numbers.concat(b, c);

console.log(allarraytogether);

console.log(numbers.sort());
console.log(numbers.pop());
console.log(numbers);

//splice: to add new element to an array at a certain index;
numbers.splice(1, 1, 3);
console.log(numbers);

//slice : to remove
let newarray = numbers.slice(0, 2);
console.log(newarray);
// console.log(newarray.reverse());
// console.log(newarray);
