const fs = require('fs/promises');

const path = require('path');

let fileName = path.join(__dirname,"pro.txt");

fs.writeFile(fileName,"HeyHey" , {
    flag : 'a' 
})
    .then(()=>{
        console.log("Data written successfully");
    })
    .catch((err)=>{
        console.log(err);
    })

console.log("I am another piece of code");