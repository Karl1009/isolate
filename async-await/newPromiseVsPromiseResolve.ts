// import { BillionsWhileLoop } from "./billionsWhileLoop";
import { BillionsWhileLoop } from "./billionsWhileLoop";
import { log } from "./log";

log("Synchronous 1")


const newPromise = async () => {
    return new Promise<string>((resolve, reject) => {
        resolve("Billions Loop Done")
       })
       .then(v => {
        BillionsWhileLoop()
        return v 
       })
       
}
const sugarResolved = async () => {
    return Promise.resolve()
    .then(v => {
    BillionsWhileLoop()
        return "Billions Loop Done"
    })
}
 async function runPromises() {
    const a = sugarResolved()
    const b = newPromise()
    const result = await Promise.all([a, b])
    log(result)
}

runPromises()

 
log("Synchronous 2")

// promiseWithResolve.then(v => log(v))

// newPromise.then(v => log(v)) 