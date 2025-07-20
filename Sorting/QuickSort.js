function swap (arr,i,j){
  let temp = arr[i]
  arr[i] = arr[j];
  arr[j]= temp
  return arr
}



//console.log(swap(arr,2,2))

//[5,6,3,4,9,2,12]
function getPivotIndex(arr, start = 0, end = arr.length-1){
  let pivot = arr[start];
  let swapIndex = start;
  for(var i=start+1;i<arr.length;i++){
    if(pivot > arr[i]){
      swapIndex++;
      swap(arr,swapIndex,i)
    }
  }
  swap(arr,start,swapIndex)
  return swapIndex
}

//console.log(getPivotIndex(arr))
let arr = [5,3,4,9,2,12]
console.log("init",arr)
function quickSort(arr, left = 0, right = arr.length - 1){
  console.log("pos",left,right)
  if(left<right){
    
  let pivotIndex = getPivotIndex(arr, left, right)
  console.log("piv", pivotIndex, arr)
  //sort left side of the array
  quickSort(arr, left, pivotIndex - 1)
  //sort right side of the array
  quickSort(arr,pivotIndex+1, right)
  }
  return arr
  
}
console.log("output",quickSort(arr))












