const fs = require('fs');

let defaultPath = '/assets/weather.json'

function getJson(dataPath){
  return new Promise((resolve, reject) => {
    fs.readFile(dataPath, {encoding: 'utf-8'}, (err, data) => {
      if(err) reject(err);
      else resolve(JSON.parse(data));
    });
  })
}

function updateJson(dataPath, data){
  return new Promise((resolve, reject) => {
    fs.writeFile(dataPath, data, {encoding: 'utf-8'}, (err) => {
      if(err) reject(err)
      else resolve(JSON.parse(data));
    });
  })
}

module.exports = {
  getJson,updateJson
}