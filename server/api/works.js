const express = require('express');
const router = express.Router();
// const cors = require('cors');
const{ Works } = require('../db/models/works')
const morgan = require('morgan');
const db = require('../db/_db')
// const creds = require('./config');
const nodemailer = require('nodemailer');
const {google} = require('googleapis')
const OAuth2 = google.auth.OAuth2;

module.exports = router;

router.use(morgan('dev'));

// router.use(cors());

router.get('/works', async(req, res, next) => {
  try {
    const allWorks = await Works.findAll(req.params)
    res.json(allWorks)
  } catch (error) {
    console.log('all works backend error: ', error)
    next(error)
  }
})

router.get('/works/:id', async (req, res, next) => {
  try {
    console.log('in the try')
    console.log('params', req.params.id)
    const singleWork = await Works.findByPk(req.params.id)
    res.json(singleWork)
  } catch (error) {
    console.log('single works backend error: ', error)
    next(error)
  }
})

const myOAuth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.YOUR_REDIRECT_URL
  )

myOAuth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
    });

 const myAccessToken =  myOAuth2Client.getAccessToken()

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
    accessToken: myAccessToken,
    expires: 3599
  }
}

var transporter = nodemailer.createTransport(transport);

transporter.on('token', token => {
  console.log('A new access token was generated');
  console.log('User: %s', token.user);
  console.log('Access Token: %s', token.accessToken);
  console.log('Expires: %s', new Date(token.expires));
});

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
  const content = `name: ${name} \n email: ${email} \n message: ${message} `

  const mail = {
    from: name,
    to: process.env.NM_USERNAME,  // Change to email address that you want to receive messages on
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
        from: process.env.NM_USERNAME,
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
// app.use(cors())
// app.use(express.json())
// app.use('/', router)
