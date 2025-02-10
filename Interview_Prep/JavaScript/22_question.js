// longest word
function longestWord(sentence) {
  let word = sentence.split(" ");
  let longestWord = "";

  for (let i = 0; i < word.length; i++) {
    if (word[i].length > longestWord.length) {
      longestWord = word[i];
    }
  }
  return longestWord;
}
console.log(
  longestWord("I there what up  asdfasdfsadf 123j12lk3j1l2k3jl12k3 12 555")
);
