// Check if two strings are anagrams of each other.
// One string is an anagram of another if it uses exact same characters
// in exact same quantity. Only consider word characters, and make sure the
// function is case insensitive.
// --- Examples
//   anagrams('heart', 'earth') --> True
//   anagrams('heart', '  earth') --> True
//   anagrams('Heart!', 'EARTH') --> True
//   anagrams('lol', 'lolc') --> False



// time O(N + M)
//space O(1)
function anagrams(stringA, stringB) {
  stringB= stringB.toLowerCase().replace(/[\W_]+/g, "");
  stringA= stringA.toLowerCase().replace(/[\W_]+/g, "");

  if(stringA.length !== stringB.length){
    return false
  }

  map={};

  for( let i = 0; i< stringA.length; i ++){
      let char = stringA[i]
      map[char] = map[char] +1 || 1;
      // if(map[char]){
      //   map[char] = map[char] +1
      // }
      // else{
      //   map[char]=1
      // }

    console.log(map)
  }
  for( let i = 0; i< stringB.length; i ++){
      let char = stringB[i]
      if(!map[char]){
        //map[char]===0 || map[char]=== undefined
        return false
      }
      else{
        //map[char] = map[char] -1
        map[char]--
      }
    console.log(map)
  }
  return true
}

anagrams('lol', 'lolc')

// time O(N * log N) because we use sorting algorithm
//space O(N) cause its sorted
function anagrams2(stringA, stringB){
   stringB= stringB.toLowerCase().replace(/[\W_]+/g, "").split("").sort().join("");
  stringA= stringA.toLowerCase().replace(/[\W_]+/g, "").split("").sort().join("");
   if(stringA.length !== stringB.length){
    return false
  }
  if(stringA ===stringB){
    return true
  }
  return false
}
