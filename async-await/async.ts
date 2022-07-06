import { log } from "./log"

const fetchApi = (name: string) => new Promise<string>((resolve, reject) => {
    if(name) resolve(name)
    else reject("error found")
  })
  
  async function getPromise() {
  const resA = fetchApi("pineapple")
  const resB = fetchApi("apple")

  return Promise.all([resA, resB])
  }
  
  log("synchourous 1")
  
  getPromise().then(log)
  
  log("synchourous 2")

