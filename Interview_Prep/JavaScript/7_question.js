// variabla shadowing: in JavaScript occurs when the inner variable hides or overrides the outer variable within the local scope. In this situation, the outer variable cannot be accessed within the inner scope, only the inner variable is used in that scope.

let a = 12;

function example() {
  let a = 34;
  console.log(a); //34

  if (true) {
    let a = 69;
    console.log(a); // 69
  }

  console.log(a); //34
}

example();
console.log(a); //12
