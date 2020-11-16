// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
// truncateString("A-tisket a-tasket A green and yellow basket", 8) should return "A-tisket...".
// truncateString("Peter Piper picked a peck of pickled peppers", 11) should return "Peter Piper...".
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".
// truncateString("A-", 1) should return "A...".
// truncateString("Absolutely Longer", 2) should return "Ab...".

// Code Explanation
// We start off with a simple if statement to determine one of two outcomes…
// If our string length is greater than the num we want to truncate it, we return a slice of our string starting at character 0, and ending at num. We then append our '...' to the end of the string.
// However, if above situation is not true, it means our string length is less than our truncation num. Therefore, we can just return the string.

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
