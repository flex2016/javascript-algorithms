// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself.
// For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast,
// 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

// sumPrimes(10) should return a number.
// sumPrimes(10) should return 17.
// sumPrimes(977) should return 73156.

function sumPrimes(num) {
  let i = 1;
  let sum = 0;
  while (i <= num) {
    if (isPrime(i)) {
      sum += i;
    }
    i++;
  }
  return sum;
}
//function to check if a number is prime or not
function isPrime(x) {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) return false;
  }
  return x !== 1 && x !== 0;
}
//test here
sumPrimes(10);

// Create a function to check if a number is prime or not.
// Declare two variables. One to keep us within the limit of the given number and the other to store the sum of numbers to be returned.
// Create a loop to check all numbers lesser than or equal to the given number.
// Check if a number is prime and add it to the value of sum.
// Return the value of sum once the loop exits.
