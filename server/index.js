const path = require('path');
const express = require('express');
const morgan = require('morgan');
const db = require('./db/_db');
const socketio = require('socket.io');
const sslRedirect = require('heroku-ssl-redirect');
const PORT = 8080;
const cors = require('cors');
const app = express();

module.exports = app;

const createApp = () => {
  // use .env file if in development mode
  if (process.env.NODE_ENV !== 'production') {
    const dotenv = require('dotenv');
    const result = dotenv.config();
    if (result.error) {
      throw(result.error);
    }
  }

  //Redirect http to https
  if (process.env.NODE_ENV === 'production') {
    console.log('possible http to https redirect');
    app.use((req, res, next) => {

      const rootDomain = req.url;
      const protocol = (req.headers['x-forwarded-proto'] || '').toLowerCase();
      const host = req.headers.host;
      const fullUrl = `https://${host}${rootDomain}`;

      console.log('request',req.url,'headers',req.headers,'fullUrl',fullUrl);

      if (protocol !== 'https') {
        res.redirect(fullUrl);
      }
      else {
         next()
      }  
    })
  }

  // // enable ssl redirect
  // app.use(sslRedirect());

  // logging middleware
  app.use(morgan('dev'));

  // Cross-Origin requests allowed
  app.use(cors());

  // body parsing middleware
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));

  // auth and api routes
  app.use('/api', require('./api/works'));
  app.use('/api', require('./api/mail'));

  // static file-serving middleware
  // app.use(express.static(path.join(__dirname, '..', 'public')));
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(__dirname + '/build'));
  }

  // any remaining requests with an extension (.js, .css, etc.) send 404
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found')
      err.status = 404
      next(err)
    } else {
      next()
    }
  });

  // sends index.html
  app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  });

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  });
}

const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  const server = app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`))

  // set up our socket control center
  const io = socketio(server)
  require('./socket')(io)
}

const syncDb = () => db.sync();

async function bootApp() {
  await syncDb();
  await createApp();
  await startListening();
}
// This evaluates as true when this file is run directly from the command line,
// i.e. when we say 'node server/index.js' (or 'nodemon server/index.js', or 'nodemon server', etc)
// It will evaluate false when this module is required by another module - for example,
// if we wanted to require our app in a test spec
if (require.main === module) {
  bootApp();
} else {
  createApp();
}