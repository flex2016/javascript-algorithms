// Implement Linear Search Algorithms that search a provided Array for the provided value.
// The Linear Search Algorithms will either return a boolean, index, or value back.

// O(N) /Linear time complexity-- Our Search algorithm in the worst case
 //needs to iterate over every item in the array to check if it is the value we are looking for.
 //Linear time is the best we can do for searching an unsorted Array.
 //On Sorted array we can get a much better time complexity with Binary Search.

function linearSearchIndexOf(arr, val) {
  for(let i=0; i<arr.length; i++){
    if(arr[i] ===val){
      return i
    }
  }
  return -1

  //return arr.indexOf(val)
}



function linearSearchIncludes(arr, val) {
    for(let i=0; i<arr.length; i++){
    if(arr[i] ===val){
      return true
    }
  }
  return false

   //return arr.includes(val)
}


function linearSearchFind(arr, cb) {
   for(let i=0; i<arr.length; i++){
    if( cb(arr[i] === true)){
      return arr[i]
    }
  }
  return undefined
  // return arr.find(cb)
}
