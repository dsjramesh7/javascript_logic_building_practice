// logical operator to find whether the age of the person lies between 10 and 20

function personAge(age) {
  if (typeof age !== "number" || age < 0 || !Number.isFinite(age)) {
    console.log("Invalid input. Please enter a valid positive number for age.");
    return;
  }
  if (age >= 10 && age <= 20) {
    console.log(`The person who's age is ${age} lies between 10 and 20`);
  } else {
    console.log(
      `The person who's age is ${age} does not lie between 10 and 20`
    );
  }
}

personAge(23);
personAge(20);
personAge(10);
personAge(15);
personAge(-15);
personAge("hsadfh");
