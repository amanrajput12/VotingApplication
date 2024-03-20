const nodemailer = require('nodemailer');
const  Email  = require('../Model/EmailModel');
require('dotenv').config();
module.exports = EmailController = async(req,res)=>{
// console.log('hello world')
try{
    const email=req.body.email;
   await Email.create({email});

const Transport = await nodemailer.createTransport({
    service:"gmail",
    host: process.env.SMTP,
    port: 587,
    secure: false,
    auth:{
        user:process.env.EMAIL,
        pass:process.env.SMTPPASSWORD
    }

});
const id= await Email.find({email});
 const mailOptions ={
    from:process.env.EMAIL,
    to:email,
    subject:'to verfiy mail',
    html:`email verified http://localhost:5173/id=${id[0]._id}`
 }

 await Transport.sendMail(mailOptions,(error,info)=>{
    if(error) console.log("sending failed",error)
    else console.log("email send succesfully",info.response);
 })
 res.cookie("email",email,{domain:"localhost:5173"},{expire:40000+Date.now()})

 res.send('check ur email');

}
catch(err) {console.log('error',err.message)}
}