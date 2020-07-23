const { Sequelize }= require('sequelize');
const pkg = require('../../package.json');
const chalk = require('chalk');

console.log(chalk.yellow("Opening database connection"));

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

const db = new Sequelize(
  'postgres://qewokqmafwhpsi:83c56c603c58423afc7363a72c0fadc3dec1a0b2c83557bb3ef00ae8e77b64b5@ec2-54-165-36-134.compute-1.amazonaws.com:5432/d6rq70ovn76n2c' || `postgres://localhost:5432/${databaseName}`,
  {
    ssl: {
      rejectUnauthorized: false
    },
    logging: false
  }
)
module.exports = db;