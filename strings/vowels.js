// Write a function that returns the number of vowels found within a string.
// Vowel characters are 'a', 'e', 'i', 'o', and 'u'.
// Make sure the function is case insensitive!
// --- Examples
//   vowels('What') --> 1
//   vowels('Why?') --> 0
//   vowels('aEiOu') --> 5
//   vowels('I am a world-class developer using iterations') --> 16

//time =O(n) All cahracters must be checked before complete
//space =O(1)



function vowels(str) {
  let vowels="aeiou".split("")
  let count= 0;
  str= str.toLowerCase();
  for(let i=0; i< str.length; i++){
    for(let j=0; j< str.length; j++){
      if(vowels[j] === str[i]){
      count++
    }

    }
  }
  return count
}

vowels('aEiOu')


const vowels1 =str =>{
  let letters="aeiou";
  str = str.toLowerCase();
  let counter= 0;
  for(let i=0; i<=str.length; i++){
    if(letters.indexOf(str[i]) != -1){
      counter++
    }
  }
  return counter

}

vowels1('I am a world-class developer using iterations')
