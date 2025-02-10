// pallendrome
function pallendrome(str) {
  let reverseString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }

  if (str === reverseString) {
    return `${str} is a pallendrome.`;
  } else {
    return `${str} is not a pallendrome.`;
  }
}

console.log(pallendrome("aba"));
console.log(pallendrome("aasdfba"));
console.log(pallendrome("eye"));
console.log(pallendrome("racecar"));
