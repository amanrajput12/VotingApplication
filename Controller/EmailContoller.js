const nodemailer = require('nodemailer');
require('dotenv').config();
module.exports = Email = (req,res)=>{
// console.log('hello world')
nodemailer.createTransport({
    host: process.env.EMAIL,

})
}