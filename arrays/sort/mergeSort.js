// Create a function that when given 2 sorted arrays, it returns
// a new sorted array that contains both elements of input arrays
// --- Examples
// merge([1,3], [2,4]) === [1,2,3,4]
// merge([1,5], [4,6,7]) === [1,4,5,6,7]
// merge([4,6,7], [1,5]) === [1,4,5,6,7]

//Time Complexity: O(N+M) Where N and M are length of sorted Input Arrays
//Space Complexity: O(N+M) Results are as long as the inputs combined

function merge(sortedArr1, sortedArr2) {
  let res= [];
  let p1=0;
  let p2=0;
  while(p1< sortedArr1.length && p2< sortedArr2.length){
    if(sortedArr1[p1]< sortedArr2[p2]){
        res.push(sortedArr1[p1])
        p1++
    }
    else{
      res.push(sortedArr2[p2])
      p2++
    }
  }
  while(p1< sortedArr1.length){
     res.push(sortedArr1[p1])
      p1++
  }
  while(p2< sortedArr2.length){
      res.push(sortedArr2[p2])
      p2++
  }

  return res
}

// merge([4,6,7], [1,5])
merge([1,3], [2,4])
