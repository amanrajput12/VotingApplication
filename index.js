const express = require('express');
const mongoose = require('mongoose');
const EmailController = require('./Controller/EmailController');
const Email = require('./Model/EmailModel');
require('dotenv').config();
const app= express()
const Port = process.env.PORT||4000
app.use(express.json())

mongoose.connect(process.env.URL).then(()=>{
    console.log('database connected')
})


app.get('/verify',async(req,res)=>{
    const hello=await Email.find({"email":req.body})
    console.log(hello[0].email)
    res.send(hello[0].email);
})

app.get('/',(req,res)=>{
    res.send('hello world')
})
// app.post('/')
app.post('/',EmailController);
app.listen(Port,()=>{
    console.log('server is running at',Port)
})