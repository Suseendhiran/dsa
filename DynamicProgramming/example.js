//Dynamic Programming - Coin Change
//Write a function called coinChange which accepts two parameters: an array of denominations and a value. The function should return the number of ways you can obtain the value from the given collection of denominations. You can think of this as figuring out the number of ways to make change for a given value from a supply of coins.


// tabulation
function coinChange(denominations, amount) {
  // initialize an array of zeros with indices up to amount
  var combinations = new Array(amount + 1).fill(0);
 
  // base case
  combinations[0] = 1;
 
  // for every coin in denominations
  for (let coin of denominations) {
    // start iterating where the coin's value is 
    // (so you don't have to check additional values)
    for (var i = coin; i <= amount; i++) {
      // set in combinations itself plus the value of i minus the coin
      combinations[i] += combinations[i - coin];
    }
  }
  return combinations[amount];
}
//Memoization Solution:

// memoization
function coinChange(denominations, amount, memo) {
  let numCoins = denominations.length;
 
  if (!memo) {
    memo = {}
    for (let i = 1; i <= numCoins; i++) {
      memo[i] = { 0: 1 };
    }
  }
 
  if (amount < 0 || numCoins === 0 && amount >= 0) return 0;
 
  if (!memo[numCoins][amount]) {
    let lastCoin = denominations[numCoins - 1];
    memo[numCoins][amount] = (
      coinChange(denominations, amount - lastCoin, memo) +
      coinChange(denominations.slice(0, numCoins - 1), amount, memo)
    )
  }
 
  return memo[numCoins][amount];
}
