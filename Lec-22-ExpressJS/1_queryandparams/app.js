const express = require('express');
const app = express();
const PORT = 4444;

app.get('/' , (req,res) => {
    res.send("Hello World");
})

// Query Parameters
// http://localhost:4444/greet/?name
app.get('/greet' , (req,res) => {
    const name = req.query.name;
    res.send(`Welcome to the app via QueryParameter ${name}`);
})

//Params
// http://localhost:4444/greet/Aditya
app.get('/greet/:name' , (req,res) => {
    const name = req.params.name;
    res.send(`Welcome to the app via PARAMS ${name}`);
})

app.listen(PORT , () => {
    console.log("http://localhost:" + PORT);
})