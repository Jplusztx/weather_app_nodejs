let waertherNames = ["Cloudy", "Light Rain", "Snow", "Sunny","ThunderShowers"];
let imgNames = ["cloudy.png", "rain.png","snow.png","sunny.png","thunderStorm.png"]

function getNow(max, min){
  return Math.floor(Math.random()*(max-min+1)+min);
}

module.exports = function randTemperature(citys, id){
    let today = new Date().getDate();
    let weather = Math.floor(Math.random() * 100) % 5;
    let min = Math.floor(Math.random() * 100) % 30;
    let max = Math.floor(Math.random() * 100) % 30;
    if(min > max) {
      let temp = min;
      min = max;
      max = temp;
    }
    if(citys[id].date !== today){
      citys[id].date = today;
      citys[id].lowestTemperature = min;
      citys[id].maxTemperature = max;
    }
    let now = getNow(citys[id].maxTemperature, citys[id].lowestTemperature);
    citys[id].nowTemperature = now;
    citys[id].weatherName = waertherNames[weather];
    citys[id].img = imgNames[weather];
    return citys;
  }
