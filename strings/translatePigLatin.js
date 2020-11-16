// Pig Latin is a way of altering English Words. The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
// - If a word begins with a vowel, just add "way" at the end.
// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase


// translatePigLatin("california") should return "aliforniacay".
// translatePigLatin("paragraphs") should return "aragraphspay".
// translatePigLatin("glove") should return "oveglay".
// translatePigLatin("algorithm") should return "algorithmway".
// translatePigLatin("eight") should return "eightway".
// Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return "artzschway".
// Should handle words without vowels. translatePigLatin("rhythm") should return "rhythmay".


function translatePigLatin(str) {
var vowels= "aeiou".split(""), index=0;

 if(vowels.indexOf(str[index])!== -1){  //initial edge case
     return str+"way";
 }
 for(index=1;index<str.length;index++){
     if(vowels.indexOf(str[index]) !==-1){//first vowel found
         break;
    }
 }
return str.slice(index,str.length)+str.slice(0, index)+ "ay";
}

function translatePigLatin(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

// test here
translatePigLatin("consonant");
// Code Explanation
// Use replace() on the string, using a regular expression to check if the first letter is a consonant and adding way at the end in this case.
//  If the first letter is a consonant nothing will happen at this point.
// Use replace() again to check for consonants at the beginning of the word and to move it or them to the end of the word and add ay at the end.


function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) return str + "way";

  const consonantCluster = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonantCluster.length) + consonantCluster + "ay";
}

// test here
translatePigLatin("consonant");
// Code Explanation
// First, check to see if the string begins with a vowel.
// The regex looks at the beginning of the string ^ for one of the specified characters [aeiou]
// If it does, you only need to return the original string with “way” appended on the end.
// If the string does not start with a vowel, we want to build a string which contains every consonant before the first vowel in the provided string.
// To do this, look at the beginning of a string ^ for one or more characters + NOT specified [^aeiou].
// If there is a match (and in this case, there always will be),
//  match() returns an Array with the matched string as the first element, which is all we want. Grab it with [0].
// Now, we can start building our Pig Latin string to return.
// This can be built in three parts:
// The first part contains all of the characters in the original string, starting from the first vowel.
// We can easily get these characters by creating a substring of the original string, with its starting index being the first vowel.
// The second part contains the consonant string we just built.
// (If you add the second and first parts of this string together, you will get the original string.)
// The final part contains “ay”.
