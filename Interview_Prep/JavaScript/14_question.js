// ways to loop through an array
const fruits = ["apple", "cherry", "pineapple", "watermelon"];
console.log(fruits.length);

// for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//forEach loop
fruits.forEach((f, index) => {
  console.log(`${f} is at ${index} index`);
});

// for of loop
for (let f of fruits) {
  // will give value
  console.log(f);
}

// map method for iterating through an array
const upperCaseFruits = fruits.map((singleFruit, i) => {
  return singleFruit.toUpperCase();
});
console.log(upperCaseFruits);

// for in loop
for (let index in fruits) {
  // will give you key you can say or properties maybe
  console.log(index);
}
