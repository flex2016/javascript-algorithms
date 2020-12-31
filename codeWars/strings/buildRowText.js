// Create a function that takes index [0, 8] and a character. It returns a string with columns. Put character in column marked with index.

// Ex.: index = 2, character = 'B'

// | | |B| | | | | | |
//  0 1 2 3 4 5 6 7 8
// Assume that argument index is integer [0, 8]. Assume that argument character is string with one character.



function buildRowText(index, character) {
  return "|0|1|2|3|4|5|6|7|8|".replace( index, character ).replace(/\d/g," ")
}

function buildRowText(index, character) {
  // Do your magic :)
  let last =9
  let res =""
  for(let i =0; i<=9; i++){
    if(i===index){
      res+=`|${character}`
    }else if(i===last){
      res+="|"
    }else{
      res+="| "
    }
  }
  return res
}

function buildRowText(index, character) {
  let str = "";
    for(let i=0;i<=8;i++){
        str += "|";
        if(i == index) str += character;
        else str += " ";
        if (i == 8) str += "|";
    }
    return str;
}
