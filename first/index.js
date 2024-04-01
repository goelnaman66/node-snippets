require('dotenv').config();
const express = require("express");
const app = express();



app.get('/', (req, res)=>{
    res.send("Hi, this is the homepage.")
});


app.get('/login', (req, res)=>{
    res.send('<h1>Hi, this is login page</h1>');
});


app.listen(process.env.PORT, ()=>{
    console.log(`APP listening on ${process.env.PORT}`)
})