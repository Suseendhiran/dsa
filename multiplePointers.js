function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        console.log("sum", sum,arr[left], arr[right])
        if(sum === 0){
            return [arr[left],arr[right]]
        }
        else if(sum > 0){
            right --;
        }
        else{
            left ++;
        }
    }
}

console.log(sumZero([-6,-4,-3,-1,0,2,3,5]))


//my solution
function countUniqueValues(arr){
   // [-1,-1,-1,0,1,1,2,2,3,4,5]
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = 1;
  let count = 0;
  let temp = 0
  while(left < arr.length){
      console.log("init", left,right, arr[left], arr[right],count)
      if(arr[left] === arr[right]){
          right++
      }
      else if(arr[left] < arr[right]){
          count = count + 1
          left = right
          if(right === arr.length-1){
              count++
          }
          right++
      }
      else{
          left++
      }
  }
  console.log("count",count)
  return count
}

countUniqueValues([1,1,1,1,1,2])

//course solution

function countUniqueValuesCourse(arr){
    let i = 0;
    if(arr.length === 0 ) return i
    for(j=1; j < arr.length; j++){
        if(arr[i]!==arr[j]){
            i++
            arr[i] = arr[j]
        }
    }
    console.log("vvv",i+1,arr)
    return i+1
}

countUniqueValuesCourse([-1,0,1,1,2])
