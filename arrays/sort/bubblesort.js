//Buble sort moves largest values to the end as it iterates through them
//Time complexity is 0(N^2) Quadratic Time Complexity



// Implement a swap helper function that we will use in BS
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] =arr[j];
  arr[j] =temp;
}



//bubbleSort works by having sorted data accumulate at end of array
function bubbleSort(arr) {
  for(let i =0; i<arr.length; i++){
    for(let j=0; j<arr.length-i; j++){
      if(arr[j] >arr[j+1]){
        swap(arr,j, j+1)
      }
    }
  }
  return arr
}
