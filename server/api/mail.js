const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const creds = require('./config');

const transport = {
  host: 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
  port: 587,
  auth: {
  user: creds.USER, 
  pass: creds.PASS
}
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
if (error) {
  console.log(error);
} else {
  console.log('Server is ready to take messages');
}
});

router.post('/send', (req, res, next) => {
  const name = req.body.name
  const email = req.body.email
  const message = req.body.message
  const content = `name: ${name} \n email: ${email} \n message: ${message} `

  const mail = {
    from: name,
    to: creds.USER,  // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
  
      transporter.sendMail({
        from: creds.USER,
        to: email,
        subject: "Submission was successful",
        text: `Thank you for contacting me! I will get back to you as soon as possible.\n\nForm details\nName: ${name}\n Email: ${email}\n Message: ${message}`
      }, function(error, info){
        if(error) {
          console.log(error);
        } else{
          console.log('Message sent: ' + info.response);
        }
      });
    }
    })
})


const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(process.env.PORT || 3002)