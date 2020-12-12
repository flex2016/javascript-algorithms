//Given an array of numbers, fing teh index of the smallest array element (the pivot)
// for which the sums of all elements to the left and to the right are equal.
// The array may not be reordered.

// arr=[1,2,3,4,6]

// The sum of first three elements, 1+2+3=6, The value of the last element is 6.
// Using zero based indexing arr[3]=4 is the pivot between the two subarrays
// The index of pivot is 3.

function balancedSum(arr){
  let leftSum=0;
  let sum =0;
  for(let i=0; i<arr.length; i++){
    sum += arr[i]
  }

  for(let i=0; i<arr.length; i++){
    if(leftSum == sum -leftSum - arr[i]){
      return i
    }
    leftSum += arr[i]
  }
  return false

}


let arr=[1,2,3,4,6];

balancedSum(arr)
