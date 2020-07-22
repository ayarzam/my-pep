const dotenv = require('dotenv');
const result = dotenv.config();
if (result.error) {
  console.log('Caught an error when reading .env file', result.error);
}
// require('dotenv').config()

module.exports = {
  USER: process.env.NM_USERNAME, 
  PASS: process.env.NM_PASSWORD
}
