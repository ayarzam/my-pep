const express = require('express');
const router = express.Router();
const{ Works } = require('../db/models/works')
const morgan = require('morgan');

module.exports = router;

router.use(morgan('dev'));

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
    const singleWork = await Works.findByPk(req.params.id)
    res.json(singleWork)
  } catch (error) {
    console.log('single works backend error: ', error)
    next(error)
  }
})
