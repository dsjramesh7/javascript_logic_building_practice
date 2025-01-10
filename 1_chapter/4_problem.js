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
