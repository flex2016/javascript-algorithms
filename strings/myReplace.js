
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// Note
// Preserve the case of the first character in the original word when you are replacing it.
// For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

// myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
// myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
// myReplace("I think we should look up there", "up", "Down") should return "I think we should look down there".
// myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
// myReplace("His name is Tom", "Tom", "john") should return "His name is John".
// myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".

function myReplace(str, before, after) {
  after= after.toLowerCase()
  //IF statement checks to see if the first letter of before (before[0]) is equal to upper case
  if (before[0] === before[0].toUpperCase()) {

    // if before[0] IS upper case, then sets after equal to after with the first letter replaced with upper case
    after = after.replace(after[0], after[0].toUpperCase());
  }
  return str.replace(before, after);
}


function myReplace(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    // Change the after word to be uncapitalized before we use it.
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after);

  return str;
}

function myReplace(str, before, after) {
  str= str.split(" ")
  after= after.toLowerCase()
  let newStr=[];
  for(let i=0; i<str.length; i++){
    if(str[i] === before){
      if(before[0] === before[0].toUpperCase()){
        after=after[0].toUpperCase() + after.slice(1)
        newStr.push(after)
      }
      else{
        newStr.push(after)
      }
    }
    else{
      newStr.push(str[i])
    }
  }
  return newStr.join(" ");
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
