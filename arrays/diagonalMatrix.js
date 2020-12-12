// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9
// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .
var array = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 9, 8, 9 ]
];

function diagonalDifference(arr) {
    // Write your code here
    let leftSum =0;
    let rightSum=0;
    for(let i=0; i< arr.length; i++){
      leftSum += arr[i][i]
      rightSum += arr[i][arr.length-1-i]
    }
    return Math.abs(leftSum-rightSum)

}

diagonalDifference(array)
