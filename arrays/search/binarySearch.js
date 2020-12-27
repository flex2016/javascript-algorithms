//Binary Search is a Searching Algorithm that can search in O(log n) time for a sorted array,
//Compared to Linear Search's O(n) time fo an unsorted array.
//Binary Search only works on sorted Arrays, and is able to search that array much
// faster than Linear Search due to the presort.
//Binary Search Can achieve O(log N) Time Caomplexity by eliminating HALF of
//remaining things to search for with each search.


// Implement a Binary Search Algorithm that searches a Sorted Array
// for the provided value.
// The Binary Search Algorithm will return the index of value found, or -1 if not found.

//Time Complexity   O(log N) if N is doubled we only have to do one more operation
//Each operation can elimate half of teh remainding array


const binarySearch = (sortedArr, value) => {
   let left= 0
   let right= sortedArr.length-1
   while(left <= right){
     const middle = Math.floor((left + right)/2)
     const midVal = sortedArr[middle]
     if(midVal === value){
       return middle
     }
     else if(midVal <value){
       left = middle + 1

     }
     else if(midVal >value){
       right = middle - 1

     }
   }
   return -1
};


const sortedNumsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
binarySearch(sortedNumsArray, 5)
