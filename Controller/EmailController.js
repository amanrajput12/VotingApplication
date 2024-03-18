const nodemailer = require('nodemailer');
require('dotenv').config();
module.exports = EmailController = async(req,res)=>{
// console.log('hello world')
try{
    const email=req.body.email;
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
 const mailOptions ={
    from:process.env.EMAIL,
    to:email,
    subject:'to verfiy mail',
    html:"email verfieied"
 }
 await Transport.sendMail(mailOptions,(error,info)=>{
    if(error) console.log("sending failed",error)
    else console.log("email send succesfully",info.response);
 })
 res.send('check ur email');

}
catch(err) {console.log('error',err.message)}
}