//my solution/ maximum sum of n consecutive elements in an array 

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
