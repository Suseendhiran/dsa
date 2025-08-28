//PROBLEM-1 Implement a function that rejects if a promise takes too long. if promise takes more time than specified time, rejects promise
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


//PROBLEM-2 sequential promise chaining
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


//helper function for concurrency limit
function delayCheck(time, msg,worker) {
  return new Promise(resolve => {
    setTimeout(() => {
      let resolvedMessage = ""
      if(worker) {
        resolvedMessage = `${msg} resolved by worker ${worker}`
      }
      else{
        resolvedMessage = msg
      } 
      resolve(resolvedMessage)
    },time)
  })
}
//PROBLEM-3 Parallel Execution with Concurrency Limit - Run promises in parallel but at most N at a time. define no of workers, each worker executes tasks from a common queue(index)
async function runWithConcurrencyLimit(tasks, limit) {
  const results = [];
  let index = 0; // shared pointer for tasks, same queue for {limit} workers

  // Worker function: picks the next task and executes it
  async function worker(workerNum) {
    while (index < tasks.length) {
      const currentIndex = index++;
      const result = await tasks[currentIndex](workerNum);
      results[currentIndex] = result; // keep order
    }
    return `Worker ${workerNum} completed all tasks` //optional, if we want statuses of each worker
  }

  // Creating workers based on Limit.
  //Since index is shared for both the workers, if one worker done with a task, it will pick another task
  //same with worker 2, process continues until all the tasks are completed.
  //Ex: if limit is 2, two workers working continuously to complete all tasks
  //based on shared queue(index is same)
  const workers = Array.from({ length: limit }, (_,i) => worker(i+1));
  // this console will log two promises, because async function will always returns promises.
  console.log("workers",workers)
  await Promise.all(workers).then(msg => console.log("Workers reolved all tasks",msg));

  return results;
}

const concurrencyTasks = [
  (worker) => delayCheck(1000, "Task 1",worker),
  (worker) => delayCheck(500, "Task 2",worker),
  (worker) => delayCheck(300, "Task 3",worker),
  (worker) => delayCheck(800, "Task 4",worker),
  (worker) => delayCheck(200, "Task 5",worker),
];

// Run with concurrency limit = 2
runWithConcurrencyLimit(concurrencyTasks, 2).then(console.log);

// PROBLEM-4 Retrying Promise upto N times before rejecting

function apiCall(attemptNo){
  return new Promise((res,rej) => {
    let random = Math.random()
    if(random > 0.8){
      res(`Success with ${random} with attempt ${attemptNo}`)
    }
    else{
      rej(`Failed with ${random}`)
    }
  })
}
async function checkUnreliablePromise(fn, attempt,delay=0){
  let count = 0;
  while(count<attempt){
    try{
      return await fn(count+1)
    }catch(err){
      count++
      if(err && delay > 0){
        setTimeout(() => {console.log(`Attempt no ${count}`)},delay)
      }
      console.log(`Attempt no ${count}`)
    }
  }
  if(count === attempt){
    return `Not resolved after ${attempt} attempts`
  }
}
checkUnreliablePromise(apiCall,5).then(msg => {console.log(msg)}).catch(err => {console.log("err",err)})

//PROBLEM -5 , Promise pipeline, where one promise resolved value will be the input to next promise. using reduce method

const f1 = async (x) => x + 1;
const f2 = async (x) => x * 2;
const f3 = async (x) => x - 3;
async function runPipeline(functions, input) {
  return functions.reduce(
    (promise, fn) => promise.then(fn),
    Promise.resolve(2000)
  );
}
runPipeline([f1, f2, f3], 5).then(msg => {console.log(msg)})

//PROBLEM-5, defer promise, resolve/reject promise outside promise scope.
//use case, on any event handlers, resolve the promise
function defer(){
  let resolve;
  let reject;
  const promise = new Promise((res,rej) => {
      resolve = res
      reject = rej
  })
  return {promise, resolve, reject}
}
const {promise, resolve, reject} = defer();
console.log("Before",promise)
setTimeout(() => {
  resolve("Resolved outside Promise scope")
},2000)

promise.then(msg => {console.log("After",msg)})
