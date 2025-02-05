let globalScopeVariable = "you can access me everywhere strawhat";

function example() {
  let localScopeVariable = "only you can acces me in scope";

  console.log(globalScopeVariable);
  console.log(localScopeVariable);
}

console.log(globalScopeVariable);
console.log(localScopeVariable); //  error:localScopeVariable is not defined
