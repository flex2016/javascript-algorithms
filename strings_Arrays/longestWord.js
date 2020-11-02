// Return the length of the longest word in the provided sentence.
// Your response should be a number.

// findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
// findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
// findLongestWordLength("May the force be with you") should return 5.
// findLongestWordLength("Google do a barrel roll") should return 6.
// findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
// findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.


function findLongestWordLength(str) {
  str=str.split(" ");
  let longest = str[0];
  for(let i =1 ; i<str.length; i++){
    if(str[i].length >longest.length){
      longest = str[i]
    }
  }
  return longest.length;
}


findLongestWordLength("The quick brown fox jumped over the lazy dog");


function longestWord(str){
  let words = str.split(" ");
  let longestWord= "";
  for(let word of words){
    if (word.length > longestWord.length){
      longestWord =word;
    }
  }
  return longestWord;
}
