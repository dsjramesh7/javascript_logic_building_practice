// 4.Write a function that takes three numbers and returns the largest one.
function largestNumber(a, b, c) {
  console.log(`The numbers are : ${a}, ${b}, ${c}`);

  //logic here
  if (a === b && b === c) {
    console.log("All numbers are equal");
  }

  if (a > b && a > c) {
    console.log("The largest number is: " + a);
  } else if (b > a && b > c) {
    console.log("The largest number is: " + b);
  } else {
    console.log("The largest number is: " + c);
  }
}

largestNumber(1211, 34, 12331);
