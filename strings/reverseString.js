// Directions
// Return a string with the order of characters reversed
// --- Examples
//   reverse('abcd') === 'dcba'
//   reverse('Hello!') === '!olleH'>

//Time complexity : 0(N)-- We go over every chracter in the string
//Space complexity : 0(N)

const revstr = str =>{
  //check input
   if(!str || typeof str != 'string' || str.length < 2 ) return str;
  let newstr='';
  for(let i=0; i<str.length; i++){
     newstr = str[i] + newstr
  }
  return newstr

}
revstr('hi')


function reverse(str){
  if(!str || typeof str != 'string' || str.length < 2 ) return str;

  const backwards = [];
  const totalItems = str.length - 1;
  for(let i = totalItems; i >= 0; i--){
    backwards.push(str[i]);
  }
  return backwards.join('');
}

const reverse7 = str=>{
  return str.split('').reduce((output, char) => {
    output = char+ output;
    return output
  },"")
}


//PSEUDOCODE

//1. Turn the string into an array
//2. use array method of .reverse() to reverse contents of an array.
//3. Turn reversed array back into a string.

function reverse2(str){
  return str.split('').reverse().join('');
}

const reverse3 = str => [...str].reverse().join('');
