import { setMaxListeners } from "events"
import { log } from "./log"

const delay = (time : number) => new Promise(res => setTimeout(res,time));

async function getFruit(name: any) {
    const fruits = {
        apple: '🍎',
        pineapple: '🍍',
        banana: '🍌'
    } as { [key: string] : string}

    await delay(1000)
    return fruits[name]
}

console.log("main thread - synchronize 1")

async function makeSmoothie() { // = 2jobs await 2次
    const appleSmoothie = await getFruit('apple')
    const pineappleSmoothie = await getFruit('pineapple')
    return [appleSmoothie, pineappleSmoothie]
}


function makeSmoothieParallel() { // = 2jobs concurrent 1次
    const appleSmoothie = getFruit('apple')
    const pineappleSmoothie = getFruit('pineapple')
    return Promise.all([appleSmoothie, pineappleSmoothie])
}


function makeSmoothie2() { // = 2jobs await 2次
    let a: string;
    return getFruit('apple').then((v) => {
        a = v
        return getFruit('pineapple')
        })
        .then(v => v + a)
    }

    // makeSmoothie().then(v => {
    //     console.log("makeSmoothie")
    //     log(v)
    // })
    // makeSmoothie1().then(v => {
    //     console.log("makeSmoothie1")
    //     log(v)
    // })
    // makeSmoothie2().then(v => {
    //     console.log("makeSmoothie2")
    //     log(v)
    // })

    makeSmoothieParallel()

    function makeSmoothieNow(){
        makeSmoothie().then(log)
        makeSmoothieParallel().then(log)
    }

    // async function makeSmoothieNowAsync() {
    //     makeSmoothieNow()
    // }
    makeSmoothieNow()
    // makeSmoothieNowAsync()
    
    
    // getFruit('apple').then(log)
    
    console.log("main thread - synchronize 2")