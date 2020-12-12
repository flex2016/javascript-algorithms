// Given five positive integers, find the minimum and maximum values that can be calculated by
// summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line of two space-separated
// long integers.

// Sample Input

// 1 2 3 4 5
// Sample Output

// 10 14

function miniMaxSum(arr) {

  arr = arr.sort((a, b) => a - b)
  let min = arr.slice(0, arr.length - 1).reduce((a, b) => a + b)
  let max = arr.slice(1, arr.length).reduce((a, b) => a + b)

  console.log(min + ' ' + max)
}
