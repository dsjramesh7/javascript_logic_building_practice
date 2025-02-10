// remove duplicate
function removeDuplicate(arr) {
  let uniqueElement = [];

  for (let i = 0; i < arr.length; i++) {
    if (uniqueElement.indexOf(arr[i]) === -1) {
      uniqueElement.push(arr[i]);
    }
  }
  return uniqueElement;
}
console.log(removeDuplicate([1, 2, 2, 4, 66, 34, 34, 56, 34, 89, 11, 23]));
