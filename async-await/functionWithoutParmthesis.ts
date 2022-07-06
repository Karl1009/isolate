import { log } from "./log"


async function returnSomeString() {
    return "Hello, My name is karl"
}

const theReturnString = returnSomeString().then(log)


// I think this is the feature of .then 

// or the log is callback function, after returnSomeString will involve the log

// log(theReturnString)
