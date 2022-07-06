import fs from 'fs'

var person = {
    id: 1866,
    name: 'Karl',
    age: 25,
    moneyInBank: 100000000
   }

function getMoneyInBank(id : number, cb: () => void) {
    console.log(id)
        fs.readFile('inputfile1.txt', (err, data) => { //similar as setTimeout
          console.log(data)
          cb()
        })
  }


function showMoney () {
    console.log(person.moneyInBank)
}
console.log("sync 1")
getMoneyInBank(person.id, showMoney);
console.log("sync 2")
// console.log(person.money);