// isprime or not?
function isPrime(num) {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return true;
    }
  }
  return false;
}

console.log(isPrime(7));
console.log(isPrime(10));
