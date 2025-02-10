// reverse String
function reverse(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}
console.log(reverse("Dance here"));
// =========================================

function reverse2(str) {
  return str.split("").reverse().join("");
}
console.log(reverse2("Dance here"));
