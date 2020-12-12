// You are in charge of the cake for a child's birthday. You have decided the cake
//  will have one candle for each year of their total age. They will only be able
//  to blow out the tallest of the candles. Count how many candles are tallest.

// Example
// candles= [4,4,1,3]


// The maximum height candles are 4 units high. There are 2 of them, so return 2.


// let candles= [4,4,1,3];
let candles= [18, 90, 90, 13, 90, 75, 90 ,8 ,90, 43];

function birthdayCakeCandles(candles) {
    // Write your code here
    let tallest =candles[0];
    let count =1;
    console.log(tallest)
    for(let i=1; i<candles.length; i++){
      if(candles[i] >tallest){
        tallest=candles[i]
        count=1
      }
      else if(candles[i]===tallest){
        count++
      }

      }
      return count

}
birthdayCakeCandles(candles)
