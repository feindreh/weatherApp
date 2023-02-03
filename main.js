import getWeatherFromCity from './weatherAPI.js';
import createWeatherElement from './createWeather.js';
import { clearInput } from './helper.js';

const input = document.querySelector('#cityName');
const Button = document.querySelector('#getWeather');
const content = document.querySelector('#content');

let weatherData;

Button.addEventListener('click', async () => {
  await getWeatherFromCity(input.value).then((response) => { weatherData = response; });

  const weather = createWeatherElement(weatherData);
  content.append(weather);

  clearInput(input);
});
