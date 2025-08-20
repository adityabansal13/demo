const fs = require('fs');
const path = require('path');

let fileName = path.join(__dirname, 'call.txt');

fs.unlink(fileName, (err) => {
    if (err) throw err;
    console.log('Deleted the file');
}); 