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

//Course's Solution

function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}

function factorial(x){
   if (x < 0 ) return 0;
   if (x <= 1 ) return 1;
   return x * factorial(x-1);
}

function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

function recursiveRange(x){
   if (x === 0 ) return 0;
   return x + recursiveRange(x-1);
}

function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

//Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str){
  // add whatever parameters you deem necessary - good luck!
  let arr = [];
  let length = str.length
  function recursion(ind){
      if(ind < 0) return;
      arr.push(str.charAt(ind-1))
      recursion(ind-1)
  }
  recursion(length)
  return arr.join("")
}

console.log(reverse('awesome'))  // 'emosewa'
//isPalindrome
//Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
function isPalindrome(str){
   if(str.length == 1) return true
   if(str.length === 2) return str[0] === str[1]
   if(str[0] ===  str.slice(-1))return isPalindrome(str.slice(1,-1))
   return false
}

//someRecursive
//Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

function someRecursive(arr, callBack){
  // add whatever parameters you deem necessary - good luck!
  if(arr.length && callBack(arr[0])) return true
  else if(!arr.length) return false
  return someRecursive(arr.slice(1),callBack)
}

function flatten(arr){
  // add whatever parameters you deem necessary - good luck!
  let flattenedValues = [];
  function recursion(currEle){
    for(let i=0;i<currEle.length;i++){
        
      if(Array.isArray(currEle[i])) recursion(currEle[i])
      else flattenedValues.push(currEle[i])
      console.log(currEle,i,flattenedValues)
    }
  }
  recursion(arr)
  return flattenedValues
}

function capitalizeFirst (arr) {
    let output = [];
    function capLetter(str){
        let first = str[0].toUpperCase()
        return first+str.slice(1)
    }
    function recursive(arr){
        if(arr.length ===1 ) return capLetter(arr[0])
        return [capLetter(arr[0])].concat(recursive(arr.splice(1)))
    }
    return recursive(arr)
  
}
//Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
function nestedEvenSum (obj) {
  // add whatever parameters you deem necessary - good luck!
  let output = 0;
  function recursive(obj){
      for(var key in obj){
          if(typeof(obj[key])==="number" && obj[key]%2===0) output+=obj[key]
          if(typeof(obj[key])==="object" && !Array.isArray(obj[key])) recursive(obj[key])
      }
  }
  recursive(obj);
  return output
  
}

function capitalizeWords (arr) {
  // add whatever parameters you deem necessary - good luck!
    if(arr.length === 1) return arr[0].toUpperCase();
    return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)))
}
//called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!
function stringifyNumbers(obj){
    var newObj = {};
        for(let key in obj){
            if(typeof(obj[key]) === "number"){
                newObj[key] = obj[key]+""
            }
            else if(typeof(obj[key]) === "object" && !Array.isArray(obj[key])){
                newObj[key] = stringifyNumbers(obj[key])
            }
            else{
                newObj[key] = obj[key]
            }
        }
    return newObj
}

//Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string
function collectStrings(object){
    var output = [];
    function recursive(obj){
    for(let key in obj){
        if(typeof(obj[key]) === "string"){
            output.push(obj[key])
        }
        else if(typeof(obj[key]) === "object" && !Array.isArray(obj[key])){
            return recursive(obj[key])
        }
        }
    }
    recursive(object)
    return output
}
