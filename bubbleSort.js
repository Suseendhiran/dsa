

function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j] 
                arr[j] = temp
            }
        }
    }
    return arr
}

//reduce no of comparison operation, once the element bubble sorted, we dont need to make comparison for that value as it is the largest in array, so iterating from array end
function bubbleSort(arr){
    for(let i=arr.length-1;i>0;i--){
        for(j=0;j<i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j] 
                arr[j] = temp
            }
        }
    }
    return arr
}


console.log(bubbleSort([10,5,1,9,8,3]))
