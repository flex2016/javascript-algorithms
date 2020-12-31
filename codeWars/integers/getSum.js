// Given two integers a and b, which can be positive or negative,
// find the sum of all the integers between including them too and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples
// getSum(1, 0) == 1   // 1 + 0 = 1
// getSum(1, 2) == 3   // 1 + 2 = 3
// getSum(0, 1) == 1   // 0 + 1 = 1
// getSum(1, 1) == 1   // 1 Since both are same
// getSum(-1, 0) == -1 // -1 + 0 = -1
// getSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

function getSum( a,b ) {
  let result = 0;
  let min = Math.min(a, b),
      max = Math.max(a, b);
  for (var i = min; i <= max; i++) { result += i }
    return result
}
