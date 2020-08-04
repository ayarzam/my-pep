const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

module.exports = router;

router.use(morgan('dev'));

const myOAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.YOUR_REDIRECT_URL
  )

myOAuth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
    });

const myAccessToken =  myOAuth2Client.getAccessToken();

const transport = {
  host: 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: process.env.NM_USERNAME, 
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
    accessToken: myAccessToken
  },
  tls: {
    // do not fail on invalid certs/self-signed certs
    rejectUnauthorized: false
  }
}

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
if (error) {
  console.log('node mailer transporter error: ',error);
} else {
  console.log('Server is ready to take messages');
}
});

router.post('/send', (req, res, next) => {
  console.log(process.env.NM_USERNAME);
  const name = req.body.name
  const email = req.body.email
  const message = req.body.message
  const content = `<div><p>Someone has visited your website and sent you a message! Be sure to respond in a timely manner!</p><p>Best,</p><p>Ayarza Manwaring (from the future)</p><br><p>----</p><p><b>Contact submission:</b></p><hr><p><b>Sender:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br><p>${message}</p></p><br></div> `

  const mail = {
    from: name,
    to: process.env.NM_USERNAME,  // Change to email address that you want to receive messages on
    subject: 'You\'ve got mail!',
    html: content
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
  
      const responseMsg = `<div><p>Thank you for contacting me! This is an automated response confirming that the message you submitted to ayarzamanwaring.com has been received. I will get back to you as soon as possible.</p><p>Best,</p><p>Ayarza Manwaring</p><br><p>----</p><p><b>Contact submission:</b></p><hr><p><b>Sender:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br><p>${message}</p></p><br></div>`;
      transporter.sendMail({
        from: process.env.NM_USERNAME,
        to: email,
        subject: "Your submission was successful!",
        html: responseMsg
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

