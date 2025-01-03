// // 5.Write a function to reverse a given string.

// function reverseString(word) {
//   if (typeof word !== "string") {
//     console.log("give a valid word");
//     return;
//   }

//   if (typeof word === "string") {
//     let reverseStr = "";
//     for (let i = word.length - 1; i >= 0; i--) {
//       reverseStr = reverseStr + word[i];
//     }
//     return reverseStr;
//   }
// }

// const result = reverseString("death note");
// console.log("reverse string output: " + result);

function reverseString(word) {
  if (typeof word !== "string") {
    console.log("Please provide a valid word.");
    return;
  }
  return word.split("").reverse().join("");
}

const result = reverseString("death note");
console.log("Reversed string output: " + result);
