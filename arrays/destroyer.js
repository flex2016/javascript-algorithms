// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.
// Note
// You have to use the arguments object.

// destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
// destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
// destroyer([2, 3, 2, 3], 2, 3) should return [].
// destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
// destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65].


// Code Explanation
// Declare a variable named args and set it equal to a new Array object from() the arguments passed into the function.
// On the same or next line, use the slice() method on args starting from the second index,
//  This separates the arguments used for filtering into their own array of args.
// Return the filtered array, using includes() in the callback function to check if val is not in args;
// returning true to keep the value in the original array or false to remove it.


function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}



// Code using ES6 syntax to declare function using arrow functions.
// Using spread operator to retrieve the arguments.
// Return the filtered array, using includes().

const destroyer2 = (arr, ...valsToRemove) => arr.filter(elem => !valsToRemove.includes(elem));

function destroyer(arr) {
  arr = arguments[0];
  //console.log(arr)
  var res= [];
  for (var i = 1; i < arguments.length; i++) {
  console.log(arguments[i]);
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] === arguments[i]) {
      delete arr[j];
      console.log(arr);
    }
  }
  }
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i]);
      if (arr[i]) {
        res.push(arr[i]);
      }
    }
  return res;
}
