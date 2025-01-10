// for loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

const student = {
  userName: "Something",
  rollNo: 123,
  timepass: false,
};

const heroName = ["shinchan", "doremon", "kochikaame"];

// for in loop
for (let key in student) {
  console.log(key);
}

for (let index in heroName) {
  console.log(`${index} is ${heroName[index]}`);
}

// for of loop is used in array string but not in object
for (let value of heroName) {
  console.log(value);
}

// while loop
let num = 0;
while (num < 12) {
  console.log(num);
  num++;
}
