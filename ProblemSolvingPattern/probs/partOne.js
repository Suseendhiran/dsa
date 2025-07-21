//averagePair Solution
//Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
function averagePair(arr, num) {
  let start = 0
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2
    if (avg === num) return true;
    else if (avg < num) start++
    else end--
  }
  return false;
}
//isSubsequence Solution - Iterative
//Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
//isSubsequence Solution - Recursive but not O(1) Space
function isSubsequence(str1, str2) {
  if (str1.length === 0) return true
  if (str2.length === 0) return false
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
  return isSubsequence(str1, str2.slice(1))
}
//findPair Solution
// O(n) space + O(n) time
//Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. This function should return true if the pair exists or false if it does not.
function findPair(arr, n) {
  // if n is 0, we just need to see if there's any duplicate in the array
  if (n === 0) {
    const seen = new Set();
    for (let num of arr) {
      if (seen.has(num)) {
        return true;
      }
      seen.add(num);
    }
    return false;
  }
 
  // for non-zero n, place all elements in a set
  const setVals = new Set(arr);
 
  // check for val + n or val - n in the set
  for (let val of arr) {
    if (setVals.has(val + n) || setVals.has(val - n)) {
      return true;
    }
  }
 
  return false;
}
 
// O(1) space + O(n log n) time
function findPair(arr, num) {
  arr.sort((a, b) => a - b);
  let i = 0;
  let j = 1;
  while (i < arr.length && j < arr.length) {
    if (i !== j && Math.abs(arr[j] - arr[i]) === Math.abs(num)) {
      return true
    } else if (arr[j] - arr[i] < num) {
      j++
    } else {
      i++
    }
  }
  return false;
}
