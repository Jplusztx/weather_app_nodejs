const jsonUtil = require('../utils/json_util');

let dataPath = '../assets/weather.json'

jsonUtil.getJson(dataPath).then(res => {
  let arr = JSON.parse(res);
  console.log(arr)
})


let date = new Date();
console.log(date.getDate())