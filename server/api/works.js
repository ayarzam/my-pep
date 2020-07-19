const express = require('express');
const router = express.Router();
const cors = require('cors');
const { Works } = require('../db/models/works')
const morgan = require('morgan');

router.use(morgan('dev'));

router.use(cors());

router.get('/works', async(req, res, next) => {
  try {
    const allWorks = await Works.findAll(req.params)
    res.json(allWorks)
  } catch (error) {
    console.log(error)
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
    console.log(error)
    next(error)
  }
})

module.exports = router;