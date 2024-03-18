const express = require('express');
const EmailContoller = require('./Controller/EmailContoller');
require('dotenv').config();
const app= express()
const Port = process.env.PORT||4000
process.env.UserEmail
app.get('/hello',(req,res)=>{
    res.send('<h1>hangman');
})
app.post('/',EmailContoller);
app.listen(Port,()=>{
    console.log('server is running at',Port)
})