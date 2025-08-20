const fs = require('fs');
const path = require('path');

let fileName = path.join(__dirname,"call.txt");


// ye hume exact output dega
fs.readFile(fileName,{
    encoding : 'utf-8'
}, (err,data) => {
    if(err) throw err;
    console.log(data);
})

// shorter way of above method
fs.readFile(fileName,'utf-8', (err,data) => {
    if(err) throw err;
    console.log(data);
})

// ye hume binary coded output dega
fs.readFile(fileName, (err,data) => {
    if(err) throw err;
    console.log(data);
})

console.log("print");