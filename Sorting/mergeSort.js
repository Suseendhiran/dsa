//Create a helper function to merge two arrays.
//Create 2 pointers for two arrays and results array.
//Compare the first element in arr1 with the first element in arr2, if arr1 element < arr2 element, push that element to the results array and increment that array pointer by one. If arr2 element < arr1 element, push arr2 element to results array and increment arr2 pointer by 1.
//Assume both arrays are sorted


function mergeArrays(arr1,arr2){
  let i = 0;
  let j = 0;
  let results = []
  while(i<arr1.length && j<arr2.length){
    if(arr2[j] > arr1[i]){
      results.push(arr1[i]);
      i++
    }
    else{
      results.push(arr2[j]);
      j++
    }
  }
  while(i<arr1.length){
    results.push(arr1[i])
    i++
  }
  while(j<arr2.length){
    results.push(arr2[j])
    j++
  }
  return results
}

//console.log(mergeArrays([2,4,5],[1,3,6]))
//Using recursion, split the elements into elements of length 1 or 0, then using helper function, compare two arrays and sort.

function merge(arr){
  if(arr.length<=1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = merge(arr.slice(0,mid));
  let right = merge(arr.slice(mid));
  return mergeArrays(left,right)
}


console.log("output",merge([2,4,9,5,1,6,8,3]))



















