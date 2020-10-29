// Return the character most commonly used in the string.
// --- Examples
// maxChar("I loveeeeeee noodles") === "e"
// maxChar("1337") === "3"

//Turn string to lowercase
//Create an empty object
//set counter and empty string
//loop through the string and add it to object with count
//loop through the object and return highest count
//if character is greater
//Return character with highest count

//Time complexity : 0(N)-- We go over every chracter in the string
//Space complexity : 0(1) Character count object will have at most 26 key-val pairs

const maxChar = str =>{
  let myStr=str.toLowerCase();
  let map ={};
  let count=0;
  let maxChar="";
  for (let i=0; i<myStr.length; i++){
    if(map[myStr[i]]){
      map[myStr[i]]= map[myStr[i]]+ 1;
    }
    else{
      map[myStr[i]]= 1;
    }
  }
  for(let char in map){
    if(map[char]>count){
      count=map[char]
      maxChar=char
    }
  }
  console.log(maxChar)
   return maxChar;
}

maxChar("I loveeeeeee noodles")


function maxChar2(str) {
  const myStr = str.toLowerCase();
  let charCountObj={};
  let maxCount=0;
  let maxChar="";

  for(let i = 0; i< myStr.length; i++){
    const char = myStr[i]

    charCountObj[char] = charCountObj[char] + 1 || 1;

      if(charCountObj[char]>maxCount){
      maxChar=char;
      maxCount=charCountObj[char];
    }
  }
  return maxChar
}
