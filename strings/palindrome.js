// Given a string, return true or false depending if the string
// is a palindrome.  Palindromes are words that read the same backwards
// and forwards.
// --- Examples:
//   palindrome("Madam") === true
//   palindrome("love") === false


//Time complexity : 0(N)-- We go over every chracter in the string to reverse it


const palindrome = str=> {
  str=str.toLowerCase()
  let reverseStr='';
  for(let i = str.length-1; i>=0; i--){
    reverseStr += str[i]
  }
  if(str === reverseStr){
    return true
  }
  else {
    return false
  }
  // return( str === str.split("").reverse().join(""))
}

palindrome("Madam");
