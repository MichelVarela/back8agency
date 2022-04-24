const nodemailer=require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
      user: process.env.MAILER_USER, 
      pass: process.env.MAILER_PASS, 
    },
    tls:{
        rejectUnauthorized:false
    }
});

transporter.verify().then(() => {
    console.log('ready for send emails');
});

module.exports = transporter;