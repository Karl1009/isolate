import { log } from "./log";

log("Synchronous 1")


const promiseFunction = () => {
  // return new Promise<string>((resolve, reject) => {
  //   resolve("after a billion loop")
  // })
  return Promise.resolve().then(v => {
    let i = 0;
    while( i < 100000000){ i ++ }
    return 'billions loops done'
  })
}
promiseFunction()
// Promise.resolve("resolve stuff")
// .then(v => {
//   console.log(v)
//     let i = 0;
//     while( i < 100000000){ i ++ }
//     return 'billions loops done'
//   }
// )
// .then(v => log(v))


// const myPromise = new Promise<string>((resolve, reject) => {

//   setTimeout(() => {
//     resolve('foo');
//   }, 300);
// });

// myPromise.then(v => log(v))

log("Synchronous 2")


// const AsyncFunc = async () => {
//   log("before await")
//   const a = await Promise.resolve().then(() => {
//     setTimeout(() => {
//       log("first await")
//     }, 1000)
//   })
//   const b = await Promise.resolve(() => {
//     setTimeout(() => {
//       log("second await")
//     }, 1000);
//   })
//   log("after await")
// }

// AsyncFunc()