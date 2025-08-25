const express = require('express');
const app = express();
const path = require('path');
const PORT = 5555;

app.use(express.static(path.join(__dirname,'public')));

// This will not work if there is index.html inside the public folder
app.get('/', (req, res) => {
    res.send("Hiii!!");
})

app.listen(PORT , () => {
    console.log("http://localhost:" + PORT);
})