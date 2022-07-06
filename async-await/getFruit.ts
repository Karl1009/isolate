import { deflateSync } from "zlib"
import { BillionsWhileLoop } from "./billionsWhileLoop"
import { log } from "./log"

const fetchApi = (name: string) => new Promise<string>((resolve, reject) => {
    if(name) resolve(name)
    else reject("error found")
  })
  
  
  const getFruit = async(name: string) => {
      const fruits = {
          pineapple: 'pineapple',
          apple: 'apple',
        } as { [key: string] : string}

        return new Promise<string>((resolve, reject) => {
            setTimeout(() => 
             resolve(fruits[name])
            , 1000)
        })
        // return fruits[name] 
    }
async function makeSmoothie() {
    const resA = await getFruit("pineapple")
    const resB = await getFruit("apple")
    return [resA, resB]
    }
    // async function makeSmoothie() {
    // const resA = await getFruit("pineapple")
    // const resB = await getFruit("apple")
  
    // return [resA, resB]
    // }
    //conclusion
    // await let waiting the promise to be resolved
    

  log("synchourous 1")
  
  makeSmoothie().then(log)
  
  log("synchourous 2")

