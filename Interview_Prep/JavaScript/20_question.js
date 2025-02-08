// 41
function evenOdd(num) {
  if (typeof num !== "number" || num < 0) {
    console.log("give a valid number");
    return;
  }
  if (num % 2 === 0) {
    console.log(`${num} is an even number`);
  } else {
    console.log(`${num} is an odd number`);
  }
}
evenOdd("rey");
evenOdd(12);
evenOdd(-12);

// 42
function areaOfCircle(radius) {
  return (Math.PI * Math.pow(radius, 2)).toFixed(2);
}
console.log(areaOfCircle(12));

//43
const numofarr = [1, 2, 3, 4, 5];
function sumOfArr(arr) {
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(sumOfArr(numofarr));

// 44
function firstCharacterCheck(str, character) {
  let newstr = str.toLowerCase();
  for (let i = 0; i < newstr.length; i++) {
    if (newstr[0] === character.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(firstCharacterCheck("Harsh", "w"));

// 45
function maxBetweenTwoNumbers(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is greater then  ${num2}`);
  } else if (num1 === num2) {
    console.log(`${num1} is equal to ${num2}`);
  } else {
    console.log(`${num2} is greater then  ${num1}`);
  }
}
maxBetweenTwoNumbers(34, 69);
maxBetweenTwoNumbers(78, 69);
maxBetweenTwoNumbers(45, 45);

// 46
function factorialOfNum(num) {
  let fact = num;
  for (let i = num - 1; i > 0; i--) {
    fact = fact * i;
  }
  console.log(fact);
}
factorialOfNum(7);

// 47
function reverseString(str) {
  console.log(str.split("").reverse().join(""));
}
reverseString("kirmada");

// 48
