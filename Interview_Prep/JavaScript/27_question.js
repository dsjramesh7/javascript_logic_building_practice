// largest number in an array
const arrOfNum = [12, 5, 34, 69, 12, 1, 23, 55];
function largestNumber(arr) {
  let largestNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }
  return largestNumber;
}

console.log(largestNumber(arrOfNum));
