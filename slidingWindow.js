//my solution/ maximum sum of n consecutive elements in an array O(n sqaure)

function maxSubArraySum(arr,num){
    //[1,2,5,2,8,1,5], 4
    if(!arr.length) return null;
    let inc = 0;
    
    let output = 0
    for (let i=0;i<arr.length;i++){
        let currMax = arr[i];
        for(let j=i+1;j<num+i;j++){
            currMax = currMax+arr[j];
            console.log("ij",i,j,currMax)
        }
        if(currMax>output){
            output = currMax
        }
    }
    return output
}
console.log(maxSubArraySum([], 4))

//sliding window pattern O(n), sum first num elements, add next element, subtract prev element.
function maxSubArraySum(arr,num){
    //[1,2,5,2,8,1,5], 3
    if(!arr.length) return null;
    let maxSum = 0;
    let tempSum = 0;
    for(let i=0;i<num; i++){
        maxSum+=arr[i]
    }
    tempSum = maxSum
    for(let i=num; i<arr.length; i++){
        tempSum = tempSum + arr[i] - arr[i-num]
        maxSum = Math.max(maxSum,tempSum)
    }
    console.log(maxSum)
    return maxSum
}
console.log(maxSubArraySum([2,6,9,2,1,8,5,6,3], 3))
