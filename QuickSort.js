function swap (arr,i,j){
  let temp = arr[i]
  arr[i] = arr[j];
  arr[j]= temp
  return arr
}

let arr = [5,3,4,9,2,12]

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
  return arr
}

getPivotIndex(arr)
