// Write a function that returns the provided string with
// the first letter of each word capitalized. Make sure the
// rest of the word is in lower case.
// --- Examples
//   capitalize("I'm a little tea pot") --> 'I'm A Little Tea Pot'
//   capitalize('sHoRt AnD sToUt') --> 'Short And Stout'


function capitalize(str) {
  str=str.split(' ');
  let word= [];
  for(i=0; i<str.length; i++){
    let first= str[i].slice(0,1);
    let last= str[i].slice(1);
    first= first.toUpperCase();
    last= last.toLowerCase();
    let full = first+ last;
    word.push(full)
  }
  console.log(word)
  return word.join(' ');
}

capitalize('sHoRt AnD sToUt')


function capitalize2(str){
  const arrOfWords = str.split(' ');
  const arrWordsCased = [];
  for(let i = 0; i <arrOfWords.length; i++){
    const word = arrOfWords[i];
    arrWordsCased.push(word[0].toUpperCase() + word.slice(1).toLowerCase())
  }
  return arrWordsCased.join(" ")

}
