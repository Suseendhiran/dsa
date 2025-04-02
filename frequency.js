//O(n**2)

function sameFrequency(arr1, arr2){
    if(arr1.length !== arr2.length){
        return "Not same"
    }
    for (let i in arr1){
        let squaredIndex = arr2.indexOf(arr1[i]**2)
        if(!arr2.includes(arr1[i]**2)){
            return "Not same"
        }
        arr2.splice(squaredIndex,1)
        console.log("sss",i,squaredIndex)
    }
    return "Same"
}

const output = sameFrequency([1,2,3,4,8],[16,1,4,9,45])

console.log("output",output)


function same3n(arr1, arr2){
    if(arr1.length != arr2.length) return false;
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let val of arr1){
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for(let val in frequencyCounter1){
        if(frequencyCounter2[val**2] != frequencyCounter1[val]) return false
    }
    return true
}

const result = same3n([1,2,3],[1,4,16]) //false

console.log("result",result)
