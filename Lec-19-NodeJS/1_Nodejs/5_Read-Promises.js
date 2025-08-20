const fs = require('fs/promises');
const path = require('path');

let fileName = path.join(__dirname,"pro.txt");

//shorter way
fs.readFile(fileName,'utf-8',)
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })


fs.readFile(fileName,{
    encoding: 'utf-8'
})
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })

console.log("print");