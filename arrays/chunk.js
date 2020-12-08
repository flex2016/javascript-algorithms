// --- Directions
// Write a function that splits an array (first argument)
// into groups the length of size (second argument) and
// returns them as a two-dimensional array.
// --- Examples
// chunk(["a", "b", "c", "d"], 2) --> [[ "a", "b"], ["c", "d"]]
// chunk([0, 1, 2, 3, 4, 5], 4) -->  [[0, 1, 2, 3], [4, 5]]



//////////////////////////////////////////////////////////
//Create an Empty Result array
//loop through each element in input array
//grab last subArray in result array
//If last Subbarray does not exist or last subbarray is same length as size
// insert new subarray with just input array element into result array
//else
// push input array element into last subArray
//return Result array

// Time and Space == O(N)

function chunk(array, size) {
  let resultAr=[];
  for(let i=0; i< array.length; i ++){
    const last = resultAr[resultAr.length -1];
    if( !last || last.length === size){
      resultAr.push([array[i]])
    }
    else{
      last.push(array[i])

    }
  }
  return resultAr;
}



////////////////////////////////////////
function chunk1(arr, size){
  let newAr=[];
  for(i = 0; i<arr.length; i += size){
    let mychunk = arr.slice(i, i+size)
    newAr.push(mychunk)
  }
  return newAr
}
// First, we create an empty array newAr where we will store our ‘chunks’.
// The for loop starts at zero, increments by size each time through the loop, and stops when it reaches arr.length.
// Note that this for loop does not loop through arr. Instead, we are using the loop to generate numbers we can use as indices to slice the array in the right locations.
// Inside our loop, we create each chunk using arr.slice(i, i+size), and add this value to newAr with newAr.push().
// Finally, we return the value of newAr.



////////////////////////////////////////////////////
function chunkArrayInGroups(arr, size) {
  var newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}
// Code Explanation
// Firstly, we create a variable. newArr is an empty array which we will push to.
// Our while loop loops until the length of the array in our test is not 0.
// Inside our loop, we push to the newArr array using arr.splice(0, size).
// For each iteration of while loop, it deletes size number of elements from the front of arr and push them as an array to newArr.
// Finally, we return the value of newArr.
