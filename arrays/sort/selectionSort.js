//Selection sort moves smallest values to the front of the array as it iterates through them
//Time complexity is 0(N^2) Quadratic Time Complexity

// Implement a swap helper function that we will use in SS
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] =arr[j];
  arr[j] =temp;
}


//selectionSort works by having sorted data accumulate at start of array
function selectionSort(arr) {
  for(let i =0; i<arr.length; i++){
    let swapIdx =i
    for(let j=i+1; j<arr.length; j++){
      if(arr[j] <arr[swapIdx]){
       swapIdx = j
      }
    }
     swap(arr,i, swapIdx)
  }
  return arr
}
