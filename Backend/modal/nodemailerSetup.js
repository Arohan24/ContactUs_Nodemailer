require('dotenv').config({path:'../config.env'})
const nodemailer=require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.TransporterUser, // Replace with your email
      pass: process.env.TransporterPass // Replace with your password
    }
  });
module.exports=transporter;