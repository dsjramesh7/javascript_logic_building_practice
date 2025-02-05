// var let const

var a = 12;
let b = 14;
const c = 45;

if (true) {
  var a = 121123;
  let b = 141;
  const c = 45123;

  console.log(a);
  console.log(b);
  console.log(c);
}

console.log(a);
console.log(b);
console.log(c);
