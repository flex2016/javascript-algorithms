// Find the smallest common multiple of the provided parameters that can be evenly divided by both,
// as well as by all sequential numbers in the range between these parameters.
// The range will be an array of two numbers that will not necessarily be in numerical order.
// For example, if given 1 and 3, find the smallest common multiple of
// both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

const smallestCommons = arr => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  // Initially the solution is assigned to the highest value of the array
  let sol = max;

  for (let i = max - 1; i >= min; i--) {
    // Each time the solution checks (i.e. sol%i===0) it won't be necessary
    // to increment 'max' to our solution and restart the loop
    if (sol % i) {
      sol += max;
      i = max;
    }
  }
  return sol;
};

// test here
smallestCommons([1, 5]);
// Code Explanation
// Extract min and max from arr using Math.min() and Math.max(), respectively.
//As the arguments to these functions are integers, it is necessary to spread ... the array.
// As a first guess, let’s say that the solution is max. (we will increment this value later on if it is not the solution)
// Confirm that our solution is a multiple of all the values between max and min using a for loop.
// In case it isn’t a solution, increment max to our solution
// (i.e. get the next multiple of the arr highest value) and restart the loop i = max. Note that it isn’t i = max - 1 since the
// for loop hasn’t finished yet. Once it is finished, the loop itself will execute i--.
// It is also worth mentioning now that we started the loop at i = max and decremented i
// throughout instead of starting at i = min and then increment it in order to minimize the number of iterations.
// // The if statement never being true means that all numbers between min and max are divisible by our solution
