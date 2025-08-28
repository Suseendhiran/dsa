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
async function fetchWithDelay(delay){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data fetched Successfully")
    },delay)
  })
}

await withTimeout(fetchWithDelay(2000),4000)


//sequential promise chaining
function delay(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    },time)
  })
}

const tasks = [
  () => delay(1000).then(() => "Task 1"),
  () => delay(500).then(() => "Task 2"),
  () => delay(300).then(() => "Task 3"),
];

tasks.forEach(async(proms) => {
  const res = await proms();
  console.log("res",res);
})
