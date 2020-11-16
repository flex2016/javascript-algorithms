// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
// spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
// spinalCase("TheAndyGriffith_Show") should return "the-andy-griffith-show".
// spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
// spinalCase("AllThe-small Things") should return "all-the-small-things".




function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

// Split the string at one of the following conditions (converted to an array)
// a whitespace character [\s] is encountered
// underscore character [_] is encountered
// or is followed by an uppercase letter [(?=[A-Z])]
// Join the array using a hyphen (-)
// Lowercase the whole resulting string


function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // Split on whitespace and underscores and join with dash
  return str
    .toLowerCase()
    .split(/(?:_| )+/)
    .join("-");
}


// Similar to the first solution, the first replace() puts a space before any
// encountered uppercase characters in the string str so that the spaces can be replaced by dashes later on.
// Instead of using replace() here to replace whitespace and underscores with dashes,
//  the string is split() on the regular expression /(?:_| )+/ and join()-ed on -.

spinalCase('This Is Spinal Tap');
