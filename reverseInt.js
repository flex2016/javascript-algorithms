// Given an integer, return an integer with the digits
// reversed.
// --- Examples
//   reverseInt(13) === 31
//   reverseInt(404) === 404
//   reverseInt(100) === 1
//   reverseInt(-13) === -31
//   reverseInt(-100) === -1

//Turn number into a string
// Reverse a String
// Turn the string back into a number

// Time Complexity O(log N)
//If input increase by a factor of 10 we only do one more operation


function reverseInt(n) {
  let reversed =n.toString().split("").reverse().join("");
  reversed= parseInt(reversed);
  if(n<0){
    return reversed * -1;
  }
  return reversed;
}


const reverseInt2 =number =>{
    number =number.toString();
    let reversed=""
    for(let i = number.length-1; i >=0; i--){
        reversed +=number[i]
    }
    if(number<0){
    return parseInt(reversed) * -1;
  }
    return parseInt(reversed);
};

reverseInt2(120)
