import fs from 'fs' 
fs.readFile('inputfile1.txt', function (ferr: any, filedata: any) {  
    if (ferr) return console.error(ferr);  
    console.log(filedata.toString());  
}); 

// var filedata = fs.readFileSync('inputfile1.txt');

// console.log(filedata.toString()); 
console.log("End of Program execution");  