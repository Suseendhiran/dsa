function swap(arr,i,j){
    let temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp
    //return arr
}

//[5, 6,7, 2, 3, 9, 4, 12]
//start can be anything within array length, it just picks that element as 
//pivot and find its position in the array.
function getPivotIndex(arr, start=0, end=arr.length-1){
    let pivotElement = arr[start]; 
    let swapIdx = start; // indicates the no of elements less than pivotElement, so once smaller elements moved to the left, we can use this variable to move pivot element to this swapIdx position
    for(let i=start+1;i<arr.length;i++){
        if(arr[i] < pivotElement){
            swapIdx++
            swap(arr,swapIdx,i)
        }
    }
    swap(arr,start,swapIdx)
    return swapIdx
}

function quickSort(arr,left=0,right=arr.length-1){
    if(left<right){ //at some point left >=right, this is the basecase
        let pivotIndex = getPivotIndex(arr,left,right)
        quickSort(arr, left, pivotIndex-1 )
        quickSort(arr, pivotIndex+1 ,right)
    }
    return arr
}

console.log(quickSort([5, 6,7, 2, 3, 9, 4, 12]))
