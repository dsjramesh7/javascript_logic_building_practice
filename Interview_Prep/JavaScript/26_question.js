// vowel count in a sentence
function isVowel(sentence) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(isVowel("Enemy can't attack our plan if we don't have plan"));
