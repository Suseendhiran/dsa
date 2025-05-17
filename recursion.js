//Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

function power(num,pow){
    let output = 1;
    function recursion(currPow){
        if(currPow === 0) return 1
        return num*recursion(currPow-1)
    }
    return recursion(pow)
    
}

function factorial(factorial){
   function recursion(num){
       if(num === 0) return 1;
       return num*recursion(num-1)
   }
   return recursion(factorial)
}

function productOfArray(arr){
    //let currIndex = 0;
    function recursion(currIndex){
        if(currIndex+1 === arr.length) return arr[currIndex]
        return arr[currIndex]*recursion(currIndex+1)
    }
    return recursion(0)
}

function recursiveRange(num){
   if(num === 1) return 1;
   return num+recursiveRange(num-1)
}

//Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

function fib(num){
  let arr = [1,1];
  let index = 2
  let output = 0
  function recursion(currInd){
      console.log("curr",currInd,arr)
      if(currInd === num) {output = arr[currInd-1]; return}
      arr.push(parseInt(arr[currInd-1])+parseInt(arr[currInd-2]))
      recursion(currInd+1)
  } 
  recursion(index)
  return output
}
