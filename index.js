const express = require('express');
const EmailController = require('./Controller/EmailController');
require('dotenv').config();
const app= express()
const Port = process.env.PORT||4000
app.use(express.json())
app.get('/hello',(req,res)=>{
    res.send('<h1>hangman');
})
app.post('/',EmailController);
app.listen(Port,()=>{
    console.log('server is running at',Port)
})