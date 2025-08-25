const express = require('express');
const app = express();
const path = require('path');
const PORT = 4444;

app.get('/' , (req,res) => {
   
    // jaha tak meri current parent directory hoti hai vaha tak ka path dedega
    //console.log(__dirname); 

    // we use this mostly
    res.sendFile(path.join(__dirname,'index.html'));

    // we typically do not use this
    // res.sendFile(__dirname + "/index.html");

    // we never do this
    // res.sendFile("/Users/adityabansal/Desktop/WebDev/Lec-21-ExpressJS/2_sendingfiles/index.html");
})

app.get('/style.css' , (req,res) => {
    res.sendFile(path.join(__dirname,'style.css'));
})

app.get('/script.js' , (req,res) => {
    res.sendFile(path.join(__dirname,'script.js'));
})


//This is not going to work
/* 
app.get('/' , (req,res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <title>expressJS</title>
</head>
<body>
    <h1 style = 'background-color:black ; color:white;' >Hello World</h1>

    <p style="background-color: orange;">I am a para</p>
</body>
</html>`);
})
*/

app.listen(PORT , () => {
    console.log("http://localhost:" + PORT);
})