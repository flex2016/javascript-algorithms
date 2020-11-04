// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
// This means that given an element x, the 'truth test' is passed if func(x) is true.
// If no element passes the test, return undefined.
// findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
// findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.

function findElement(arr, func) {
  for(let i=0; i<arr.length; i++){
    if(func(arr[i])){
      console.log(arr[i])
      return arr[i]

    }
  }
  return undefined

}

findElement([1, 2, 3, 4], num => num % 2 === 0);
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })
