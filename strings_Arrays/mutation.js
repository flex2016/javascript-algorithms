// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
// mutation(["hello", "hey"]) should return false.
// mutation(["hello", "Hello"]) should return true.
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
// mutation(["Mary", "Army"]) should return true.
// mutation(["Mary", "Aarmy"]) should return true.
// mutation(["Alien", "line"]) should return true.
// mutation(["floor", "for"]) should return true.
// mutation(["hello", "neo"]) should return false.
// mutation(["voodoo", "no"]) should return false.
// mutation(["ate", "date"] should return false.
// mutation(["Tiger", "Zebra"]) should return false.
// mutation(["Noel", "Ole"]) should return true.

function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) {
    console.log(target.indexOf(test[i]))
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}
// Code Explanation
// First we make the two strings in the array lowercase. test will hold what we are looking for in target.
// Then we loop through our test characters and if any of them is not found we return false.

// If they are all found, the loop will finish without returning anything and we get to return true.

mutation(["hello", "hey"])


function mutation2(arr) {
  let arr1=arr[0].toLowerCase()
  let arr2=arr[1].toLowerCase()
  let map ={}
  for(let i=0; i<arr1.length; i++){
    if(!map[arr1[i]]){
      map[arr1[i]]=true
    }
  }
  for(let i=0; i<arr2.length; i++){
    if(!map[arr2[i]]){return false}
  }
  return true;
}

mutation2(["hello", "hey"]);
