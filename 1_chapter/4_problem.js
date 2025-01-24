let time = 20;
if (time < 12) {
  console.log("Good morning!");
} else if (time < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

function check(num) {
  if (typeof num !== "number") {
    console.log(`${num} is an invalid input. Please enter a number.`);
  } else if (num < 0) {
    console.log(`${num} is a negative number.`);
  } else if (num > 0) {
    console.log(`${num} is a positive number.`);
  } else {
    console.log(`${num} is equal to zero.`);
  }
}

check(12);
check(0);
check(-123);
check("sadfs");

const dictionary = {
  serendipity:
    "The occurrence of events by chance in a happy or beneficial way.",
  ephemeral: "Lasting for a very short time.",
  eloquence: "Fluent or persuasive speaking or writing.",
  resilience: "The capacity to recover quickly from difficulties; toughness.",
  solitude: "The state of being alone, often in a positive or peaceful way.",
};

function findMeaningOfGivenWord(word) {
  const meaning = dictionary[word.toLowerCase()];
  if (meaning) {
    console.log(`The meaning of "${word}" is: ${meaning}`);
  } else {
    console.log(`Sorry, the word "${word}" is not in the dictionary.`);
  }
}

findMeaningOfGivenWord("serendipity");
findMeaningOfGivenWord("ephemeral");
findMeaningOfGivenWord("unknown");
