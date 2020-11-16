// Write a function that takes a number N.
// Over multiple lines it should console log a step shape
// with N levels using the # character. Be sure to notice
// how each step has some number of empty spaces to the right!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//time O(N^2) 2 loops


function steps(n) {
  for(let i =1; i<=n; i++){
    let step = "";

    for( let hash = i; hash >0; hash--){
      step +="#";
    }
    for(let space = n-i; space >0; space--){
      step+=" ";
    }

    // step += "#".repeat(i);
    // step += " ".repeat(i-1);
    console.log(step)
  }
}

steps(5)
