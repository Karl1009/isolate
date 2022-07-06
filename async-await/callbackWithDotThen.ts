function myDisplayer(sum : number) {
    console.log(sum)
}
  
async function myCalculator(num1: number, num2: number, myCallback: (sum: number) => void) {
let sum = num1 + num2;
myCallback(sum);
}


console.log('synchorized 1') 
myCalculator(5, 5, myDisplayer);
console.log('synchorized 2') 