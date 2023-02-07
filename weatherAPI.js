import { makeC } from './helper.js';

function createWeatherURL(dataObj) {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${dataObj.lat}&lon=${dataObj.lon}&appid=ef0d45a2a18a8fc1ca9449306cdaae5c`;
}
function createGPSURL(city) {
  return `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=100&appid=ef0d45a2a18a8fc1ca9449306cdaae5c`;
}
async function getGPSdata(url) {
  const dataPromise = await fetch(url);
  const data = await dataPromise.json();
  return data;
}
 async function getWeatherdata(url) {
  const weatherPromise = await fetch(url);
  const weather = await weatherPromise.json();
  return weather;
}

function makeIconUrl(iconName){
  const url = `https://openweathermap.org/img/wn/${iconName}@2x.png`
  return url
}

function goodData(data) {
  return {
    country: data.sys.country,
    name: data.name,
    temp: Math.floor((makeC(data.main.temp)) * 10) / 10,
    maxtemp: Math.floor((makeC(data.main.temp_max)) * 10) / 10,
    mintemp: Math.floor((makeC(data.main.temp_min)) * 10) / 10,
    cloudStatus: data.weather[0].main,
    cloudName: data.weather[0].description,
    icon: makeIconUrl(data.weather[0].icon),
  };
}


export async function getGPSoptions(cityName){
  const newURL = createGPSURL(cityName);
  const data = await getGPSdata(newURL);
  return data
}

export async function getWeatherfromGps(gps){
  const url = createWeatherURL(gps);
  const weather = await getWeatherdata(url);
  console.log(goodData(weather))
  return goodData(weather)
}
