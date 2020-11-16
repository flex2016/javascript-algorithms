// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left and right side
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//time O(n^2)  2 loops


function pyramid(n) {
  for(let i =1; i<=n; i++){
    const padding = " ".repeat(n-i);
    const hashes = "#".repeat(i* 2 -1)
    console.log(padding + hashes+padding)
  }
}
pyramid(3)
