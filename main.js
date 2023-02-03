import getWeatherFromCity from './weatherAPI.js';
import createWeatherElement from './createWeather.js';
import { clearInput } from './helper.js';

const input = document.querySelector('#cityName');
const Button = document.querySelector('#getWeather');
const content = document.querySelector('#content');
const weatherDisplay = document.querySelector('#weatherDisplay');

let weatherData;

Button.addEventListener('click', async () => {
  await getWeatherFromCity(input.value).then((response) => { weatherData = response; });

  const weather = createWeatherElement(weatherData);
  weatherDisplay.append(weather);

  clearInput(input);
});
