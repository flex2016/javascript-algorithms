//Flatten a nested array. You must account for varying levels of nesting.

// Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.


function steamrollArray(arr) {
  return arr;
}


function steamrollArray(arr) {
  // Recursion is the breakfast of champions. ― Don Stewart
  var steamrolled = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      var subArray = steamrollArray(arr[i]);
      steamrolled = steamrolled.concat(subArray);
    } else {
      steamrolled.push(arr[i]);
    }
  }
  return steamrolled;
}

steamrollArray([1, [2], [3, [[4]]]]);






// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
