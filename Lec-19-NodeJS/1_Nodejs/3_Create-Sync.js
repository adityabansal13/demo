const fs = require('fs');

const path = require('path');
let fileName = path.join(__dirname, 'sync.txt');

fs.writeFileSync(fileName, 'Mera Sync data');

console.log("I am another simple print statement");