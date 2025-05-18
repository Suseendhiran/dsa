//my solution

function binarySearch(arr,val){
    let leftPointer = 0;
    let rightPointer = arr.length - 1
    let middlePointer = Math.ceil(arr.length/2)
    while(leftPointer<arr.length){
        if(val<arr[middlePointer]){
            rightPointer = middlePointer
            middlePointer = Math.ceil(rightPointer/2)
        }
        else if(val > arr[rightPointer]){
            return -1
        }
        else if(val > arr[middlePointer]){
            leftPointer = middlePointer
            middlePointer = Math.ceil((rightPointer+leftPointer)/2)
        }
        else{
            return middlePointer
        }
        
    }
    return -1
  // add whatever parameters you deem necessary - good luck!
}
