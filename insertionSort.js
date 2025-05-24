// compare ith element with its previous elements, so j will be less than i, 
//jth value > ith value -> Move that element up until jth value > currVal
// once inner loop exits,

function insertionSort(arr){
    for(var i=1;i<arr.length;i++){
        var currVal = arr[i];
        for(var j=i-1;j>=0 && arr[j]>currVal;j--){
            console.log(i,j,arr[j]>currVal)
            arr[j+1] = arr[j]
            console.log(arr)
        }
        arr[j+1] = currVal
    }
    return arr
}



function insertionSort2(arr){
    for(var i=1;i<arr.length;i++){
        var currVal = arr[i];
        console.log("init",arr)
        for(var j=i-1;j>=0;j--){
            //console.log(i,j,arr[j]>currVal)
            if(arr[j]>currVal) arr[j+1] = arr[j]
            else break //left portion is already sorted, so need to break to persist current j, otherwise j will reach the left corner always 0
            console.log("inner",arr,i,j)
        }
        arr[j+1] = currVal
        console.log("outer",arr,i,j)
    }
    return arr
}

insertionSort([2,1,9,76,4])
