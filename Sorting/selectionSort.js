//compare values, find lowest value's index, move it to the left side -> Ascending
function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let lowest = i;
        for(j=i+1;j<arr.length;j++){
            if(arr[j]<arr[lowest]){
                lowest = j
            }
        }
        if(i!==lowest){  //if lowest is the ith index, no need to swap
            let temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp
        }
    }
    return arr
}
