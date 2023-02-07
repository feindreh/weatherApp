import { makeC } from './helper.js';
import { filterGPSdata } from './createWeather.js';

function createWeatherURL(dataObj) {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${dataObj.lat}&lon=${dataObj.lon}&appid=ef0d45a2a18a8fc1ca9449306cdaae5c`;
}
function createGPSURL(city) {
  return `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=100&appid=ef0d45a2a18a8fc1ca9449306cdaae5c`;
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
function goodData(data) {
  return {
    country: data.sys.country,
    name: data.name,
    temp: Math.floor((makeC(data.main.temp)) * 10) / 10,
    maxtemp: Math.floor((makeC(data.main.temp_max)) * 10) / 10,
    mintemp: Math.floor((makeC(data.main.temp_min)) * 10) / 10,
    cloudStatus: data.weather[0].main,
    cloudName: data.weather[0].description,
  };
}
export default async function getWeatherFromCity(city) {
  const gpsURL = createGPSURL(city);
  const gpsData = await getGPSdata(gpsURL);

  const goodGpsData = await filterGPSdata(gpsData);
  console.log(goodGpsData);

  // const weatherURL = createWeatherURL(gpsData);
  // const weather = await getWeatherdata(weatherURL);
  // return goodData(weather);
}
