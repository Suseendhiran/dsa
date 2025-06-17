function getDigit(num,i){
  return Math.floor(Math.abs(num)/Math.pow(10,i))%10
}
console.log(getDigit(12345,2))
function digitCount(num){
  if(num === 0 ) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(arr){
  let maxDigit = 0;
  for(let i=0;i<arr.length;i++){
    maxDigit = Math.max(digitCount(arr[i]),maxDigit)
  }
  return maxDigit
}



function radixSort(nums){
  let maxDigitCount = mostDigits(nums);
  for(let i=0;i<maxDigitCount;i++){
    let digitBuckets = Array.from({length:10},() => []);
    for(let j=0;j<nums.length;j++){
      digitBuckets[getDigit(nums[j],i)].push(nums[j])
    }
    nums = [].concat(...digitBuckets)
  }
  return nums
}

console.log(radixSort([10,28,76,765456,1,2,3,453,23456]))
