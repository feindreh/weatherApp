import { makeC } from './helper.js';

function createWeatherURL(dataObj) {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${dataObj.lat}&lon=${dataObj.lon}&appid=ef0d45a2a18a8fc1ca9449306cdaae5c`;
}
function createGPSURL(city) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ef0d45a2a18a8fc1ca9449306cdaae5c`;
}
async function getGPSdata(url) {
  const dataPromise = await fetch(url);
  const data = await dataPromise.json();
  const cord = data.coord;
  return ({ lat: cord.lat.toFixed(2), lon: cord.lon.toFixed(2) });
}
async function getWeatherdata(url) {
  const weatherPromise = await fetch(url);
  const weather = await weatherPromise.json();
  return weather;
}
function goodData(data) {
  return {
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
  const weatherURL = createWeatherURL(gpsData);
  const weather = await getWeatherdata(weatherURL);
  return goodData(weather);
}
