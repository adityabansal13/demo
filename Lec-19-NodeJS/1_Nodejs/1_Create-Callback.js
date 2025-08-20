const fs = require('fs'); // This comes by default with NodeJs
const path = require('path');

let fileName = path.join(__dirname,"call.txt");

fs.writeFile(fileName,'Hello World', (err) => {
    if(err) throw err;
    console.log("File written successfully");
});

console.log("I am another piece of code");