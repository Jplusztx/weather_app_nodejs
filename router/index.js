const { json } = require('body-parser');
const express = require('express');

const jsonUtils = require('../utils/json_util');
const rand = require('../utils/rand_weather');

const router = express.Router();


router.all('*', (req, res, next) => {
  res.set({  
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
    'Content-Type': 'application/json;charset=utf-8'
  })
  next();
})

let dataPath = './assets/weather.json'

router.get('/', (req, res) => {
  let id = parseInt(req.query.id);
  jsonUtils.getJson(dataPath).then(arr => {
    arr = rand(arr, id);
    return jsonUtils.updateJson(dataPath, JSON.stringify(arr));
  }).then(arr => {
    res.end(JSON.stringify(arr[id]))
  }).catch(err => {
      res.end('err')
    })
});

module.exports = router;