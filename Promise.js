//Implement a function that rejects if a promise takes too long. if promise takes more time than specified time, rejects promise
async function withTimeout(promise, timer){
  const timeoutPromise = new Promise((_,reject) => {
    setTimeout(() => {
      reject("Time over")
    },timer)
  })
  await Promise.race([promise, timeoutPromise]).then(res => {
    console.log("raceoutput", res)
  }).catch(err => {
    console.log("Rejected error",err)
  })
}
async function fetchWithDelay(){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data fetched Successfully")
    },8000)
  })
}

await withTimeout(fetchWithDelay(),4000)
